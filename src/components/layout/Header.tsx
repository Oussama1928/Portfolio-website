import { useLocation, useNavigate } from "react-router-dom";
import { DynamicNavigation } from "@/components/lightswind/dynamic-navigation";
import { GradientButton } from "@/components/lightswind/gradient-button";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeLink =
    location.pathname === "/" ? "home" : location.pathname.replace("/", "");

  const routeMap: Record<string, string> = {
    home: "/",
    journey: "/journey",
    projects: "/projects",
    skills: "/skills",
    //recommendations: "/recommendations",
    extracurriculars: "/extracurriculars",
    about: "/about",
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/80 border-b border-white/10">
        <div className="w-full h-16 px-6 flex items-center">

          {/* LEFT — Name */}
          <div className="flex items-center gap-3 mr-6">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="font-semibold tracking-wide text-white">
              Eya BEN SAID
            </span>
          </div>

          {/* CENTER — Navigation */}
          <div className="flex-1">
            <DynamicNavigation
              links={[
                { id: "home", label: "Home", href: "/" },
                { id: "journey", label: "Journey", href: "/journey" },
                { id: "projects", label: "Projects", href: "/projects" },
                { id: "skills", label: "Skills", href: "/skills" },
                //{ id: "recommendations", label: "Recommendations", href: "/recommendations" },
                { id: "extracurriculars", label: "Extracurriculars", href: "/extracurriculars" },
                { id: "about", label: "About Me", href: "/about" },
              ]}
              activeLink={activeLink}
              onLinkClick={(id) => {
                const route = routeMap[id];
                if (route) navigate(route);
              }}
              className="justify-center"
              backgroundColor="bg-transparent"
              textColor="text-white"
              highlightColor="bg-white/20"
              glowIntensity={0}
            />
          </div>

          {/* RIGHT — Buttons */}
          <div className="flex items-center gap-3 ml-6">
            <GradientButton
              size="md"
              glowEffect={false}
              gradientColors={["#d33c87ff", "#d33c87ff"]}
              variant ="ghost"
              className="bg-white text-black hover:bg-white/90"
              onClick={() => navigate("/contact")}
            >
              Contact
            </GradientButton>

          </div>

        </div>
      </div>
    </header>
  );
}
