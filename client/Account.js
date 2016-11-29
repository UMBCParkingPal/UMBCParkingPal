Meteor.subscribe("users");

Template.SellParkingSpace.helpers({
  'updateUserProfile': ()=>{
    Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.activeListing' : 1}})
    console.log("Flag: 1");
  }
})

Template.Register.events({
  'submit form': function(){
    event.preventDefault();

    Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.activeListing' : 0}})


    if(event.target.phonenumber.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.phonenumber' : event.target.phonenumber.value}})
    }

    if(event.target.make.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.make' : event.target.make.value}})

    }
    if(event.target.model.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.model' : event.target.model.value}})

    }
    if(event.target.color.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.color' : event.target.color.value}})
    }
    if(event.target.plate.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.plate' : event.target.plate.value}})
    }

  }
})

Template.Register.helpers({
  email: ()=>{
   var user = Meteor.user();
   if (user) {
     return user.profile.email
   }
 }
})

Template.Account.helpers({
   email: ()=>{
    var user = Meteor.user();
    if (user) {
      return user.profile.email
    }
  },
   phonenumber: ()=>{
    var user = Meteor.user();
    if (user) {
      return user.profile.phonenumber
    }
  },
   make: ()=>{
    var user = Meteor.user();
    if (user) {
      return user.profile.make
    }
  },
  permit: ()=>{
   var user = Meteor.user();
   if (user) {
     return user.profile.permit
   }
 },
   model: ()=>{
    var user = Meteor.user();
    if (user) {
      return user.profile.model
    }
  },
   color: ()=>{
    var user = Meteor.user();
    if (user) {
      return user.profile.color
    }
  },
   plate: ()=>{
    var user = Meteor.user();
    if (user) {
      return user.profile.plate
    }
   }
});

Template.Account.events({
  'submit form': function(){
    event.preventDefault();

    console.log(event.target.permit.value);

    if(event.target.phonenumber.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.phonenumber' : event.target.phonenumber.value}})
    }

    if(event.target.permit.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.permit' : event.target.permit.value}})
    }

    if(event.target.make.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.make' : event.target.make.value}})

    }
    if(event.target.model.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.model' : event.target.model.value}})

    }
    if(event.target.color.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.color' : event.target.color.value}})
    }
    if(event.target.plate.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.plate' : event.target.plate.value}})
    }

  }
})
