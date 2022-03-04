// import { useState, useEffect } from 'react';
// import axios from './api/axios';

// const Users = () => {
//   const [users, setUsers] = useState();

//   useEffect(() => {
//     let isMounted = true;
//     const controller = new AbortController();

//     const getUsers = async () => {
//       try {
//         const response = await axios.get('/users', {
//           signal: controller.signal,
//         });

//         console.log(response.data);
//         isMounted && setUsers(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     getUsers();

//     isMounted = false;
//     controller.abort();
//   }, []);



  
//   return (
//     <article>
//       <h2>users list</h2>
//       {users?.length ? (
//         //       the true process her
//         <ul>
//           {users.map((user, i) => (
//             <li key={i}>{user?.username}</li>
//           ))}
//         </ul>
//       ) : (
//         //       End true process her

//         //       else process here
//         <p>no users to display</p>
//         //     End  else process here
//       )}
//     </article>
//   );
// };

// export default Users;
