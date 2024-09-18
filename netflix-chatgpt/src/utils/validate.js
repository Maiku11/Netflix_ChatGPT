export const checkValidData = (email, password) => {
    const isEmailValid =
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); // It will return True Or False

    const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); // It will return True Or False

    if (!isEmailValid) return "Email is not valid";

    if (!isPasswordValid) return "Password is not valid";

    return null;
};
