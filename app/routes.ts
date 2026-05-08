import {
    type RouteConfig,
    index,
    layout,
    prefix,
    route,
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("post/:postId", "routes/post.tsx"),

    // Nested routes
    layout("routes/dashboard.tsx", [
        ...prefix("pedro", [
            route("finances", "routes/finances.tsx"),
            route("personal-info", "routes/personal-info.tsx"),
        ]),
    ]),
] satisfies RouteConfig;