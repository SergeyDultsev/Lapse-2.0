import { NavBar } from "@components/nav-bar/ui/NavBar.tsx";
import { Outlet } from "react-router";

export const RootLayout = () => {
    return (
        <section className="container">
            <NavBar />
            <Outlet />
        </section>
    )
}