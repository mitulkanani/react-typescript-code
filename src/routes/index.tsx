import Layout from '../app/features/layouts/DashboardLayouts';
import SignUp from "../app/features/authentication/signup/SignUp";
import StartUp from "../app/features/authentication/startup/StartUp";

const indexRoutes = [
    { path: "/signup", component: SignUp },
    { path: "/home", component: StartUp },
    { path: "/", component: Layout }
];

export default indexRoutes;
