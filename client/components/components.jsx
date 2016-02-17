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
        <header>
          <nav className="navbar navbar-light bg-faded">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul> 
            <UserWidget />
          </nav>
        <h1>Forum</h1>
      </header>
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

