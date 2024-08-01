import { Project, ProjectCategoryObj } from "@/types";

export const categories: ProjectCategoryObj[] = [
  {
    title: "itbey Co.",
    icon: "briefcase",
    desc: "In-production projects crafted for businesses at itbey Co."
  },
  {
    title: "hack",
    icon: "lightbulb",
    desc: "Some 'dumb' ideas I have played or currently playing with."
  },
  {
    title: "tool",
    icon: "tool",
    desc: "Tools that I've created to (ease steps or) remove repitition from my workflow."
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
  {
    title: "Multifreight Nig. Ltd.",
    url: "https://multifreightnig.com",
    linkText: "View Website",
    image: "/mfn.png",
    desc: "A website developed for logistic and supply chain company in Nigeria.",
    category: "itbey Co."
  },
  {
    title: "Cybernetics Oil (CISL)",
    url: "https://cyberneticsoil.com/",
    linkText: "Visit Website",
    image: "/cisl.png",
    desc: "A website developed for a petroleum products trading company in Nigeria.",
    category: "itbey Co."
  },
];
