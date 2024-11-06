'use client'

import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from 'react-leaflet';
import type { GeoJSON as GeoJSONType } from 'geojson';
import type { Layer, PathOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapProps {
  onCountrySelect: (country: string) => void;
}

interface CountryStyle extends PathOptions {
  fillColor: string;
  color: string;
  weight: number;
  opacity: number;
  fillOpacity: number;
}

export default function Map({ onCountrySelect }: MapProps) {
  const [geoJsonData, setGeoJsonData] = useState<GeoJSONType | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const [isMapInitialized, setIsMapInitialized] = useState(false); // Track if the map is initialized

  // Fetch GeoJSON data on component mount
  useEffect(() => {
    async function fetchGeoJson() {
      try {
        const response = await fetch('/sea-countries.geojson');
        const data = await response.json();
        setGeoJsonData(data);
        setIsMapInitialized(true); // Set to true after data is fetched
      } catch (error) {
        console.error('Error loading GeoJSON:', error);
      }
    }
    fetchGeoJson();
  }, []);



  // Style function for countries
  const getCountryStyle = (feature: GeoJSON.Feature | undefined): CountryStyle => {
    if (feature && feature.properties && feature.properties.name) {
      const isSelected = feature.properties.name === selectedCountry;
      return {
        fillColor: isSelected ? '#2563eb' : '#64748b',
        color: '#334155',
        weight: isSelected ? 2 : 1,
        opacity: 1,
        fillOpacity: isSelected ? 0.6 : 0.3,
      };
    }
    return {
      fillColor: '#64748b',
      color: '#334155',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.3,
    };
  };

  const onEachFeature = (feature: GeoJSON.Feature, layer: Layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindTooltip(feature.properties.name, {
        permanent: false,
        direction: 'center',
        className: 'bg-background text-foreground px-2 py-1 rounded shadow-lg',
      });
    }

    layer.on({
      mouseover: (e) => {
        const layer = e.target;
        layer.setStyle({
          fillOpacity: 0.7,
          weight: 2,
        });
      },
      mouseout: (e) => {
        const layer = e.target;
        layer.setStyle(getCountryStyle(feature));
      },
      click: (e) => {
        if (feature.properties?.name) {
          const countryName = feature.properties.name;
          setSelectedCountry(countryName);
          onCountrySelect(countryName);
        }
      },
    });
  };

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden border">
      {geoJsonData && ( // Render MapContainer only if geoJsonData is loaded
        <MapContainer
          center={[5.3521, 114.8198]} // Centered on Southeast Asia
          zoom={4}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
        >
          <ZoomControl position="topright" />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            className="map-tiles"
          />
          <GeoJSON
            data={geoJsonData}
            style={getCountryStyle}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      )}
    </div>
  );
}