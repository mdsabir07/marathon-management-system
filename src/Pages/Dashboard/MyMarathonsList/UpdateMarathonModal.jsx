import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateMarathonModal = ({ marathon, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...marathon });

    const [startRegDate, setStartRegDate] = useState(null);
    const [endRegDate, setEndRegDate] = useState(null);
    const [marathonDate, setMarathonDate] = useState(null);

    useEffect(() => {
        // Convert string dates to Date objects
        if (marathon.startRegDate) setStartRegDate(new Date(marathon.startRegDate));
        if (marathon.endRegDate) setEndRegDate(new Date(marathon.endRegDate));
        if (marathon.marathonDate) setMarathonDate(new Date(marathon.marathonDate));
    }, [marathon]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        const updatedData = {
            ...formData,
            startRegDate: startRegDate?.toISOString(),
            endRegDate: endRegDate?.toISOString(),
            marathonDate: marathonDate?.toISOString(),
        };

        onSave(updatedData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="border border-gray-600 p-6 rounded-lg w-full max-w-3xl overflow-y-auto max-h-[90vh]">
                <h2 className="text-2xl font-bold mb-4">Update Marathon</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4">
                    <div className="col-span-full">
                        <label className="text-sm">Title</label>
                        <input name='title' value={formData.title || ''} onChange={handleChange} type="text" className="w-full p-2 border rounded" />
                    </div>

                    <div className="col-span-full sm:col-span-4">
                        <label className="text-sm">Start Registration Date</label>
                        <DatePicker
                            selected={startRegDate}
                            onChange={setStartRegDate}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="col-span-full sm:col-span-4">
                        <label className="text-sm">End Registration Date</label>
                        <DatePicker
                            selected={endRegDate}
                            onChange={setEndRegDate}
                            minDate={startRegDate}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="col-span-full sm:col-span-4">
                        <label className="text-sm">Marathon Date</label>
                        <DatePicker
                            selected={marathonDate}
                            onChange={setMarathonDate}
                            minDate={endRegDate}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="col-span-full sm:col-span-6">
                        <label className="text-sm">Running Distance</label>
                        <select name='runDistance' value={formData.runDistance || ''} onChange={handleChange} className="w-full p-2 border rounded">
                            <option disabled value="">Select a distance</option>
                            <option value="25k">25k</option>
                            <option value="10k">10k</option>
                            <option value="3k">3k</option>
                        </select>
                    </div>

                    <div className="col-span-full sm:col-span-6">
                        <label className="text-sm">Location</label>
                        <input name='location' value={formData.location || ''} onChange={handleChange} type="text" className="w-full p-2 border rounded" />
                    </div>

                    <div className="col-span-full">
                        <label className="text-sm">Description</label>
                        <textarea name='description' value={formData.description || ''} onChange={handleChange} className="w-full p-2 border rounded" />
                    </div>

                    <div className="col-span-full">
                        <label className="text-sm">Marathon Image URL</label>
                        <input name='marathon_img' value={formData.marathon_img || ''} onChange={handleChange} type="url" className="w-full p-2 border rounded" />
                    </div>

                    <div className="col-span-full flex justify-end space-x-4 mt-4">
                        <button type="button" onClick={onClose} className="cursor-pointer px-4 py-2 btn-secondary rounded">Cancel</button>
                        <button type="submit" className="cursor-pointer px-4 py-2 bg-primary rounded">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMarathonModal;