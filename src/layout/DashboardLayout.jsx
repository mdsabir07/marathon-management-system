import { NavLink, Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 px-6 sm:px-20 py-16 sm:py-30">
            {/* Sidebar */}
            <div className="w-full sm:w-2/12">
                <div className="grid gap-4">
                    <NavLink
                        to="add-marathons"
                        className={({ isActive }) =>
                            `flex items-center text-xl gap-2 p-2 rounded ${isActive ? 'clr-primary-bg' : ''}`
                        }
                    >
                        Add Marathon
                    </NavLink>
                    <NavLink
                        to="my-marathons-list"
                        className={({ isActive }) =>
                            `flex items-center text-xl gap-2 p-2 rounded ${isActive ? 'clr-primary-bg' : ''}`
                        }
                    >
                        My Marathon List
                    </NavLink>
                    <NavLink
                        to="my-apply-list"
                        className={({ isActive }) =>
                            `flex items-center text-xl gap-2 p-2 rounded ${isActive ? 'clr-primary-bg' : ''}`
                        }
                    >
                        My Apply List
                    </NavLink>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full sm:w-10/12">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;