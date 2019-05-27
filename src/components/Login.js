import '../styles/login.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
class Login extends Component {
    loginHandler(e) {
        const username = document.getElementById('username');
        this.props.login(username.value);
    }
    render() {
        return (
            <div className="login">
                <div className="login__box">
                    <div className="logo">
                        <img src="http://placekitten.com/64/64" alt="" />
                    </div>
                    <input type="text" id="username" />
                    <button onClick={this.loginHandler.bind(this)}>Signin</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
