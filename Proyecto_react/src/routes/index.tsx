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
} from "lucide-react";

import oliveBranch from "../assets/olive-branch.png";
import { GUESTS_DATABASE, DEFAULT_GUEST } from "../data/guests";

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

  const currentGuest = inv ? GUESTS_DATABASE[inv] : undefined;

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
      {!opened && (
        <EnvelopeGate guests={currentGuest.seats} guestName={currentGuest.name} onOpen={() => setOpened(true)} />
      )}
      <main
        className={`min-h-screen overflow-x-hidden bg-background text-foreground ${
          opened ? "" : "pointer-events-none h-screen overflow-hidden"
        }`}
        aria-hidden={!opened}
      >
        <Hero />
        <CountdownSection />
        <StorySection />
        <LocationsSection />
        <ItinerarySection />
        <DressCodeSection />
        <RegistrySection />
        <RSVPSection guestName={currentGuest.name} seats={currentGuest.seats} />
        <Footer />
      </main>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  ORNAMENTAL CORNER COMPONENT (Más grandes y con puntos animados)          */
/* -------------------------------------------------------------------------- */

function FloralCorners() {
  return (
    <>
      {/* Esquina Superior Izquierda */}
      <div className="absolute top-4 left-4 w-32 h-32 pointer-events-none text-primary/60">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M8,8 Q55,8 80,60" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12,20 Q45,20 60,55" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <path d="M22,14 C32,8 38,18 30,26 Z" opacity="0.85" />
          <path d="M42,10 C52,6 58,16 50,24 Z" opacity="0.85" />
          <path d="M14,35 C22,27 30,34 22,44 Z" opacity="0.85" />
          <circle cx="6" cy="6" r="3" className="animate-ping text-amber-500/70" fill="currentColor" />
          <circle cx="32" cy="6" r="2" className="animate-pulse text-amber-500/90" fill="currentColor" />
          <circle cx="10" cy="30" r="2.2" className="animate-bounce text-amber-500/80" fill="currentColor" />
        </svg>
      </div>

      {/* Esquina Superior Derecha */}
      <div className="absolute top-4 right-4 w-32 h-32 pointer-events-none text-primary/60 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M8,8 Q55,8 80,60" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12,20 Q45,20 60,55" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <path d="M22,14 C32,8 38,18 30,26 Z" opacity="0.85" />
          <path d="M42,10 C52,6 58,16 50,24 Z" opacity="0.85" />
          <path d="M14,35 C22,27 30,34 22,44 Z" opacity="0.85" />
          <circle cx="8" cy="8" r="2.5" className="animate-pulse text-amber-500/90" fill="currentColor" />
          <circle cx="35" cy="15" r="2" className="animate-bounce text-amber-500/80" fill="currentColor" />
        </svg>
      </div>

      {/* Esquina Inferior Izquierda */}
      <div className="absolute bottom-4 left-4 w-32 h-32 pointer-events-none text-primary/60 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M8,8 Q55,8 80,60" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12,20 Q45,20 60,55" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <path d="M22,14 C32,8 38,18 30,26 Z" opacity="0.85" />
          <path d="M42,10 C52,6 58,16 50,24 Z" opacity="0.85" />
          <circle cx="15" cy="8" r="2.2" className="animate-bounce text-amber-500/80" fill="currentColor" />
          <circle cx="28" cy="28" r="2" className="animate-pulse text-amber-500/90" fill="currentColor" />
        </svg>
      </div>

      {/* Esquina Inferior Derecha */}
      <div className="absolute bottom-4 right-4 w-32 h-32 pointer-events-none text-primary/60 transform scale-[-1]">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M8,8 Q55,8 80,60" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12,20 Q45,20 60,55" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <path d="M22,14 C32,8 38,18 30,26 Z" opacity="0.85" />
          <path d="M42,10 C52,6 58,16 50,24 Z" opacity="0.85" />
          <circle cx="6" cy="6" r="3" className="animate-ping text-amber-500/70" fill="currentColor" />
          <circle cx="22" cy="22" r="2.2" className="animate-pulse text-amber-500/90" fill="currentColor" />
        </svg>
      </div>
    </>
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
      setTimeout(() => setPhase("card"), 1100),
      setTimeout(() => setPhase("out"), 7000),
      setTimeout(onOpen, 4000),
    );
  };

  const flapOpen = phase !== "closed";
  const cardUp = phase === "card" || phase === "out";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background px-6 transition-opacity duration-700 ease-out ${
        phase === "out" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Abrir la invitación"
        className="group relative w-full max-w-sm animate-scale-in text-left outline-none [perspective:1400px]"
      >
        {/* Tarjeta que sale del sobre */}
        <div
          className={`absolute inset-x-6 bottom-10 z-10 rounded-xl border border-primary/20 bg-card px-6 py-8 text-center shadow-lg transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            cardUp ? "-translate-y-[62%] opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Estás invitado
          </p>
          <p className="mt-4 font-display text-3xl font-medium text-foreground">
            {guestName ? `¡Hola, ${guestName}!` : "¡Estás invitado!"}
          </p>
          <div className="mx-auto my-5 h-px w-16 bg-primary/40" />
          <p className="text-sm text-muted-foreground">
            Esta invitación es válida para{" "}
            <span className="font-medium text-foreground">
              {guests} {guests === 1 ? "invitado" : "invitados"}
            </span>
          </p>
        </div>

        {/* Cuerpo del sobre */}
        <div className="relative aspect-[4/3] w-full [transform-style:preserve-3d]">
          <div className="absolute inset-0 rounded-xl border border-primary/20 bg-secondary/70 shadow-sm" />
          <div className="absolute inset-x-0 bottom-0 z-20 h-[62%] overflow-hidden rounded-b-xl border-x border-b border-primary/20 bg-secondary shadow-sm">
            <div className="absolute -top-[60%] left-1/2 h-[120%] w-[80%] -translate-x-1/2 rotate-45 border-b border-primary/10 bg-secondary/80" />
          </div>

          <div
            className={`absolute inset-x-0 top-0 z-30 h-[52%] origin-top transition-transform duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)] [backface-visibility:hidden] [transform-style:preserve-3d] ${
              flapOpen ? "[transform:rotateX(-172deg)]" : "[transform:rotateX(0deg)]"
            }`}
          >
            <div
              className="h-full w-full rounded-t-xl border border-primary/20 bg-secondary/90"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            />
            <div
              className={`absolute left-1/2 top-[62%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10 shadow-sm transition-opacity duration-300 ${
                flapOpen ? "opacity-0" : "animate-float opacity-100"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30">
                <span className="font-display text-xl font-medium tracking-tight text-primary">
                  C&nbsp;&amp;&nbsp;D
                </span>
              </div>
            </div>
          </div>
        </div>

        <span
          className={`mt-8 flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-500 group-hover:bg-primary/90 ${
            flapOpen ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          Abrir invitación
        </span>
      </button>
    </div>
  );
}


/* -------------------------------------------------------------------------- */
/*  DRESS CODE                                                                */
/* -------------------------------------------------------------------------- */

// Importa tus imágenes desde la carpeta src/assets/
import vestidoImg from "../assets/vestido.png";
import trajeImg from "../assets/traje.png";

const FORBIDDEN_COLORS = [
  { name: "Blanco", className: "bg-[oklch(0.99_0_0)]" },
  { name: "Azul", className: "bg-primary" },
  // Beige ajustado a un tono más intenso y tostado
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
    <section ref={ref} className="relative bg-secondary/50 px-6 py-28 text-center overflow-hidden border-y border-primary/10">
      <div
        className={`mx-auto max-w-4xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Shirt className="mx-auto mb-6 h-8 w-8 animate-pulse text-primary/80" strokeWidth={1.5} />
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Vestimenta
        </p>
        <h2 className="font-display text-3xl font-medium md:text-4xl">Código de Vestimenta</h2>
        <div className="mx-auto mb-16 mt-6 h-px w-16 bg-primary/40" />

        {/* Tarjetas simétricas */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Tarjeta Ellas */}
          <div className="flex flex-col items-center rounded-2xl border border-primary/15 bg-background/80 p-8 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]">
            <div className="mb-6 h-36 flex items-center justify-center">
              <img
                src={vestidoImg}
                alt="Vestido largo"
                className="h-full w-auto object-contain brightness-0 opacity-85"
              />
            </div>
            <h3 className="font-display text-2xl font-medium mb-3 text-foreground">Ellas</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground text-base">Vestido largo</p>
              <p>Tacones cómodos (lo agradecerás para disfrutar y bailar al máximo)</p>
            </div>
          </div>

          {/* Tarjeta Ellos */}
          <div className="flex flex-col items-center rounded-2xl border border-primary/15 bg-background/80 p-8 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]">
            <div className="mb-6 h-36 flex items-center justify-center">
              <img
                src={trajeImg}
                alt="Traje"
                className="h-full w-auto object-contain brightness-0 opacity-85"
              />
            </div>
            <h3 className="font-display text-2xl font-medium mb-3 text-foreground">Ellos</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground text-base">Traje</p>
              <p>Corbata opcional</p>
            </div>
          </div>
        </div>

        {/* Colores reservados y nota de excepciones */}
        <div className="rounded-2xl border border-primary/10 bg-background/40 p-8">
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
                {/* Añadido bg-white y un borde sutil para que los tonos claros resalten sobre cualquier fondo */}
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20 bg-white shadow-sm">
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
/*  REGISTRY / GIFTS (Actualizado con el mensaje en efectivo)                */
/* -------------------------------------------------------------------------- */

function RegistrySection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.15 });

  return (
    <section ref={ref} className="relative bg-background px-6 py-28 text-center overflow-hidden">
      <FloralCorners />
      <div
        className={`mx-auto max-w-2xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-primary text-2xl mb-4 block">💙</span>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Regalos
        </p>
        <h2 className="font-display text-3xl font-medium md:text-4xl">Nuestro futuro juntos</h2>
        <div className="mx-auto my-6 h-px w-16 bg-primary/40" />

        <div className="mx-auto max-w-xl space-y-4 mb-6 text-muted-foreground">
          <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
            Celebrar este día contigo ya es un regalo.
          </p>
          <p className="text-base leading-relaxed">
            Si además quieres obsequiarnos algo agradeceríamos que cualquier contribución sea en efectivo.
          </p>
        </div>

        <span className="text-primary text-xl mt-8 block">✨</span>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      <FloralCorners />
      <div className="animate-fade-in absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <img
        src={oliveBranch}
        alt="Rama de olivo decorativa"
        width={320}
        height={160}
        className="animate-fade-in mb-6 w-48 opacity-80 md:w-64"
      />

      <p className="animate-fade-in-up mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary animation-delay-100">
        Nos casamos
      </p>

      <h1 className="animate-fade-in-up font-display text-5xl font-medium leading-[1.1] text-foreground md:text-7xl lg:text-8xl animation-delay-200">
        Carolina
        <span className="mx-3 align-middle text-3xl text-primary md:text-5xl">&</span>
        Daniel
      </h1>

      <div className="animate-fade-in-up animation-delay-300">
        <div className="mx-auto my-8 h-px w-24 bg-primary/40 animate-draw-line" />
      </div>

      <p className="animate-fade-in-up max-w-md text-lg leading-relaxed text-muted-foreground animation-delay-400">
        Con mucha ilusión, te invitamos a ser parte del día en que comenzamos nuestra historia como
        marido y mujer.
      </p>

      <div className="animate-fade-in-up mt-10 flex flex-col items-center gap-2 animation-delay-500">
        <time
          className="font-display text-2xl font-medium text-foreground md:text-3xl"
          dateTime="2027-04-16"
        >
          16 de abril de 2027
        </time>
        <span className="text-sm font-light uppercase tracking-widest text-muted-foreground">
          Madrid, España
        </span>
      </div>

      <div className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 animation-delay-700">
        <div className="h-12 w-px bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  COUNTDOWN                                                                 */
/* -------------------------------------------------------------------------- */

function CountdownSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.25 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={ref} className="relative bg-secondary/40 px-6 py-28 text-center overflow-hidden border-y border-primary/10">
      <FloralCorners />
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Cuenta atrás
        </p>
        <h2 className="font-display text-3xl font-medium md:text-4xl">El gran día está cerca</h2>
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
          className="group flex flex-col items-center rounded-2xl border border-primary/10 bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
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
          className="flex flex-col items-center rounded-2xl border border-primary/10 bg-background p-6 shadow-sm"
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
/*  STORY                                                                     */
/* -------------------------------------------------------------------------- */

function StorySection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.25 });

  return (
    <section ref={ref} className="relative bg-background px-6 py-28 text-center overflow-hidden">
      <FloralCorners />
      <div
        className={`mx-auto max-w-2xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Heart className="mx-auto mb-6 h-8 w-8 animate-float text-primary/80" strokeWidth={1.5} />
        <h2 className="font-display text-3xl font-medium md:text-4xl">Un día, una promesa</h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Después de años de risas, aventuras y momentos inolvidables, decidimos dar el siguiente
          paso juntos. Queremos compartir este día tan especial con las personas que hacen nuestra
          vida más feliz.
        </p>
        <p className="mt-4 font-display text-xl text-foreground">
          ¡Esperamos verte en la celebración!
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  LOCATIONS                                                                 */
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
    address: "Madrid, España",
    time: "19:00",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+de+Burgos+Madrid",
  },
];

function LocationsSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.15 });

  return (
    <section ref={ref} className="relative bg-secondary/40 px-6 py-28 overflow-hidden border-y border-primary/10">
      <FloralCorners />
      <div className="mx-auto max-w-5xl">
        <div
          className={`mb-14 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Localización
          </p>
          <h2 className="font-display text-3xl font-medium md:text-4xl">Dónde celebraremos</h2>
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
      className={`flex flex-col rounded-2xl border border-primary/10 bg-background p-8 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: visible ? `${(index + 1) * 150}ms` : "0ms" }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>

      <span className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
        {location.type}
      </span>
      <h3 className="font-display text-2xl font-medium">{location.name}</h3>

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
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-transparent px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <MapPin className="h-4 w-4" />
        Cómo llegar
      </a>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  ITINERARY                                                                 */
/* -------------------------------------------------------------------------- */

const ITINERARY = [
  { time: "17:00", title: "Ceremonia", icon: Church },
  { time: "19:00", title: "Cóctel", icon: Wine },
  { time: "21:00", title: "Banquete", icon: UtensilsCrossed },
  { time: "00:00", title: "Fiesta", icon: Music },
  { time: "03:00", title: "Fin fiesta", icon: Moon },
];

function ItinerarySection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.15 });

  return (
    <section ref={ref} className="relative bg-background px-6 py-28 text-center overflow-hidden">
      <FloralCorners />
      <div
        className={`mx-auto max-w-4xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Clock className="mx-auto mb-6 h-8 w-8 animate-float text-primary/80" strokeWidth={1.5} />
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Itinerario
        </p>
        <h2 className="font-display text-3xl font-medium md:text-4xl">Un día para recordar</h2>
        <div className="mx-auto my-6 h-px w-16 bg-primary/40" />
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {ITINERARY.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`flex flex-col items-center rounded-2xl border border-primary/10 bg-secondary/40 p-6 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <span className="font-display text-3xl font-medium text-foreground">{item.time}</span>
              <span className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
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
/*  RSVP                                                                      */
/* -------------------------------------------------------------------------- */

function RSVPSection({ guestName, seats }: { guestName: string; seats: number }) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, threshold: 0.15 });
  const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLScUqWIZvrLVh0uOpVg32ZZKYtiWqJpPRTWGZ9KFZbLxQlgQNA/viewform?usp=pp_url&entry.1498135098=${encodeURIComponent(guestName)}&entry.151129012=${seats}`;

  return (
    <section ref={ref} className="relative bg-secondary/50 px-6 py-28 overflow-hidden border-t border-primary/10">
      <FloralCorners />
      <div className="mx-auto max-w-2xl">
        <div
          className={`mb-12 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CalendarHeart className="mx-auto mb-4 h-8 w-8 text-primary/80" strokeWidth={1.5} />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Confirmación
          </p>
          <h2 className="font-display text-3xl font-medium md:text-4xl">Confirma tu asistencia</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Por favor, confirma tu asistencia antes del 01 de marzo de 2027 rellenando nuestro formulario.
          </p>
          <div className="mx-auto my-6 h-px w-16 bg-primary/40" />
        </div>

        <div
          className={`rounded-2xl border border-primary/20 bg-card p-8 text-center shadow-md transition-all duration-1000 delay-200 ease-out md:p-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-6 py-4">
            {/* Aviso personalizado con su nombre y plazas */}
            <div className="rounded-xl bg-primary/5 p-4 border border-primary/15">
              <p className="font-display text-lg font-medium text-foreground">
                {guestName}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Invitación válida para{" "}
                <span className="font-semibold text-primary">
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
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 md:w-auto md:min-w-[280px]"
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
/*  FOOTER                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background px-6 py-16 text-center">
      <Heart className="mx-auto mb-4 h-5 w-5 animate-pulse text-primary" strokeWidth={1.5} />
      <p className="font-display text-2xl font-medium text-foreground">Carolina & Daniel</p>
      <p className="mt-2 text-sm text-muted-foreground">16 de abril de 2027 · Madrid, España</p>
      <p className="mt-8 text-xs text-muted-foreground/70">Invitación creada con cariño para ti.</p>
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