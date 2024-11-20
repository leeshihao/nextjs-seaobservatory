import dotenv from 'dotenv';
import Airtable from 'airtable';

dotenv.config(); // Load environment variables

export async function getPolicies(country?: string) {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base(process.env.AIRTABLE_BASE_ID as string);
  try {
    const records = await base(process.env.AIRTABLE_TABLE_ID as string)
      .select({
        filterByFormula: country ? `FIND('${country}', {Country})` : '',
      })
      .all();

    return records.map(record => ({
      id: record.id,
      fields: {
        Name: record.get('Name'),
        Country: record.get('Countries'),
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