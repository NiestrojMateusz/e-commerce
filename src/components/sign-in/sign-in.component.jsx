import React from 'react';
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password)
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={ this.handleSubmit } noValidate>
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
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})


export default connect(null, mapDispatchToProps)(SignIn);
