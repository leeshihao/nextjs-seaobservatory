'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  authors?: string;
  description?: React.ReactNode;
  link?: string;
  images?: { src: string; alt: string }[];
  imageDescription?: React.ReactNode[];
}

export default function ProjectCard({ title, subtitle, authors, description, link, images, imageDescription }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full mb-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-start justify-between text-left"
      >
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{title}</h3>
          <h4 className="pt-2 text-lg font-semibold">{subtitle}</h4>
          <p className="pt-2 text-sm text-gray-500">{authors}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
        <div className="text-black">{description}</div>
          {images && images.map((img, idx) => (
            <div key={idx} className="mb-4 flex flex-col items-center">
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={500}
                height={300}
                className="rounded-lg mb-2 w-1/2"
              />
              {imageDescription && imageDescription[idx] && (
                <div className="text-sm text-gray-500 w-4/5 flex justify-center">{imageDescription[idx]}</div>
              )}
            </div>
          ))}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:text-blue-800"
            >
              View the {title} →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
