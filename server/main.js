Accounts.config({ restrictCreationByEmailDomain: 'umbc.edu' })

Accounts.onCreateUser((options, user) => {
  user.profile = options.profile
  user.profile.email = user.services.google.email
  // console.log(user.services.google.email);
  // console.log(user);
  return user
});
