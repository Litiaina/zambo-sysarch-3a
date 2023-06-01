import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../assets/litiainalogo.png';

const HomePage = () => {
  const [output, setOutput] = useState(null); 

  useEffect(() => {
    axios.get('https://api.publicapis.org/entries')
      .then(response => {
        console.log(response.data.entries);
        setOutput(response.data.entries);
      });
  }, []);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <center>
        <h1>L I T I A I N A</h1>
        <img src={Logo} alt="Logo" />
      </center>
    </div>
  );
};

export default HomePage;