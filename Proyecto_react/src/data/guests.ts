export interface GuestInfo {
  name: string;
  seats: number;
}

export const GUESTS_DATABASE: Record<string, GuestInfo> = {
  "manuel-correa": { name: "Manuel Correa", seats: 1 },
  "andrea-jimmy": { name: "Andrea y Jimmy", seats: 2 },
  "familia-yitani-otaola": { name: "Familia Yitani-Otaola", seats: 5 },
  "carolina-yitani": { name: "Carolina Yitani", seats: 1 },
  "yoli-sorbara": { name: "Yoli Sorbara", seats: 2 },
  "familia-bruzual": { name: "Familia Bruzual", seats: 3 },
  "teresa-victor": { name: "Maria Teresa y Victor Pérez", seats: 2 },
  "david-ortiz": { name: "David Ortiz", seats: 1 },
  "gianfranco-cafaro": { name: "Gianfranco Cafaro", seats: 1 },
  "carlo-nicol": { name: "Carlo y Nicol", seats: 2 },
  "javier-andrea": { name: "Javier y Andrea", seats: 2 },
  "marusi-yitani": { name: "Marusi Yitani", seats: 1 },
  "fran-ana": { name: "Francisco y Ana", seats: 2 },
  "lucia-david": { name: "Lucia Capriulo y David Pérez", seats: 2 },
  "andres-michelle": { name: "Andres y Michelle", seats: 2 },
  "familia-andrade-silva": { name: "Familia Silva de Andrade", seats: 3 },
  "familia-franca-palmar": { name: "Familia Franca de Palmar", seats: 4 },
  "Familia Lorges": { name: "Familia Lorges", seats: 3 },
  "ricardo-rojas": { name: "Ricardo Rojas", seats: 1 },
  "karla-wilmer": { name: "Karla y Wilmer", seats: 2 },
  "Familia-bastide": { name: "Familia de la Bastide", seats: 6 },
  "melisa-yitani": { name: "Melisa Yitani", seats: 3 },
  "mariasol": { name: "Maria Sol y Tía", seats: 2 },
  "lorea-alberto": { name: "Lorea y Alberto", seats: 2 },
  "ana-stefania": { name: "Ana y stefania", seats: 2 },
  "veronica-planas": { name: "Veronica Planas", seats: 1 },
  "familia-reglá": { name: "Familia Reglá", seats: 3 },
  "joseph-goncalves": { name: "Joseph Goncalves", seats: 2 },
  "cristina-rocio": { name: "Cristian y Rocío", seats: 2 },
  "madeleine-javier": { name: "Madeleine y Javier", seats: 2 },
  "familia-rojas": { name: "Familia Rojas", seats: 3 },
  "familia-caseres": { name: "Monica Caseres", seats: 2 },
  "david-iriana": { name: "David e Iriana", seats: 2 },
  "luis-lopes": { name: "Luis Lopez", seats: 1 },
  "marcos-cachafeiro": { name: "Marcos Cachafeiro", seats: 1 },
  "Daniel Quintero": { name: "Daniel", seats: 1 },
  "familia-mota-bastidas": { name: "Familia Mota Bastidas", seats: 4 },
  "giovanni-carmen": { name: "Giovanni y Carmen", seats: 2 },
  "jessica-carlos": { name: "Jessica y Carlos", seats: 2 },
  "roberto-katerine": { name: "Roberto y Katerine", seats: 2 },
  "yolanda": { name: "Yolanda", seats: 1 },
  "tony-maggy": { name: "Tony y Maggy", seats: 2 },
  "familia-mota-figueras": { name: "Familia Mota Figueras", seats: 3 },
  "familia-mara-diego": { name: "Familia Mara Alfonso", seats: 4 },
  "Ina": { name: "Ina", seats: 1 },
  "familia-yitani-mexico": { name: "Familia Yitani Mexico", seats: 2 },
  "eladio-elena": { name: "Eladio y Elena", seats: 2 },
  "nicole": { name: "Nicole", seats: 2 },
  "lucia": { name: "Lucia", seats: 2 },
  "eduardo-antonio": { name: "Eduardo Antonio", seats: 3 },
  "familia-perez-lorcas": { name: "Familia Pérez Lorcas", seats: 2 },
  "familia-perez-litua": { name: "Familia Pérez Litua", seats: 3 },
};

export const DEFAULT_GUEST: GuestInfo = {
  name: "Invitado/a",
  seats: 1,
};

export function getGuestFromUrl(): GuestInfo {
  if (typeof window === "undefined") return DEFAULT_GUEST;
  
  const params = new URLSearchParams(window.location.search);
  const guestCode = params.get("inv");

  if (guestCode && GUESTS_DATABASE[guestCode]) {
    return GUESTS_DATABASE[guestCode];
  }

  return DEFAULT_GUEST;
}