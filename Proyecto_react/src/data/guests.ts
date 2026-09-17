export interface GuestInfo {
  name: string;
  seats: number;
}

export const GUESTS_DATABASE: Record<string, GuestInfo> = {

  //CARACAS
  "manuel-correa": { name: "Manuel Correa", seats: 1 },
  "adelina-miguel": { name: "Adelina Correa y Miguel Correa", seats: 2 },
  "andrea-jimmy": { name: "Andrea Henriquez y Jimmy Camargo", seats: 2 },
  "carolina-yitani": { name: "Carolina Yitani", seats: 1 },
  "familia-yitani-otaola": { name: "Familia Yitani Otaola", seats: 4 },
  "yoli-sorbara": { name: "Yoli Sorbara", seats: 2 },
  "geraldine-bruzual": { name: "Geraldine Bruzual", seats: 3 },
  "teresa-victor": { name: "Maria Teresa Pérez y Victor Pérez", seats: 2 },
  "david-ortiz": { name: "David Ortiz", seats: 1 },
  "gianfranco-cafaro": { name: "Gianfranco Cafaro", seats: 1 },
  "carlo-nicol": { name: "Carlo Secchi y Nicol Vasselini", seats: 2 },
  "javier-andrea": { name: "Javier Herrera y Andrea", seats: 2 },
  "nicole-then": { name: "Nicole Then y Johann Sanchez", seats: 2 },

  //MIAMI-MEXICO
  "maria-andreina": { name: "Maria Andreina Mejías", seats: 1 },
  "edgard-marisa": { name: "Edgard Yitani  y Marisa Medina", seats: 2 },
  "eladio-elena": { name: "Eladio Arvelo y Elena", seats: 2 },
  "maria-alejandra-bencomo": { name: "Maria Alejandra Bencomo", seats: 2 },
  "familia-perez-litua": { name: "Familia Pérez Litua", seats: 3 },
  "andrea-javier": { name: "Andrea Pérez y Javier Pérez", seats: 2 },
  "lucia-estrada": { name: "Lucia Estrada", seats: 2 },
  "familia-colmenares-peña": { name: "Familia Colmenares Peña", seats: 3 },
  "familia-perez-lorcas": { name: "Familia Pérez Lorcas", seats: 2 },

  //PANAMA
  "magaly-felix": { name: "Magaly Yitani y Felix Caceres", seats: 2 },
  "diego-hillary": { name: "Diego Caceres y Hillary Watson", seats: 2 },
  "familia-caceres-acevedo": { name: "Familia Caceres Acevedo", seats: 4 },

  //BERLIN
  "valentina-campitelli": { name: "Valentina Campitelli", seats: 1 },
  "arturo-romero": { name: "Arturo Romero", seats: 1 },

  //INGLATERRA
  "barbara-moya": { name: "Bárbara Moya", seats: 2 },
  "adriana-gil": { name: "Adriana Gil y Daniel Cox", seats: 2 },

  //ESPAÑA
  "marusi-yitani": { name: "Marusi Yitani", seats: 1 },
  "fran-Ana": { name: "Fran y Ana Fernández", seats: 2 },
  "lucia-david": { name: "Lucia Capriulo y David Pérez", seats: 2 },
  "andres-michelle": { name: "Andres Pérez y Michelle Amiel", seats: 2 },
  "familia-andrade-silva": { name: "Familia Silva De Andrade", seats: 3 },
  "familia-franca-palmar": { name: "Familia Franca De Palma", seats: 5 },
  "claudia-loges": { name: "Familia Loges", seats: 3 },
  "ricardo-rojas": { name: "Ricardo Rojas", seats: 1 },
  "marina-cañizares": { name: "Marina Cañizares", seats: 2 },
  "karla-wilmer": { name: "Karla Blohm y Wilmer Indaburo", seats: 2 },
  "familia-bastide": { name: "Familia de la Bastide Nacad", seats: 6 },
  "melisa-yitani": { name: "Melisa Yitani y Johann Althaus", seats: 3 },
  "maria-sol-ochoa": { name: "Maria Sol Ochoa y Sol Nacad", seats: 2 },
  "isabella-yitani": { name: "Isabella Yitani", seats: 1 },
  "lorea-alberto": { name: "Lorea Yanez y Alberto Piedra", seats: 2 },
  "ana-stefania": { name: "Ana Morín y Estefanía Marquez", seats: 2 },
  "veronica-planas": { name: "Veronica Planas", seats: 1 },
  "familia-feitt-reglá": { name: "Familia Feitt Reglá", seats: 3 },
  "joseph-goncalves": { name: "Joseph Goncalves", seats: 2 },
  "cristina-rocio": { name: "Cristian Sever y Rocío Morales", seats: 2 },
  "madeleine-javier": { name: "Madeleine Chuecos y Javier Ibáñez", seats: 2 },
  "familia-rojas": { name: "Familia Rojas", seats: 3 },
  "familia-freitas-piñeiro": { name: "Familia Freitas Piñero", seats: 2 },
  "familia-vilalta-ramirez": { name: "Familia Vilalta Ramírez", seats: 3 },
  "david-iriana": { name: "David Reyes e Iriana Hernández", seats: 2 },
  "luis-lopez": { name: "Luis Lopez", seats: 1 },
  "daniel-quintero": { name: "Daniel Quintero", seats: 1 },
  "marcos-cachafeiro": { name: "Marcos Cachafeiro", seats: 1 },
  "familia-mota-bastidas": { name: "Familia Mota Bastidas", seats: 4 },
  "familia-mota-figueras": { name: "Familia Mota Figueras", seats: 3 },
  "giovanni-carmen": { name: "Giovanni Capriulo y Carmen", seats: 2 },
  "jessica-carlos": { name: "Jessica Marian y Carlos Aznar", seats: 2 },
  "mauricio-bottini": { name: "Mauricio Bottini", seats: 1 },
  "roberto-katherine": { name: "Roberto Hernandez y Katherine Bianca", seats: 2 },
  "pablo-josefina": { name: "Pablo de Sousa y Josefina Caprile", seats: 2 },
  "yolanda-gonzalez": { name: "Yolanda Gonzalez S.", seats: 1 },
  "monica-medico": { name: "Monica medico", seats: 2 },
  "tony-maggy": { name: "Tony Angilechia y Maggy Antypas", seats: 2 },
  "karem-Rodriguez": { name: "Karem Rodriguez", seats: 1 },
  "marina-gonzalez": { name: "Marina Gonzalez y ", seats: 2 },
  "aaron-": { name: "Aaron Rodriguez y Misha", seats: 2 },
  "cayetana-": { name: "Cayetana y ", seats: 2 },
  "eva-tunom": { name: "Eva Tunom y ", seats: 2 },
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