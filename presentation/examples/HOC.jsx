function withPosition(Component) {
  return class extends React.Component {
    render() {
      return (
        <MouseTracker>
          {({ x, y }) => (
            <Component {...this.props} x={x} y={y} />
          )}
        </MouseTracker>
      );
    }
  };
}
