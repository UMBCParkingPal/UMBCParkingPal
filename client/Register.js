Template.Register.events({
  'submit form': function(){
    event.preventDefault();

    if(event.target.phone.value){
      Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.phonenumber' : event.target.phone.value}})
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
