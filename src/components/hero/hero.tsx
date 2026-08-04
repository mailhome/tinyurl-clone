import { heroLeftData, heroRightData } from "../constants/hero";
import HeroSectionBottom from "./hero-section-bottom";
import HeroSectionLeft from "./hero-section-left";
import HeroSectionRight from "./hero-section-right";


export default function Hero() {
  return (
    <div className="lg:h-screen h-auto w-full bg-[#0D2342]">
        <div className="mx-auto h-full container px-5 py-3">
            <div className="flex flex-col items-start justify-start gap-y-10 lg:mt-20 my-10 w-full">
                <div className="grid lg:grid-cols-2 grid-cols-1 w-full lg:h-auto gap-x-10 gap-y-10 items-center justify-center">
                    <HeroSectionLeft items={heroLeftData} />
                    <HeroSectionRight items={heroRightData} />
                </div>
                <HeroSectionBottom />
            </div>
        </div>
    </div>
  )
}
