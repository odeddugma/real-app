import React, { Component } from 'react';
import PageHeader from './common/pageHeader';
import Card from './card';
import cardService from '../services/cardService';
import { Link } from "react-router-dom";

class MyCards extends Component {

    state = {
        cards: []
    }

    async componentDidMount() {
        const { data } = await cardService.getMyCards();
        if (data.length > 0) this.setState({ cards: data });
    }

    render() {

        const { cards } = this.state;
        return (
            <div className="container">
                <PageHeader>My Cards Page</PageHeader>

                <div className="row">
                    <div className="col-12 mt-4">
                    <p className="my-2"><Link className="btn btn-primary" to="/create-card">+ Add Card</Link></p>


                        {/*   {cards.length > 0 && <p>Your cards are in the list below:</p>} */}
                        {cards.length > 0 ? <p>Your cards are in the list below:</p> : <p>You have no cards</p>}
                    </div>
                </div>

                <div className="row">
                    {cards.length > 0 &&
                        cards.map(card => <Card card={card} key={card._id} />)
                    }
                </div>
            </div >
        );
    }
}

export default MyCards;