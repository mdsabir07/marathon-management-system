import React from 'react';
import UseAuth from '../../hooks/UseAuth';

const DashboardHome = () => {
    const { user } = UseAuth();
    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl sm:text-5xl text-secondary font-bold">Welcome to your Dashboard👋</h2>
            <div className="mt-6 flex flex-col gap-8 sm:flex-row">
                <div className="flex-1">
                    <img
                        src={user?.photoURL || "https://via.placeholder.com/100"}
                        alt="Profile"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{user?.displayName || "No Name"}</h3>
                    <p>{user?.email}</p>
                </div>
            </div>
            <p>This is your default dashboard view. Select an option from the sidebar.</p>
        </div>
    );
};

export default DashboardHome;