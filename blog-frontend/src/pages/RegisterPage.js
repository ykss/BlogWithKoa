import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

function RegisterPage() {
  return (
    <div>
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </div>
  );
}

export default RegisterPage;
