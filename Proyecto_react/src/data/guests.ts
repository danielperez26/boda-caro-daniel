export interface GuestInfo {
  name: string;
  seats: number;
}

export const GUESTS_DATABASE: Record<string, GuestInfo> = {
  "manuel-correa": { name: "Manuel Correa", seats: 1 },
  "adelina-miguel": { name: "Adelina Correa y Miguel Correa", seats: 2 },
  "andrea-jimmy": { name: "Andrea Henriquez y Jimmy Camargo", seats: 2 },
  "familia-yitani-otaola": { name: "Familia Yitani Otaola", seats: 4 },
  "isabella-yitani": { name: "Isabella Yitani", seats: 1 },
  "carolina-yitani": { name: "Carolina Yitani", seats: 1 },
  "familia-caceres-yitani": { name: "Familia Caceres Yitani", seats: 2 },
  "yoli-sorbara": { name: "Yoli Sorbara", seats: 2 },
  "geraldine-bruzual": { name: "Geraldine Bruzual", seats: 3 },
  "teresa-victor": { name: "Maria Teresa Pérez y Victor Pérez", seats: 2 },
  "david-ortiz": { name: "David Ortiz", seats: 1 },
  "gianfranco-cafaro": { name: "Gianfranco Cafaro", seats: 1 },
  "carlo-nicol": { name: "Carlo Secchi y Nicol Vasselini", seats: 2 },
  "javier-andrea": { name: "Javier Herrera y Andrea", seats: 2 },
  "marusi-yitani": { name: "Marusi Yitani", seats: 1 },
  "francisco-correa": { name: "Francisco Correa y Ana Fernández", seats: 2 },
  "lucia-david": { name: "Lucia Capriulo y David Pérez", seats: 2 },
  "andres-michelle": { name: "Andres Pérez y Michelle Amiel", seats: 2 },
  "familia-andrade-silva": { name: "Familia Silva De Andrade", seats: 3 },
  "familia-franca-palmar": { name: "Familia Franca De Palma", seats: 4 },
  "claudi-loges": { name: "Claudia Loges", seats: 3 },
  "ricardo-rojas": { name: "Ricardo Rojas", seats: 1 },
  "karla-wilmer": { name: "Karla Blohm y Wilmer Indaburo", seats: 2 },
  "familia-bastide": { name: "Familia de la Bastide Nacad", seats: 6 },
  "melisa-yitani": { name: "Melisa Yitani y Johann Althaus", seats: 3 },
  "maria-sol-ochoa": { name: "Maria Sol Ochoa y Sol Nacad", seats: 2 },
  "lorea-alberto": { name: "Lorea Yanez y Alberto Piedra", seats: 2 },
  "ana-stefania": { name: "Ana Morín y Estefanía Marquez", seats: 2 },
  "veronica-planas": { name: "Veronica Planas", seats: 1 },
  "familia-feitt-reglá": { name: "Familia Feitt Reglá", seats: 3 },
  "joseph-goncalves": { name: "Joseph Goncalves", seats: 2 },
  "cristina-rocio": { name: "Cristian Sever y Rocío", seats: 2 },
  "madeleine-javier": { name: "Madeleine y Javier", seats: 2 },
  "familia-rojas": { name: "Familia Rojas", seats: 3 },
  "familia-caseres": { name: "Monica Caseres", seats: 2 },
  "david-iriana": { name: "Iriana Hernández y David Reyes", seats: 2 },
  "luis-lopez": { name: "Luis Lopez", seats: 1 },
  "marcos-cachafeiro": { name: "Marcos Cachafeiro", seats: 1 },
  "daniel-quintero": { name: "Daniel Quintero", seats: 1 },
  "familia-mota-bastidas": { name: "Familia Mota Bastidas", seats: 4 },
  "giovanni-carmen": { name: "Giovanni Capriulo y Carmen", seats: 2 },
  "jessica-carlos": { name: "Jessica Marian y Carlos Aznar", seats: 2 },
  "roberto-katherine": { name: "Roberto Hernandez y Katherine Bianca", seats: 2 },
  "yolanda-gonzalez": { name: "Yolanda Gonzalez S.", seats: 1 },
  "tony-maggy": { name: "Tony Angilechia y Maggy Antypas", seats: 2 },
  "familia-mota-figueras": { name: "Familia Mota Figueras", seats: 3 },
  "familia-mara-diego": { name: "Familia Mara Alfonso", seats: 4 },
  "Maria Andreina": { name: "Maria Andreina Mejias", seats: 1 },
  "edgard-marisa": { name: "Edgard Yitani  y Marisa Medina", seats: 2 },
  "eladio-elena": { name: "Eladio Arvelo y Elena", seats: 2 },
  "nicole-then": { name: "Nicole Then y Johann Sanchez", seats: 2 },
  "lucia-estrada": { name: "Lucia Estrada", seats: 2 },
  "familia-colmenares": { name: "Familia Colmenares Peña", seats: 3 },
  "familia-perez-lorcas": { name: "Familia Pérez Lorcas", seats: 2 },
  "familia-perez-litua": { name: "Familia Pérez Litua", seats: 3 },
  "adriana-gil": { name: "Adriana Gil y Daniel Cox", seats: 2 },
  "valentina-campitelli": { name: "Valentina Campitelli", seats: 1 },
  "diego-hillary": { name: "Diego Caceres y Hillary Watson", seats: 2 },
  "familia-caceres": { name: "Familia Caceres Acevedo", seats: 4 },
  "karem-Rodriguez": { name: "Karem Rodriguez", seats: 1 },
  "eva-tunom": { name: "Eva Tunom y ", seats: 2 },
  "cayetana-": { name: "Cayetana y ", seats: 2 },
  "marina-gonzalez": { name: "Marina Gonzalez y ", seats: 2 },
  "aaron-": { name: "Aaron y ", seats: 2 },
  "pablo-": { name: "Pablo de Sousa y ", seats: 2 },
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