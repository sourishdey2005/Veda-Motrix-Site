'use client';
import Link from 'next/link';
export function HeroSection() {
  return (
    <section className="relative perspective-1000">
      <div className="@container transform-style-3d">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4 pt-20 @[480px]:gap-8 @[480px]:rounded-lg"
            data-parallax-speed="0.3"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 35, 35, 0.7) 0%, rgba(15, 35, 35, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5sDVAYsXUkqcx684tuPhDIX4DIRxLE7nWL76lVlDNC-ixFW97animeJersNFw3PyCl3OUUbBiIYqTMnfLd8G1IaMNepIDk2McJblhwVQEGAbIq76O1Lt_tkwFZHdaiCOhwSVPt2vVG4XMm7pmMLDGa2M3bBaM0OSXcvmEIPyVceilUCybb2_FH83v-3Y5n4l2bfro9QII2C0cZqINH2OU2sJLvxsGn7JZbWcA_vq5WBRBjiC6mrOXRgZ7HjpMim2JFHIATXmTiOd")`,
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="relative text-4xl font-black tracking-tighter text-white @[480px]:text-6xl text-glitch glitch-layers">
                VEDA-MOTRIX AI
                <span>VEDA-MOTRIX AI</span>
                <span>VEDA-MOTRIX AI</span>
              </h1>
              <p
                className="text-base font-normal text-white/80 @[480px]:text-lg opacity-0 animate-intro-fade-up"
                style={{ animationDelay: '0.8s' }}
              >
                Harnessing the digital nervous system of tomorrow's vehicles.
                Our AI transcends mere management, offering predictive
                sentience for unparalleled performance, security, and
                efficiency.
              </p>
            </div>
            <Link
              href="https://vedamotrix.netlify.app/login"
              className="relative group flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-110 hover:shadow-primary/50 @[480px]:h-14 @[480px]:px-6 @[480px]:text-base opacity-0 animate-intro-fade-up"
              style={{ animationDelay: '1.2s' }}
            >
              <span className="truncate">Initiate Interface</span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/30 rounded-full group-hover:animate-ripple"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
