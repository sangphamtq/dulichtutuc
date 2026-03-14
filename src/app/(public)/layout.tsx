import Header from "@/src/components/Header";

export default function PublicLayout({ children } : {children: React.ReactNode}) {
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto p-6 mt-16">{children}</main>
        </>
    )
}