import { createFileRoute } from "@tanstack/react-router";
import { GUESTS_DATABASE } from "../data/guests";

// ¡IMPORTANTE! Debe llamarse obligatoriamente "Route"
export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-display font-medium mb-2">Generador de Enlaces</h1>
        <p className="text-muted-foreground mb-8">
          Copia los mensajes personalizados para enviar por WhatsApp a tus invitados.
        </p>

        <ul className="space-y-4">
          {Object.entries(GUESTS_DATABASE).map(([code, guest]) => {
            const personalUrl = `${baseUrl}/?inv=${code}`;
            const whatsappText = `¡Hola ${guest.name}! Nos encantaría que nos acompañes en nuestra boda. Puedes ver tu invitación aquí: ${personalUrl}`;

            return (
              <li key={code} className="p-5 border border-primary/20 rounded-xl bg-card shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold text-lg">{guest.name}</h2>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                    {guest.seats} {guest.seats === 1 ? "plaza" : "plazas"}
                  </span>
                </div>
                
                <a 
                  href={personalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary text-sm underline block truncate mb-4"
                >
                  {personalUrl}
                </a>

                <button
                  onClick={() => navigator.clipboard.writeText(whatsappText)}
                  className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md text-sm font-medium transition-colors hover:bg-primary/90"
                >
                  Copiar mensaje para WhatsApp
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}