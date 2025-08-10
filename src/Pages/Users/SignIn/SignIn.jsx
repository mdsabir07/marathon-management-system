import Lottie from 'lottie-react';
import LottieSignIn from '../../../assets/Lotties/SignIn.json'
import { Link, useLocation, useNavigate } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';
import GoogleSignIn from './GoogleSignIn';

const SignIn = () => {
    const { signInUser } = UseAuth();
    const [err, setErr] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        signInUser(email, password)
            .then(res => {
                const user = res.user;
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${user?.email} SignIn successful!`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorCode, errorMessage)
            })
    }
    return (
        <div className="w-11/12 mx-auto flex justify-center items-center flex-col md:flex-row gap-5 py-16 sm:py-30">
            <div className="w-full sm:w-7/12 p-3 sm:p-8 space-y-3 shadow-sm rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Sign In</h1>
                <form onSubmit={handleSignIn} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="leroy@jenkins.com" className="w-full px-4 py-3 rounded-md border border-gray-200" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-200" />
                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button type='submit' className="cursor-pointer block w-full p-3 pb-6 text-center rounded-sm btn btn-primary hover:btn-secondary">Sign In</button>
                    {err && <p className='text-red-500'>{err}</p>}
                </form>
                {/* Social login */}
                <GoogleSignIn from={from} />
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                    <Link to="/register" className='text-primary hover:text-secondary text-base'><strong> Register</strong></Link>
                </p>
            </div>
            <div className="w-full sm:w-5/12">
                <Lottie style={{ width: 'full' }} animationData={LottieSignIn} loop={true} />
            </div>
        </div>
    );
};

export default SignIn;