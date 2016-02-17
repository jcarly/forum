Login = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    // retrieve the input field values
    var username = React.findDOMNode(this.refs.loginUsername).value.trim()
      , password = React.findDOMNode(this.refs.loginPassword).value.trim();

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Meteor.loginWithPassword(username, password, function(err){      
      if (err){
        console.log(err);
        throw new Meteor.Error("Login failed");
      }
    });
  },
  handleClick(e) {
    e.preventDefault();
    Meteor.loginWithFacebook({}, function(err){
        if (err) {
            throw new Meteor.Error("Facebook login failed");
        }
    })
  },
  render() {
    return (
       <div>
          <form id="loginForm" onSubmit={this.handleSubmit}>
            <input type="text" ref="loginUsername" placeholder="username" />
            <input type="password" ref="loginPassword" />
            <input type="submit" className="btn btn-default" value="Sign in" />
            
          </form>
          <button id="facebook-login" className="btn btn-default" onClick={this.handleClick}> Login Facebook </button>
          <a href="register">Register</a>
     </div>
    );
  }
});

Register = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    // retrieve the input field values
    var username = React.findDOMNode(this.refs.loginUsername).value.trim(),
      email = React.findDOMNode(this.refs.loginEmail).value.trim(),
      password = React.findDOMNode(this.refs.loginPassword).value.trim();

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Accounts.createUser({username: username, email: email, password: password},
    function(err){
      if (err){
        console.log(err);
        throw new Meteor.Error("Register failed"); 
      } 
      else{      
        FlowRouter.go('/');
      }     
    });
  },
  render() {
    return (
       <div>
          <form id="registerForm" onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" ref="loginUsername" placeholder="username" />
            <input className="form-control" type="email" ref="loginEmail" placeholder="email" />
            <input className="form-control" type="password" ref="loginPassword" placeholder="password" />
            <input className="btn btn-primary" type="submit" value="Sign up" />
          </form>
     </div>
    );
  }
});

Logged = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      userId: Meteor.userId()
    }
  },
  handleClick(e) {
    e.preventDefault();
    Meteor.logout();
  },
  render() {
    const link = 'user/'+this.data.userId;
    const a = <a href={link}>{this.data.currentUser.username}</a>;
    const loggout = <button className="btn btn-default" onClick={this.handleClick()}>Log out</button>;
      
    return (
      <span>
        Hello {loggout}  
      </span>
    );
  }
});

/*Logged = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      userId: Meteor.userId()
    }
  },
  handleClick() {
    Meteor.logout();
  },
  render() {
    return (
      <div>
        <span><UserLink /></span>

        <button className="btn btn-default" onClick={this.handleClick()}>Log out</button>
      </div>
    );
  }
});*/