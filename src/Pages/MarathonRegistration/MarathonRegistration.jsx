import { useLoaderData } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const MarathonRegistration = () => {
    const marathon = useLoaderData();
    const { user } = UseAuth();
    // const navigate = useNavigate();

    const handleRegisterMarathon = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const application = {
            email: user?.email,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            contact: formData.get('contact'),
            additionalInfo: formData.get('additionalInfo'),
            marathonId: marathon._id,
            marathonTitle: marathon.title,
            marathonDate: marathon.marathonDate,
            createdAt: new Date().toISOString()
        };

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/applications`, application);
            if (res.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Application submitted successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                // navigate('my-apply-list');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            Swal.fire({
                icon: 'error',
                title: 'Submission failed. Please try again.',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }
    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='text-center'>
                <h1 className='text-3xl sm:text-5xl font-bold'>Registering for: <span className="text-primary">{marathon.title}</span></h1>
                {/* ✅ Display total registration count */}
                <p className="text-lg text-secondary py-5">
                    Total Registrations: <span className="font-semibold">{marathon.totalRegistrationCount || 0}</span>
                </p>
            </div>

            <form onSubmit={handleRegisterMarathon} className="flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-12 gap-4">

                    {/* Marathon Title */}
                    <div className="col-span-full sm:col-span-6">
                        <label className="text-sm">Marathon Title</label>
                        <input
                            type="text"
                            readOnly
                            value={marathon.title}
                            className="w-full border border-gray-700 focus:outline-0 p-3 rounded"
                        />
                    </div>

                    {/* Start Registration Date */}
                    <div className="col-span-full sm:col-span-6">
                        <label className="text-sm">Start Date</label>
                        <input
                            type="text"
                            readOnly
                            value={new Date(marathon.marathonDate).toLocaleDateString()}
                            className="w-full border border-gray-700 focus:outline-0 p-3 rounded"
                        />
                    </div>

                    {/* User Email */}
                    <div className="col-span-full sm:col-span-6">
                        <label className="text-sm">Email</label>
                        <input
                            type="email"
                            readOnly
                            value={user?.email}
                            className="w-full border border-gray-700 focus:outline-0 p-3 rounded"
                        />
                    </div>

                    {/* First Name */}
                    <div className="col-span-full sm:col-span-6">
                        <label htmlFor="firstName" className="text-sm">First Name</label>
                        <input
                            name="firstName"
                            type="text"
                            required
                            className="w-full border border-gray-700 focus:outline-0 p-3 rounded"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="col-span-full sm:col-span-6">
                        <label htmlFor="lastName" className="text-sm">Last Name</label>
                        <input
                            name="lastName"
                            type="text"
                            required
                            className="w-full border border-gray-700 focus:outline-0 p-3 rounded"
                        />
                    </div>

                    {/* Contact */}
                    <div className="col-span-full sm:col-span-6">
                        <label htmlFor="contact" className="text-sm">Contact Number</label>
                        <input
                            name="contact"
                            type="tel"
                            required
                            className="w-full border border-gray-700 focus:outline-0 p-3 rounded"
                        />
                    </div>

                    {/* Additional Info */}
                    <div className="col-span-full">
                        <label htmlFor="additionalInfo" className="text-sm">Additional Info</label>
                        <textarea
                            name="additionalInfo"
                            rows={4}
                            className="w-full border border-gray-700 focus:outline-0 p-3 rounded"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-full">
                        <button
                            type="submit"
                            className="cursor-pointer px-8 text-xl py-3 w-full font-semibold rounded btn btn-primary hover:btn-secondary"
                        >
                            Submit Registration
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default MarathonRegistration;