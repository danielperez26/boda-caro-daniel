import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as stringType, n as enumType, r as objectType, t as coerce } from "../_libs/zod.mjs";
require_jsx_runtime();
var $$splitComponentImporter = () => import("./routes-CCHf19mC.mjs");
var head = () => ({ meta: [
	{ title: "Carolina & Daniel | Invitación de Boda" },
	{
		name: "description",
		content: "Nos encantaría celebrar nuestra boda contigo. Confirma tu asistencia y descubre todos los detalles del gran día."
	},
	{
		property: "og:title",
		content: "Carolina & Daniel | Invitación de Boda"
	},
	{
		property: "og:description",
		content: "Nos encantaría celebrar nuestra boda contigo. Confirma tu asistencia y descubre todos los detalles del gran día."
	},
	{
		property: "og:type",
		content: "website"
	},
	{
		name: "twitter:card",
		content: "summary_large_image"
	}
] });
var Route = createFileRoute("/")({
	head,
	validateSearch: (search) => {
		const raw = Number(search["invitados"]);
		const invitados = Number.isFinite(raw) && raw > 0 ? Math.min(Math.floor(raw), 10) : void 0;
		const nombre = typeof search["nombre"] === "string" ? search["nombre"] : void 0;
		return {
			...invitados ? { invitados } : {},
			...nombre ? { nombre } : {}
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
//#endregion
export { Route as t };
