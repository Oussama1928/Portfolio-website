import DomeGallery from "@/components/ui/DomeGallery";
import FadeIn from "@/components/ui/FadeIn";
import GradientText from "@/components/ui/GradientText";

export default function AboutPage() {
  const images = [
    { src: "/images/about/1.jpeg" },
    { src: "/images/about/2.jpeg" },
    { src: "/images/about/3.jpeg" },
    { src: "/images/about/4.jpeg" },
    { src: "/images/about/5.jpeg" },
    { src: "/images/about/6.jpeg" },
    { src: "/images/about/7.jpeg" },
    { src: "/images/about/8.jpeg" },
    { src: "/images/about/9.jpeg" },
    { src: "/images/about/10.jpeg" },
    { src: "/images/about/11.jpeg" },
    { src: "/images/about/12.jpeg" },
    { src: "/images/about/13.jpeg" },
    { src: "/images/about/14.jpeg" },
    { src: "/images/about/15.jpeg" },
    { src: "/images/about/16.jpeg" },
    { src: "/images/about/17.jpeg" },
    { src: "/images/about/18.jpeg" },
    { src: "/images/about/19.jpeg" },
    { src: "/images/about/20.jpeg" },
    { src: "/images/about/21.jpeg" },
    { src: "/images/about/22.jpeg" },
];

  return (
    <section className="relative w-full min-h-screen bg-background text-white px-6 md:px-12 pt-16 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>
        </FadeIn>

        {/* Paragraph */}
        <FadeIn delay={150}>
          <p className="font-playfair text-lg md:text-xl text-center text-black/70 max-w-3xl mx-auto leading-relaxed mb-20">
            "Outside of academics, I enjoy staying active through sports, especially fitness and cheerleading, which help me build discipline, energy, and team spirit.
            I also love traveling and discovering new cultures, places, and perspectives, as it constantly pushes me to adapt, stay curious, and see problems from different angles.
            I have a particular interest in visiting museums and seeing paintings that have shaped art history.
            Logic puzzles are another passion of mine, strengthening my patience, pattern recognition, and problem-solving mindset."

            <br /><br />
        <GradientText
        className="text-xl md:text-2xl"
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        >
        The gallery below showcases moments and passions that reflect these interests.
        </GradientText>          
        </p>
        </FadeIn>
      </div>

      {/* Dome Gallery */}
      <FadeIn delay={300} className="relative w-full h-[80vh] max-w-7xl mx-auto">
        <DomeGallery
          images={images}
          fit={0.55}
          minRadius={520}
          maxVerticalRotationDeg={6}
          grayscale={false}
          overlayBlurColor="#ffffff"
        />
      </FadeIn>
    </section>
  );
}
