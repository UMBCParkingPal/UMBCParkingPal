Accounts.config({ restrictCreationByEmailDomain: 'umbc.edu' })

Accounts.onCreateUser((options, user) => {
  console.log(user);
});
