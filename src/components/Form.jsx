import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Forms() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fields = [
    { label: 'Email Address', type: 'text', placeholder: 'input email' },
    { label: 'password', type: 'password', placeholder: 'input password' },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field, index) => {
        return (
          <Form.Group className="MB=3" controlId={`formBasic${index}`} key={index}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              placeholder={field.placeholder}
              onChange={field.type === 'text' ? handleEmailChange : handlePasswordChange}
            />
          </Form.Group>
        );
      })}
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <h3>Email: {email}</h3>
      <h3>Password: {password}</h3>
    </Form>
  );
}

export default Forms;
