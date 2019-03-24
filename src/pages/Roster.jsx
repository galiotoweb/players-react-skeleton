import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Roster extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      loggedIn: false,
    };
  }

  componentDidMount() {
    this.checkLoggedIn();

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

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    if (token !== '') {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Player Roster</h1>
        {this.state.loggedIn ? (
          <ul>
            {this.state.players.map(player => (
              <li>{player.name}</li>
            ))}
          </ul>
        ) : (
          <p>
            Please <Link to="/login">login</Link> to see your list of players
          </p>
        )}
        <Link to="/player/new">
          <button>Add A New Player</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Roster;
