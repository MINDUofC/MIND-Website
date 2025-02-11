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
        <Link href={href} className="flex item-center gap-2 p-2 hover:bg-gray-200 rounded">
            <span>{label}</span>
        </Link>
    );
}