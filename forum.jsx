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
 
 /* Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
  });*/
}