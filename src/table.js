import React from 'react';
import axios from 'axios';
import './table.css';

/**
 * Based on template from this article
 * https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
 */
class Table extends React.Component {
    constructor(props) {
        // since we are extending class Table so we have to use super 
        // in order to override Component class constructor
        super(props)
        this.state = { // state is an object by default
            players: [

                // { rating_number: 1500, username: 'uzibaby', games_played: 25 }
                // { rank: 1, user: 'Mango', points: 99999 },
                // { rank: 2, user: 'Leffen', points: 88888},
                // { rank: 3, user: 'Armada', points: 77777},
                // { rank: 4, user: 'PPMD', points: 66666}
            ]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3005/allUsers')
        .then((response) => {
            console.log('got response from server')
            this.setState({
                players: response.data
            })
        })

    }


    renderTableData() {
        return this.state.players.map((player, index) => {
            // const { rank, user, points } = player //destructuring
            const { rating_number, username, games_played } = player
            return(
                <tr key={rating_number}>
                    <td>{rating_number}</td>
                    <td>{username}</td>
                    <td>{games_played}</td>
                </tr>
                // <tr key={rank}>
                //     <td>{rank}</td>
                //     <td>{user}</td>
                //     <td>{points}</td>
                // </tr> 
            )
        })
    }

    renderTableHeader() {
        let header =  ['Elo Ranking', 'Player', 'Games Played'];//Object.keys(this.state.players[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    //Whenever our class runs, render method will be called automatically
    render() {
        return (
            <div>
                <h1 id='title'>Smash Ranking</h1>
                <table id='players'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;