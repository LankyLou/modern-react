class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: Date.now()
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ startTime: Date.now() });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setNewNumber()}>
          Start
        </button>
        <Counter startTime={this.state.startTime} />
      </div>
    );
  }
}

class Counter extends React.Component {
  static getDerivedStateFromProps(props, state) {
    return {
      startTime: props.startTime,
      currentTime: state.currentTime
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      startTime: props.startTime,
      currentTime: Date.now()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ currentTime: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h3>
          {this.state.currentTime - this.state.startTime}
        </h3>
      </div>
    );
  }
}

render(<App />);
