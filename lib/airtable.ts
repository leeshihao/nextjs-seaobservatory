import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID as string);

export async function getPolicies(country?: string) {
  try {
    const records = await base(process.env.AIRTABLE_TABLE_ID as string)
      .select({
        filterByFormula: country ? `{Country} = '${country}'` : '',
      })
      .all();

    return records.map(record => ({
      id: record.id,
      name: record.get('Name'),
      country: record.get('Country'),
      policy: record.get('Policy'),
      source: record.get('Source'),
    }));
  } catch (error) {
    console.error("Error fetching policies:", error);
    throw new Error("Failed to fetch policies. Please try again later.");
  }
}