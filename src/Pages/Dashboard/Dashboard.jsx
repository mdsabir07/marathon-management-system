import React from 'react';
import AddMarathons from './AddMarathons/AddMarathons';
import MyMarathonsList from './MyMarathonsList/MyMarathonsList';
import MyApplyList from './MyApplyList/MyApplyList';

const Dashboard = () => {
    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs flex-col justify-start items-start tabs-box">
                <div className="flex">
                    <input type="radio" name="my_tabs_6" className="tab p-4" aria-label="Add Marathon" />
                    <div className="tab-content p-4">
                        <AddMarathons />
                    </div>
                </div>
                <div className="flex">
                    <input type="radio" name="my_tabs_6" className="tab p-4" aria-label="My Marathon List" defaultChecked />
                    <div className="tab-content p-4">
                        <MyMarathonsList />
                    </div>
                </div>
                <div className="flex">
                    <input type="radio" name="my_tabs_6" className="tab p-4" aria-label="My Apply List" />
                    <div className="tab-content p-4">
                        <MyApplyList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;