import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=9447fd3d7eea029c3d0eb6abd281a0c7&hash=13bb175dbb46b83d95cdb4dc3772e5e1`)
            .then(res => {
                const persons = res.data.data.results;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul>
                { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}