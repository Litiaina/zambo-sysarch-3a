import { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginStyle.css';

function Login() {
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/login`, { email, password });
      console.log(response.data.message);
      alert('Successful Login');
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      alert('Failed Login');
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
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
              Submit
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

export default Login;
