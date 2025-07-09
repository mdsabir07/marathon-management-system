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
                }
            },
            {
                path: 'marathons',
                element: <PrivateRoute><Marathons /></PrivateRoute>,
                hydrateFallbackElement: <Loading />,
                loader: async () => {
                    const res = await axios.get(`${import.meta.env.VITE_API_URL}/marathons`);
                    return res.data;
                }
            },
            {
                path: 'marathon/:id',
                element: <PrivateRoute><MarathonDetails /></PrivateRoute>,
                hydrateFallbackElement: <Loading />,
                loader: async ({ params }) => {
                    const res = await axios.get(`${import.meta.env.VITE_API_URL}/marathon/${params.id}`);
                    return res.data;
                }
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
                children: [
                    {
                        path: 'add-marathons',
                        element: <PrivateRoute><AddMarathons /></PrivateRoute>
                    },
                    {
                        path: 'my-marathons-list',
                        element: <PrivateRoute><MyMarathonsList /></PrivateRoute>
                    },
                    {
                        path: 'my-apply-list',
                        element: <PrivateRoute><MyApplyList /></PrivateRoute>,
                        hydrateFallbackElement: <Loading />,
                        loader: async () => { return null }
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
                }
            },
            {
                path: 'signin',
                Component: SignIn
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    }
]);
export default router;