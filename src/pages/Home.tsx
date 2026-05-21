import FloatingLines from "@/components/background/FloatingLines";
import RotatingText from "@/components/ui/RotatingText"; 

export default function Home() {

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-sans">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={['#E947F5', '#2F4BA2']}
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
            src="/images/MyPhoto.JPG"
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
        "Business",
        "Data",
        ]}
        mainClassName="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold italic text-pink-400"
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
