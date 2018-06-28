class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    console.log(event.clientX);
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div
        style={{
          height: "500px",
          backgroundColor: "black"
        }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.children(this.state)}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <MouseTracker>
        {({ x, y }) => (
          <p>
            The current mouse position is ({x}, {y})
          </p>
        )}
      </MouseTracker>
    );
  }
}

render(<App />);
