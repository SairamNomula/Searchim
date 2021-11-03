import React from "react";
import '../../src/App.css'

class SearchBar extends React.Component {
  state = { term: "" };

  onFormsubmit = event => {
    event.preventDefault();
    this.props.onSubmits(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormsubmit} className="ui from">
          <div className="field">
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;