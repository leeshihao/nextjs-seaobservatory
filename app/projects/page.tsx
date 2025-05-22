"use client";

import ProjectCard from "@/components/ProjectCard";

const ProjectsPage: React.FC = () => {
  return (
    <div>
      {/* AISA Report */}
      <ProjectCard
        title="AISA Report (draft - full report publishing in July 2025)"
        subtitle="Comparison of Government-led AI Policy Making"
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
          <p>**Filipino officials participated in a ministerial session on AI Governance entitled &quot;Preparing AI for the World, Preparing the World for AI&quot; organized by UNESCO on the sidelines of the 2025 Paris AI Action Summit, though it is unclear whether they participated in the actual Summit.</p>
          <br />
        </div>
        ]}
      />
      {/* HKU Report */}
      <ProjectCard
        title="HKU PHIL7015 Across Borders Report"
        subtitle="Pair-wise Comparisons of National AI Strategies"
        authors="Miao Junyi (Maggie), Yang Kaidi (Keddy), Li Zhuoyang (Aden), Chong Chun Yu (Marco)"
        description={
          <div className="px-4">
            <h5 className="text-base font-semibold">1. Singapore and Philippines</h5>
            <p className="indent-8">
              Singapore and the Philippines represent the most polarized pair among the four countries in their national AI strategies, despite the fact that both countries released their updated 2.0 versions. For the reason that Singapore is transitioning from opportunity-driven to necessity-driven AI development. NAIS 2.0 is a clear, structured strategy roadmap that outlines three systems, ten enablers, and fifteen actionable steps to grow sectors like manufacturing, financial services, and healthcare. The Cross-Cutting Investment is a smart approach since it can accelerate the development and deployment of AI solutions across all domains. It emphasizes advanced areas like AI for Science, Foundational AI, and AI for Business Operation. Singapore&apos;s strategy is ambitious, globally oriented, and concrete in order to establish the nation as a trusted AI hub. 
            </p>
            <p className="indent-8">
              In contrast, the Philippines&apos; NAISR 2.0 is immature and vague. It looks like a conceptual draft rather than a robust plan. NAISR 2.0 even lacks specificity if we compare it to NAIS1.0. NAISR 2.0 broadly addresses seven imperatives, such as workforce upskilling and ethical AI. 
              The strategy acknowledges barriers like limited AI use cases and low R&D funding (0.30% of GDP, aiming for UNESCO&apos;s 1%) but fails to offer concrete actions or timelines to drive improvement, which makes a strong contrast to Singapore&apos;s thoughtful and actionable NAIS2.0. Therefore, we can summarize that NAISR 2.0 lacks depth and clarity due to the absence of specific sectors or a detailed implementation plan. 
            </p>
            <p className="indent-8">
              While Singapore is planning the next stage of AI leadership, the Philippines still struggles to lay foundational groundwork. Roughly, Singapore&apos;s progress in NAIS 2.0 is 3-5 years ahead of the Philippines&apos; NAISR 2.0 due to a significant gap in ambition, execution, and maturity. 
            </p>
            <br />

            <h5 className="text-base font-semibold">2. Singapore and Malaysia</h5>
            <p className="indent-8">
              Singapore is far ahead of Malaysia in terms of the maturity and comprehensiveness of its national AI strategy. Namely, Singapore aims for comprehensive development, but Malaysia solely focuses on fair, value-driven AI governance.  
            </p>
            <p className="indent-8">
              Singapore&apos;s strategy adopts a system-driven approach to maintain its leading position in the fields of economy and technology. Despite the broad goal, Singapore narrowed down their focus on solving real-world development issues and converted them into 15 actions. The strategy promotes economic transformation through 15 specific measures across three systems, focusing on high-value industries such as finance, healthcare, and logistics. Cross-sector investments in AI applications across science and business operations aim to solidify Singapore&apos;s position as a global AI hub. Conversely, Malaysia&apos;s AIGE prioritizes ethical governance and, therefore, integrates AI governance with national values (such as Rukun Negara and Islamic ethics) and seven core principles (such as fairness, transparency, and human well-being). It focuses on building trust in areas such as energy, education, and smart technologies. Singapore&apos;s AI strategy is execution-oriented by setting quantifiable goals (such as training 15,000 AI professionals) and providing support measures such as high-performance computing infrastructure. The plan emphasizes global cooperation, regulatory flexibility, and financial support, reflecting Singapore&apos;s commitment to AI development. Notwithstanding, Malaysia&apos;s AIGE proposes a dynamic ethical framework that includes industry-specific guidelines, human oversight mechanisms, and adherence to UNESCO and OECD standards. However, the plan lacks specific timelines or funding details, which may undermine the effectiveness of AI development as a national strategy. 
            </p>
            <p className="indent-8">
              Overall, Singapore aims to enhance global competitiveness. Malaysia emphasizes cultural preservation in respect of diversity and constitutional rights. Although both prioritize education and technology, Singapore&apos;s strategy covers leading industries such as biomedicine, while Malaysia only emphasizes sustainability and social welfare.  
            </p>
            <br />

            <h5 className="text-base font-semibold">3. Singapore and Malaysia</h5>
            <p className="indent-8">
              Singapore and Indonesia have totally different strategies for AI governance, which are deeply influenced by their unique social-economic and cultural contexts. 
              Singapore&apos;s strategy adopts a globalized, system-driven vision, positioning itself as an AI leader through an interconnected ecosystem. It emphasizes that AI is a &quot;necessary&quot; and &quot;equitable&quot; tool, focusing on high-value sectors such as finance, healthcare, and logistics. In contrast, Indonesia&apos;s STRANASKA aligns with the Visi Indonesia 2045 strategy, prioritizing AI applications in healthcare, food security, and smart cities to drive national development. It also embeds innovation within the Pancasila values and emphasizes human oversight. However, we must understand that Indonesia suffers from poverty, even with food supply concerns. Such a concern would never be relatable to Singaporeans, so we need to understand how the context shifts their AI focus based on their needs. 
            </p>
            <p className="indent-8">
              Clearly, Singapore&apos;s NAIS 2.0 is a better framework that outlines 15 specific action steps across three systems (activity-driven, people and community, and infrastructure) and cross-cutting applications. Indonesia&apos;s strategy only focuses on five priority areas (such as administrative reform, food security and education) but remains a good policy guideline as they are good at identifying their needs based on their unique social-economic and cultural contexts. It is reasonable to focus on those five priority areas to address the pressing need. 
            </p>
            <p className="indent-8">
              Both strategies acknowledge the transformative potential of AI but differ in implementation. Singapore&apos;s NAIS 2.0 provides concrete guidance for implementation. Indonesia&apos;s STRANASKA lacks implementation significance, and its relevance and currency are poor (last updated in 2020). 
            </p>
            <br />

            <h5 className="text-base font-semibold">4. Philippines and Indonesia</h5>
            <p className="indent-8">
              Indonesia&apos;s artificial intelligence strategy is slightly ahead of the Philippines. Indonesia has already begun to propose a structured priority strategy for artificial intelligence, while the Philippines is still in the early stages of vision planning and has not yet determined its key priorities. 
            </p>
            <p className="indent-8">
              Indonesia&apos;s strategy has unique geographical attributes aimed at meeting the basic needs of its dispersed archipelago in areas such as healthcare, food security, and smart cities. Still, it lacks specific action steps, regulations, or timelines. Additionally, Indonesia&apos;s AI strategy has strong cultural characteristics, which includes the Pancasila and Islamic values (social justice, unity) and human oversight. In contrast, the Indonesian government was more aware and concerned about the development of ethical AI aligned with public interest and welfare as the 4P healthcare paradigm. 
            </p>
            <p className="indent-8">
              On the contrary, The Philippines&apos; NAISR 2.0 focuses on economic transformation through the adoption of generative AI, plans to increase R&D spending to 1% of GDP, and addresses obstacles such as limited AI application cases and talent gaps, but remains rather vague and more of a conceptual framework than a concrete plan. Indonesia faces geographical complexity and infrastructure gaps that hinder AI scalability. Its strategy remains visionary but lacks industry-specific regulations. The Philippines faces resource constraints (insufficient R&D funding, unclear regulations) and needs to rely on increased investment to meet UNESCO&apos;s R&D targets. Ethics and education are valued in both nations, while the Philippines places more emphasis on private-sector innovation and Indonesia on governmental reform. Indonesia&apos;s national strategy was released four years earlier than the Philippines&apos;, but it is more detailed than the Philippines&apos;. Both countries are at a relatively backward stage. 
            </p>
            <br />

            <h5 className="text-base font-semibold">5. Philippines and Malaysia</h5>
            <p className="indent-8">
              Based on the two countries&apos; AI strategies, implementation frameworks, and contextual challenges, Malaysia slightly outperforms the Philippines in terms of AI strategy, but both countries also face different challenges. 
            </p>
            <p className="indent-8">
              In terms of strategic focus, The Philippines&apos; strategy emphasizes economic transformation, targeting AI opportunities in areas such as healthcare and logistics, prioritizing workforce skills upgrading, increasing R&D spending from 0.3% to 1% of GDP, and addressing barriers such as infrastructure gaps and unclear regulations. Malaysia&apos;s AIGE centers on ethical governance, rooted in Rukun Negara and the seven principles of Islamic values (fairness, transparency, accountability) to ensure that AI respects cultural diversity and human dignity. It focuses on sustainability-driven industries such as energy and smart technologies. 
            </p>
            <p className="indent-8">
              Malaysia and the Philippines fall short in AI strategy implementation, with the Philippines&apos; NAISR 2.0 outlining seven strategic imperatives but lacking a detailed timeline and resembling a conceptual framework. Malaysia&apos;s AIGE provides a dynamic ethical framework with internationally aligned industry-specific norms (UNESCO, OECD) and no specific funding or metrics.
            </p>
            <p className="indent-8">
              In terms of AI ethics, Malaysia has adopted a relatively cautious development strategy. The Philippines has integrated ethics into broader cultural and economic domains, explicitly linking AI with cultural heritage protection, and requiring compliance with constitutional rights and human rights oversight to mitigate risks such as algorithmic bias. At the same time, both countries face significant challenges in responding to the rapidglobal growth of AI. The Philippines faces resource constraints (low levels of R&D and infrastructure) and regulatory ambiguity. In turn, Malaysia is trying to translate the guidelines into workable policies, but there are still differences in adoption across sectors. 
            </p>
            <br/>

            <h5 className="text-base font-semibold">6. Malaysia and Indonesia</h5>
            <p className="indent-8">
              Due to differences in the level of development between the two countries, there are also differences in their level of development in terms of AI rules. Malaysia&apos;s strategy has a structured ethical framework and emphasizes globality, so Malaysia is ahead of Indonesia in terms of AI strategy formulation. 
            </p>
            <p className="indent-8">
              Indonesia&apos;s AI strategy prioritizes basic needs such as healthcare, food security, and bureaucratic reform, emphasizes Pancasila values (solidarity, social justice), and incorporatesAI to bridge infrastructure gaps and address real-world problems. Malaysia&apos;s AI strategy focuses on ethical governance, incorporating the seven principles of Islamic ethics (fairness, transparency, accountability) to ensure that AI respects cultural diversity and human dignity and carries Islamic cultural attributes. This is different due to the differences in infrastructure and development levels between the two countries, with Malaysia&apos;s focus on buildingtrust and modernization contrasting with Indonesia&apos;s focus on basic development. Both Malaysia&apos;s and Indonesia&apos;s AI development strategies lack implementation guidance. Indonesia&apos;s STRANAS KA outlines five prioritized projects that remain aspirational in the absence of actionable timelines, regulations, or specific funding. Malaysia&apos;s AIGE provides a dynamic framework that includes sector-specific ethics, personnel oversight, and legal compliance but also lacks specific funding details. 
            </p>
            <p className="indent-8">
              The artificial intelligence strategies of both countries are also significantly influenced by geographical factors. Indonesia faces challenges related to geographical fragmentation and the implementation of guidelines. While Malaysia has made notable progress in infrastructure development, it must continue to consider how to integrate modernization efforts with artificial intelligence development.
            </p>
          </div>
        }
        link="https://drive.google.com/file/d/1o2ksn23wvXPOB-yBe6FIiKc1dX_BaiXu/view?usp=drive_link"
      />
    </div>
  );
};

export default ProjectsPage;