import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("./routes/home.tsx"),

  route("blog", "./routes/blog.tsx"),
  route("pictures", "./routes/pictures.tsx"),
  route("recepies", "./routes/recepies.tsx"),
  route("trash", "./routes/trash.tsx"),
] satisfies RouteConfig
