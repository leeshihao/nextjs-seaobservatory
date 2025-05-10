// PolicyMapComponent.tsx
import React, { useEffect, useState } from "react";
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
import Map from "@/components/map";
import ResetButton from "@/components/resetButton";
import SearchBar from "@/components/SearchBar";

interface AirtableRecord {
  id: string;
  fields: {
    Name: string;
    Country: string[];
    Progress: string;
    Date: string | Date;
    Actors: string[];
    Source: string;
    Validated: boolean;
  };
}

const PolicyMapComponent: React.FC = () => {
  const [policies, setPolicies] = useState<AirtableRecord[]>([]);
  const [clickedCountryId, setClickedCountryId] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string | null>(null);

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

  const filteredPolicies = clickedCountryId
    ? policies.filter((policy) =>
        (policy.fields.Country.includes(clickedCountryId) || policy.fields.Country.includes("ASEAN")) &&
        policy.fields.Validated 
      )
    : policies.filter((policy) => policy.fields.Validated); 

  const keywordFilteredPolicies = keyword
    ? filteredPolicies.filter((policy) => {
        const keywordInName = policy.fields.Name.toLowerCase().includes(
          keyword.toLowerCase()
        );
        const countries = Array.isArray(policy.fields.Country)
          ? policy.fields.Country.join(", ")
          : policy.fields.Country || "-";
        const keywordInCountries = countries
          .toLowerCase()
          .includes(keyword.toLowerCase());
        const actors = Array.isArray(policy.fields.Actors)
          ? policy.fields.Actors.join(", ")
          : policy.fields.Actors || "-";
        const keywordInActors = actors
          .toLowerCase()
          .includes(keyword.toLowerCase());
        const keywordInProgress = policy.fields.Progress.toLowerCase().includes(
          keyword.toLowerCase()
        );
        return (
          keywordInActors ||
          keywordInCountries ||
          keywordInName ||
          keywordInProgress
        );
      })
    : filteredPolicies;

  const sortedPolicies = keywordFilteredPolicies.sort((a, b) => {
    const dateA = new Date(a.fields.Date);
    const dateB = new Date(b.fields.Date);
    return dateB.getTime() - dateA.getTime(); // Latest first
  });

  return (
    // Your updated component with responsive classes
    <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-6rem)] p-0 gap-4">
      <Card className="flex-1 flex flex-col p-4 overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5" />
          <h2 className="text-2xl font-bold">Policy Feed</h2>
          {clickedCountryId && (
            <span className="text-muted-foreground">
              ({clickedCountryId})
            </span>
          )}
        </div>
        <div className="mb-4">
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
        </div>
        <div className="flex-1 overflow-auto max-h-[50vh] lg:max-h-full">
          <Table>
            <TableHeader className="sticky top-0 bg-gray-200 rounded-t-lg">
              <TableRow>
                <TableHead className="rounded-tl-lg">Policy</TableHead>
                <TableHead>Countries</TableHead>
                <TableHead className="hidden md:table-cell">Progress</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="hidden lg:table-cell">Actors</TableHead>
                <TableHead className="rounded-tr-lg">Source</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedPolicies.map((policy) => (
                <TableRow key={policy.id}>
                  <TableCell>{policy.fields.Name}</TableCell>
                  <TableCell>
                    {Array.isArray(policy.fields.Country)
                      ? policy.fields.Country.join(", ")
                      : policy.fields.Country}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{policy.fields.Progress}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {policy.fields.Date
                      ? typeof policy.fields.Date === "string"
                        ? policy.fields.Date
                        : new Date(policy.fields.Date).toLocaleDateString()
                      : "-"}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">{Array.isArray(policy.fields.Actors)
                      ? policy.fields.Actors.join(", ")
                      : policy.fields.Actors}</TableCell>
                  <TableCell>
                    <a 
                      href={policy.fields.Source} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 underline"
                    >
                      Link
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Card className="flex-1 h-[400px] lg:h-full p-0 overflow-auto flex flex-col mt-4 lg:mt-0">
        <div className="flex-1 min-h-[300px] grid place-items-center overflow-auto">
          <Map
            clickedCountryId={clickedCountryId}
            setClickedCountryId={setClickedCountryId}
          />
        </div>
        <h1 className="text-center mt-2 font-bold text-2xl mb-4">
          {clickedCountryId ? `AI policies in ${clickedCountryId}` : "Select country to filter"}
        </h1>
        <div className="flex justify-center items-center gap-4 mt-2 mb-4">
          <ResetButton
            clickedCountryId={clickedCountryId}
            setClickedCountryId={setClickedCountryId}
          />
          <a href="/projects">
            <button
              type="button"
              className="bg-blue-500 text-white rounded-full px-5 py-2 hover:bg-blue-600"
            >
              Comparisons
            </button>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default PolicyMapComponent;