import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Roster extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    axios
      .get('https://players-api.developer.alchemy.codes/api/players', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('players are here', response);
        if (response.data.success === true) {
          this.setState({
            players: response.data.players,
          });
        }
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Player Roster</h1>
        <ul>
          {this.state.players.map(player => (
            <li>{player.name}</li>
          ))}
        </ul>
        <Link to="/player/new">
          <button>Add A New Player</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Roster;
