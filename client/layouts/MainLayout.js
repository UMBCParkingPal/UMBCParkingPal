// Meteor.subscribe("users");

Template.MainLayout.helpers({
	didRegister: ()=> {
	   if(Meteor.user().profile.phonenumber){
       return true
     }
     return false
	}
});
