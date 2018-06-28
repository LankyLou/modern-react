const ThemeContext = React.createContext("dark");

class Heading extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          const color =
            theme === "light" ? "black" : "white";
          return <h1 style={{ color }}>Heading Text</h1>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
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
        }}
      </ThemeContext.Consumer>
    );
  }
}

class SubmitButton extends React.Component {
  render() {
    return <Button>Submit</Button>;
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
        <ThemeContext.Provider value={theme}>
          <Heading />
          <SubmitButton />
          <CloseButton />
          <Button
            onClick={() => this.setState({ theme: "dark" })}
          >
            Use Dark Theme
          </Button>
          <Button
            onClick={() =>
              this.setState({ theme: "light" })
            }
          >
            Use Light Theme
          </Button>
        </ThemeContext.Provider>
      </div>
    );
  }
}

render(<App />);
