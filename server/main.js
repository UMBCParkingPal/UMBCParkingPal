Accounts.config({ restrictCreationByEmailDomain: 'umbc.edu' })

Accounts.onCreateUser((options, user) => {
  user.profile = options.profile
  user.profile.email = user.services.google.email
  return user
});

Accounts.onLogin(() => {
  if (Meteor.isClient) {
    console.log("Yo");
    FlowRouter.go("/Account");
  }
});
