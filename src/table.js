import React from 'react';
import './table.css';

class Table extends React.Component {
    constructor(props) {
        // since we are extending class Table so we have to use super 
        // in order to override Component class constructor
        super(props)
        this.state = { // state is an object by default
            players: [
                { rank: 1, user: 'Mango', points: 99999 },
                { rank: 2, user: 'Leffen', points: 88888},
                { rank: 3, user: 'Armada', points: 77777},
                { rank: 4, user: 'PPMD', points: 66666}
            ]
        }
    }


    renderTableData() {
        return this.state.players.map((player, index) => {
            const { rank, user, points } = player //destructuring
            return(
                <tr key={rank}>
                    <td>{rank}</td>
                    <td>{user}</td>
                    <td>{points}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.players[0])
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