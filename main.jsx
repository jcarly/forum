// Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code is executed on the client only
	Accounts.ui.config({
		passwordSignupFields: "USERNAME_ONLY",
		requestPermissions: {
		    facebook: ['user_friends','user_relationships','user_likes'],
		}
	});

	Meteor.subscribe("tasks");


  /*	Template.login.events({
	    'click #facebook-login': function(event) {
	        Meteor.loginWithFacebook({}, function(err){
	            if (err) {
	                throw new Meteor.Error("Facebook login failed");
	            }
	        });
	    },
	 
	    'click #logout': function(event) {
	        Meteor.logout(function(err){
	            if (err) {
	                throw new Meteor.Error("Logout failed");
	            }
	        })
	    }
	});*/
 
  	/*Meteor.startup(function () {
	    // Use Meteor.startup to render the component after the page is ready
	    ReactLayout.render(MainLayout, {content: <App />});
  	});*/
}

if (Meteor.isServer) {
  	Meteor.publish("tasks", function () {
    	return Tasks.find();
  	});
  	/*Meteor.publish("users", function () {
    	return Meteor.users.find();
  	});
  	Meteor.publish('singleUser', function(id) {
		//check(id, String);
		// Make a delay manually to show the loading state
		//Meteor._sleepForMs(1000);
		return Meteor.users.find({_id: id});
	});*/
}

Meteor.methods({
  	addTask(text) {
	    // Make sure the user is logged in before inserting a task
	    if (! Meteor.userId()) {
	      	throw new Meteor.Error("not-authorized");
	    }
	 
	    Tasks.insert({
			text: text,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username
	    });
  	},
 
  	removeTask(taskId) {
    	Tasks.remove(taskId);
  	},
 
  	setChecked(taskId, setChecked) {
    	Tasks.update(taskId, { $set: { checked: setChecked} });
  	}
});