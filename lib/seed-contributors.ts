import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { db } from './db';
import { moduleContributors } from './schema';
import { sql } from 'drizzle-orm';

const CONTRIBUTORS = [
  {
    name: 'Jason Carney',
    title: 'Founder, Developer & Content Creator',
    credentials: 'NP, MNP, BN',
    bio: 'Jason Carney is an Australian Nurse Practitioner based in Newcastle, NSW, with a background spanning orthopaedic and perioperative surgery, telehealth, and urgent care.',
    avatarInitials: 'JC',
  },
];

const MODULE_SLUGS = [
  'cardiac',
  'ent',
  'eyes',
  'respiratory',
  'aged-care',
  'cardiovascular',
  'drugs-alcohol',
  'endocrine',
  'general-medical',
  'gi-hepatobiliary',
  'gu-nephrology',
  'integumentary',
  'maxillofacial-dental',
  'mens-health',
  'mental-health',
  'musculoskeletal-shoulder',
  'musculoskeletal-back',
  'musculoskeletal-neck',
  'musculoskeletal-knee',
  'musculoskeletal-hip-pelvis',
  'musculoskeletal-elbow',
  'musculoskeletal-wrist-hand',
  'musculoskeletal-foot-ankle',
  'musculoskeletal-chest-wall',
  'neurology',
  'onco-haematology',
  'paediatrics',
  'palliative-care',
  'surgical',
  'toxicology',
  'womens-health',
];

async function seedContributors() {
  console.log('Seeding module contributors...');

  for (const contributor of CONTRIBUTORS) {
    for (const moduleSlug of MODULE_SLUGS) {
      // Use INSERT ... ON CONFLICT DO NOTHING to safely skip duplicates
      const result = await db
        .insert(moduleContributors)
        .values({
          moduleSlug,
          name: contributor.name,
          title: contributor.title,
          credentials: contributor.credentials,
          bio: contributor.bio,
          avatarInitials: contributor.avatarInitials,
          displayOrder: 0,
        })
        .onConflictDoNothing()
        .returning();

      if (result.length > 0) {
        console.log(`✓ Added ${contributor.name} to ${moduleSlug}`);
      } else {
        console.log(`  ${contributor.name} already exists for ${moduleSlug} — skipped`);
      }
    }
  }

  console.log('Seeding complete!');
}

seedContributors().catch(err => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
