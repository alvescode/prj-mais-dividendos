import React, { useState } from 'react';
import './LoginSingUp.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function LoginSingUp({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples de credenciais
    if (email === 'admin@example.com' && password === '123456') {
      onLogin(true); // Atualiza o estado no App.js
    } else {
      alert('Credenciais inválidas! Tente novamente.');
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Login</h2>
              <p className="text-muted mb-4">Digite seu login e senha</p>

             
              <MDBInput
                wrapperClass='mb-4 w-100'
                label='Endereço de Email'
                id='formControlEmail'
                type='email'
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              
              <MDBInput
                wrapperClass='mb-4 w-100'
                label='Senha'
                id='formControlPassword'
                type='password'
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Lembrar-me' />

              
              <MDBBtn size='lg' onClick={handleSubmit}>
                Login
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginSingUp;
