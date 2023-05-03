import { Component } from "react";

class Searchbar extends Component {
  state = {
    input: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setQuery(this.state.input);
    console.log(1)
  };

  render() {
    return (   
    <header className="searchbar">
  <form className="form"  onSubmit={this.handleSubmit}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      onChange={(e) => this.setState({ input: e.target.value })}
      value={this.state.input}
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    );
  }
}

export default Searchbar;
