Meteor.subscribe("users");

Template.Account.helpers({
   email: ()=>{
    var user = Meteor.user();
    if (user) {
      console.log(user)
      return user.profile.email
    }
   }
});
