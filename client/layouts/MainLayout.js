Template.MainLayout.helpers({
	didRegister: ()=> {
		var u = Meteor.user().profile
	   if(u.phonenumber && u.permit && u.make && u.model && u.color && u.plate){
       return true
     }
		 console.log(u);
     return false
	}
});
