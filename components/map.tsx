'use client'

import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from 'react-leaflet'
import type { GeoJSON as GeoJSONType } from 'geojson'
import type { Layer, PathOptions } from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  onCountrySelect: (country: string) => void
}

interface CountryStyle extends PathOptions {
  fillColor: string
  color: string
  weight: number
  opacity: number
  fillOpacity: number
}

export default function Map({ onCountrySelect }: MapProps) {
  const [geoJsonData, setGeoJsonData] = useState<GeoJSONType | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const geoJsonLayerRef = useRef<Layer | null>(null)

  // Fetch GeoJSON data on component mount
  useEffect(() => {
    async function fetchGeoJson() {
      try {
        const response = await fetch('/sea-countries.json')
        const data = await response.json()
        setGeoJsonData(data)
      } catch (error) {
        console.error('Error loading GeoJSON:', error)
      }
    }
    fetchGeoJson()
  }, [])

  // Style function for countries
  const getCountryStyle = (feature: any): CountryStyle => {
    const isSelected = feature.properties.name === selectedCountry
    
    return {
      fillColor: isSelected ? '#2563eb' : '#64748b',
      color: '#334155',
      weight: isSelected ? 2 : 1,
      opacity: 1,
      fillOpacity: isSelected ? 0.6 : 0.3,
    }
  }

  // Event handlers for country interactions
  const onEachFeature = (feature: any, layer: Layer) => {
    // Add tooltip with country name
    if (feature.properties && feature.properties.name) {
      layer.bindTooltip(feature.properties.name, {
        permanent: false,
        direction: 'center',
        className: 'bg-background text-foreground px-2 py-1 rounded shadow-lg'
      })
    }

    // Add hover effect
    layer.on({
      mouseover: (e) => {
        const layer = e.target
        layer.setStyle({
          fillOpacity: 0.7,
          weight: 2
        })
      },
      mouseout: (e) => {
        const layer = e.target
        layer.setStyle(getCountryStyle(feature))
      },
      click: (e) => {
        const countryName = feature.properties.name
        setSelectedCountry(countryName)
        onCountrySelect(countryName)
      }
    })
  }

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden border">
      <MapContainer
        center={[5.3521, 114.8198]} // Centered on Southeast Asia
        zoom={4}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false} // We'll add custom position for zoom control
      >
        {/* Add zoom control to top-right */}
        <ZoomControl position="topright" />
        
        {/* Base map layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          className="map-tiles"
        />
        
        {/* GeoJSON layer for countries */}
        {geoJsonData && (
          <GeoJSON
            data={geoJsonData}
            style={getCountryStyle}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>

      {/* Optional legend */}
      <div className="absolute bottom-4 right-4 bg-background/90 p-3 rounded-lg shadow-lg z-[400] backdrop-blur-sm">
        <h3 className="font-semibold mb-2">Countries</h3>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#64748b] opacity-30" />
          <span className="text-sm">Unselected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#2563eb] opacity-60" />
          <span className="text-sm">Selected</span>
        </div>
      </div>
    </div>
  )
}