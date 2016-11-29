Accounts.config({ restrictCreationByEmailDomain: 'umbc.edu' })

Accounts.onCreateUser((options, user) => {
  user.profile = options.profile
  user.profile.email = user.services.google.email
  return user
});


// Accounts.onLogout(function() {
//   console.log("LogOut");
// 	// FlowRouter.go()
// });
//
// Accounts.onLogin(function() {
//   console.log("Go");
// });
