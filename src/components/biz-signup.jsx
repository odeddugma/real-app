import React from 'react';
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import Form from './common/form';
import http from '../services/httpService';
import { apiUrl } from '../config/config.json';
import { Redirect } from "react-router-dom";
import userService from "../services/userService";

class BizSignup extends Form {
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
        data.biz = true;

        try {
            await http.post(`${apiUrl}/users`, data);
            await userService.login(data.email, data.password);
            window.location = '/create-card';

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                this.setState({ errors: { email: ex.response.data } });
            }
        }

    }

    render() {

        if (userService.getCurrentUser()) return <Redirect to="/" />

        return (
            <div className="container">
                <PageHeader>Businss Sign Up Page</PageHeader>
                <div className="row">
                    <div className="col-12 mt-4">
                        <p>Signup for free and create your own Cards</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} method="post" autoComplete="off">
                        {this.renderInput('email', 'Email', 'email')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderInput('name', 'Name')}
                        {this.renderButton('Next')}
                    </form>
                </div>
            </div>
        );
    }
}

export default BizSignup;