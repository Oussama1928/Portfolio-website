import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import type { TimelineEvent } from "@/components/lightswind/scroll-timeline";

const journeyEvents: TimelineEvent[] = [
  {
    year: "2018 - 2022",
    title: "Scientific Baccalaureate — Mathematics & Physics",
    subtitle: "Pioneer High School, Tunis, Tunisia",
    description: "Focused on advanced mathematics and physics, building a strong analytical foundation and a rigorous problem-solving approach. Graduated with an outstanding Baccalaureate score of 18.12/20."
  },
  {
  year: "2022 - 2024",
  title: "Intensive Preparatory Classes — PCSI–PSI*",
  subtitle: "IPEST, Tunis, Tunisia",
  description:
    "Completed a highly selective two-year program with intensive training in mathematics, physics, and engineering sciences. Ranked 22nd nationally in Tunisia, admitted to the Mines-Ponts and Centrale competitive examination banks, and ranked as a top admissible candidate for CCINP."
  },
  {
  year: "2024 - 2027",
  title: "Engineering Student — Optimization, Data & Finance",
  subtitle: "IMT Atlantique, Nantes, France",
  description:
    "Pursuing a Grande École engineering degree focused on optimization, statistics, stochastic modeling, and numerical methods, with an orientation toward quantitative finance and risk analysis. I also completed online finance courses from Yale and Caltech on financial markets, derivatives, stochastic processes, and option pricing."
  },
  {
  year: "Jun. 2025 - Jul. 2025",
  title: "Financial Analyst Intern",
  subtitle: "CPSCL, Tunis, Tunisia",
  description:
    "Contributed to the financial and environmental assessment of municipal infrastructure projects, analyzing profitability, economic viability, and climate resilience. I also supported the evaluation of local authorities’ financial performance through retrospective analysis and return projections."
  },
  {
  year: "Jan. 2026 - Jun. 2026",
  title: "Exchange Semester — Finance & Data Science",
  subtitle: "Universitat Pompeu Fabra, Barcelona, Spain",
  description:
    "Selected for an academic exchange focused on finance and data science, with coursework in international finance, banking and financial institutions, financial economics, probabilistic graphical models, and deep learning."
  },
];

export default function Journey() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-sans bg-background text-white">
      <ScrollTimeline
        events={journeyEvents}
        title="My Journey"
        subtitle="Scroll down to explore my professional and academic path"
        progressIndicator={true}
        cardAlignment="alternating"
        revealAnimation="fade"
        lineColor="bg-white/20"
        activeColor="bg-pink-400"
        cardEffect="glow"
        parallaxIntensity={0.1}
        progressLineWidth={4}
        connectorStyle="line"
      />
    </section>
  );
}
