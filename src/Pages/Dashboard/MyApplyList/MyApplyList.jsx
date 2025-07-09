import { useState } from "react";
import UseAuth from "../../../hooks/UseAuth";
import { useEffect } from "react";
import Loading from "../../Home/Shared/Loading";
import ApplyRow from "./ApplyRow";
import { useCallback } from "react";
import { deleteApplication, getApplications, updateApplication } from "../../../api/api";
import UpdateModal from "./UpdateModal";
import Swal from "sweetalert2";

const MyApplyList = () => {
    const { user, loading } = UseAuth();
    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");

    const fetchApplications = useCallback(async () => {
        if (!user?.email) return;
        try {
            const query = searchTitle ? `?title=${encodeURIComponent(searchTitle)}` : "";
            const res = await getApplications(user.email, query);
            setApplications(res.data);
        } catch (err) {
            console.error('Error loading applications:', err);
        }
    }, [user?.email, searchTitle]);


    useEffect(() => {
        fetchApplications();
    }, [fetchApplications]);

    // handle delete
    const handleDelete = async (application) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });
        if (!result.isConfirmed) return;

        try {
            await deleteApplication(application._id);
            setApplications((prev) => prev.filter(app => app._id !== application._id));
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } catch (err) {
            console.error("Delete failed", err);
            Swal.fire("Delete failed!", "Something went wrong.", "error");
        }
    };

    // handle update
    const handleUpdate = (application) => {
        setSelectedApplication(application);
        setIsModalOpen(true);
    };

    // handle save update
    const handleSaveUpdate = async (updatedData) => {
        const result = await Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        });
        if (!result.isConfirmed) return;

        try {
            const { _id, ...dataToUpdate } = updatedData;
            await updateApplication(_id, dataToUpdate);
            await fetchApplications();
            setIsModalOpen(false);

            Swal.fire("Saved!", "", "success");
        } catch (err) {
            console.error("Update failed", err);
            Swal.fire("Failed to save!", err?.response?.data?.message || "Something went wrong.", "error");
        }
    };

    if (loading) return <Loading />;
    return (
        <>
            <h2 className="mb-4 text-2xl clr-secondary leading-tight">
                Total applied: <strong>{applications.length}</strong>
            </h2>
            <div className="mb-4 flex gap-2 items-center">
                <input
                    type="text"
                    placeholder="Search by Marathon Title"
                    className="input focus:outline-0 input-bordered w-full max-w-xs"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") fetchApplications();
                    }}
                />
                <button
                    className="btn clr-primary-bg"
                    onClick={fetchApplications}
                >
                    Search
                </button>
                <button
                    className="btn clr-secondary-bg"
                    onClick={() => {
                        setSearchTitle("");
                        fetchApplications();
                    }}
                >
                    Clear
                </button>
            </div>
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
                            <th className="p-3">#</th>
                            <th className="p-3">Marathon Title</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Start date</th>
                            <th className="p-3">Additional information</th>
                            <th className="p-3">Phone & Email</th>
                            <th className="p-3 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application, index) => (
                            <ApplyRow
                                key={application._id}
                                index={index}
                                application={application}
                                onUpdate={handleUpdate}
                                onDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {isModalOpen && selectedApplication && (
                <UpdateModal
                    application={selectedApplication}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSaveUpdate}
                />
            )}
        </>
    );
};

export default MyApplyList;