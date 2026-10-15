export interface GuestInfo {
  name: string;
  seats: number;
  country: string;
}

export const GUESTS_DATABASE: Record<string, GuestInfo> = {

  //CARACAS
  "manuel-correa": { name: "Manuel Correa", seats: 1, country: "Caracas" },
  "adelina-miguel": { name: "Adelina Correa y Miguel Correa", seats: 2, country: "Caracas" },
  "andrea-jimmy": { name: "Andrea Henriquez y Jimmy Camargo", seats: 2, country: "Caracas" },
  "carolina-yitani": { name: "Carolina Yitani", seats: 1, country: "Caracas" },
  "simon-magali" : {name: "Simón Yitani y Magaly Otaola", seats: 2, country: "Caracas" },
  "simon-ana": { name: "Simón Yitani y Ana Luisa Hoyos", seats: 2, country: "Caracas" },
  "yoli-javier": { name: "Yoli Sorbara y Javier Añor", seats: 2, country: "Caracas" },
  "geraldine-mario": { name: "Geraldine Bruzual, Mario Bruno y Roma Bruno", seats: 3, country: "Caracas" },
  "familia-perez-marquez": { name: "Familia Pérez Marquez", seats: 4, country: "Caracas" },
  "teresa-victor": { name: "Maria Teresa Pérez y Victor Pérez", seats: 2, country: "Caracas" },
  "david-ortiz": { name: "David Ortiz", seats: 1, country: "Caracas" },
  "gianfranco-cafaro": { name: "Gianfranco Cafaro", seats: 1, country: "Caracas" },
  "carlo-nicol": { name: "Carlo Secchi y Nicol Vassellini", seats: 2, country: "Caracas" },
  "javier-andrea": { name: "Javier Herrera y Andrea Hernández", seats: 2, country: "Caracas" },
  "nicole-then": { name: "Nicole Then y Johann Sanchez", seats: 2, country: "Caracas" },


  //MIAMI-MEXICO
  "eladio-elena": { name: "Eladio Arvelo y Elena Arvelo", seats: 2, country: "Miami-Mexico" },
  "maria-alejandra-bencomo": { name: "Maria Alejandra Bencomo y Javier Villalba", seats: 2, country: "Miami-Mexico" },
  "lucia-estrada": { name: "Lucia Estrada", seats: 1, country: "Miami-Mexico" },
  "familia-colmenares-peña": { name: "Familia Colmenares Peña", seats: 3, country: "Miami-Mexico" },
  "maria-andreina": { name: "Maria Andreina Mejías", seats: 1, country: "Miami-Mexico" },
  "edgard-marisa": { name: "Edgard Yitani y Marisa Medina", seats: 2, country: "Miami-Mexico" },
  "familia-perez-lorcas": { name: "Isaac Pérez y Belmary Lorcas", seats: 2, country: "Miami-Mexico" },
  "familia-perez-perez": { name: "Familia Pérez Pérez", seats: 3, country: "Miami-Mexico" },
  "andrea-perez": { name: "Andrea Pérez", seats: 1, country: "Miami-Mexico" },
  "javier-perez": { name: "Javier Pérez", seats: 1, country: "Miami-Mexico" },

  //PANAMA
  "magaly-felix": { name: "Magaly Yitani y Felix Caceres", seats: 2, country: "Panama" },
  "diego-hillary": { name: "Diego Caceres y Hillary Watson", seats: 2, country: "Panama" },
  "familia-caceres-acevedo": { name: "Familia Caceres Acevedo", seats: 4, country: "Panama" },

  //BERLIN
  "valentina-campitelli": { name: "Valentina Campitelli", seats: 1, country: "Berlin" },
  "arturo-romero": { name: "Arturo Romero", seats: 1, country: "Berlin" },

  //INGLATERRA
  "adriana-gil": { name: "Adriana Gil y Daniel Cox", seats: 2, country: "Inglaterra" },
  "barbara-moya": { name: "Bárbara Moya", seats: 1, country: "Inglaterra" },

  //ESPAÑA
  "marusi-yitani": { name: "Marusi Yitani", seats: 1, country: "España" },
  "fran-ana": { name: "Fran Correa y Ana Fernández", seats: 2, country: "España" },
  "lucia-david": { name: "Lucia Capriulo y David Pérez", seats: 2, country: "España" },
  "andres-michelle": { name: "Andres Pérez y Michelle Amiel", seats: 2, country: "España" },
  "familia-andrade-silva": { name: "Familia Silva De Andrade", seats: 3, country: "España" },
  "familia-franca-palmar": { name: "Familia Franca De Palma", seats: 4, country: "España" },
  "beatriz-rodeiro": { name: "Beatriz Rodeiro", seats: 1, country: "España" },
  "claudia-loges": { name: "Claudia Loges, Diego Rodriguez, Dolores De Faría", seats: 3, country: "España" },
  "ricardo-rojas": { name: "Ricardo Rojas", seats: 1, country: "España" },
  "marina-cañizares": { name: "Marina Cañizares", seats: 2, country: "España" },
  "karla-wilmer": { name: "Karla Blohm y Wilmer Indaburo", seats: 2, country: "España" },
  "familia-bastide-nacad": { name: "Familia De La Bastide Nacad", seats: 6, country: "España" },
  "Familia-althaus-yitani": { name: "Familia Althaus Yitani", seats: 3, country: "España" },
  "maria-sol-ochoa": { name: "Maria Sol Ochoa y Sol Nacad", seats: 2, country: "España" },
  "isabella-yitani": { name: "Isabella Yitani", seats: 1, country: "España" },
  "lorea-alberto": { name: "Familia Piedra Yanez", seats: 3, country: "España" },
  "ana-stefania": { name: "Ana Morín y Estefanía Marquez", seats: 2, country: "España" },
  "veronica-planas": { name: "Veronica Planas", seats: 1, country: "España" },
  "familia-feitt-reglá": { name: "Familia Feitt Reglá", seats: 3, country: "España" },
  "joseph-lourdes": { name: "Joseph Goncalves y Lourdes Fernández", seats: 2, country: "España" },
  "cristian-rocio": { name: "Cristian Sever y Rocío Morales", seats: 2, country: "España" },
  "madeleine-javier": { name: "Familia Ibáñez Chueco", seats: 2, country: "España" },
  "familia-rojas-": { name: "Henry Rojas, Sabina, Oliver Rojas", seats: 3, country: "España" },
  "maralesy-diego": { name: "Maralesy Piñero y Diego Freitas", seats: 2, country: "España" },
  "familia-vilalta-ramirez": { name: "Familia Vilalta Ramírez", seats: 3, country: "España" },
  "david-iriana": { name: "David Reyes e Iriana Hernández", seats: 2, country: "España" },
  "luis-lopez": { name: "Luis Lopez", seats: 1, country: "España" },
  "daniel-quintero": { name: "Daniel Quintero", seats: 1, country: "España" },
  "marcos-cachafeiro": { name: "Marcos Cachafeiro", seats: 1, country: "España" },
  "familia-bastidas-mota": { name: "Familia Bastidas Mota", seats: 4, country: "España" },
  "familia-mota-figueras": { name: "Familia Mota Ramirez", seats: 3, country: "España" },
  "giovanni-carmen": { name: "Giovanni Capriulo y Carmen Vargas", seats: 2, country: "España" },
  "jessica-carlos": { name: "Jessica Marian y Carlos Aznar", seats: 2, country: "España" },
  "mauricio-bottini": { name: "Mauricio Bottini", seats: 1, country: "España" },
  "roberto-katherine": { name: "Roberto Hernández y Katherine Bianca", seats: 2, country: "España" },
  "monica-robella": { name: "Monica Robella", seats: 2, country: "España" },
  "pablo-josefina": { name: "Pablo de Sousa y Josefina Caprile", seats: 2, country: "España" },
  "tony-maggy": { name: "Tony Angilecchia y Maggy Antypas", seats: 2, country: "España" },
  "yolanda-gonzalez": { name: "Yolanda González Sierra", seats: 1, country: "España" },
  "karem-Rodriguez": { name: "Karem Rodriguez", seats: 1, country: "España" },
  "marina-gonzalez": { name: "Marina Gonzalez y ", seats: 2, country: "España" },
  "aaron-": { name: "Aaron Rodriguez y Misha", seats: 2, country: "España" },
  "cayetana-": { name: "Cayetana y ", seats: 2, country: "España" },
  "eva-tunom": { name: "Eva Tunom y ", seats: 2, country: "España" },
};

export const DEFAULT_GUEST: GuestInfo = {
  name: "Invitado/a",
  seats: 1,
  country: "General",
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