import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const DefaultPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };
  return (
    <Button className='mt-2' onClick={handleRedirect}>Back to home </Button>
  )
}

export default DefaultPage