import { Suspense } from "react";
import { Outlet } from "react-router-dom";
//@ts-ignore
import { Header } from "@/templates/components/header/header";
//@ts-ignore
import { Footer } from "@/templates/components/footer";
//@ts-ignore
import { Menu } from "src/templates/components/menu";

// Nên đặt ở đâu

export function UserTemplate() {
    return (
        <>
            <Header />
            <Menu />

            <main>
                <Suspense fallback="Loading...">
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </>
    );
}