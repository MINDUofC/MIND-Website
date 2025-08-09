import Link from "next/link";

interface NavButtonProps {
    href: string,
    label: string;
    className?: string;
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
