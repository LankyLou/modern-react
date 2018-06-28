class Heading extends React.Component {
  render() {
    const { theme } = this.props;
    const color = theme === "light" ? "black" : "white";
    return <h1 style={{ color }}>Heading Text</h1>;
  }
}

class Button extends React.Component {
  render() {
    const { theme } = this.props;
    const themeClass =
      theme === "light"
        ? "dc-btn-primary"
        : "dc-btn-secondary";
    return (
      <button
        onClick={this.props.onClick}
        className={classNames("dc-btn", themeClass)}
      >
        {this.props.children}
      </button>
    );
  }
}

class SubmitButton extends React.Component {
  render() {
    return <Button theme={this.props.theme}>Submit</Button>;
  }
}

class CloseButton extends React.Component {
  render() {
    return <Button>Close</Button>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark"
    };
  }

  render() {
    const { theme } = this.state;
    const backgroundColor =
      theme === "light" ? "white" : "black";
    return (
      <div style={{ backgroundColor }}>
        <Heading theme={this.state.theme} />
        <SubmitButton theme={this.state.theme} />
        <CloseButton theme={this.state.theme} />
        <Button
          theme={this.state.theme}
          onClick={() => this.setState({ theme: "dark" })}
        >
          Use Dark Theme
        </Button>
        <Button
          theme={this.state.theme}
          onClick={() => this.setState({ theme: "light" })}
        >
          Use Light Theme
        </Button>
      </div>
    );
  }
}

render(<App />);
