import { createBrowserRouter } from "react-router";
import RootLayouts from "../layout/RootLayouts";
import Home from "../Pages/Home/Home";
import Marathons from "../Pages/Marathons/Marathons";
import SignIn from "../Pages/Users/SignIn/SignIn";
import Register from "../Pages/Users/Register/Register";
import MarathonDetails from "../Pages/Marathons/MarathonDetails/MarathonDetails";
import AddMarathons from "../Pages/Dashboard/AddMarathons/AddMarathons";
import MyMarathonsList from "../Pages/Dashboard/MyMarathonsList/MyMarathonsList";
import MyApplyList from "../Pages/Dashboard/MyApplyList/MyApplyList";
import DashboardLayout from "../layout/DashboardLayout";
import axios from "axios";
import Loading from "../Pages/Home/Shared/Loading";
import PrivateRoute from "../routers/PrivateRoute";
import MarathonRegistration from "../Pages/MarathonRegistration/MarathonRegistration";
import Error404 from "../Pages/Error404";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children: [
            {
                index: true,
                Component: Home,
                hydrateFallbackElement: <Loading />,
                loader: async () => {
                    const res = await axios.get(`${import.meta.env.VITE_API_URL}/marathons?limit=6`);
                    return res.data;
                },
                handle: { title: 'Home - Marathon Management System' }
            },
            {
                path: 'marathons',
                Component: Marathons,
                hydrateFallbackElement: <Loading />,
                loader: async () => {
                    const res = await axios.get(`${import.meta.env.VITE_API_URL}/marathons`);
                    return res.data;
                },
                handle: { title: 'Marathons - Marathon Management System' }
            },
            {
                path: 'marathon/:id',
                Component: MarathonDetails,
                hydrateFallbackElement: <Loading />,
                loader: async ({ params }) => {
                    const res = await axios.get(`${import.meta.env.VITE_API_URL}/marathon/${params.id}`);
                    return res.data;
                },
                handle: { title: 'Marathon details - Marathon Management System' }
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
                handle: { title: 'Dashboard - Marathon Management System' },
                children: [
                    {
                        path: 'add-marathons',
                        element: <PrivateRoute><AddMarathons /></PrivateRoute>,
                        handle: { title: 'Add marathon - Marathon Management System' }
                    },
                    {
                        path: 'my-marathons-list',
                        element: <PrivateRoute><MyMarathonsList /></PrivateRoute>,
                        handle: { title: 'My marathon list - Marathon Management System' }
                    },
                    {
                        path: 'my-apply-list',
                        element: <PrivateRoute><MyApplyList /></PrivateRoute>,
                        hydrateFallbackElement: <Loading />,
                        loader: async () => { return null },
                        handle: { title: 'My apply list - Marathon Management System' }
                    }
                ]
            },
            {
                path: 'marathon-registration/:id',
                element: <PrivateRoute><MarathonRegistration /></PrivateRoute>,
                hydrateFallbackElement: <Loading />,
                loader: async ({ params }) => {
                    const res = await axios.get(`${import.meta.env.VITE_API_URL}/marathon/${params.id}`);
                    return res.data;
                },
                handle: { title: 'Marathon registration - Marathon Management System' }
            },
            {
                path: 'signin',
                Component: SignIn,
                handle: { title: 'Sign In - Marathon Management System' }
            },
            {
                path: 'register',
                Component: Register,
                handle: { title: 'Register - Marathon Management System' }
            },
            {
                path: '*',
                Component: Error404,
                handle: { title: '404 - Marathon Management System' }
            }
        ]
    }
]);
export default router;