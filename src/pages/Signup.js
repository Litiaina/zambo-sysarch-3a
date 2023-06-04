import { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginStyle.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [baseURL, setBaseURL] = useState('');

  useEffect(() => {
    const getBaseURL = async () => {
      try {
        const response = await axios.get('/message');
        const serverURL = response.config.baseURL;
        setBaseURL(serverURL);
      } catch (error) {
        console.error('Error getting base URL:', error);
      }
    };

    getBaseURL();
  }, []);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/register`, {
        fullName,
        email,
        password,
      });
      console.log(response.data.message);
      alert('Register Success');
    } catch (error) {
      console.error('Error signing up:', error.response.data.message);
      alert('Register Failed');
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSignUp}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="text-center mt-2">
            Already have an <a href="#">account?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
