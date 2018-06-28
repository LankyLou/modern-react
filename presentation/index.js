// Import React
import React from "react";
import background from "../assets/background.png";
import logo from "../assets/logo.png";
import lifecycleDiagram from "../assets/lifecycleDiagram.png";
import classNames from "classnames";

// Import Spectacle Core tags
import {
  Image,
  ComponentPlayground,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Code,
  Appear,
  Quote,
  Text,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#195a72",
    secondary: "white",
    tertiary: "white",
    quarternary: "white"
  },
  {
    primary: "Lato"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck controls={false} progress="none" theme={theme}>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Image
            src={logo}
            height={200}
            margin={"100px auto"}
          />
          <Heading size={1}>{'"Modern" react'}</Heading>
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"Coming up"}
          </Heading>
          <List>
            <ListItem>New Component Lifecycle</ListItem>
            <ListItem>Render Props</ListItem>
            <ListItem>The Context/Provider API</ListItem>
          </List>
        </Slide>
        <Slide bgImage={background} width={1600}>
          <Heading size={2}>
            {"Component Lifecycle"}
          </Heading>
          <Heading size={6} textColor="white">
            Some lifecycle methods are being replaced
          </Heading>
          <Appear>
            <List>
              <ListItem>Deprecating</ListItem>
              <ListItem>
                <Code textColor="white">
                  componentWillMount()
                </Code>
              </ListItem>
              <ListItem>
                <Code textColor="white">
                  componentWillReceiveProps()
                </Code>
              </ListItem>
              <ListItem>
                <Code textColor="white">
                  componentWillUpdate()
                </Code>
              </ListItem>
            </List>
          </Appear>
          <Appear>
            <List>
              <ListItem>New</ListItem>
              <ListItem>
                <Code textColor="white">
                  getDerivedStateFromProps()
                </Code>
              </ListItem>
              <ListItem>
                <Code textColor="white">
                  getSnapshotBeforeUpdate()
                </Code>
              </ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            Existing Component Lifecycle
          </Heading>
          <ComponentPlayground
            previewBackgroundColor="#104a5b"
            code={require("raw-loader!./examples/oldLifecycle.jsx")}
          />
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"New Component Lifecycle"}
          </Heading>
          <Image src={lifecycleDiagram} />
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            New Component Lifecycle
          </Heading>
          <ComponentPlayground
            previewBackgroundColor="#104a5b"
            code={require("raw-loader!./examples/newLifecycle.jsx")}
          />
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"When?"}
          </Heading>
          <List>
            <ListItem>
              <Code textColor="white">{"v16.3"}</Code> -
              introduces{" "}
              <Code textColor="white">UNSAFE_</Code> aliases
            </ListItem>
            <ListItem>
              <Code textColor="white">v16.X</Code> - Will
              introduce deprecation warnings
            </ListItem>
            <ListItem>
              <Code textColor="white">v17.0</Code> - Will
              deprecate methods without{" "}
              <Code textColor="white">UNSAFE_</Code> prefix
            </ListItem>
          </List>
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"Render Props"}
          </Heading>
          <Quote textColor="#ffc844">
            {
              '"The term “render prop” refers to a simple technique for sharing code between React components using a prop whose value is a function."'
            }
          </Quote>
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"Why use Render Props?"}
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Generalises behaviours between components
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Much clearer to see where state comes from
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                No risk of naming collisions
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            Example
          </Heading>
          <ComponentPlayground
            previewBackgroundColor="#104a5b"
            code={require("raw-loader!./examples/mouseTracker.jsx")}
          />
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            Example
          </Heading>
          <ComponentPlayground
            previewBackgroundColor="#104a5b"
            code={require("raw-loader!./examples/renderProps.jsx")}
          />
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"If you like HOCs"}
          </Heading>
          <CodePane
            language="javascript"
            source={require("raw-loader!./examples/HOC.jsx")}
          />
        </Slide>
        <Slide
          bgImage={background}
          // align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"When?"}
          </Heading>
          <Appear>
            <Heading
              size={4}
              margin={"100px auto"}
              textColor="white"
            >
              {"Available Now!"}
            </Heading>
          </Appear>
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"Provider/Context"}
          </Heading>
          <Quote textColor="#ffc844">
            {
              '"Context provides a way to pass data through the component tree without having to pass props down manually at every level."'
            }
          </Quote>
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"Theming example"}
          </Heading>
          <ComponentPlayground
            previewBackgroundColor="#104a5b"
            code={require("raw-loader!./examples/oldContext.jsx")}
            scope={{ classNames }}
          />
        </Slide>
        <Slide
          bgImage={background}
          align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"Context example"}
          </Heading>
          <ComponentPlayground
            previewBackgroundColor="#104a5b"
            code={require("raw-loader!./examples/newContext.jsx")}
            scope={{ classNames }}
          />
        </Slide>
        <Slide
          bgImage={background}
          // align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"When?"}
          </Heading>
          <Appear>
            <Heading
              size={4}
              margin={"100px auto"}
              textColor="white"
            >
              {"Available Now!"}
            </Heading>
          </Appear>
          <Appear>
            <Text textColor="white">
              {"Provided you're using "}
              <Code textColor="white">v16.3</Code>
            </Text>
          </Appear>
        </Slide>
        <Slide
          bgImage={background}
          // align="flex-start flex-start"
        >
          <Heading size={2} margin={"100px auto"}>
            {"Questions?"}
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
