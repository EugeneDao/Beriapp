// import React,{useState} from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import {auth} from "./components/config"

// export const AuthContext = React.createContext();
// export default function AuthProvider(children) {

//     const [user, setUser] = useState({});
//     const navigate = useNavigate();
    
//     React.useEffect(() => {
//         const unsubscibed = auth.onAuthStateChanged((user) => {
//           if (user) {
//             const { displayName, email, uid, photoURL } = user;
//             setUser({
//               displayName,
//               email,
//               uid,
//               photoURL,
//             });
//             navigate('/beri');
//             return;
//           }
    
//           // reset user info
//           setUser({});
//           navigate('/login');
//         });
    
//         // clean function
//         return () => {
//           unsubscibed();
//         };
//       }, [navigate]);
    
//       return (
//         <AuthContext.Provider value={{ user }}>
//             {children}
//         </AuthContext.Provider>
//       );
//     }
    