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

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'marathons',
                Component: Marathons
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
])
export default router;