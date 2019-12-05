import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={ this.handleSubmit }>
          <FormInput
            name="email"
            type="email"
            required
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            required
            handleChange={this.handleChange}
            value={this.state.password}
          />
          <div className="buttons">
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
