UserWidget = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      userId: Meteor.userId()
    }
  },
  getContent(){
    return(
      <div>
      {
        this.data.currentUser ? <Logged /> : <Login />
      }
      </div>
    )
  },
  render() {
    return (
      <div>{this.getContent()}</div>
    );
  }
});