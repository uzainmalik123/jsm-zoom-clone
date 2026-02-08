"use client"

import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Menu} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {sidebarLinks} from "@/constants";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const MobileNav = () => {
    const pathName = usePathname()
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild>
                    <Menu className="text-white cursor-pointer sm:hidden" width={36} height={36}/>
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="border-none bg-dark-1 px-6 py-4"
                >
                    <Link href="/" className="flex items-center gap-1">
                        <Image
                            src="/icons/yoom-logo.svg"
                            alt="Yoom Logo"
                            width={128}
                            height={32}
                        />
                    </Link>
                    <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto">
                            <section className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((link) => {
                                    const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`)
                                    return (
                                        <SheetClose asChild key={link.route}>
                                            <Link href={link.route}
                                                  className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60', {
                                                      'bg-blue-1': isActive,
                                                  })}>
                                                <link.imageUrl width={20} height={20}/>
                                                <p className="font-semibold">{link.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </section>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}
export default MobileNav
