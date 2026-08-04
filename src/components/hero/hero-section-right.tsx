import type { HeroRightProps } from "../types/hero"
import HeroRightCard from "./hero-right-card"

type Props = {
  items: HeroRightProps[]
}

export default function HeroSectionRight({items}: Props) {
  return (
    <HeroRightCard items={items} />
  )
}


