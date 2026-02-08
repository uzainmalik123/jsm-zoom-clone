import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

const Navbar = () => {
    return (
        <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/icons/yoom-logo.svg"
                    alt="Yoom Logo"
                    width={128}
                    height={32}
                    className="max-sm:w-24"
                />
            </Link>
            <div className="flex-between gap-5">
                {/* Clerk User Management */}

                <MobileNav />
            </div>
        </nav>
    )
}
export default Navbar
