// import React, {useRef} from 'react';

// const AddUser = () => {
//     const nameRef = useRef();
//     const emailRef = useRef();

//     const handleAddUser = e =>{
//         const name = nameRef.current.value;
//         const email = emailRef.current.value;
//         const newUser = {name, email};

//         fetch('http://localhost:5000/users', {
//             method:'POST',
//             headers:{
//                 'content-type': 'application.json'
//             },
//             body: JSON.stringify(newUser)
//         })
//         e.preventDefault();
//     }
    
//     return (
//         <div>
//             <h2>This is Add User</h2>
//             <form onSubmit={handleAddUser}>
//                 <input type="text" placeholder="name" ref={nameRef} /> <br />
//                 <input type="email" placeholder="email" ref={emailRef} /> <br />
//                 <input type="submit" value="Add" />
//             </form>
//         </div>
//     );
// };

// export default AddUser;