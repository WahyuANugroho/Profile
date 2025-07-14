import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_AvCFYeyXc28n@ep-dawn-star-a1scpv9d-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

export async function GET() {
  try {
    const result = await sql`SELECT id, period, institution, major FROM education ORDER BY id ASC`;
    return NextResponse.json(result);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
} 