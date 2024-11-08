'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { MapPin } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { getPolicies } from '@/lib/airtable'

// Import map component dynamically to avoid SSR issues
const Map = dynamic(() => import('@/components/map'), { ssr: false })

// Define the type for the records returned from getPolicies
interface AirtableRecord {
  id: string;
  fields: {
    Name: string;
    Country: string;
    Progress: string;
    Date: string | Date;
    Actors: string;
    Source: string;
  };
}

export default function PolicyMapPage() {
  console.log("PolicyMapPage component rendered");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [policies, setPolicies] = useState<AirtableRecord[]>([]);

  useEffect(() => {
    // Fetch data from Airtable using getPolicies
    const fetchPolicies = async () => {
      console.log("Fetching policies...");
      try {
        const records = await getPolicies() as AirtableRecord[]; // Call getPolicies function

        // Log the records to see if they are being retrieved correctly
        console.log("Retrieved policies:", records);
        
        // Map the records to match AirtableRecord structure
        const formattedRecords = records.map((record) => ({
          id: record.id,
          fields: {
            Name: record.fields.Name,
            Country: record.fields.Country,
            Progress: record.fields.Progress,
            Date: record.fields.Date,
            Actors: record.fields.Actors,
            Source: record.fields.Source,
          },
        })) as AirtableRecord[]; // Cast to AirtableRecord[]


        setPolicies(formattedRecords);
      } catch (error) {
        console.error("Error fetching data from Airtable:", error);
      }
    };

    fetchPolicies();
    // // Fetch data from Airtable
    // const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`;
    // console.log("Airtable URL:", url);
    
    // const fetchPolicies = async () => {
    //   console.log("Fetching policies...");
    //   try {
    //     const response = await axios.get(
    //       `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    //         },
    //       }
    //     );

    //     // Log the entire response to see what is being returned
    //     console.log("Response from Airtable:", response.data);

    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     const records = response.data.records.map((record: { id: string; fields: { Name: string; Country: string; Progress: string; Date: Date; Actors: string; Source: string; [key: string]: any; } }) => ({
    //       id: record.id,
    //       name: record.fields.Name,
    //       country: record.fields.Country,
    //       progress: record.fields.Progress,
    //       date: record.fields.Date,
    //       actors: record.fields.Actors,
    //       source: record.fields.Source,
    //     }));
    //     // Log the records to see if they are being retrieved correctly
    //     console.log("Retrieved policies:", records);

    //     setPolicies(records);
    //   } catch (error) {
    //     console.error("Error fetching data from Airtable:", error);
    //   }
    // };

    // fetchPolicies();
  }, []);


  return (
    <div className="flex flex-col lg:flex-row h-screen p-4 gap-4">
      {/* Policy Feed Section */}
      <Card className="flex-1 p-4 overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5" />
          <h2 className="text-2xl font-bold">Policy Feed</h2>
          {selectedCountry && (
            <span className="text-muted-foreground">({selectedCountry})</span>
          )}
        </div>
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actors</TableHead>
                <TableHead>Source</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policies.map((policy) => (
                <TableRow key={policy.id}>
                  <TableCell>{policy.fields.Name}</TableCell>
                  <TableCell>{policy.fields.Country}</TableCell>
                  <TableCell>{policy.fields.Progress}</TableCell>
                  <TableCell>{policy.fields.Date.toLocaleString()}</TableCell>
                  <TableCell>{policy.fields.Actors}</TableCell>
                  <TableCell>{policy.fields.Source}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Map Section */}
      <Card className="flex-1 p-4">
        <div className="h-full w-full min-h-[400px]">
          <Map onCountrySelect={setSelectedCountry} />
        </div>
      </Card>
    </div>
  );
}