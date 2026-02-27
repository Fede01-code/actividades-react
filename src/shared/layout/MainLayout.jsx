import Navbar from "./Navbar";
import herobg from "@/assets/images/imagen-hero.jpg";
import { Outlet } from "react-router-dom";

export default function MainLayout (){

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-10 bg-cover bg-center" 
                style = {{backgroundImage:`url(${herobg})`}}>
            </div>

            {/* filtro */}
            <div className="absolute inset-0 -z-10 bg-black/40"></div>

            {/* componente Nabvar creado anteriormente */}
            <header className="relative z-20">
                <Navbar variant="solid" />
            </header>
            <main className="mx-auto max-w7 px-4 py-6">
                <Outlet/>
            </main>
        </div>
    )
};