import { InteractiveCard } from "@/components/lightswind/interactive-card";
import { motion } from "framer-motion";

const recommendations = [
  {
    company: "EDF",
    logo: "/images/logos/edf.jpg",
    color: "#003A8F",
    pdf: "/pdf/BEN SLIMA - Lettre de Recommandation EDF.pdf",
    feedback:
        "My internship has been an incredibly rewarding experience, both technically and personally. On the technical side, being responsible for a major backend migration project allowed me to deepen my expertise in software architecture and modern development practices. On a personal level, I was fortunate to work with a kind and supportive team who never hesitated to mentor me and help me grow. I also found it deeply motivating to contribute to a project with such meaningful impact; improving the efficiency of the electrical grid. I am grateful for the opportunity to have evolved in such an inspiring and purposeful environment."  },
  {
    company: "Fives",
    logo: "/images/logos/fives.jpg",
    color: "#E30613",
    pdf: "/pdf/BEN SLIMA - Lettre de Recommandation Fives Stein.pdf",
    feedback:
      "I truly enjoyed my internship experience and the diverse exposure it provided. I had the opportunity to learn across several different domains, contributing to projects ranging from frontend and backend development to cybersecurity. Beyond the technical work, I loved the office environment. The team spirit was fantastic, and I especially enjoyed the Babyfoot games and the afterworks. It was a pleasure to work in such a dynamic and welcoming atmosphere.",
  },
];

export default function Recommendations() {
  return (
    <section className="relative w-full min-h-screen bg-white px-6 md:px-12 py-24">
      
      {/* Intro */}
      <div className="max-w-6xl mx-auto mb-28 text-center">
        <p className="text-xl md:text-2xl text-gray-700 font-playfair italic max-w-3xl mx-auto">
          Letters of recommendation from my professional experiences, along with
          personal feedback on each one of them.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col gap-32">
        {recommendations.map((rec, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.div
              key={rec.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
              } items-center gap-16`}
            >
              {/* Card */}
              <a href={rec.pdf} download className="shrink-0">
                <InteractiveCard InteractiveColor={rec.color} showDownloadIcon={true}>
                  <img
                    src={rec.logo}
                    alt={`${rec.company} logo`}
                    className="max-h-24 object-contain"
                  />
                </InteractiveCard>
              </a>

              {/* Feedback */}
              <div className="max-w-xl">
                <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
                  {rec.company}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-playfair italic tracking-wide">
                  {rec.feedback}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
