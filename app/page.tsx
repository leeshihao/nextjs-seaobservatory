"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import Map2 from "@/components/map2";
import ResetButton from "@/components/resetButton";

// Import map component dynamically to avoid SSR issues
const Map = dynamic(() => import("@/components/map"), { ssr: false });

// Define the type for the records returned from getPolicies
interface AirtableRecord {
  id: string;
  fields: {
    Name: string;
    Country: string[];
    Progress: string;
    Date: string | Date;
    Actors: string;
    Source: string;
  };
}

export default function PolicyMapPage() {
  const [policies, setPolicies] = useState<AirtableRecord[]>([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      console.log("Fetching policies...");
      try {
        const response = await fetch("/policies");
        const records = (await response.json()) as AirtableRecord[];
        setPolicies(records);
      } catch (error) {
        console.error("Error fetching data from Airtable:", error);
      }
    };

    fetchPolicies();
  }, []);

  //usestate to keep track of which country clicked on
  const [clickedCountryId, setClickedCountryId] = useState<string | null>(null);

  const filteredPolicies = clickedCountryId
    ? policies.filter((policy) =>
        policy.fields.Country.includes(clickedCountryId)
      )
    : policies;

  return (
    <div className="flex flex-col lg:flex-row h-screen p-4 gap-4">
      {/* Policy Feed Section */}
      <Card className="flex-1 flex flex-col p-4 overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5" />
          <h2 className="text-2xl font-bold">Policy Feed</h2>
          {clickedCountryId && (
            <span className="text-muted-foreground">({clickedCountryId})</span>
          )}
        </div>
        <div className="flex-1 overflow-auto">
          <Table>
            <TableHeader className="sticky top-0 bg-background">
              <TableRow>
                <TableHead>Policy</TableHead>
                <TableHead>Countries</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actors</TableHead>
                <TableHead>Source</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPolicies.map((policy) => (
                <TableRow key={policy.id}>
                  <TableCell>{policy.fields.Name}</TableCell>
                  <TableCell>
                    {Array.isArray(policy.fields.Country)
                      ? policy.fields.Country.join(", ")
                      : policy.fields.Country || "-"}
                  </TableCell>
                  <TableCell>{policy.fields.Progress}</TableCell>
                  <TableCell>
                    {policy.fields.Date
                      ? typeof policy.fields.Date === "string"
                        ? policy.fields.Date
                        : new Date(policy.fields.Date).toLocaleDateString()
                      : "-"}
                  </TableCell>
                  <TableCell>{policy.fields.Actors}</TableCell>
                  <TableCell>{policy.fields.Source}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Map Section */}

      <Card className="flex-1 p-4 overflow-auto">
        <h1 className="text-center mt-2 font-extrabold text-xl">
          {clickedCountryId ? clickedCountryId : "Select country to filter"}
        </h1>
        <ResetButton
          clickedCountryId={clickedCountryId}
          setClickedCountryId={setClickedCountryId}
        />
        <div className="h-full w-full min-h-[400px] grid place-items-center overflow-auto">
          <Map2
            clickedCountryId={clickedCountryId}
            setClickedCountryId={setClickedCountryId}
          />
        </div>
      </Card>
    </div>
  );
}
