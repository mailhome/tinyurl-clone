import { useState } from "react"
import { MdError } from "react-icons/md";
import type { DomainOptionProps } from "../types/hero";
import { DOMAINS } from "../constants/hero";



export default function HeroSectionBottom() {
  const [result, setResult] = useState<string | null>(null);
  const [selectedDomain, setSelectedDomain] = useState(DOMAINS[0].value);

  // TODO: complete the functonality of displaying the result

  return (
    <div className="w-full lg:mt-2 mt-0">
      <div className="flex items-start justify-start gap-y-4 flex-col">
        <h1 className="text-base md:text-xl lg:text-2xl text-background font-bold">Your Recent Links:</h1>
        <div className="bg-white lg:h-auto md:h-8 h-10 w-full rounded-sm">
          <p>{result ? 
            <div className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                    Your short link: <span className="font-semibold">{result}</span>
                  </div> :  
                  <span className="flex items-center justify-start gap-x-2 py-3  px-2">
            <MdError className="size-5" />
            <p className="font-semibold text-neutral-700 lg:text-base text-sm">No links yet in your history</p>
          </span>}</p>
        </div>
      </div>
    </div>
  )
}
