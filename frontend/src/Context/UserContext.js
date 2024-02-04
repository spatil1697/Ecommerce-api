import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const UserContext = createContext();

export default UserContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(());
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  // If the user is present in the database (credentials are valid), 
  // the user is logged in. 
  const loginUser = async (username, password) => {
    const response = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password,


      })
    });
    const data = await response.json();

    if (response.status === 200) {
      setUser((data.access));
      history.push("/");
    } else {
      alert("You have entered an invalid username or password!");
    }
  };
  
  // This function registers the user in the database. 
  const registerUser = async (username, password,password2,email) => {
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        email,
      })
    });
    if (response.status === 201) {
      history.push("/login");
    } else {
      alert("Username already exists!");
    }
  };
  
  const contextData = {
    user,
    setUser,
    registerUser,
    loginUser,
  };


  return (
    <UserContext.Provider value={contextData}>
      {loading ? null : children}
    </UserContext.Provider>
  );
};
