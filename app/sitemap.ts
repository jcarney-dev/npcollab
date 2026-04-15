import { MetadataRoute } from 'next';

const BASE_URL = 'https://npcollab.com';

const LIVE_MODULES = ['cardiac', 'ent', 'eyes', 'respiratory'];

const ALL_MODULES = [
  'aged-care',
  'cardiac',
  'cardiovascular',
  'drugs-alcohol',
  'endocrine',
  'ent',
  'eyes',
  'general-medical',
  'gi-hepatobiliary',
  'gu-nephrology',
  'integumentary',
  'maxillofacial-dental',
  'mens-health',
  'mental-health',
  'neurology',
  'onco-haematology',
  'paediatrics',
  'palliative-care',
  'respiratory',
  'surgical',
  'toxicology',
  'womens-health',
];

const MSK_SUB_MODULES = [
  'back',
  'chest',
  'elbow',
  'foot-ankle',
  'hand',
  'hip-pelvis',
  'knee',
  'neck',
  'shoulder',
  'wrist',
];

const MODULE_TAB_PATHS = ['', '/assessment', '/soap', '/resources', '/quiz'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // ── Homepage ──────────────────────────────────────────────────────────────
  entries.push({
    url: BASE_URL,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // ── Getting Started ───────────────────────────────────────────────────────
  const gettingStartedPages = [
    '/intro',
    '/metaspecialties',
    '/starting-role',
    '/scope',
    '/assessment',
  ];
  for (const path of gettingStartedPages) {
    entries.push({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // ── Standard Clinical Modules ─────────────────────────────────────────────
  for (const slug of ALL_MODULES) {
    const isLive = LIVE_MODULES.includes(slug);
    for (const tab of MODULE_TAB_PATHS) {
      entries.push({
        url: `${BASE_URL}/modules/${slug}${tab}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: isLive ? 0.8 : 0.5,
      });
    }
  }

  // ── MSK Module Index ──────────────────────────────────────────────────────
  entries.push({
    url: `${BASE_URL}/modules/musculoskeletal`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  });

  // ── MSK Sub-Modules ───────────────────────────────────────────────────────
  for (const sub of MSK_SUB_MODULES) {
    for (const tab of MODULE_TAB_PATHS) {
      entries.push({
        url: `${BASE_URL}/modules/musculoskeletal/${sub}${tab}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  // ── Clinical Practice Essentials ──────────────────────────────────────────
  const essentialPages = [
    '/clinical-essentials/billing-medicare',
    '/clinical-essentials/prescribing-pbs',
    '/clinical-essentials/radiology-pathology',
  ];
  for (const path of essentialPages) {
    entries.push({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── Health Tech ───────────────────────────────────────────────────────────
  const healthTechPages = [
    '/health-tech/ai-clinical-tools',
    '/health-tech/digital-scribes',
    '/health-tech/medical-software',
  ];
  for (const path of healthTechPages) {
    entries.push({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── Research ─────────────────────────────────────────────────────────────
  const researchPages = [
    '/research/getting-started',
    '/research/funding',
    '/research/networks',
  ];
  for (const path of researchPages) {
    entries.push({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── Community ─────────────────────────────────────────────────────────────
  const communityPages = [
    '/community/jobs',
    '/community/news',
    '/community/courses',
  ];
  for (const path of communityPages) {
    entries.push({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.5,
    });
  }

  // ── Business ─────────────────────────────────────────────────────────────
  entries.push({
    url: `${BASE_URL}/business`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  });

  // ── Site pages ───────────────────────────────────────────────────────────
  const sitePages = ['/about', '/support'];
  for (const path of sitePages) {
    entries.push({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    });
  }

  return entries;
}
