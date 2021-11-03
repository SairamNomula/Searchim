import React from "react";
import unsplash from "../api/api";
import Search from "./Search";
import Imagelist from "./ImageList";
import '../../src/App.css'

class App extends React.Component {
    
    state = {images: []};
   onSearchSubmit= async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
      
    });
    this.setState({images: response.data.results});
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>Searchim</h1>
        <Search onSubmits={this.onSearchSubmit} />
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}

export default App;