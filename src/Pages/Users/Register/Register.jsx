import React, { useState } from 'react';
import LottieRegister from '../../../assets/Lotties/register.json'
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import UseAuth from '../../../hooks/UseAuth';

const Register = () => {
    const { createUser } = UseAuth();
    const [err, setErr] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

        setErr('');

        // Validate password (regular expression)
        const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/;
        if (passRegExp.test(password) === false) {
            setErr("Password must include at least one lowercase, one uppercase, one digit, one special character (symbol) and 6 characters or longer");
            return;
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${user?.email} Registration successful!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorCode, errorMessage)
            })
    }
    return (
        <div className="w-11/12 mx-auto flex justify-center items-center flex-col md:flex-row gap-5 py-10 sm:py-20">
            <div className="w-7/12 p-8 space-y-3 shadow-sm rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block">Name</label>
                        <input type="text" name="name" placeholder="Full name" className="w-full px-4 py-3 rounded-md border border-gray-200" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="leroy@jenkins.com" className="w-full px-4 py-3 rounded-md border border-gray-200" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Photo URL</label>
                        <input type="url" name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border border-gray-200" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-200" />
                    </div>
                    <button type='submit' className="cursor-pointer block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-primary">Register</button>
                    {err && <p className='text-red-500'>{err}</p>}
                </form>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to="/signin" className='text-primary hover:text-secondary text-base'><strong> Sing in</strong></Link>
                </p>
            </div>
            <div className="w-5/12">
                <Lottie style={{ width: 'full' }} animationData={LottieRegister} loop={true} />
            </div>
        </div>
    );
};

export default Register;