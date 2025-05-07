"use client";

import ProjectCard from "@/components/ProjectCard";

const ProjectsPage: React.FC = () => {
  return (
    <div>
      {/* AISA Report */}
      <ProjectCard
        title="AISA Report"
        description="AISA Report"
        link="https://docs.google.com/document/d/1EFhK4x0nFNhotRSunzdIdcCDmrICGmunHeHc6vFEObs/"
        images={[
          {
            src: "/images/projects/aisaReport/table1.png",
            alt: "Table 1",
          },
          {
            src: "/images/projects/aisaReport/table2.png",
            alt: "Table 2",
          },
        ]}
        imageDescription={[
          <div key="table1-desc" className="text-xs text-gray-700 whitespace-pre-line">
            <p>*For Indonesia, while no draft law or regulation has been published yet, government officials have signalled their intention to introduce comprehensive hard AI regulations in the form of presidential regulations or ministerial decrees.</p>
            <p>**For Vietnam, it is unclear what the current status of planned AI governance research centres is.</p>
            <br />
            <p className="font-semibold">Notes on categories:</p>
            <ul className="list-disc ml-5">
              <li>Comprehensive hard law on AI: regulations covering multiple stages in the AI life cycle (development, deployment, adoption) that are legally binding such as the EU AI Act</li>
              <li>Comprehensive soft law on AI: regulations covering multiple stages in the AI life cycle that are voluntary and not legally binding, such as AI Governance and Ethics guides</li>
              <li>AI governance research centre: a research centre that focuses specifically or primarily specifically on AI safety governance or responsible AI</li>
            </ul>
          </div>,
          <div key="table2-desc" className="text-xs text-gray-700 whitespace-pre-line">
          <p>*Vietnam attended the 2025 Paris AI Action Summit but did not sign the Statement on Inclusive and Sustainable Artificial Intelligence for People and the Planet.</p>
          <p>**Filipino officials participated in a ministerial session on AI Governance entitled &ldquo;Preparing AI for the World, Preparing the World for AI&rdquo; organized by UNESCO on the sidelines of the 2025 Paris AI Action Summit, though it is unclear whether they participated in the actual Summit.</p>
          <br />
        </div>
        ]}
      />
      {/* HKU Report */}
      <ProjectCard
        title="HKU Report"
        description="HKU Report"
        link="https://www.google.com"
      />
    </div>
  );
};

export default ProjectsPage;