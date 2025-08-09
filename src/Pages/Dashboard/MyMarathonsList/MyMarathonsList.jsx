import Swal from "sweetalert2";
import { useEffect, useState, useCallback } from "react";
import UseAuth from "../../../hooks/UseAuth";
import { deleteMarathon, getUserMarathons, updateMarathon } from "../../../api/api";
import Loading from "../../Home/Shared/Loading";
import UpdateMarathonModal from "./UpdateMarathonModal";

const MyMarathonsList = () => {
    const { user, loading } = UseAuth();
    const [marathons, setMarathons] = useState([]);
    const [selectedMarathon, setSelectedMarathon] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchMarathons = useCallback(async () => {
        try {
            const res = await getUserMarathons(user.email);
            setMarathons(res.data);
        } catch (err) {
            console.error("Error loading marathons:", err);
        }
    }, [user.email]);

    useEffect(() => {
        fetchMarathons();
    }, [fetchMarathons]);

    const handleDelete = async (marathon) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        });
        if (!result.isConfirmed) return;
        try {
            await deleteMarathon(marathon._id);
            await fetchMarathons(); 
            Swal.fire("Deleted!", "Marathon deleted successfully.", "success");
        } catch (err) {
            console.error("Delete failed", err);
            Swal.fire("Delete failed!", "Something went wrong.", "error");
        }
    };

    const handleUpdate = (marathon) => {
        setSelectedMarathon(marathon);
        setIsModalOpen(true);
    };

    // Handle update marathon data
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
            const { _id, ...updatePayload } = updatedData;
            const res = await updateMarathon(_id, updatePayload);

            // Update local state with the updated marathon
            setMarathons(prev =>
                prev.map(m => (m._id === res.data._id ? res.data : m))
            );

            setIsModalOpen(false);
            Swal.fire("Saved!", "", "success");
        } catch (err) {
            console.error("Update failed:", err.response?.data || err);
            Swal.fire(
                "Failed to save!",
                err?.response?.data?.message || "Something went wrong.",
                "error"
            );
        }
    };

    if (loading) return <Loading />;

    return (
        <>
            <h2 className="mb-4 text-2xl text-secondary leading-tight">
                Total marathons: <strong>{marathons.length}</strong>
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="">
                        <tr className="text-left">
                            <th className="p-3">#</th>
                            <th className="p-3">Image</th>
                            <th className="p-3">Title</th>
                            <th className="p-3">Dates</th>
                            <th className="p-3">Distance</th>
                            <th className="p-3">Location</th>
                            <th className="p-3">Email</th>
                            <th className="p-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marathons.map((marathon, index) => (
                            <tr key={marathon._id} className="border-t">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">
                                    <img src={marathon.marathon_img} alt="Marathon" className="w-16 h-16 object-cover rounded" />
                                </td>
                                <td className="p-3">{marathon.title}</td>
                                <td className="p-3 text-sm">
                                    <div><strong>Reg:</strong> {new Date(marathon.startRegDate).toLocaleDateString()} - {new Date(marathon.endRegDate).toLocaleDateString()}</div>
                                    <div><strong>Run:</strong> {new Date(marathon.marathonDate).toLocaleDateString()}</div>
                                </td>
                                <td className="p-3">{marathon.runDistance}</td>
                                <td className="p-3">{marathon.location}</td>
                                <td className="p-3 text-xs">{marathon.email}</td>
                                <td className="p-3 text-right space-x-2">
                                    <button
                                        onClick={() => handleUpdate(marathon)}
                                        className="cursor-pointer px-3 py-1 btn btn-primary rounded hover:btn-secondary"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(marathon)}
                                        className="cursor-pointer px-3 py-1 bg-red-600 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && selectedMarathon && (
                <UpdateMarathonModal
                    marathon={selectedMarathon}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSaveUpdate}
                />
            )}
        </>
    );
};

export default MyMarathonsList;