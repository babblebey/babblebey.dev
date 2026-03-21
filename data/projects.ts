import { Project, ProjectCategoryObj } from "@/types";

export const categories: ProjectCategoryObj[] = [
  {
    title: "itbey Co.",
    icon: "briefcase",
    desc: "In-production projects created out of specific business needs for itbey Co. or its clients."
  },
  {
    title: "hack",
    icon: "lightbulb",
    desc: "Some 'dumb' (mostly open source) ideas I have played or currently playing with."
  },
  {
    title: "tool",
    icon: "tool",
    desc: "Tools that I've created to (ease steps or) remove repitition from my workflow."
  },
  {
    title: "open source",
    icon: "oss",
    desc: "Open source projects that I'm maintaining, advocating or heavily contributing to."
  },
]

export const projects: Project[] = [
  {
    title: "jargons.dev",
    url: "https://jargons.dev",
    linkText: "Check it out",
    image: "/jargons.dev.png",
    desc: "A community-driven dictionary that simplifies software engineering terms.",
    category: "hack"
  },
  {
    title: "SportFXP",
    url: "https://sportfxp.com",
    linkText: "View Website",
    image: "/sportfxp.png",
    desc: "An infrastructure layer for modern Sports clubs and federation.",
    category: "itbey Co."
  },
  {
    title: "Hearts",
    url: "https://hearts.dev",
    linkText: "Visit Website",
    image: "/hearts.dev.png",
    desc: "A tool to help recognize and celebrate open source contributors.",
    category: "open source"
  },
  {
    title: "Semantic Release",
    url: "https://github.com/semantic-release/semantic-release",
    linkText: "See Project",
    image: "/semantic-release.png",
    desc: "A tool to help automate the release process of software projects.",
    category: "open source"
  },
  {
    title: "Private Key Converter",
    url: "https://private-key-converter.vercel.app",
    linkText: "Check it out",
    image: "/private-key-converter.png",
    desc: "A web interface where you convert private key formats.",
    category: "tool"
  },
  {
    title: "RobustHR",
    url: "https://robusthr.com",
    linkText: "View Website",
    image: "/robusthr.png",
    desc: "A product website for an all-in-one HR management software.",
    category: "itbey Co."
  },
];
