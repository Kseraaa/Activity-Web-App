import React from "react";
import axios from 'axios';

const appAuthProvider =  {
    isAuthenticated: false,
    async signin(token, callback) {
        appAuthProvider.isAuthenticated = true;
        // setTimeout(callback, 100); // fake async
        let result = await axios.post('http://localhost:8000/api2/token/', {
            token
        })
        if(result.status === 200 && result.data){
            callback({isStaff: result.data.is_staff})
        }else{
            callback(null)
        }
    },
    signout(callback) {
        appAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = (token, callback) => {
    return appAuthProvider.signin(token, (newUser) => {
      setUser(newUser);
      callback(newUser);
    });
  };

  let signout = (callback) => {
    return appAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { appAuthProvider, AuthContext, AuthProvider, useAuth };