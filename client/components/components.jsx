MainLayout = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <main>{this.props.content}</main>
        <Footer />
      </div>
    );
  }
});

Header = React.createClass({
  render() {
    return (
        <header><h1>Forum</h1></header>
    );
  }
});

Footer = React.createClass({
  render() {
    return (
        <footer>Copyright</footer>
    );
  }
});

