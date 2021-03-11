import React, { Component } from 'react';
import PageHeader from './common/pageHeader';

class About extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <PageHeader>About Our App</PageHeader>
                <div className="row">
                    <div className="col-12 mt-4">
                    <p>This is Home Page</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque distinctio commodi aut, recusandae tempora eum repellat modi iste accusamus ratione perferendis architecto. Minus quidem ratione atque assumenda commodi ex ipsum..</p>
                    </div>
                </div>
            </div >
        );
    }
}

export default About;