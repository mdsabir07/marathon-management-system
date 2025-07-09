import { useState } from "react";

const UpdateModal = ({ application, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...application });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
                <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-black"
                    onClick={onClose}
                >
                    ✖
                </button>
                <h2 className="text-xl font-semibold mb-4">Update Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium">First Name</label>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Last Name</label>
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Contact</label>
                        <input
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Additional Info</label>
                        <textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                        />
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-primary mr-2">Save</button>
                        <button type="button" onClick={onClose} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateModal;