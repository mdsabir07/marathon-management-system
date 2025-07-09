import { useEffect } from 'react';
import { NavLink, Outlet, useMatches } from 'react-router';

const DashboardLayout = () => {
    const matchs = useMatches();
    useEffect(() => {
        const matchWithTitle = [...matchs].reverse().find(match => match.handle?.title);
        if (matchWithTitle) {
            document.title = matchWithTitle.handle.title;
        }
    }, [matchs])
    return (
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 w-11/12 mx-auto py-16 sm:py-30">
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