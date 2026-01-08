import MainLayout from "@/src/layout/main-layout";

export default function General({children}: {children: React.ReactNode}) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}