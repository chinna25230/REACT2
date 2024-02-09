// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// function Login({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   let navigate = useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       });
//       const data = await response.json();
//       // Assuming the response contains a token or some indicator of successful login
//       if (data.success) {
//         onLogin(); // Call the onLogin function passed from parent component
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//     navigate('/search')
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Perform login logic here
    // For example:
    // try {
    //   // Your login API call
    //   onLogin(); // Call the onLogin function passed from parent component if login is successful
    //   navigate('/search'); // Navigate to '/search' after successful login
    // } catch (error) {
    //   console.error('Error logging in:', error);
    // }

    // For demo purposes, navigate to '/search' directly
    navigate('/Search');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
