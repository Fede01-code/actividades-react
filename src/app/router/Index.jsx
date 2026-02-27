import MainLayout from "../../shared/layout/MainLayout";
import AuthLayout from "../../shared/layout/AuthLayout";
import HomePage from "../../features/home/pages/HomePages";
import ProfilePage from "../../features/users/pages/ProfilePage";
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter ([
    {
    
        
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "cursos",
                element: <h1 className="p-4">Cursos</h1>
            },
            {
                path: "contacto",
                element: <h1 className="p-4">Contacto</h1>
            },
            {
                path: "videos",
                element: <h1 className="p-4">Videos</h1>
            },
            {
                path: "perfil",
                element: <ProfilePage/>
            }
        ]
    },
    {
        element: <AuthLayout/>,
        children: [
            {
                path: "login",
                element: <AuthLayout/>
            },
            {
                path: "forgot-password",
                element: <h1 className="p-4">recuperar contraseña</h1>
            },
            {
                path: "reset-password",
                element: <h1 className="p-4">Cambiar contraseña</h1>
            },
    ]

}
]);

export default router;