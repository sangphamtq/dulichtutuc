import Header from "@/src/components/Header";

export default function PublicLayout({ children } : {children: React.ReactNode}) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}