import ColorBends from "@/components/background/ColorBends";
import RotatingText from "@/components/ui/RotatingText"; 

export default function Home() {

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-sans">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <ColorBends
          rotation={90}
          speed={0.2}
          colors={["#020617", "#0B1120", "#172554", "#1E3A8A", "#7F1D1D"]}
          transparent={false}
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.03}
          iterations={1}
          intensity={1}
          bandWidth={5}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-10 pt-32 text-white flex items-start gap-55">
        <div className="max-w-xl flex flex-col gap-4">
          <h1 className="text-6xl md:text-7xl font-bold font-playfair">
            Hi, I’m Eya
          </h1>
          <h2 className="text-2xl md:text-3xl font-playfair text-white/80">
            Engineering Student in Optimization, Data & Finance
          </h2>
        </div>

        <div className="mt-10 w-96 h-96 md:w-[28rem] md:h-[28rem] relative group">
          <img
            src="/images/MyPhoto.jpg"
            alt="Eya"
            className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-white text-center px-6 font-playfair text-lg md:text-xl">
              Hi! I’m Eya, an engineering student passionate about data-driven finance, risk analysis, and quantitative modeling.
            </p>
          </div>

            <p className="mt-2 text-center text-base italic font-playfair text-white">
              <a
                href="/pdf/Eya BEN SAID CV - Alternance.pdf"
                download="Eya BEN SAID CV - Alternance.pdf"
                className="underline transition cursor-pointer"
              >
                Download my CV
              </a>
            </p>
        </div>
      </div>

      {/* Rotating adjectives */}
    <div className="absolute bottom-40 left-4 md:left-8 lg:left-12 flex flex-wrap items-center">
    <span className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold text-white mr-2">
        I Bridge Models And
    </span>

    <RotatingText
        texts={[
        "Markets",
        "Decisions",
        "Strategy",
        "Risk",
        "Reality",
        "Data",
        ]}
        mainClassName="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold italic text-fuchsia-400"
        staggerFrom="first"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-120%", opacity: 0 }}
        staggerDuration={0.05}
        splitLevelClassName="overflow-hidden"
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        rotationInterval={2000}
        loop
        auto
    />

    <span className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold text-white ml-2">
        
    </span>
    </div>
    </section>
  );
}
