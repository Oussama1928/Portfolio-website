import { InteractiveCard } from "@/components/lightswind/interactive-card";
import { motion } from "framer-motion";

const extracurriculars = [
  {
    title: "Finance Consulting Atlantique",
    role: "Secretary General",
    logo: "/images/logos/fca.jpg",
    color: "#1E3A8A",
    feedback:
      "As Secretary General of Finance Consulting Atlantique, I contribute to the organization and coordination of finance-oriented events, investment challenges, and corporate finance workshops. This role allows me to strengthen my interest in financial markets, consulting, and student-led project management.",
  },
  {
    title: "Atlantique Sans Frontière",
    role: "Vice-President",
    logo: "/images/logos/asf.png",
    color: "#059669",
    feedback:
      "As Vice-President of Atlantique Sans Frontière, I help lead a team of around 30 students and coordinate humanitarian initiatives, fundraising actions, and partnerships with NGOs. In one semester, we raised over €1,500 for international organizations including the Lebanese Red Cross and Street Child, exceeding our fundraising target. This experience strengthened my leadership, communication, and project coordination skills.",
  },
  {
    title: "Atlantique Squad - Cheerleading Club",
    role: "Co-Captain",
    logo: "/images/logos/cheerleading.png",
    color: "#E11D48",
    feedback:
      "As Captain of the Cheerleading Club, I lead and train a team of 20+ athletes across two campuses, coordinating practices and preparing the squad for major student competitions such as Le Cartel. This role strengthened my team leadership, discipline, organization, and ability to motivate a group toward a shared performance goal. I also had the opportunity to perform at high-profile events, including the European Paralympic Rugby Final.",
  }, 
  {
    title: "Bureau des Arts",
    role: "Disability Coordinator & Communications Team",
    logo: "/images/logos/bda2.png",
    color: "#9333EA",
    feedback:
      "Within the Bureau des Arts, I was part of a team elected through a campus-wide student election to represent and promote artistic life on campus. I contributed to the organization of artistic and cultural events while helping make them accessible and welcoming to all students. I also worked on communication materials and helped promote a more inclusive and engaging student life.",
  },    
];

export default function Recommendations() {
  return (
    <section className="relative w-full min-h-screen bg-white px-6 md:px-12 py-24">
      {/* Intro */}
      <div className="max-w-6xl mx-auto mb-28 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-gray-900 mb-6">
          Extracurricular Engagement
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 font-playfair italic max-w-3xl mx-auto">
          Beyond academics, I have been actively involved in finance,
          humanitarian, cultural, accessibility, and team leadership initiatives.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col gap-32">
        {extracurriculars.map((activity, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
              } items-center gap-16`}
            >
              {/* Card */}
              <div className="shrink-0">
                <InteractiveCard InteractiveColor={activity.color} showDownloadIcon={false}>
                  <img
                    src={activity.logo}
                    alt={`${activity.title} logo`}
                    className="w-full h-full object-cover"
                  />
                </InteractiveCard>
              </div>

              {/* Description */}
              <div className="max-w-xl">
                <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h2>

                <p className="text-sm md:text-base text-gray-500 font-sans mb-4">
                  {activity.role}
                </p>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-playfair italic tracking-wide">
                  {activity.feedback}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}