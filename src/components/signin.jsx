import React from 'react';
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import Form from './common/form';
/* import http from '../services/httpService';
import { apiUrl } from '../config/config.json';
import { toast } from "react-toastify"; */

class Signin extends Form {
    state = {
        data: { email: '', password: '' },
        errors: {}
    }

    schema = {
        email: Joi.string().required().email().label('Email'),
        password: Joi.string().required().min(6).label('Password')
    };

    doSubmit = async () => {

        console.log('do submit run');
    }

    render() {
        return (
            <div className="container">
                <PageHeader>Sign In Page</PageHeader>
                <div className="row">
                    <div className="col-12 mt-4">
                        <p>Sign in to your account</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} method="post" autoComplete="off">
                        {this.renderInput('email', 'Email', 'email')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderButton('Sign In')}
                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;