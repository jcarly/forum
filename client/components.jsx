MainLayout = React.createClass({
  render() {
    return (
      <div>
        <header><h1>Forum</h1></header>
        <main>{this.props.content}</main>
        <footer>Copyright</footer>
      </div>
    );
  }
});

User = React.createClass({

  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {};
    var userId = this.props.userId;
    var handle = Meteor.subscribe('singlePost', userId);
    if(handle.ready()) {
      data.user = Users.findOne({_id: userId});
    }
    return data;
  },
  getContent() {
    return (
      <div>
        <h3>{this.data.user.name}</h3>
      </div>
    );
  },
  render() {
    return (
      <div>
        <p>
          <a href="/">Home</a> <br/>
          {this.data.user ? this.getContent() : <p>Loading...</p>}
        </p>
      </div>
    );
  }
});