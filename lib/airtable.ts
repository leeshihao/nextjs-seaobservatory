import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID as string)

export async function getPolicies(country?: string) {
  const records = await base('Observatory')
    .select({
      filterByFormula: country ? `{Country} = '${country}'` : '',
    })
    .all()
    
  return records.map(record => ({
    id: record.id,
    name: record.get('Name'),
    country: record.get('Country'),
    policy: record.get('Policy'),
    source: record.get('Source'),
  }))
}