import { getPolicies } from '@/lib/airtable'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const country = searchParams.get('country')
  
  const policies = await getPolicies(country || undefined)
  return NextResponse.json(policies)
}