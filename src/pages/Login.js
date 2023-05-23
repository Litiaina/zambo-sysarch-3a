import { useState, useEffect } from 'react';
import Form from '../components/Form';

function Login() {
  return (
    <div style={{ width: 600, margin: 'auto', marginTop: 40}}>
      <h3>Login</h3>
      <Form />
    </div>
  );
}

export default Login;