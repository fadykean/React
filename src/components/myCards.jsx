
import { Component } from 'react';
import cardService from '../services/cardService';
import PageHeader from './common/pageHeader';
import Card from './card';

class MyCards extends Component {
    state = {
        cards: []
    }

    async componentDidMount() {
        const { data } = await cardService.getMyCards();
        if (data.length) {
            this.setState({ cards: data });
        }
    }


    render() {
        const { state: { cards } } = this;

        return (
            <div className="container">
                <PageHeader titleText="My Cards Page" />

                <div className="row">
                    <div className="col-12">
                        <p>Your Cards in the list below...</p>
                    </div>
                </div>
                <div className="row">
                    {cards.length && cards.map(card => <Card key={card._id} card={card} />)}
                </div>
            </div>
        )
    }
}

export default MyCards;
