import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';

// Read DATABASE_URL from .env.local
const envContent = readFileSync('.env.local', 'utf8');
const dbUrlMatch = envContent.match(/DATABASE_URL=(.+)/);
if (!dbUrlMatch) {
  console.error('DATABASE_URL not found in .env.local');
  process.exit(1);
}
const DATABASE_URL = dbUrlMatch[1].trim();

const sql = neon(DATABASE_URL);

try {
  const result = await sql`SELECT 1 AS ok`;
  console.log('✓ Connection OK:', result);
  process.exit(0);
} catch (err) {
  console.error('✗ Connection failed:', err.message);
  process.exit(1);
}
