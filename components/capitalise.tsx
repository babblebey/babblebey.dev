import { useCapitalise } from "@/hooks/use-capitalise";

interface CapitaliseProps {
  text: string
}

export default function Capitalise({ text }: CapitaliseProps) {
  const capText = useCapitalise(text);

  return (
    <>
      { capText }
    </>
  )
}