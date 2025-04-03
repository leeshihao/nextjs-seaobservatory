"use client";

import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import Image from 'next/image';

export default function LandingPage() {
  const [teamHover, setTeamHover] = useState<number | null>(null);

  return (
    <>
      <Analytics />
      <div className="flex flex-col w-full bg-neutral-50 min-h-screen">
        <header className="flex flex-col justify-center items-center px-6 text-white bg-indigo-700 min-h-screen">
          <div className="w-full max-w-[1200px]">
            <h1 className="text-6xl font-bold leading-none max-sm:text-4xl">
              Mapping AI Policies Across Southeast Asia
            </h1>
            <p className="mt-6 text-2xl opacity-90 max-sm:text-lg">
              A comprehensive database and analysis platform tracking artificial
              intelligence policy developments in ASEAN member states.
            </p>
            <a
              href="/map"
              className="inline-block px-8 py-4 mt-12 text-lg font-semibold text-indigo-700 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-1"
            >
              Explore the Map
            </a>
          </div>
        </header>

        <section className="flex justify-center px-6 py-32 bg-white">
          <div className="max-w-[1200px]">
            <h2 className="text-5xl font-bold text-neutral-900 max-sm:text-3xl">
              About SEA Observatory
            </h2>
            <div className="grid grid-cols-2 gap-12 mt-12 max-md:grid-cols-1">
              <div className="flex flex-col gap-6">
                <p className="text-lg leading-relaxed text-zinc-800">
                  The Southeast Asia AI Policy Observatory serves as a central
                  hub for tracking, analyzing, and understanding the evolution
                  of artificial intelligence policies across ASEAN member
                  states.
                </p>
                <p className="text-lg leading-relaxed text-zinc-800">
                  Our mission is to promote transparency, facilitate knowledge
                  sharing, and support evidence-based policymaking in the
                  region&apos;s rapidly evolving AI landscape.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  Theory of Change
                </h3>
                <p className="text-lg leading-relaxed text-zinc-800">
                  By providing accessible, comprehensive data and analysis, we
                  enable policymakers, researchers, and stakeholders to make
                  informed decisions that shape the future of AI governance in
                  Southeast Asia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center px-6 py-32 bg-neutral-100">
          <div className="max-w-[1200px]">
            <h2 className="text-5xl font-bold text-neutral-900 max-sm:text-3xl">
              Southeast Asia & ASEAN
            </h2>
            <div className="grid grid-cols-2 gap-12 mt-12 max-md:grid-cols-1">
              <div>
                <Image
                  src="https://placehold.co/600x400"
                  alt="Southeast Asia Map"
                  width={600}
                  height={400}
                  className="w-full rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                />
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-lg leading-relaxed text-zinc-800">
                  Southeast Asia represents one of the world&apos;s most dynamic and
                  diverse regions, comprising 11 countries with a combined
                  population of over 650 million people.
                </p>
                <p className="text-lg leading-relaxed text-zinc-800">
                  ASEAN, established in 1967, serves as the primary regional
                  organization promoting economic, political, and social
                  cooperation among its 10 member states.
                </p>
                <p className="text-lg leading-relaxed text-zinc-800">
                  The region&apos;s rapid digital transformation and growing AI
                  adoption make it a crucial arena for studying and shaping AI
                  policy developments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center px-6 py-32 bg-white">
          <div className="w-full max-w-[1200px]">
            <h2 className="text-5xl font-bold text-center text-neutral-900 max-sm:text-3xl">
              Our Team
            </h2>
            <div className="grid grid-cols-4 gap-8 mt-12 max-md:grid-cols-2 max-sm:grid-cols-1">
              <div
                className="flex flex-col items-center"
                onMouseEnter={() => setTeamHover(0)}
                onMouseLeave={() => setTeamHover(null)}
              >
                <div
                  className="overflow-hidden relative w-60 h-60 rounded-full transition-transform duration-200"
                  style={{
                    transform: teamHover === 0 ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <Image
                    src="https://placehold.co/240x240"
                    alt="Team Member 1"
                    width={240}
                    height={240}
                    className="object-cover size-full"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-neutral-900">
                  Dr. Sarah Chen
                </h3>
                <p className="mt-2 text-base text-stone-500">
                  Project Director
                </p>
              </div>

              <div
                className="flex flex-col items-center"
                onMouseEnter={() => setTeamHover(1)}
                onMouseLeave={() => setTeamHover(null)}
              >
                <div
                  className="overflow-hidden relative w-60 h-60 rounded-full transition-transform duration-200"
                  style={{
                    transform: teamHover === 1 ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <Image
                    src="https://placehold.co/240x240"
                    alt="Team Member 2"
                    width={240}
                    height={240}
                    className="object-cover size-full"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-neutral-900">
                  Dr. Ahmad Rahman
                </h3>
                <p className="mt-2 text-base text-stone-500">Lead Researcher</p>
              </div>

              <div
                className="flex flex-col items-center"
                onMouseEnter={() => setTeamHover(2)}
                onMouseLeave={() => setTeamHover(null)}
              >
                <div
                  className="overflow-hidden relative w-60 h-60 rounded-full transition-transform duration-200"
                  style={{
                    transform: teamHover === 2 ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <Image
                    src="https://placehold.co/240x240"
                    alt="Team Member 3"
                    width={240}
                    height={240}
                    className="object-cover size-full"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-neutral-900">
                  Maria Santos
                </h3>
                <p className="mt-2 text-base text-stone-500">Policy Analyst</p>
              </div>

              <div
                className="flex flex-col items-center"
                onMouseEnter={() => setTeamHover(3)}
                onMouseLeave={() => setTeamHover(null)}
              >
                <div
                  className="overflow-hidden relative w-60 h-60 rounded-full transition-transform duration-200"
                  style={{
                    transform: teamHover === 3 ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <Image
                    src="https://placehold.co/240x240"
                    alt="Team Member 4"
                    width={240}
                    height={240}
                    className="object-cover size-full"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-neutral-900">
                  Tom Nguyen
                </h3>
                <p className="mt-2 text-base text-stone-500">Data Scientist</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
