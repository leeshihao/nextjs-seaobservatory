'use client'

import { useState } from 'react'
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
                <TableHead>Name</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Policy</TableHead>
                <TableHead>Source</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Policy A</TableCell>
                <TableCell>Singapore</TableCell>
                <TableCell>Environmental Protection</TableCell>
                <TableCell>Gov Website</TableCell>
              </TableRow>
              {/* Add more rows here once connected to your data source */}
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