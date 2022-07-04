import { Component, ReactElement } from "react";
import "./App.css";

const LIMIT = 10;
type State = { timeLeft: number };

class App extends Component<unknown, State> {
  timerId: NodeJS.Timer | null = null;

  constructor(props: unknown) {
    super(props);
    this.state = { timeLeft: LIMIT };
  }

  componentDidMount = (): void => {
    this.timerId = setInterval(this.tick, 1000);
  };

  componentDidUpdate = (): void => {
    const { timeLeft } = this.state;
    if (timeLeft === 0) this.reset();
  };

  componentWillUnmount = (): void => {
    if (this.timerId) clearInterval(this.timerId);
  };

  tick = (): void =>
    this.setState((prevState) => ({ timeLeft: prevState.timeLeft - 1 }));

  reset = (): void => this.setState({ timeLeft: LIMIT });

  render = (): ReactElement => {
    const { timeLeft } = this.state;

    return (
      <div className="container">
        <header>
          <h1>タイマー</h1>
        </header>
        <h2>{timeLeft}</h2>
        <button onClick={this.reset}>リセット</button>
      </div>
    );
  };
}

export default App;
