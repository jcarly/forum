ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1296514027042067',
    secret: '5daf2b9fce09ed311eaf5780572a93d4', 
    requestPermissions: ['public_profile','user_friends','user_relationships','user_likes']
});