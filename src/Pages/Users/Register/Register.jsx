import React from 'react';
import LottieRegister from '../../../assets/Lotties/register.json'
import { Link } from 'react-router';
import Lottie from 'lottie-react';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log({ name, email, photo, password });
    }
    return (
        <div className="container mx-auto flex justify-center items-center flex-col md:flex-row gap-5 px-12 my-12">
            <div className="w-7/12 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Name</label>
                        <input type="text" name="name" placeholder="Full name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Photo URL</label>
                        <input type="url" name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <button type='submit' className="cursor-pointer block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>
                </form>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to="/signin"><strong> Sing in</strong></Link>
                </p>
            </div>
            <div className="w-5/12">
                <Lottie style={{ width: 'full' }} animationData={LottieRegister} loop={true} />
            </div>
        </div>
    );
};

export default Register;