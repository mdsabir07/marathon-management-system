import { createBrowserRouter } from "react-router";
import RootLayouts from "../layout/RootLayouts";
import Home from "../Pages/Home/Home";
import Marathons from "../Pages/Marathons/Marathons";
import SignIn from "../Pages/Users/SignIn/SignIn";
import Register from "../Pages/Users/Register/Register";
import MyApplyList from "../Pages/Marathons/MyApplyList/MyApplyList";
import MyMarathonsList from "../Pages/Marathons/MyMarathonsList/MyMarathonsList";
import MarathonDetails from "../Pages/Marathons/MarathonDetails/MarathonDetails";
import AddMarathons from "../Pages/Marathons/AddMarathons/AddMarathons";

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
                path: 'Add-Marathons',
                Component: AddMarathons
            },
            {
                path: 'Marathon-Details',
                Component: MarathonDetails
            },
            {
                path: 'My-Marathons-List',
                Component: MyMarathonsList
            },
            {
                path: 'My-Apply-List',
                Component: MyApplyList
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