import { useRef, useState, useCallback, memo } from "react";
import styles from "./MySVGComponent.module.css";
import { countries, bruneiDot, bruneiMain, timorLesteDot, timorLesteMain, CountryData } from "@/components/countryData";

interface MapProps {
  clickedCountryId: string | null;
  setClickedCountryId: (id: string | null) => void;
}

// Memoized country component to prevent unnecessary re-renders
const Country = memo(({ 
  country, 
  isSelected,
  isHovered, 
  onMouseOver,
  onMouseOut,
  onClick
}: { 
  country: CountryData;
  isSelected: boolean;
  isHovered: boolean;
  onMouseOver: () => void;
  onMouseOut: () => void;
  onClick: () => void;
}) => {
  // Determine fill color based on state
  const fillColor = isHovered ? "#FFE5B4" : (isSelected ? "#FF0000" : "#005500");
  
  return (
    <g
      id={country.id}
      className="country"
      transform={country.transform}
      style={{
        fill: fillColor,
        fillOpacity: 0.98823529,
        stroke: "#ffffff",
        strokeWidth: 0.5257113,
        strokeMiterlimit: 3.98288536,
        strokeDasharray: "none",
        strokeOpacity: 1,
        // Add CSS containment for better performance
        contain: "layout paint style",
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    >
      {country.paths.map((path, index) => (
        <path key={`${country.id}-path-${index}`} d={path} />
      ))}
    </g>
  );
});

// Special country parts component for split countries
const CountryParts = memo(({ 
  mainPart, 
  dotPart, 
  baseId,
  isSelected,
  isHovered, 
  onMouseOver,
  onMouseOut,
  onClick
}: { 
  mainPart: CountryData;
  dotPart: CountryData;
  baseId: string;
  isSelected: boolean;
  isHovered: boolean;
  onMouseOver: () => void;
  onMouseOut: () => void;
  onClick: () => void;
}) => {
  // Determine fill color based on state
  const fillColor = isHovered ? "#FFE5B4" : (isSelected ? "#FF0000" : "#005500");
  
  return (
    <>
      {/* Main part of the country */}
      <g
        id={mainPart.id}
        className="country-part"
        transform={mainPart.transform}
        style={{
          fill: fillColor,
          fillOpacity: 0.98823529,
          stroke: "#ffffff",
          strokeWidth: 0.5257113,
          strokeMiterlimit: 3.98288536,
          strokeDasharray: "none",
          strokeOpacity: 1,
          contain: "layout paint style",
        }}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
        data-country-id={baseId}
      >
        {mainPart.paths.map((path, index) => (
          <path key={`${mainPart.id}-path-${index}`} d={path} />
        ))}
      </g>
      
      {/* Dot part of the country */}
      <g
        id={dotPart.id}
        className="country-part"
        transform={dotPart.transform}
        style={{
          fill: fillColor,
          fillOpacity: 0.98823529,
          stroke: "#ffffff",
          strokeWidth: 0.5257113,
          strokeMiterlimit: 3.98288536,
          strokeDasharray: "none",
          strokeOpacity: 1,
          contain: "layout paint style",
        }}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
        data-country-id={baseId}
      >
        {dotPart.paths.map((path, index) => (
          <path key={`${dotPart.id}-path-${index}`} d={path} />
        ))}
      </g>
    </>
  );
});

Country.displayName = "Country";
CountryParts.displayName = "CountryParts";

const Map: React.FC<MapProps> = ({
  clickedCountryId,
  setClickedCountryId,
}) => {
  const [hoveredCountryId, setHoveredCountryId] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  
  // Event handlers with useCallback to prevent unnecessary re-renders
  const handleMouseOver = useCallback((countryId: string) => {
    setHoveredCountryId(countryId);
  }, []);
  
  const handleMouseOut = useCallback(() => {
    setHoveredCountryId(null);
  }, []);
  
  const handleClick = useCallback((countryId: string) => {
    setClickedCountryId(countryId);
  }, [setClickedCountryId]);

  // Filter out the split countries from the main countries array
  const filteredCountries = countries.filter(
    country => country.id !== "Brunei" && country.id !== "Timor-Leste"
  );

  return (
    <div ref={mapRef} className={styles.mapContainer}>
      <svg
        className={styles.mapSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2502.5147 1517.4011"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs id="defs1930" />
        
        {/* Render regular countries */}
        {filteredCountries.map((country) => (
          <Country 
            key={country.id} 
            country={country}
            isSelected={clickedCountryId === country.id}
            isHovered={hoveredCountryId === country.id}
            onMouseOver={() => handleMouseOver(country.id)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(country.id)}
          />
        ))}
        
        {/* Render Brunei as split parts */}
        <CountryParts
          mainPart={bruneiMain}
          dotPart={bruneiDot}
          baseId="Brunei"
          isSelected={clickedCountryId === "Brunei"}
          isHovered={hoveredCountryId === "Brunei"}
          onMouseOver={() => handleMouseOver("Brunei")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("Brunei")}
        />
        
        {/* Render Timor-Leste as split parts */}
        <CountryParts
          mainPart={timorLesteMain}
          dotPart={timorLesteDot}
          baseId="Timor-Leste"
          isSelected={clickedCountryId === "Timor-Leste"}
          isHovered={hoveredCountryId === "Timor-Leste"}
          onMouseOver={() => handleMouseOver("Timor-Leste")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("Timor-Leste")}
        />
      </svg>
    </div>
  );
};

export default Map;