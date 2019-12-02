import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

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
        <form>
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

          <input
            type="submit"
            onSubmit={this.handleSubmit}
            value="Submit form"
          />
        </form>
        SignIn
      </div>
    );
  }
}

export default SignIn;
