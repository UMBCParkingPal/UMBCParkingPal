Accounts.config({ restrictCreationByEmailDomain: 'umbc.edu' })

Accounts.onCreateUser(function(options,user){
  console.log("create")
  //   if (typeof(user.services.google) != "undefined") {
  //       user.email = user.services.google.email;
  //       user.profilePicture = user.services.google.picture;
  //       user.username = user.services.google.name;
  //   }
  // return user;
});
