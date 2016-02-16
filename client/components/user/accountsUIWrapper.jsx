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
        this.data.currentUser ?  
        React.createElement('a', {href: 'user/'+this.data.userId}, 'Hello '+ this.data.currentUser.username) : <Login />
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