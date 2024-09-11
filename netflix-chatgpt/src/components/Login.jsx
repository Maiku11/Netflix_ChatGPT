import Header from "./Header";

const Login = () => {
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
                    alt="background image"
                />
            </div>
            <form className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">Sign In</h1>
                <input
                    type="text"
                    placeholder="Email"
                    className="p-2 my-2 w-full bg-gray-700"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 my-2 w-full bg-gray-700"
                />
                <button className="p-2 my-2 bg-red-700 w-full rounded-lg">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Login;
