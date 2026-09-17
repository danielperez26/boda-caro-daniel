import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Church,
  PartyPopper,
  Clock,
  Heart,
  CalendarHeart,
  Wine,
  UtensilsCrossed,
  Music,
  Moon,
  Shirt,
  Volume2,
  VolumeX,
} from "lucide-react";

import oliveBranch from "../assets/olive-branch.png";
import { GUESTS_DATABASE } from "../data/guests";
import foto1 from "../assets/caro-daniel-1.jpeg";
import foto2 from "../assets/caro-daniel-2.jpeg";
import foto3 from "../assets/caro-daniel-3.jpeg";
import foto4 from "../assets/caro-daniel-4.jpeg";
import foto5 from "../assets/caro-daniel-5.jpeg";

const WEDDING_DATE = new Date("2027-04-16T17:00:00");

const head = () => ({
  meta: [
    { title: "Carolina & Daniel | Invitación de Boda" },
    {
      name: "description",
      content:
        "Nos encantaría celebrar nuestra boda contigo. Confirma tu asistencia y descubre todos los detalles del gran día.",
    },
    { property: "og:title", content: "Carolina & Daniel | Invitación de Boda" },
    {
      property: "og:description",
      content:
        "Nos encantaría celebrar nuestra boda contigo. Confirma tu asistencia y descubre todos los detalles del gran día.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

export const Route = createFileRoute("/")({
  head,
  validateSearch: (search: Record<string, unknown>): { inv?: string } => {
    const inv = typeof search["inv"] === "string" ? search["inv"] : undefined;
    return inv ? { inv } : {};
  },
  component: Index,
});

function Index() {
  const { inv } = Route.useSearch();
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentGuest = inv ? GUESTS_DATABASE[inv] : undefined;

  // Manejo de la reproducción de audio al abrir la invitación
  const handleOpenInvitation = () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Volumen ambiente agradable
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Autoplay bloqueado por el navegador:", e));
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Error al reproducir audio:", e));
    }
  };

  if (!currentGuest) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-medium mb-4">Acceso no válido</h1>
        <p className="text-muted-foreground max-w-md mb-6">
          Lo sentimos, para ver esta invitación necesitas un enlace personalizado válido. Por favor, revisa el enlace que te compartimos por WhatsApp.
        </p>
      </main>
    );
  }

  return (
    <>
      {/* Elemento de audio de fondo (puedes cambiar la ruta por tu archivo mp3) */}
      <audio ref={audioRef} loop src="/audio/wedding-song.mp3" preload="auto" />

      {!opened && (
        <EnvelopeGate guests={currentGuest.seats} guestName={currentGuest.name} onOpen={handleOpenInvitation} />
      )}

      <main
        className={`min-h-screen overflow-x-hidden bg-background text-foreground ${
          opened ? "" : "pointer-events-none h-screen overflow-hidden"
        }`}
        aria-hidden={!opened}
      >
        <Hero />                 {/* 1. Vinotinto */}
        <CountdownSection />     {/* 2. Blanco */}
        <StorySection />         {/* 3. Vinotinto (Incluye carrusel y salto de línea) */}
        <LocationsSection />     {/* 4. Blanco */}
        <ItinerarySection />     {/* 5. Vinotinto */}
        <DressCodeSection />     {/* 6. Blanco */}
        <RegistrySection />      {/* 7. Vinotinto */}
        <RSVPSection guestName={currentGuest.name} seats={currentGuest.seats} /> {/* 8. Blanco */}
        <Footer />               {/* 9. Vinotinto */}

        {/* Botón flotante de música que acompaña el scroll */}
        {opened && (
          <FloatingMusicButton isPlaying={isPlaying} onToggle={toggleMusic} />
        )}
      </main>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  BOTÓN FLOTANTE DE MÚSICA CON ANIMACIÓN DE SCROLL                          */
/* -------------------------------------------------------------------------- */

function FloatingMusicButton({ isPlaying, onToggle }: { isPlaying: boolean; onToggle: () => void }) {
  const [scrolling, setScrolling] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setScrolling(false);
      }, 300); // Vuelve a su posición normal al detener el scroll un instante
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ease-in-out ${
        scrolling ? "translate-y-2 scale-95 opacity-80" : "translate-y-0 scale-100 opacity-100"
      }`}
    >
      <button
        onClick={onToggle}
        aria-label={isPlaying ? "Silenciar música" : "Reproducir música"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#5B1E22] text-white shadow-xl border border-white/20 transition-all hover:scale-110 active:scale-95 cursor-pointer"
        style={{
          boxShadow: "0 10px 25px rgba(91,30,34,0.4)"
        }}
      >
        {isPlaying ? (
          <Volume2 className="h-6 w-6 animate-pulse text-white" />
        ) : (
          <VolumeX className="h-6 w-6 text-white/60" />
        )}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className={`absolute inline-flex h-full w-full rounded-full bg-white opacity-75 ${isPlaying ? "animate-ping" : ""}`} />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  ENVELOPE GATE                                                             */
/* -------------------------------------------------------------------------- */

type EnvelopePhase = "closed" | "flap" | "card" | "out";

function EnvelopeGate({
  guests,
  guestName,
  onOpen,
}: {
  guests: number;
  guestName?: string | undefined;
  onOpen: () => void;
}) {
  const [phase, setPhase] = useState<EnvelopePhase>("closed");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  const handleOpen = () => {
    if (phase !== "closed") return;
    setPhase("flap");
    timers.current.push(
      setTimeout(() => setPhase("card"), 1000),
      setTimeout(() => setPhase("out"), 9500),
      setTimeout(onOpen, 6500),
    );
  };

  const flapOpen = phase !== "closed";
  const cardUp = phase === "card" || phase === "out";

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 px-6 backdrop-blur-sm transition-opacity duration-1000 ease-out ${
        phase === "out" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-full max-w-lg [perspective:1400px]">
        <div
          className={`absolute inset-x-6 top-2 z-10 rounded-2xl border border-[#5B1E22]/20 bg-[#FAF7F2] px-8 py-10 text-center shadow-2xl transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            cardUp ? "-translate-y-[58%] opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#5B1E22]">
            Estás invitado
          </p>
          <p className="mt-3 font-display text-3xl font-medium text-foreground md:text-4xl">
            {guestName ? `¡Hola, ${guestName}!` : "¡Estás invitado!"}
          </p>
          <div className="mx-auto my-4 h-px w-16 bg-[#5B1E22]/30" />
          <p className="text-sm text-muted-foreground md:text-base">
            Esta invitación es válida para{" "}
            <span className="font-semibold text-foreground">
              {guests} {guests === 1 ? "invitado" : "invitados"}
            </span>
          </p>
        </div>

        <div className="relative aspect-[16/11] w-full rounded-b-2xl bg-[#D4C8B4] shadow-[0_25px_60px_rgba(91,30,34,0.2)] overflow-hidden border border-[#BFAFA0]">
          <div 
            className="absolute inset-y-0 left-0 w-1/2 bg-[#CBBFAD] border-r border-[#B3A494]"
            style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
          />
          <div 
            className="absolute inset-y-0 right-0 w-1/2 bg-[#C3B7A5] border-l border-[#AB9C8C]"
            style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
          />
          <div 
            className="absolute inset-x-0 bottom-0 h-[60%] bg-[#DCD0BC] border-t border-[#B9AA9A] shadow-inner"
            style={{ clipPath: "polygon(0 100%, 50% 15%, 100% 100%)" }}
          />
          <div
            className={`absolute inset-x-0 top-0 z-30 h-[58%] origin-top transition-transform duration-[1000ms] ease-[cubic-bezier(0.65,0,0.35,1)] [backface-visibility:hidden] [transform-style:preserve-3d] ${
              flapOpen ? "[transform:rotateX(-180deg)]" : "[transform:rotateX(0deg)]"
            }`}
          >
            <div
              className="absolute inset-0 bg-[#E5DCC9] border-b border-[#C4B5A5] shadow-md"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            />
          </div>

          <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
            <button
              type="button"
              onClick={handleOpen}
              aria-label="Abrir invitación"
              className={`group relative flex h-24 w-24 items-center justify-center text-white border border-[#481316] transition-all duration-300 pointer-events-auto hover:scale-110 active:scale-95 cursor-pointer ${
                flapOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              style={{
                backgroundColor: "#6A2226",
                backgroundImage: "radial-gradient(circle at 35% 35%, #822C31 0%, #5B1E22 65%, #421316 100%)",
                borderRadius: "42% 58% 50% 50% / 48% 42% 58% 52%",
                boxShadow: "0 12px 30px rgba(50,15,18,0.5), inset 0 3px 6px rgba(255,255,255,0.3), inset 0 -5px 10px rgba(35,10,12,0.6)"
              }}
            >
              <div 
                className="absolute inset-2.5 flex items-center justify-center border border-white/15 transition-transform duration-300 group-hover:scale-105"
                style={{
                  borderRadius: "45% 55% 48% 52% / 50% 45% 55% 50%"
                }}
              >
                <span 
                  className="font-serif italic text-2xl font-normal tracking-wider text-[#F7EFE5] whitespace-nowrap select-none"
                  style={{
                    textShadow: "0 1px 1px rgba(255,255,255,0.4), 0 -1px 1px rgba(0,0,0,0.8)",
                    fontFamily: "Georgia, Cambria, 'Times New Roman', serif"
                  }}
                >
                  C &amp; D
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  1. HERO (Vinotinto)                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section 
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center overflow-hidden text-white"
      style={{
        backgroundColor: "#5B1E22",
        backgroundImage: `linear-gradient(to bottom, rgba(91, 30, 34, 0.82), rgba(91, 30, 34, 0.90)), url(${foto1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="animate-fade-in absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
      </div>

      <img
        src={oliveBranch}
        alt="Rama de olivo decorativa"
        width={320}
        height={160}
        className="animate-fade-in mb-6 w-48 brightness-0 invert opacity-80 md:w-64"
      />

      <p className="animate-fade-in-up mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/80 animation-delay-100">
        Nos casamos
      </p>

      <h1 className="animate-fade-in-up font-display text-5xl font-medium leading-[1.1] text-white md:text-7xl lg:text-8xl animation-delay-200">
        Carolina
        <span className="mx-3 align-middle font-serif italic text-3xl font-normal text-white/80 md:text-5xl" style={{ fontFamily: "Georgia, Cambria, 'Times New Roman', serif" }}>&</span>
        Daniel
      </h1>

      <div className="animate-fade-in-up animation-delay-300">
        <div className="mx-auto my-8 h-px w-24 bg-white/30 animate-draw-line" />
      </div>

      <p className="animate-fade-in-up max-w-md text-lg leading-relaxed text-white/90 animation-delay-400">
        Con mucha ilusión, te invitamos a ser parte del día en que comenzamos nuestra historia como recién casados
      </p>

      <div className="animate-fade-in-up mt-10 flex flex-col items-center gap-2 animation-delay-500">
        <time
          className="font-display text-2xl font-medium text-white md:text-3xl"
          dateTime="2027-04-16"
        >
          16 de abril de 2027
        </time>
        <span className="text-sm font-light uppercase tracking-widest text-white/80">
          Madrid, España
        </span>
      </div>

      <div className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 animation-delay-700">
        <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. COUNTDOWN (Blanco)                                                    */
/* -------------------------------------------------------------------------- */

function CountdownSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.25 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={ref} className="relative bg-background px-6 py-28 text-center overflow-hidden">
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Cuenta atrás
        </p>
        <h2 className="font-display text-3xl font-medium md:text-4xl text-foreground">El gran día está cerca</h2>
        <div className="mx-auto my-6 h-px w-16 bg-primary/40" />
      </div>
      {mounted ? (
        <Countdown target={WEDDING_DATE} visible={isVisible} />
      ) : (
        <CountdownPlaceholder visible={isVisible} />
      )}
    </section>
  );
}

function Countdown({ target, visible }: { target: Date; visible: boolean }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(0, target.getTime() - now.getTime());
  const units = [
    { label: "Días", value: Math.floor(diff / (1000 * 60 * 60 * 24)) },
    { label: "Horas", value: Math.floor((diff / (1000 * 60 * 60)) % 24) },
    { label: "Minutos", value: Math.floor((diff / (1000 * 60)) % 60) },
    { label: "Segundos", value: Math.floor((diff / 1000) % 60) },
  ];

  return (
    <div
      className={`mx-auto grid max-w-3xl grid-cols-2 gap-4 transition-all delay-200 duration-1000 ease-out md:grid-cols-4 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className="group flex flex-col items-center rounded-2xl border border-primary/20 bg-[#D4C5B9] p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <span className="font-display text-4xl font-medium text-primary transition-transform duration-500 group-hover:scale-110 md:text-5xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function CountdownPlaceholder({ visible }: { visible: boolean }) {
  return (
    <div
      className={`mx-auto grid max-w-3xl grid-cols-2 gap-4 transition-all delay-200 duration-1000 ease-out md:grid-cols-4 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {["Días", "Horas", "Minutos", "Segundos"].map((label) => (
        <div
          key={label}
          className="flex flex-col items-center rounded-2xl border border-primary/20 bg-[#D4C5B9] p-6 shadow-sm"
        >
          <span className="font-display text-4xl font-medium text-primary md:text-5xl">--</span>
          <span className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. STORY & PHOTOS (Vinotinto) - 2 fotos estáticas y texto renovado        */
/* -------------------------------------------------------------------------- */

function StorySection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.25 });

  return (
    <section ref={ref} className="relative bg-[#5B1E22] px-6 py-28 text-center overflow-hidden text-white">
      <div
        className={`mx-auto max-w-3xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Heart className="mx-auto mb-6 h-8 w-8 animate-float text-white/80" strokeWidth={1.5} />
        <h2 className="font-display text-3xl font-medium md:text-4xl text-white">Un día, una promesa</h2>
        <div className="mx-auto my-6 h-px w-16 bg-white/30" />
        
        <p className="mt-6 leading-relaxed text-white/90 text-lg mb-12">
          Después de años de risas, aventuras y momentos inolvidables, decidimos dar el siguiente
          paso juntos. Queremos compartir este día tan especial con las personas que hacen nuestra
          vida más feliz.
          <br />
          Hoy miramos atrás con gratitud y hacia adelante con la ilusión de construir un futuro infinito de la mano.
        </p>

        {/* Dos fotos estáticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl shadow-xl bg-black/20 border border-white/20 aspect-[4/5]">
            <img
              src={foto3}
              alt="Carolina y Daniel"
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl bg-black/20 border border-white/20 aspect-[4/5]">
            <img
              src={foto5}
              alt="Carolina y Daniel"
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  4. LOCATIONS (Blanco)                                                    */
/* -------------------------------------------------------------------------- */

const LOCATIONS = [
  {
    icon: Church,
    type: "Ceremonia",
    name: "Parroquia Nuestra Señora del Pilar",
    address: "Juan Bravo, 40, 28006 Madrid",
    time: "17:00",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Parroquia+Nuestra+Señora+del+Pilar+Juan+Bravo+40+Madrid",
  },
  {
    icon: PartyPopper,
    type: "Celebración",
    name: "Casa de Burgos",
    address: "C. Principal de Provincias, 3, 28011 Madrid",
    time: "19:00",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=C.+Principal+de+Provincias+3+Moncloa+Aravaca+28011+Madrid",
  },
];

function LocationsSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.15 });

  return (
    <section ref={ref} className="relative bg-background px-6 py-28 overflow-hidden text-foreground">
      <div className="mx-auto max-w-5xl">
        <div
          className={`mb-14 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <MapPin className="mx-auto mb-4 h-8 w-8 text-primary" strokeWidth={1.5} />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Localización
          </p>
          <h2 className="font-display text-3xl font-medium md:text-4xl text-foreground">¿Dónde nos vemos?</h2>
          <div className="mx-auto my-6 h-px w-16 bg-primary/40" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {LOCATIONS.map((location, index) => (
            <LocationCard
              key={location.name}
              location={location}
              index={index}
              visible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({
  location,
  index,
  visible,
}: {
  location: (typeof LOCATIONS)[number];
  index: number;
  visible: boolean;
}) {
  const Icon = location.icon;

  return (
    <div
      className={`flex flex-col rounded-2xl border border-primary/20 bg-[#D4C5B9] p-8 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: visible ? `${(index + 1) * 150}ms` : "0ms" }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>

      <span className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {location.type}
      </span>
      <h3 className="font-display text-2xl font-medium text-foreground">{location.name}</h3>

      <div className="mt-4 space-y-2 text-muted-foreground">
        <div className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{location.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0 text-primary" />
          <span>{location.time}</span>
        </div>
      </div>

      <a
        href={location.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
      >
        <MapPin className="h-4 w-4" />
        Cómo llegar
      </a>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  5. ITINERARY (Vinotinto)                                                 */
/* -------------------------------------------------------------------------- */

const ITINERARY = [
  { time: "17:00", title: "Ceremonia", icon: Church },
  { time: "19:00", title: "Cóctel", icon: Wine },
  { time: "20:15-20:30", title: "Banquete", icon: UtensilsCrossed },
  { time: "23:00", title: "Fiesta", icon: Music },
  { time: "03:00", title: "Fin fiesta", icon: Moon },
];

function ItinerarySection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.15 });

  return (
    <section ref={ref} className="relative bg-[#5B1E22] px-6 py-28 text-center overflow-hidden text-white">
      <div
        className={`mx-auto max-w-4xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Clock className="mx-auto mb-6 h-8 w-8 text-white/80" strokeWidth={1.5} />
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
          Itinerario
        </p>
        <h2 className="font-display text-3xl font-medium md:text-4xl text-white">Un día para recordar</h2>
        <div className="mx-auto my-6 h-px w-16 bg-white/30" />
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {ITINERARY.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <span className="font-display text-3xl font-medium text-white">{item.time}</span>
              <span className="mt-2 text-sm font-medium uppercase tracking-widest text-white/80">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  6. DRESS CODE (Blanco)                                                   */
/* -------------------------------------------------------------------------- */

import vestidoImg from "../assets/vestido.png";
import trajeImg from "../assets/traje.png";

const FORBIDDEN_COLORS = [
  { name: "Blanco", className: "bg-[oklch(0.99_0_0)]" },
  { name: "Azul", className: "bg-[#6B9AC4]" },
  { name: "Beige", className: "bg-[#e1d0c0]" },
];

export function DressCodeSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-background px-6 py-28 text-center overflow-hidden text-foreground">
      <div
        className={`mx-auto max-w-4xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Shirt className="mx-auto mb-6 h-8 w-8 animate-pulse text-primary" strokeWidth={1.5} />
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Vestimenta
        </p>
        <h2 className="font-display text-3xl font-medium md:text-4xl text-foreground">Código de Vestimenta</h2>
        <div className="mx-auto mb-16 mt-6 h-px w-16 bg-primary/40" />

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="flex flex-col items-center rounded-2xl border border-primary/20 bg-[#D4C5B9] p-8 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
            <div className="mb-6 h-36 flex items-center justify-center">
              <img
                src={vestidoImg}
                alt="Vestido largo"
                className="h-full w-auto object-contain text-primary"
              />
            </div>
            <h3 className="font-display text-2xl font-medium mb-3 text-foreground">Ellas</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground text-base">Vestido largo</p>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-primary/20 bg-[#D4C5B9] p-8 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
            <div className="mb-6 h-36 flex items-center justify-center">
              <img
                src={trajeImg}
                alt="Traje"
                className="h-full w-auto object-contain text-primary"
              />
            </div>
            <h3 className="font-display text-2xl font-medium mb-3 text-foreground">Ellos</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground text-base">Traje</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/20 bg-[#D4C5B9] p-8 shadow-sm">
          <p className="text-sm font-medium text-foreground mb-3">
            Te pedimos con cariño que evites los siguientes colores reservados para la novia:
          </p>
          <p className="text-xs text-muted-foreground mb-8 italic">
            * El azul está permitido siempre y cuando no sea unicolor.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {FORBIDDEN_COLORS.map((color, index) => (
              <div
                key={color.name}
                className={`flex flex-col items-center transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/30 bg-white shadow-sm">
                  <div className={`h-full w-full ${color.className}`} />
                  <div className="absolute left-1/2 top-1/2 h-px w-[130%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-destructive/80" />
                </div>
                <span className="mt-2 text-sm font-medium text-foreground">{color.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  7. REGISTRY / GIFTS (Vinotinto)                                          */
/* -------------------------------------------------------------------------- */

function RegistrySection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.15 });

  return (
    <section ref={ref} className="relative bg-[#5B1E22] px-6 py-28 text-center overflow-hidden text-white">
      <div
        className={`mx-auto max-w-2xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Heart className="mx-auto mb-4 h-7 w-7 text-white/90" strokeWidth={1.5} />
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
          Regalos
        </p>
        <h2 className="font-display text-3xl font-medium md:text-4xl text-white">Nuestro futuro juntos</h2>
        <div className="mx-auto my-6 h-px w-16 bg-white/30" />

        <div className="mx-auto max-w-xl space-y-4 text-white/90">
          <p className="font-display text-xl md:text-2xl text-white leading-relaxed">
            Celebrar este día contigo ya es un regalo.
          </p>
          <p className="text-base leading-relaxed text-white/80">
            Si además quieres obsequiarnos algo agradeceríamos que cualquier contribución sea en efectivo.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  8. RSVP (Blanco)                                                         */
/* -------------------------------------------------------------------------- */

function RSVPSection({ guestName, seats }: { guestName: string; seats: number }) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.15 });
  const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLScUqWIZvrLVh0uOpVg32ZZKYtiWqJpPRTWGZ9KFZbLxQlgQNA/viewform?usp=pp_url&entry.1498135098=${encodeURIComponent(guestName)}`;

  return (
    <section ref={ref} className="relative bg-background px-6 py-28 overflow-hidden text-foreground">
      <div className="mx-auto max-w-2xl">
        <div
          className={`mb-12 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CalendarHeart className="mx-auto mb-4 h-8 w-8 text-primary" strokeWidth={1.5} />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Confirmación
          </p>
          <h2 className="font-display text-3xl font-medium md:text-4xl text-foreground">Confirma tu asistencia</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Por favor, confirma tu asistencia antes del 01 de marzo de 2027 rellenando nuestro formulario.
          </p>
          <div className="mx-auto my-6 h-px w-16 bg-primary/40" />
        </div>

        <div
          className={`rounded-2xl border border-primary/20 bg-[#D4C5B9] backdrop-blur-sm p-8 text-center shadow-md transition-all duration-1000 delay-200 ease-out md:p-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-6 py-4">
            <div className="rounded-xl border border-primary/20 bg-background/50 p-5 shadow-sm">
              <p className="font-display text-xl font-medium text-foreground">
                {guestName}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Invitación válida para{" "}
                <span className="font-semibold text-foreground">
                  {seats} {seats === 1 ? "persona" : "personas"}
                </span>
              </p>
            </div>

            <p className="text-muted-foreground text-sm">
              Haz clic en el botón de abajo para acceder al formulario de confirmación e indicar vuestra asistencia. ¡Os esperamos!
            </p>
            
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-4 text-base font-medium text-white transition-all hover:bg-primary/90 md:w-auto md:min-w-[280px]"
            >
              Rellenar formulario de asistencia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  9. FOOTER (Vinotinto)                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[#5B1E22] px-6 py-16 text-center text-white">
      <Heart className="mx-auto mb-4 h-5 w-5 animate-pulse text-white/80" strokeWidth={1.5} />
      <p className="font-display text-2xl font-medium text-white">Carolina &amp; Daniel</p>
      <p className="mt-2 text-sm text-white/80">16 de abril de 2027 · Madrid, España</p>
      <p className="mt-8 text-xs text-white/60">Invitación creada con cariño para ti.</p>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  UTILS                                                                     */
/* -------------------------------------------------------------------------- */

type UseInViewOptions = IntersectionObserverInit & { once?: boolean };

function useInView<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  options?: UseInViewOptions,
) {
  const { once, ...observerOptions } = options ?? {};
  const observerOptionsRef = useRef(observerOptions);
  observerOptionsRef.current = observerOptions;

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsIntersecting(true);
        if (once) observer.disconnect();
      }
    }, observerOptionsRef.current);

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, once]);

  return isIntersecting;
}