import { createContext, useState, useContext, useEffect } from "react";
import axios from "../api/axios";
import Cookie from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(null);

  const signup = async (data) => {
    try {
      const res = await axios.post("/signup", data);
      //console.log(res.data.user);
      setUser(res.data.user);
      setIsAuthenticated(true);

      return res.data.user;
    } catch (error) {
      console.log(error.response.data);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const signin = async (data) => {
    try {
      const res = await axios.post("/signin", data);
      //console.log(res.data.user);
      setUser(res.data.user);
      setIsAuthenticated(true);

      return res.data.user;
    } catch (error) {
      console.log(error.response.data);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const signout = async () => {
    const res = await axios.post("/signout");
    //console.log(res.data);
    setUser(null);
    setIsAuthenticated(false);
  };


  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    if (Cookie.get("token")) {
      axios
        .get("/profile")
        .then((res) => {
          setUser(res.data.user);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          console.log(err);
          setIsAuthenticated(false);
          setUser(null);
        });
    }
    else {
      //console.log("No token found");
    }
  }, []);

  useEffect(() => {
  const clean=setTimeout(() => {
        setErrors(null);
      }, 5000);
    return () => { 
      clearTimeout(clean);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        errors,
        signup,
        signin,
        signout,
        formatDate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
