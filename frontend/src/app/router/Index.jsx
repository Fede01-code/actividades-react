import MainLayout from "../../layouts/MainLayout";
import AuthLayout from "../../layouts/AuthLayout";
import HomePage from "../../features/home/pages/HomePages";
import ProfilePage from "../../features/users/pages/ProfilePage";
import ConfigUserPage from "@/features/users/pages/ConfigUserPage"
import { createBrowserRouter } from "react-router-dom"
import { ListUserPage } from "@/features/users";

const router = createBrowserRouter ([
    {
    
        
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "usuario",
                element: <ConfigUserPage/>
            },
            {
                path: "tabla",
                element: <ListUserPage/>
            },
            {
                path: "videos",
                element: <h1 className="p-4">Videos</h1>
            },
            {
                path: "perfil",
                element: <ProfilePage/>
            },
            {
                path: "users/:id/edit",
                element: <ProfilePage/>
            }
        ]
    },
    {
        element: <AuthLayout/>,
        children: [
            {
                path: "login",
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