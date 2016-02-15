// App component - represents the whole app
App = React.createClass({
 
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      hideCompleted: false
    }
  },
 
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    let query = {};
 
    if (this.state.hideCompleted) {
      // If hide completed is checked, filter tasks
      query = {checked: {$ne: true}};
    }
    return {
      tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
      incompleteCount: Tasks.find({checked: {$ne: true}}).count(),
      currentUser: Meteor.user()
    }
  },
 
  renderTasks() {
    // Get tasks from this.data.tasks
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
     });
  },
  handleClick: function(event) {
    Meteor.call('getFriendsData', function(err, data) {
      console.log('click');
      console.log(JSON.stringify(data, undefined, 4));
    });
  },
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call("addTask", text);
 
    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },

  toggleHideCompleted() {
    this.setState({
      hideCompleted: ! this.state.hideCompleted
    });
  },
 
  render() {
    return (
        <div>
          <h2>Todo List ({this.data.incompleteCount})</h2>
 
          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly={true}
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted} />
            Hide Completed Tasks
          </label>
 
          <AccountsUIWrapper />

          { this.data.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks" />
            </form> : ''
          }

 
        <ul>
          {this.renderTasks()}
        </ul>
        <button className="btn" id="btn-user-data" onClick={this.handleClick}>Get User Data</button>
          <div class="well">
              <pre id="result"></pre>
          </div>
      </div>
    );
  }
});