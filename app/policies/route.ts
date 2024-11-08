import { getPolicies } from '@/lib/airtable'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const countries = searchParams.get('countries')
  
  const policies = await getPolicies(countries || undefined)
  return NextResponse.json(policies)
}