import { useState } from "react";
import axios from 'axios';
import UseAuth from "../../../hooks/UseAuth";
import { useEffect } from "react";
import Loading from "../../Home/Shared/Loading";
import ApplyRow from "./ApplyRow";

const MyApplyList = () => {
    const { user, loading } = UseAuth();
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/my-applications/${user.email}`);
                setApplications(res.data);
                console.log(res.data);
            } catch (err) {
                console.error('Error loading applications:', err);
            }
        }
        fetchData();
    }, [user?.email]);

    if (loading) return <Loading />;
    return (
        <>
            <h2 className="mb-4 text-2xl clr-secondary leading-tight">
                Total applied: <strong>{applications.length}</strong>
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="">
                        <tr className="text-left border-b border-opacity-20 border-gray-700">
                            <th className="p-3">No.</th>
                            <th className="p-3">Marathon Title</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Start date</th>
                            <th className="p-3">Additional information</th>
                            <th className="p-3">Phone & Email</th>
                            <th className="p-3 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application, index) => <ApplyRow
                            key={application.marathonId}
                            index={index}
                            application={application} />)}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyApplyList;