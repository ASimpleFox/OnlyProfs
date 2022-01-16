// import React, { useContext, useState } from 'react'

// const UserContext = React.createContext()
// const UserUpdateContext = React.createContext()


// export function useState() {
//     return useContext(UserContext)
// }

// export function useUserUpdate() {
//     return useContext(UserUpdateContext)
// }

// function UserProvider({ children }) {
//     const [user, setUser] = React.useState(null);

//     return (
//         <div>
//             <UserContext.Provider value={{ user, setUser }}>
//                 <UserUpdateContext.Provider value={{ user, setUser }}>
//                     {children}
//                 </UserUpdateContext.Provider>
//             </UserContext.Provider>
//         </div>
//     )
// }

// export default UserContext
