// Run with: npx tsx scripts/seed-admin.ts
import 'dotenv/config';
import { db } from '../lib/db';
import { usersV2 } from '../lib/schema';
import { eq } from 'drizzle-orm';

const ADMIN_EMAIL = 'jason.carney@gmail.com';
const ADMIN_NAME  = 'Jason Carney';

async function seedAdmin() {
  console.log('Seeding admin user…');

  const [existing] = await db
    .select({ id: usersV2.id, role: usersV2.role })
    .from(usersV2)
    .where(eq(usersV2.email, ADMIN_EMAIL))
    .limit(1);

  if (existing) {
    if (existing.role === 'admin') {
      console.log(`✓ Admin already exists (id: ${existing.id}). Nothing to do.`);
    } else {
      await db
        .update(usersV2)
        .set({ role: 'admin', approved: true, active: true })
        .where(eq(usersV2.email, ADMIN_EMAIL));
      console.log(`✓ Existing user promoted to admin (id: ${existing.id}).`);
    }
    process.exit(0);
  }

  const [newAdmin] = await db
    .insert(usersV2)
    .values({
      name:            ADMIN_NAME,
      email:           ADMIN_EMAIL,
      state:           'NSW',
      npEndorsement:   'Primary Care',
      role:            'admin',
      active:          true,
      approved:        true,
      profileComplete: true,
    })
    .returning();

  console.log(`✓ Admin created: ${newAdmin.name} <${newAdmin.email}> (id: ${newAdmin.id})`);
  process.exit(0);
}

seedAdmin().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
