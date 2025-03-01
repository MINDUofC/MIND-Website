export default async function Template({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <div className="animate-apper min-h-screen bg-cover bg-center">
                {children}
        </div>
    )
}