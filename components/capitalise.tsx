import { useCapitalise } from "@/lib/hooks/use-capitalise";

interface CapitaliseProps {
  text: string
}

export function Capitalise({ text }: CapitaliseProps) {
  const capText = useCapitalise(text);

  return (
    <>
      { capText }
    </>
  )
}