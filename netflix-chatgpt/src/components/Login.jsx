import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(
            email.current.value,
            password.current.value
        );

        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://example.com/jane-q-user/profile.jpg",
                    })
                        .then(() => {
                            // Profile updated!
                            const { uid, email, displayName } =
                                auth.currentUser;

                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                })
                            );
                            navigate("/browse");
                        })
                        .catch((error) => {
                            // An error occurred
                            // ...
                            setErrorMessage(error.message);
                        });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;

                    navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
                    alt="background"
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
            >
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-2 my-3 w-full bg-gray-700"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email"
                    className="p-2 my-3 w-full bg-gray-700"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-2 my-2 w-full bg-gray-700"
                />
                <p className="text-red-500 py-2">{errorMessage}</p>
                <button
                    className="p-2 my-4 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm
                        ? "New to Netflix? Sign Up Now"
                        : "Already have an account? Sign In"}
                </p>
            </form>
        </div>
    );
};

export default Login;
