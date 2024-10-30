'use client'

import axios from 'axios';
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

// Import map component dynamically to avoid SSR issues
const Map = dynamic(() => import('@/components/map'), { ssr: false })

export default function PolicyMapPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [policies, setPolicies] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from Airtable
    const fetchPolicies = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/TableName`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            },
          }
        );
        const records = response.data.records.map((record: any) => ({
          id: record.id,
          name: record.fields.Name,
          country: record.fields.Country,
          progress: record.fields.Progress,
          date: record.fields.Date,
          actors: record.fields.Actors,
          source: record.fields.Source,
        }));
        setPolicies(records);
      } catch (error) {
        console.error("Error fetching data from Airtable:", error);
      }
    };

    fetchPolicies();
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
                  <TableCell>{policy.name}</TableCell>
                  <TableCell>{policy.country}</TableCell>
                  <TableCell>{policy.progress}</TableCell>
                  <TableCell>{policy.date}</TableCell>
                  <TableCell>{policy.actors}</TableCell>
                  <TableCell>{policy.source}</TableCell>
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
  )
}