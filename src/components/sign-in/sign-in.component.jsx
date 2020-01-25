import React, { useState } from 'react';
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
const SignIn = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = user;
    const { emailSignInStart } = props;

    emailSignInStart(email, password)
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value
    })
    console.log(user)
  };

  const { googleSignInStart } = props;
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSubmit } noValidate>
        <FormInput
          name="email"
          type="email"
          required
          label="email"
          handleChange={handleChange}
          value={user.email}
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          required
          handleChange={handleChange}
          value={user.password}
        />
        <div className="buttons">
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})


export default connect(null, mapDispatchToProps)(SignIn);
