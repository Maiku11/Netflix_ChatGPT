import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;

                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                    })
                );
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());

                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
            <img className="w-44" src={LOGO} alt="logo" />

            {user && (
                <div>
                    <button
                        className="font-bold text-white cursor-pointer"
                        onClick={handleLogOut}
                    >
                        SignOut
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
