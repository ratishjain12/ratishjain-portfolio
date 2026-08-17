const skillIconMap: Record<string, string> = {
  react: "react",
  "next.js": "nextdotjs",
  nextjs: "nextdotjs",
  typescript: "typescript",
  javascript: "javascript",
  "node.js": "nodedotjs",
  nodejs: "nodedotjs",
  python: "python",
  postgres: "postgresql",
  postgresql: "postgresql",
  docker: "docker",
  aws: "amazonaws",
  "c++": "cplusplus",
  shopify: "shopify",
  framer: "framer",
  mongodb: "mongodb",
  "mongo db": "mongodb",
  graphql: "graphql",
  redis: "redis",
  tailwind: "tailwindcss",
  tailwindcss: "tailwindcss",
  golang: "go",
  go: "go",
  java: "openjdk",
  rust: "rust",
  kubernetes: "kubernetes",
  terraform: "terraform",
  git: "git",
  figma: "figma",
};

export function skillsToIconSlugs(skills: string[]): string[] {
  return skills
    .map((skill) => skillIconMap[skill.trim().toLowerCase()])
    .filter((slug): slug is string => Boolean(slug));
}
