import type { Quote } from "@/types";

export const quotes: Quote[] = [
  "In the realm of software development, the true brilliance lies not in chasing shiny stacks or tools, but in embracing problem-solving as our guiding light. Innovation flourishes when we channel our energy into crafting solutions that stand the test of challenges.",
  "In software devlopment, it's problem-solving that illuminates the path, not the allure of shiny stacks. Solutions reign supreme over trends.",
  "In software engineering, problem-solving shines brighter than trendy tools. Solutions outlast the trends and hype."
];

export const getAProblemFirstQuote = (quoteList: Quote[] = quotes): string => {
  const idx = Math.floor(Math.random() * quoteList.length);
  return quoteList[idx];
}