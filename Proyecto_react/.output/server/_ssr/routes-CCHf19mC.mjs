import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as stringType, n as enumType, r as objectType, t as coerce } from "../_libs/zod.mjs";
import { t as Route } from "./routes-MNu0fjKx.mjs";
import { a as Music, c as Heart, d as CalendarHeart, i as PartyPopper, l as Clock, n as UtensilsCrossed, o as Moon, r as Shirt, s as MapPin, t as Wine, u as Church } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CCHf19mC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var olive_branch_default = "/assets/olive-branch-CRZc2JlZ.png";
var WEDDING_DATE = /* @__PURE__ */ new Date("2027-04-16T17:00:00");
function Index() {
	const { invitados = 2, nombre } = Route.useSearch();
	const [opened, setOpened] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvelopeGate, {
		guests: invitados,
		guestName: nombre,
		onOpen: () => setOpened(true)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: `min-h-screen overflow-x-hidden bg-background text-foreground ${opened ? "" : "pointer-events-none h-screen overflow-hidden"}`,
		"aria-hidden": !opened,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StorySection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItinerarySection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DressCodeSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RSVPSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	})] });
}
function EnvelopeGate({ guests, guestName, onOpen }) {
	const [phase, setPhase] = (0, import_react.useState)("closed");
	const timers = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		const list = timers.current;
		return () => list.forEach(clearTimeout);
	}, []);
	const handleOpen = () => {
		if (phase !== "closed") return;
		setPhase("flap");
		timers.current.push(setTimeout(() => setPhase("card"), 1100), setTimeout(() => setPhase("out"), 7e3), setTimeout(onOpen, 4e3));
	};
	const flapOpen = phase !== "closed";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed inset-0 z-50 flex items-center justify-center bg-background px-6 transition-opacity duration-700 ease-out ${phase === "out" ? "pointer-events-none opacity-0" : "opacity-100"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: handleOpen,
			"aria-label": "Abrir la invitación",
			className: "group relative w-full max-w-sm animate-scale-in text-left outline-none [perspective:1400px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `absolute inset-x-6 bottom-10 z-10 rounded-xl border border-primary/20 bg-card px-6 py-8 text-center shadow-lg transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${phase === "card" || phase === "out" ? "-translate-y-[62%] opacity-100" : "translate-y-6 opacity-0"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.25em] text-primary",
							children: "Estás invitado"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-3xl font-medium text-foreground",
							children: guestName ?? "Carolina & Daniel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto my-5 h-px w-16 bg-primary/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"Esta invitación es válida para",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium text-foreground",
									children: [
										guests,
										" ",
										guests === 1 ? "invitado" : "invitados"
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/3] w-full [transform-style:preserve-3d]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-xl border border-primary/20 bg-secondary/70 shadow-sm" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 z-20 h-[62%] overflow-hidden rounded-b-xl border-x border-b border-primary/20 bg-secondary shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-[60%] left-1/2 h-[120%] w-[80%] -translate-x-1/2 rotate-45 border-b border-primary/10 bg-secondary/80" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `absolute inset-x-0 top-0 z-30 h-[52%] origin-top transition-transform duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)] [backface-visibility:hidden] [transform-style:preserve-3d] ${flapOpen ? "[transform:rotateX(-172deg)]" : "[transform:rotateX(0deg)]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full w-full rounded-t-xl border border-primary/20 bg-secondary/90",
								style: { clipPath: "polygon(0 0, 100% 0, 50% 100%)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `absolute left-1/2 top-[62%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10 shadow-sm transition-opacity duration-300 ${flapOpen ? "opacity-0" : "animate-float opacity-100"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-16 w-16 items-center justify-center rounded-full border border-primary/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xl font-medium tracking-tight text-primary",
										children: "C\xA0&\xA0D"
									})
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `mt-8 flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-500 group-hover:bg-primary/90 ${flapOpen ? "pointer-events-none opacity-0" : "opacity-100"}`,
					children: "Abrir invitación"
				})
			]
		})
	});
}
var FORBIDDEN_COLORS = [
	{
		name: "Blanco",
		className: "bg-[oklch(0.99_0_0)]"
	},
	{
		name: "Azul claro",
		className: "bg-[oklch(0.85_0.06_240)]"
	},
	{
		name: "Beige",
		className: "bg-[oklch(0.9_0.03_85)]"
	}
];
function DressCodeSection() {
	const ref = (0, import_react.useRef)(null);
	const isVisible = useInView(ref, {
		once: true,
		threshold: .15
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "bg-secondary/40 px-6 py-24 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto max-w-3xl transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shirt, {
					className: "mx-auto mb-6 h-8 w-8 animate-float text-primary/80",
					strokeWidth: 1.5
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary",
					children: "Vestimenta"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium md:text-4xl",
					children: "Etiqueta formal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto my-6 h-px w-16 bg-primary/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-xl leading-relaxed text-muted-foreground",
					children: "El código de vestimenta es formal. Te pedimos con cariño que evites los siguientes colores, reservados para la novia y el ambiente de la celebración."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap items-center justify-center gap-6",
					children: FORBIDDEN_COLORS.map((color, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex flex-col items-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
						style: { transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-16 w-16 overflow-hidden rounded-full border border-primary/20 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-full w-full ${color.className}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-px w-[130%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-destructive/80" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 text-sm font-medium text-foreground",
								children: color.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "No permitido"
							})
						]
					}, color.name))
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-fade-in absolute inset-0 -z-10 opacity-60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: olive_branch_default,
				alt: "Rama de olivo decorativa",
				width: 320,
				height: 160,
				className: "animate-fade-in mb-6 w-48 opacity-80 md:w-64"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-fade-in-up mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary animation-delay-100",
				children: "Nos casamos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "animate-fade-in-up font-display text-5xl font-medium leading-[1.1] text-foreground md:text-7xl lg:text-8xl animation-delay-200",
				children: [
					"Carolina",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-3 align-middle text-3xl text-primary md:text-5xl",
						children: "&"
					}),
					"Daniel"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-fade-in-up animation-delay-300",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto my-8 h-px w-24 bg-primary/40 animate-draw-line" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-fade-in-up max-w-md text-lg leading-relaxed text-muted-foreground animation-delay-400",
				children: "Con mucha ilusión, te invitamos a ser parte del día en que comenzamos nuestra historia como marido y mujer."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-fade-in-up mt-10 flex flex-col items-center gap-2 animation-delay-500",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
					className: "font-display text-2xl font-medium text-foreground md:text-3xl",
					dateTime: "2027-04-16",
					children: "16 de abril de 2027"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-light uppercase tracking-widest text-muted-foreground",
					children: "Madrid, España"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 animation-delay-700",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-px bg-gradient-to-b from-primary/60 to-transparent" })
			})
		]
	});
}
function CountdownSection() {
	const ref = (0, import_react.useRef)(null);
	const isVisible = useInView(ref, {
		once: true,
		threshold: .25
	});
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "bg-secondary/40 px-6 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary",
					children: "Cuenta atrás"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium md:text-4xl",
					children: "El gran día está cerca"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto my-6 h-px w-16 bg-primary/40" })
			]
		}), mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {
			target: WEDDING_DATE,
			visible: isVisible
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownPlaceholder, { visible: isVisible })]
	});
}
function Countdown({ target, visible }) {
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(timer);
	}, []);
	const diff = Math.max(0, target.getTime() - now.getTime());
	const units = [
		{
			label: "Días",
			value: Math.floor(diff / 864e5)
		},
		{
			label: "Horas",
			value: Math.floor(diff / 36e5 % 24)
		},
		{
			label: "Minutos",
			value: Math.floor(diff / 6e4 % 60)
		},
		{
			label: "Segundos",
			value: Math.floor(diff / 1e3 % 60)
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mx-auto grid max-w-3xl grid-cols-2 gap-4 transition-all delay-200 duration-1000 ease-out md:grid-cols-4 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: units.map((unit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group flex flex-col items-center rounded-2xl border border-primary/10 bg-background p-6 shadow-sm transition-shadow hover:shadow-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-4xl font-medium text-primary transition-transform duration-500 group-hover:scale-110 md:text-5xl",
				children: String(unit.value).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground",
				children: unit.label
			})]
		}, unit.label))
	});
}
function CountdownPlaceholder({ visible }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mx-auto grid max-w-3xl grid-cols-2 gap-4 transition-all delay-200 duration-1000 ease-out md:grid-cols-4 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: [
			"Días",
			"Horas",
			"Minutos",
			"Segundos"
		].map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center rounded-2xl border border-primary/10 bg-background p-6 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-4xl font-medium text-primary md:text-5xl",
				children: "--"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground",
				children: label
			})]
		}, label))
	});
}
function StorySection() {
	const ref = (0, import_react.useRef)(null);
	const isVisible = useInView(ref, {
		once: true,
		threshold: .25
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "px-6 py-24 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto max-w-2xl transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					className: "mx-auto mb-6 h-8 w-8 animate-float text-primary/80",
					strokeWidth: 1.5
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium md:text-4xl",
					children: "Un día, una promesa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 leading-relaxed text-muted-foreground",
					children: "Después de años de risas, aventuras y momentos inolvidables, decidimos dar el siguiente paso juntos. Queremos compartir este día tan especial con las personas que hacen nuestra vida más feliz."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-display text-xl text-foreground",
					children: "¡Esperamos verte en la celebración!"
				})
			]
		})
	});
}
var LOCATIONS = [{
	icon: Church,
	type: "Ceremonia",
	name: "Parroquia Nuestra Señora del Pilar",
	address: "Juan Bravo, 40, 28006 Madrid",
	time: "17:00",
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parroquia+Nuestra+Señora+del+Pilar+Juan+Bravo+40+Madrid"
}, {
	icon: PartyPopper,
	type: "Celebración",
	name: "Casa de Burgos",
	address: "Madrid, España",
	time: "19:00",
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+de+Burgos+Madrid"
}];
function LocationsSection() {
	const ref = (0, import_react.useRef)(null);
	const isVisible = useInView(ref, {
		once: true,
		threshold: .15
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "bg-secondary/40 px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mb-14 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary",
						children: "Localización"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium md:text-4xl",
						children: "¿Dónde celebraremos?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto my-6 h-px w-16 bg-primary/40" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: LOCATIONS.map((location, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationCard, {
					location,
					index,
					visible: isVisible
				}, location.name))
			})]
		})
	});
}
function LocationCard({ location, index, visible }) {
	const Icon = location.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col rounded-2xl border border-primary/10 bg-background p-8 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		style: { transitionDelay: visible ? `${(index + 1) * 150}ms` : "0ms" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-6 w-6",
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1 text-xs font-medium uppercase tracking-widest text-primary",
				children: location.type
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl font-medium",
				children: location.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: location.address })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: location.time })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: location.mapsUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "mt-8 inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-transparent px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), "Cómo llegar"]
			})
		]
	});
}
var ITINERARY = [
	{
		time: "17:00",
		title: "Ceremonia",
		icon: Church
	},
	{
		time: "19:00",
		title: "Cóctel",
		icon: Wine
	},
	{
		time: "20:15-20:30",
		title: "Banquete",
		icon: UtensilsCrossed
	},
	{
		time: "00:00",
		title: "Fiesta",
		icon: Music
	},
	{
		time: "03:00",
		title: "Fin fiesta",
		icon: Moon
	}
];
function ItinerarySection() {
	const ref = (0, import_react.useRef)(null);
	const isVisible = useInView(ref, {
		once: true,
		threshold: .15
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "px-6 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto max-w-4xl transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
					className: "mx-auto mb-6 h-8 w-8 animate-float text-primary/80",
					strokeWidth: 1.5
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary",
					children: "Itinerario"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium md:text-4xl",
					children: "Un día para recordar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto my-6 h-px w-16 bg-primary/40" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
			children: ITINERARY.map((item, index) => {
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex flex-col items-center rounded-2xl border border-primary/10 bg-background p-6 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
					style: { transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-6 w-6",
								strokeWidth: 1.5
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl font-medium text-foreground",
							children: item.time
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground",
							children: item.title
						})
					]
				}, item.title);
			})
		})]
	});
}
objectType({
	fullName: stringType().min(2, "Por favor, escribe tu nombre completo."),
	email: stringType().email("Introduce un email válido."),
	attendance: enumType(["yes", "no"], { required_error: "Por favor, confirma tu asistencia." }),
	guests: coerce.number().min(0).max(10),
	kidsMenu: enumType(["no", "yes"]),
	kidsCount: coerce.number().min(0).max(10),
	dietary: stringType().optional(),
	message: stringType().optional()
});
function RSVPSection() {
	const ref = (0, import_react.useRef)(null);
	const isVisible = useInView(ref, {
		once: true,
		threshold: .15
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mb-12 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarHeart, {
						className: "mx-auto mb-4 h-8 w-8 text-primary/80",
						strokeWidth: 1.5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary",
						children: "Confirmación"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium md:text-4xl",
						children: "Confirma tu asistencia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-md text-muted-foreground",
						children: "Por favor, confirma tu asistencia antes del 01 de marzo de 2027 rellenando nuestro formulario."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto my-6 h-px w-16 bg-primary/40" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `rounded-2xl border border-primary/10 bg-card p-8 text-center shadow-sm transition-all duration-1000 delay-200 ease-out md:p-12 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Haz clic en el botón de abajo para acceder al formulario de confirmación. ¡Te esperamos!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://forms.gle/BxKTaHR7T9Wn2BZFA",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 md:w-auto md:min-w-[280px]",
						children: "Rellenar formulario de asistencia"
					})]
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-primary/10 bg-secondary/40 px-6 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
				className: "mx-auto mb-4 h-5 w-5 animate-pulse text-primary",
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl font-medium text-foreground",
				children: "Carolina & Daniel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "16 de abril de 2027 · Madrid, España"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-xs text-muted-foreground/70",
				children: "Invitación creada con cariño para ti."
			})
		]
	});
}
function useInView(ref, options) {
	const { once, ...observerOptions } = options ?? {};
	const observerOptionsRef = (0, import_react.useRef)(observerOptions);
	observerOptionsRef.current = observerOptions;
	const [isIntersecting, setIsIntersecting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
//#endregion
export { Index as component };
