import type { Metadata } from 'next';
import { db } from '@/lib/db';
import { courses } from '@/lib/schema';
import { eq, gte, and } from 'drizzle-orm';
import { getSession } from '@/lib/session';
import CoursesClient from './CoursesClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'CPD Courses | NPCollab',
  description: 'Upcoming CPD courses, conferences, and workshops for Australian Nurse Practitioners.',
};

export default async function CoursesPage() {
  const session = await getSession();
  const isLoggedIn = !!session;

  const now = new Date();
  const allCourses = await db
    .select()
    .from(courses)
    .where(and(eq(courses.status, 'approved'), gte(courses.dateStart, now)))
    .orderBy(courses.dateStart);

  return (
    <>
      <div className="page-header">
        <div className="label">Community</div>
        <h1>CPD Courses</h1>
        <p>Upcoming continuing professional development opportunities for Australian Nurse Practitioners</p>
      </div>

      <div className="content-prose">
        <CoursesClient courses={allCourses} isLoggedIn={isLoggedIn} />
      </div>
    </>
  );
}
