import React, { Component } from 'react';
import PageHeader from './common/pageHeader';


class Home extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <PageHeader>Real App Home Page</PageHeader>
                <div className="row">
                    <div className="col-12 mt-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, doloremque.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;