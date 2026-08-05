import type { HeroLeftProps } from "../types/hero"


type Props = {
  items: HeroLeftProps[]
}

export default function HeroSectionLeft ({ items }: Props) {
  return (
    <div className="flex flex-col items-start justify-start gap-y-4 lg:gap-y-6 text-white">
      {items.map((item: HeroLeftProps, index: number) => (
        <div key={index} className="flex flex-col items-start justify-start gap-y-4 w-full lg:gap-y-9">
          <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold leading-20">{item.heading}</h1>
          <p className="text-md md:text-xl whitespace-pre-line">{item.description}</p>
          <div className="flex-col lg:flex-row flex items-start justify-start gap-y-4 lg:gap-x-6 w-full mt-4 -lg:mt-10">
            <button className="text-lg md:text-xl lg:text-xl text-center w-full lg:w-auto px-4 lg:px-8 lg:py-6 lg:h-14 py-2 h-10 cursor-pointer flex items-center justify-center text-black bg-white rounded-md">
              <a href={item.buttonViewUrl}>
                {item.buttonViewText}
              </a>
            </button>
            <button className="text-lg lg:text-xl text-center w-full lg:w-auto px-4 lg:px-8 lg:py-6 lg:h-14 py-2 h-10 cursor-pointer border border-[#2F647D] bg-[#2F647D] text-white hover:bg-[#2F647D] rounded-md justify-center flex items-center">
              <a href={item.buttonCreateUrl}>
                {item.buttonCreateText}
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
