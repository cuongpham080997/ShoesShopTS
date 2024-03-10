import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";

// Nên import header từ user qua được không? Không - Header là con của thèn User cùng cấp với admin

// Nếu như hai component đều muốn sử dụng Header thì làm sao?

export function AdminTemplate() {
    return (
        <>
            {/* <header>Header</header> */}
            <Header />

            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                }}
            >
                <aside>Sidebar</aside>

                <main>
                    Component Page: <Outlet />
                </main>
            </div>
        </>
    );
}
