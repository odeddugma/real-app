import React from 'react';
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import Form from './common/form';
import http from '../services/httpService';
import { apiUrl } from '../config/config.json';
import { toast } from "react-toastify";

class Signup extends Form {
    state = {
        data: { email: '', password: '', name: '' },
        errors: {}
    }

    schema = {
        email: Joi.string().required().email().label('Email'),
        password: Joi.string().required().min(6).label('Password'),
        name: Joi.string().required().min(2).label('Name')
    };

    doSubmit = async () => {
        const data = { ...this.state.data };
        data.biz = false;

        try {
            await http.post(`${apiUrl}/users`, data);
            toast("User registered successfully", { position: "top-center" });
            this.props.history.replace('/signin');

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                this.setState({ errors: { email: ex.response.data } });
            }
        }

    }

    render() {
        return (
            <div className="container">
                <PageHeader>Sign Up Page</PageHeader>
                <div className="row">
                    <div className="col-12 mt-4">
                        <p>You can sign up for free</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} method="post" autoComplete="off">
                        {this.renderInput('email', 'Email', 'email')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderInput('name', 'Name')}
                        {this.renderButton('Sign up')}
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;