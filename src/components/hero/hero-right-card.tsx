import { cn } from '@/lib/utils'
import { useState } from 'react'
import type { HeroRightProps, TabId } from '../types/hero'
import { Card, CardFooter } from '../ui/card'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import HeroFormField from './hero-form-field'
import { DOMAINS } from '../constants/hero'

type Props = {
    items: HeroRightProps[]
}

export default function HeroRightCard({ items }: Props) {
   const [activeTab, setActiveTab] = useState<TabId>("shorten");

    return (
        <Card className='overflow-hidden rounded-xl p-0 shadow-2xl lg:w-10/12 w-full bg-[#F8F9FA] mx-auto h-auto py-3'>
            <Tabs defaultValue={items[0]?.topHeading} className="w-full lg:-mt-5 -mt-2 border-none bg-none bg-[#F8F9FA] rounded-none">
                <TabsList className="grid grid-cols-2 w-full rounded-none border-none h-full text-black hover:text-black">
                    {items.map((item, index) => {
                        activeTab === item.id
                        return (
                            <TabsTrigger value={item.topHeading} key={index} onClick={() => setActiveTab("shorten")}  className={cn("w-full flex items-center justify-center cursor-pointer h-10 px-2 bg-[#F8F9FA] hover:opacity-100 shadow-none font-bold  text-black data- active:text-black lg:py-5 py-2 rounded-none border-none", activeTab ? "bg-[#0D2342] rounded-tl-md rounded-br-none rounded-bl-none rounded-tr-md hover:text-white text-white h-full": "hover:text-black text-black [state=active]:text-black lg:text-lg text-sm px-2")}>
                            <item.topHeadingIcon className="lg:mr-2 mr-1 size-3" />
                            <span className="lg:text-xl text-md font-semibold">{item.topHeading}</span>
                        </TabsTrigger>
                        )
                    })}
                </TabsList>
                {items.map((item, index) => (
                    <HeroFormField 
                    item={item} 
                    key={index}
                    domain={DOMAINS[0]} />
                ))}
                 <CardFooter className="w-full flex flex-col items-center px-5 justify-center gap-4">
                        <span className='italic text-neutral-800 text-base'>By clicking Shorten Link, you agree with our <a href='/terms' className='text-blue-500 hover:underline'>Terms of Service</a>,  <a href='/terms' className='text-blue-500 hover:underline'>Privacy Policy</a>, and <a href='/terms' className='text-blue-500 hover:underline'>Use of Cookies.</a></span>
                    </CardFooter>
            </Tabs>
        </Card>
    )
}
