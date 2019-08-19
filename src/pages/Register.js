import React from 'react';

import RegisterForm from '../components/RegisterForm/RegisterForm';
import LayoutApp from '../components/LayoutApp/LayoutApp';
class RegistrationForm extends React.Component {
  render() {
    return (
      <div>
        <LayoutApp>
          <RegisterForm />
        </LayoutApp>
      </div>
    );
  }
}

export default RegistrationForm;
