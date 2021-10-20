import React,{createContext} from "react";
import auth from "@react-native-firebase/auth"

export const AuthContext =React. createContext();

export const AuthProvider=({children})=>{
    const [user,setUser] = React.useState();
        return(
            <AuthContext.Provider
            value={{
              user,
              setUser,
              login: async (email, password) => {
                try {
                  await auth().signInWithEmailAndPassword(email, password);
                } catch (e) {
                  console.log(e);
                }
              },
              register: async (email, password) => {
                try {
                  await auth().createUserWithEmailAndPassword(email, password)
                 
                  //we need to catch the whole sign up process if it fails too.
                  
                  
                } catch (e) {
                  console.log(e);
                }
              },
              logout: async () => {
                try {
                  await auth().signOut();
                } catch (e) {
                  console.log(e);
                }
              }}}
       >{children}</AuthContext.Provider>

    )
}