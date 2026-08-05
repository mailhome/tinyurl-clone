import { shortenLinkSchema } from "@/lib/schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { TabsContent } from "../ui/tabs";
import type { DomainOptionProps, HeroRightProps, TabId } from "../types/hero";
import { useState } from "react";
import { CardContent } from "../ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { DOMAINS } from "../constants/hero";
import { ChevronDown } from "lucide-react";

type Props = {
    item: HeroRightProps
    domain: DomainOptionProps
}

export default function HeroFormField({ item, domain }: Props) {
    const [activeTab, setActiveTab] = useState<TabId>("shorten");
    const [longUrl, setLongUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [selectedDomain, setSelectedDomain] = useState(DOMAINS[0].value);


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!longUrl.trim()) return;
        setSubmitting(true);
        // simulated request — swap for your real mutation (e.g. TanStack Query's useMutation)
        setTimeout(() => {
            const slug = alias || Math.random().toString(36).slice(2, 8);
            setResult(`${selectedDomain}/${slug}`);
            setSubmitting(false);
        }, 600);
    }

    const form = useForm<z.infer<typeof shortenLinkSchema>>({
        resolver: zodResolver(shortenLinkSchema),
        defaultValues: {
            longUrl: "",
            domain: "",
            alias: "",
        }
    });

    return (
        <TabsContent value={item.topHeading} className=" lg:pt-10 pt-3 lg:px-5">
            <CardContent className='flex-1 w-full xl:px-4 xl:mb-0'>
                {activeTab === item.id ? (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-start justify-center gap-y-6 pt-4 h-full'>
                        <FieldGroup>
                            <FieldSet className='w-full'>
                                <FieldGroup className='w-full'>
                                    <Controller
                                        control={form.control}
                                        name='longUrl'
                                        render={({ field, fieldState }) => (
                                            <Field
                                                data-invalid={true}
                                                className='flex items-start justify-start gap-2 flex-col w-full'>
                                                <FieldLabel
                                                    htmlFor='name'
                                                    className='flex items-center justify-start xl:gap-x-2'>
                                                    <item.urlStringIcon className='lg:size-5 size-4 text-black' />
                                                    <span className='text-lg md:text-md font-semibold text-black'>{item.urlString}</span>
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    id="link"
                                                    required
                                                    value={longUrl}
                                                    onChange={(e) => setLongUrl(e.target.value)}
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder='Place long URL here'
                                                    className='w-full h-8 rounded-sm px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:placeholder:text-lg placeholder:text-sm lg:h-10  '
                                                    autoComplete='off' />
                                            </Field>
                                        )}
                                    />

                                    <Field className='grid grid-cols-12 w-full'>
                                        <div className="relative col-span-6 flex flex-col gap-2 grow items-start justify-start w-full">
                                            <FieldLabel
                                                htmlFor="domain"
                                                className="flex items-center justify-start xl:gap-x-2">
                                                <item.domainIcon className='w-4 h-4' />
                                                <span className="text-lg font-semibold text-black">{item.domainHeading}</span>
                                                <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <div className="relative w-full">
                                                <select
                                                    id="domain"
                                                    value={selectedDomain}
                                                    onChange={(e) => setSelectedDomain(e.target.value)}
                                                    className="w-full appearance-none rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20">
                                                    {DOMAINS.map((d) => (
                                                        <option key={d.label} value={d.value}>
                                                            {d.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                            </div>

                                        </div>

                                        <div className="relative flex flex-col gap-2 items-start justify-end col-span-6 w-full">
                                            <FieldLabel
                                                htmlFor="alias"
                                                className="flex items-end justify-start xl:gap-x-2">
                                                    <item.aliasIcon className="w-4 h-4" />
                                                    <span className="text-lg font-semibold text-black">{item.aliasText}</span>
                                            </FieldLabel>
                                            <Input
                                                id="alias"
                                                type="text"
                                                value={alias}
                                                onChange={(e) => setAlias(e.target.value)}
                                                placeholder='Add Alias here'
                                                className='w-full h-10 rounded-sm  border px-3 py-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg focus:border-transparent'
                                            />
                                            <span className="text-[9px] text-muted-foreground -mt-1">Must have at least 5 characters</span>
                                        </div>
                                    </Field>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full rounded-md bg-emerald-600 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-60"
                                    >
                                        {submitting ? "Shortening link..." : "Shorten link"}
                                    </button>
                                </FieldGroup>
                            </FieldSet>
                        </FieldGroup>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center justify-center gap-y-3 md:pt-4 h-full'>
                        <FieldGroup>
                            <FieldSet className='w-full'>
                                <FieldGroup className='w-full'>
                                    <Controller
                                        control={form.control}
                                        name='longUrl'
                                        render={({ field, fieldState }) => (
                                            <Field
                                                data-invalid={true}
                                                className='flex items-start justify-start gap-2 flex-col w-full'>
                                                <FieldLabel
                                                    htmlFor='name'
                                                    className='flex items-center justify-start xl:gap-x-2'>
                                                    <item.urlStringIcon className='size-4 text-black' />
                                                    <span className='text-lg md:text-md font-semibold text-black'>{item.urlString}</span>
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    id="link"
                                                    required
                                                    value={longUrl}
                                                    onChange={(e) => setLongUrl(e.target.value)}
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder='Place long URL here'
                                                    className='w-full h-8 rounded-sm px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:placeholder:text-lg placeholder:text-sm lg:h-10 '
                                                    autoComplete='off' />
                                            </Field>
                                        )}
                                    />

                                    <Field className='grid grid-cols-12 w-full'>
                                        <div className="relative col-span-6 flex flex-col gap-2 grow items-start justify-start w-full">
                                            <FieldLabel
                                                htmlFor="domain"
                                                className="flex items-center justify-start xl:gap-x-2">
                                                <item.domainIcon className='w-4 h-4' />
                                                <span className="text-lg font-semibold text-black">{item.domainHeading}</span>
                                                <span className='text-red-500'>*</span>
                                            </FieldLabel>
                                            <div className="relative w-full">
                                                <select
                                                    id="domain"
                                                    value={selectedDomain}
                                                    onChange={(e) => setSelectedDomain(e.target.value)}
                                                    className="w-full appearance-none rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20">
                                                    {DOMAINS.map((d) => (
                                                        <option key={d.label} value={d.value}>
                                                            {d.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                            </div>

                                        </div>

                                        <div className="relative flex flex-col gap-2 items-start justify-end col-span-6 w-full">
                                            <FieldLabel
                                                htmlFor="alias"
                                                className="flex items-end justify-start xl:gap-x-2">
                                                    <item.aliasIcon className="w-4 h-4" />
                                                    <span className="text-lg font-semibold text-black">{item.aliasText}</span>
                                            </FieldLabel>
                                            <Input
                                                id="alias"
                                                type="text"
                                                value={alias}
                                                onChange={(e) => setAlias(e.target.value)}
                                                placeholder='Add Alias here'
                                                className='w-full h-10 rounded-sm  border px-3 py-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg focus:border-transparent'
                                            />
                                            <span className="text-[9px] text-muted-foreground -mt-1">Must have at least 5 characters</span>
                                        </div>
                                    </Field>
                                     <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full rounded-md bg-emerald-600 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-60"
                                    >
                                        {submitting ? "Generating QR Code" : "Generate QR Code"}
                                    </button>
                                </FieldGroup>
                            </FieldSet>
                        </FieldGroup>
                    </form>
                )}
            </CardContent>
        </TabsContent>
    )
}
