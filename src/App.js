import React, {Component} from 'react';
import loader from './images/loader.svg';

const Header = () => (
  <div className="header grid">
      <h1 className="title">Jiffy</h1>
  </div>
);

const UserHint = ({loading, hintText}) => (
  <div className="user-hint">
    {/* here we check whether we have a loading state and render out
    either our spinner or hintText based on that, using a ternary operator (if/else) */}
    {loading ? <img className="block mx-auto" src={loader} alt="Loading" /> : hintText}
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      searchTerm: '',
      hintText: '',
    };
  }

  handleChange = event => {
    const {value} = event.target;
    this.setState((prevState, props) => ({
      ...prevState,
      searchTerm: value,
      hintText: value.length > 2 ? `Hit enter to search ${value}` : ''
    }));
  };

  handleKeyPress = event => {
    const {value} = event.target;
    if (value.length > 2 && event.key === 'Enter') {
      
    }
  };

  render() {
    const {searchTerm} = this.state;
   
    return (
      <div className="page">
        <Header />

        <div className="search grid">
          {/* our stack of gif images */}
          <input
            className="input grid-item"
            placeholder="Type something"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            value={searchTerm}
            ref={input => {
              this.textInput = input;
            }}
          />
        </div>
        {/* here we pass our userHint all of our state using a spread */}
        <UserHint {...this.state} />
      </div>
    );
  }
}

export default App;
