import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout (){

    return (
        <div className="min-h-screen bg-brand">
            {/* componente Nabvar creado anteriormente */}
            <Navbar/>
            <main className="mx-auto max-w7 px-4 py-6">
                <Outlet/>
            </main>
        </div>
    )
};