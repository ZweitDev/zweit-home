import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/offers/development", "routes/offers/development.tsx"),
] satisfies RouteConfig;
