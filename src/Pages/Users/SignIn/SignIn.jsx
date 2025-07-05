import Lottie from 'lottie-react';
import LottieSignIn from '../../../assets/Lotties/SignIn.json'
import { Link } from 'react-router';

const SignIn = () => {
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
    }
    return (
        <div className="container mx-auto flex justify-center items-center flex-col md:flex-row gap-5 px-12 my-12">
            <div className="w-7/12 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Sign In</h1>
                <form onSubmit={handleSignIn} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button type='submit' className="cursor-pointer block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign In</button>
                </form>
                {/* Social login */}
                {/* <GoogleSignIn from={from} /> */}
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                    <Link to="/register"><strong> Register</strong></Link>
                </p>
            </div>
            <div className="w-5/12">
                <Lottie style={{ width: 'full' }} animationData={LottieSignIn} loop={true} />
            </div>
        </div>
    );
};

export default SignIn;