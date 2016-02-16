var Login = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    // retrieve the input field values
    var email = React.findDOMNode(this.refs.loginEmail).value.trim()
      , password = React.findDOMNode(this.refs.loginPassword).value.trim();

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Meteor.loginWithPassword(email, password, function(err){
      if (err){
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
            <input type="email" ref="loginEmail" placeholder="email" />
            <input type="password" ref="loginPassword" />
            <input type="submit" className="btn btn-default" value="Sign in" />
            <button id="facebook-login" className="btn btn-default" onClick={this.handleClick}> Login with Facebook</button>
          </form>
     </div>
    );
  }
});

var Register = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    // retrieve the input field values
    var email = React.findDOMNode(this.refs.loginEmail).value.trim()
      , password = React.findDOMNode(this.refs.loginPassword).value.trim();

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Account.createUser(email, password, function(err){
      if (err){
        throw new Meteor.Error("Register failed"); 
      }      
    });
  },
  render() {
    return (
       <div>
          <form id="registerForm" onSubmit={this.handleSubmit}>
            <input type="email" ref="loginEmail" placeholder="email" />
            <input type="password" ref="loginPassword" />
            <input type="submit" value="Sign up" />
          </form>
     </div>
    );
  }
});