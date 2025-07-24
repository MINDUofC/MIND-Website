import Link from "next/link";

interface NavButtonProps {
    href: string,
    label: string;
}

export function NavButton({
    label,
    href,
}: NavButtonProps) {
    return (
        <Link href={href} className="">
            <span>{label}</span>
        </Link>
    );
}
// flex gap-2 p-2 hover:bg-gray-200 rounded mx-2
// flex item-center gap-6 sm:gap-6 ml-auto md:gap-8 lg:gap-10 items-center text-sm sm:text-base 