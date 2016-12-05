Meteor.subscribe('parkingSpaces');


Template.saleFinal.events({
  'click .rate': function(event,template){
    var element = template.find('input:radio[name=rating]:checked');

    var rating = parseInt($(element).val());

    var sellerID = Session.get("ParkingSpace").sellerID

    Meteor.users.update( {_id:sellerID},{$set: {'profile.totalRating' : Meteor.users.findOne(Session.get("ParkingSpace").sellerID).profile.totalRating + rating}})
    Meteor.users.update( {_id:sellerID},{$set: {'profile.numRatings' : Meteor.users.findOne(Session.get("ParkingSpace").sellerID).profile.numRatings + 1}})

    console.log(Meteor.users.findOne(Session.get("ParkingSpace").sellerID).profile);
  }
})

Template.confirmation.helpers({
  ParkingSpaceInfo: function(){
    return Session.get("ParkingSpace")
  }
})

Modal.allowMultiple = true

Template.confirmation.events({
  'click .pay': function(){
    Modal.hide()

    // Modal.show('saleFinal', function (){
    //   return this
    // })
    ParkingSpaces.update(Session.get("ParkingSpace")._id,{
      $set: { isBought: true },
      $set: { buyerID: Meteor.userId()},
    });
    // ParkingSpaces.update(Session.get("ParkingSpace")._id}Meteor.userId()

    console.log(ParkingSpaces.findOne({sellerID:Session.get("ParkingSpace").sellerID}).isBought);
  }
})

Template.saleFinal.helpers({
  ParkingSpaceInfo: function(){
    return Session.get("ParkingSpace")
  }
})
