import { Component, ReactElement, SyntheticEvent } from "react";
import "./App.css";

type State = { count: number };

class App extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = { count: 0 };
  }

  reset = (e: SyntheticEvent): void => {
    e.preventDefault();
    this.setState({ count: 0 });
  };

  increment = (e: SyntheticEvent): void => {
    e.preventDefault();
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render(): ReactElement {
    const { count } = this.state;

    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <p>カウント: {count}</p>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default App;
