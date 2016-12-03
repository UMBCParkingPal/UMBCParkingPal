Meteor.subscribe('parkingSpaces');


Template.confirmation.helpers({
  ParkingSpaceInfo: function(){
    return Session.get("ParkingSpace")
  }
})

Modal.allowMultiple = true

Template.confirmation.events({
  'click .pay': function(){
    // Session.set('ParkingSpace',this)
    Modal.hide()
    Modal.show('saleFinal', function (){
      return this
    })
    console.log(
      ParkingSpaces.findOne({sellerID:Session.get("ParkingSpace").sellerID}).isBought);

  // ParkingSpaces.findOne({sellerID:Session.get("ParkingSpace").sellerID}).buyerID = Meteor.userId()
  }
})

Template.saleFinal.helpers({
  ParkingSpaceInfo: function(){
    return Session.get("ParkingSpace")
  }
})
