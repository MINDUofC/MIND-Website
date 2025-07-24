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
        <Link href={href} className=" flex gap-x-6 items-center justify-center">
            <span>{label}</span>
        </Link>
    );
}
// flex gap-2 p-2 hover:bg-gray-200 rounded mx-2