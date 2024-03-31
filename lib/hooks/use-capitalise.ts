export function useCapitalise(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}