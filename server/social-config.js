ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1296423843717752',
    secret: '04962dc6dc7ef52a3a3ab4187c89ec9e', 
    requestPermissions: ['user_friends','user_relationships','user_likes'],
});