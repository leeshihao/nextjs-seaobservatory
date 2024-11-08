import Airtable from 'airtable';

export async function getPolicies(country?: string) {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base(process.env.AIRTABLE_BASE_ID as string);
  try {
    const records = await base(process.env.AIRTABLE_TABLE_ID as string)
      .select({
        filterByFormula: country ? `{Country} = '${country}'` : '',
      })
      .all();

    return records.map(record => ({
      id: record.id,
      fields: { // Added fields property
        Name: record.get('Name'),
        Country: record.get('Country'),
        Progress: record.get('Progress'),
        Date: record.get('Date'),
        Actors: record.get('Actors'),
        Source: record.get('Source'),
      },
    }));
  } catch (error) {
    console.error("Error fetching policies:", error);
    throw new Error("Failed to fetch policies. Please try again later.");
  }
}