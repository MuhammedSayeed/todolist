import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "../pages/Layout"
import HomePage from "../pages"
import LoginPage from "../pages/Login"
import RegisterPage from "../pages/Register"
import PageNotFound from "../pages/PageNotFound"
import ProtectedRoutes from "../components/auth/ProtectedRoutes"

const isLoggedIn = false;
const userData: { email: string } | null = isLoggedIn ? { email: "email@gmail.com" } : null;


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Root layout */}
            <Route path="/" element={<RootLayout />} >
                <Route index element={
                    <ProtectedRoutes isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
                        <HomePage />
                    </ProtectedRoutes>
                } />
                <Route path="login" element={
                    <ProtectedRoutes isAllowed = {!isLoggedIn} redirectPath="/" data={userData}>
                        <LoginPage />
                    </ProtectedRoutes>
                } />
                <Route path="register" element={
                    <ProtectedRoutes isAllowed = {!isLoggedIn} redirectPath="/" data={userData}>
                        <RegisterPage/>
                    </ProtectedRoutes>
                } />
            </Route>

            {/* Page not found */}
            <Route path="*" element={<PageNotFound />} />

        </>
    )
)

export default router