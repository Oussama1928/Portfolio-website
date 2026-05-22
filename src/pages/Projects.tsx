import { SeasonalHoverCards } from "@/components/lightswind/seasonal-hover-cards";

export default function Projects() {
  const projects = [
    {
      title: "Unstructured Data Processing",
      subtitle: "Python · Data Extraction · Data Cleaning · Standardization · Quality Control",
      description:
        "Coordinated the development of a Python-based tool for extracting and standardizing data from PDFs and web sources. The project aimed to convert fragmented, unstructured information into reliable datasets ready for analysis and decision-making.",
      imageSrc: "/images/projects/arcep.png",
    },
    {
      title: "Financial Risk & Portfolio Optimization",
      subtitle: "Python · VaR · Sharpe Ratio · Efficient Frontier · Monte Carlo",
      description:
        "Built a Python-based analysis of a multi-asset portfolio, combining risk-return metrics, Value-at-Risk methods, drawdown analysis, and mean-variance optimization to construct minimum-variance and maximum-Sharpe portfolios.",
      imageSrc: "/images/projects/finance-risk2.png",
    },
    {
      title: "FX Hedging Strategy for Disney",
      subtitle: "International Finance · FX Risk · Hedging · Derivatives · Risk Management",
      description:
        "Analyzed Disney’s foreign exchange exposure and developed a hedging strategy by distinguishing between transaction, translation, and economic exposure. The project compared forwards, futures, options, and money market hedges, and proposed appropriate hedging approaches for each type of risk.",
      imageSrc: "/images/projects/disney-hedging.png",
    },
    {
      title: "Probabilistic Graphical Modeling — LDPC Codes",
      subtitle: "Python · pgmpy · Factor Graphs · Belief Propagation · Error-Correcting Codes",
      description:
        "Analyzed Disney’s foreign exchange exposure by focusing on three international subsidiaries and identifying the relevant risk profile for each currency. The project distinguished between transaction, translation, and economic exposure, compared hedging instruments such as forwards, futures, options, and money market hedges, and proposed appropriate hedging approaches for each currency exposure.",  
      imageSrc: "/images/projects/pgm-ldpc2.png",
    },
    {
    title: "Operations Research Optimization with PuLP",
    subtitle: "Linear Programming · Integer Programming · Operations Research · Python · PuLP",
    description:
      "Built a collection of optimization models using PuLP to solve classic operations research problems, including production planning, taxi assignment, facility location, electricity distribution, workshop scheduling, project selection, blending, and set covering. Each notebook includes the business context, mathematical formulation, PuLP implementation, and interpretation of the optimal solution.",
    imageSrc: "/images/projects/pulp-optimization.png",
    }
  ];

  const projectGroups = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectGroups.push(projects.slice(i, i + 3));
  }

  return (
    <section className="relative w-full min-h-screen bg-background text-white pb-24 px-6 md:px-12 font-sans">
      {/* Title */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Projects
        </h1>
        <p className="text-lg text-white/70 max-w-2xl">
          A selection of academic, professional, and personal projects showcasing
          my experience in backend engineering, cloud-native systems, and full-stack
          development.
        </p>
      </div>

      {/* Rows of 3 cards */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {projectGroups.map((group, index) => (
          <SeasonalHoverCards key={index} cards={group} />
        ))}
      </div>
    </section>
  );
}
