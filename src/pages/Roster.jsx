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
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      const players = res.data;
      this.setState({ players });
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
