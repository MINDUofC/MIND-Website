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
        <Link href={href} className=" item-center">
            <span>{label}</span>
        </Link>
    );
}
// flex gap-2 p-2 hover:bg-gray-200 rounded mx-2