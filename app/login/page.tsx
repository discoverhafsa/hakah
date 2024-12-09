import Image from "next/image";

const LogIn = () => {
    return (
        <div className="w-full max-w-md mx-auto py-8 px-4">
            {/* Logo */}
            <div className="flex justify-center">
                <Image src="/Vector1.png" alt="image" height={100} width={100} />
            </div>
            
            {/* Header */}
            <div className="flex justify-center pt-8">
                <h1 className="text-xl font-semibold text-black text-center">
                    YOUR ACCOUNT FOR EVERYTHING NIKE
                </h1>
            </div>
            
            {/* Email Input */}
            <div className="w-full mt-6 flex justify-center items-center border border-gray-300 rounded-sm">
                <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full h-10 rounded-sm px-3"
                />
            </div>
            
            {/* Password Input */}
            <div className="w-full mt-4 flex justify-center items-center border border-gray-300 rounded-sm">
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full h-10 rounded-sm px-3"
                />
            </div>

            {/* Keep me logged in / Forgot password */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                    <svg
                        className="h-4 w-4 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M9 12l2 2l4 -4" />
                    </svg>
                    <h6 className="text-xs ml-2">Keep me logged in</h6>
                </div>
                <h6 className="text-xs">Forgotten your password?</h6>
            </div>

            {/* Privacy Policy and Terms of Use */}
            <div className="w-full mt-4 text-xs text-center">
                <p>
                    By logging in, you agree to Nikes <u>Privacy Policy</u> and
                    <u>Terms of Use</u>.
                </p>
            </div>

            {/* Sign In Button */}
            <div>
                <button className="bg-black rounded-xl w-full h-10 text-white mt-6 text-xs px-2 py-2">
                    Sign In
                </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-4 text-center">
                <p>
                    Not a Member? <u>Join Us</u>
                </p>
            </div>
        </div>
    );
};

export default LogIn;