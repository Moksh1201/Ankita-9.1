import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signout.css';

function Signout() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    
    console.log('signed out successfully..')
    navigate('/page'); // Redirect to the desired page after sign-out
  };

  return (
    <div>
      <button className='Signout-Button' onClick={handleSignOut}>SIGN OUT</button>
    </div>
  );
}

export default Signout;