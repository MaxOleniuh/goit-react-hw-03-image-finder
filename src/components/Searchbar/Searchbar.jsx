import { Component } from "react";

class Searchbar extends Component {
  state = {
    input: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setQuery(this.state.input);
    
  };

  render() {
    return (   
    <header class="searchbar">
  <form class="form"  onSubmit={this.handleSubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      onChange={(e) => this.setState({ input: e.target.value })}
      value={this.state.input}
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    );
  }
}

export default Searchbar;
