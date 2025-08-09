import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import UseAuth from '../../../hooks/UseAuth';
// import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AddMarathons = () => {
    const { user } = UseAuth();
    // const navigate = useNavigate();
    // react date field data
    const [startRegDate, setStartRegDate] = useState(null);
    const [endRegDate, setEndRegDate] = useState(null);
    const [marathonDate, setMarathonDate] = useState(null);

    const handleAddMarathon = e => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const formNewData = Object.fromEntries(formData.entries());
        formNewData.email = user?.email;
        console.log(formNewData);

        axios.post(`${import.meta.env.VITE_API_URL}/add-marathon`, formNewData)
            .then(data => {
                console.log(data.data);
                if(data.data.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Created Successful!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } 
                // navigate('my-marathons-list')
            })
            .catch(error => console.log(error));
    }
    return (
        <div className=''>
            <div className='text-center'>
                <h1 className='text-3xl sm:text-5xl font-bold clr-secondary'>Add New Marathon</h1>
                <p className='text-lg my-5'>It is a well-known fact that organizers can be distracted by the visible layout of a system when managing a marathon. The benefit of using the Marathon Management System is that it provides a more structured and intuitive interface, as opposed to using generic tools or placeholder content.</p>
            </div>

            <form onSubmit={handleAddMarathon} className="flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-full">
                        <label htmlFor="title" className="text-sm">Marathon Title</label>
                        <input name='title' type="text" className="w-full border border-gray-700 focus:outline-0 p-3 rounded" />
                    </div>
                    <div className="col-span-full sm:col-span-4">
                        <label htmlFor="startRegDate" className="text-sm block">Start Registration Date</label>
                        <DatePicker
                            showIcon
                            selected={startRegDate}
                            onChange={(date) => setStartRegDate(date)}
                            className="block w-full border border-gray-700 focus:outline-0 p-3 rounded"
                            name='startRegDate'
                        />
                    </div>

                    <div className="col-span-full sm:col-span-4">
                        <label htmlFor="endRegDate" className="text-sm block">End Registration Date</label>
                        <DatePicker
                            showIcon
                            selected={endRegDate}
                            onChange={(date) => setEndRegDate(date)}
                            minDate={endRegDate}
                            className="block w-full border border-gray-700 focus:outline-0 p-3 rounded"
                            name='endRegDate'
                        />
                    </div>
                    <div className="col-span-full sm:col-span-4">
                        <label htmlFor="marathonDate" className="text-sm block">Marathon Start Date</label>
                        <DatePicker
                            showIcon
                            selected={marathonDate}
                            onChange={(date) => setMarathonDate(date)}
                            minDate={endRegDate}
                            className="block w-full border border-gray-700 focus:outline-0 p-3 rounded"
                            name='marathonDate'
                        />
                    </div>

                    <div className="col-span-full sm:col-span-6">
                        <label htmlFor="runDistance" className="text-sm">Running distance</label>
                        <select defaultValue="Select a Running distance" name='runDistance' className="w-full border border-gray-700 focus:outline-0 p-3 rounded">
                            <option disabled={true}>Select a Running distance</option>
                            <option value="25k">25k</option>
                            <option value="10k">10k</option>
                            <option value="3k">3k</option>
                        </select>
                    </div>

                    <div className="col-span-full sm:col-span-6">
                        <label htmlFor="location" className="text-sm">Location</label>
                        <input name='location' type="text" className="w-full border border-gray-700 focus:outline-0 p-3 rounded" />
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="description" className="text-sm">Description</label>
                        <textarea name="description" className="w-full border border-gray-700 focus:outline-0 p-3 rounded"></textarea>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="marathon-img" className="text-sm">Marathon Image</label>
                        <input name='marathon_img' type="url" className="w-full border border-gray-700 focus:outline-0 p-3 rounded" />
                    </div>

                    <button type="submit" className="cursor-pointer px-8 col-span-full text-xl py-3 w-full font-semibold rounded clr-primary-bg">Add Marathon</button>
                </div>
            </form>

        </div>
    );
};

export default AddMarathons;