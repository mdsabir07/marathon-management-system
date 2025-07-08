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
                path: 'Marathon-Details',
                Component: MarathonDetails
            },
            {
                path: 'dashboard',
                Component: DashboardLayout,
                children: [
                    {
                        path: 'add-marathons',
                        Component: AddMarathons
                    },
                    {
                        path: 'my-marathons-list',
                        Component: MyMarathonsList
                    },
                    {
                        path: 'my-apply-list',
                        Component: MyApplyList
                    }
                ]
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