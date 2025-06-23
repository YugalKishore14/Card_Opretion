import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };
    let isLoggedIn = !!token;
    const LogoutUser = () => {
        setToken("");
        setUser("");
        localStorage.removeItem("token");
    };

    const userAuthentecation = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/auth/user", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }

            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
                // console.log(data);
            }
        } catch (error) {
            console.error("Error during user authentication:", error);
        }
    }

    useEffect(() => {
        if (token) {
            userAuthentecation();
        }
    }, [token]);
    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};
