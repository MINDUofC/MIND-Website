import Link from "next/link";

interface NavButtonProps {
    href: string,
    label: string;
    className?: string; // Add this prop
}

export function NavButton({
    label,
    href,
    className, // Add this prop
}: NavButtonProps) {
    return (
        <Link href={href} className={className}> 
            <span>{label}</span>
        </Link>
    );
}