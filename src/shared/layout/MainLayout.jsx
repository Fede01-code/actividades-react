import Navbar from "./Navbar";
import herobg from "@/assets/images/imagen-hero.jpg"
import { Outlet } from "react-router-dom";

export default function MainLayout (){

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-10 bg-cover bg-center" 
                style = {{backgroundImage:`url(${herobg})`}}>
            </div>

            {/* componente Nabvar creado anteriormente */}
            <Navbar/>
            <main className="mx-auto max-w7 px-4 py-6">
                <Outlet/>
            </main>
        </div>
    )
};