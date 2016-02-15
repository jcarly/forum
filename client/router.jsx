FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <App />});
  }
});


///////////////////ADMIN///////////////////////

var adminSection = FlowRouter.group({
    prefix: "/admin"
});

// for the /admin page
adminSection.route('/', {
    action: function() {}
});

// for the /admin/new-post page
adminSection.route('/new-post', {
    action: function() {}
});

///////////////USER/////////////////////////////

var userSection = FlowRouter.group({
    prefix: "/user"
});

// for the /admin page
userSection.route('/:userId', {
   action(params) {
    ReactLayout.render(MainLayout, {content: <User {...params} />});
  }
});
