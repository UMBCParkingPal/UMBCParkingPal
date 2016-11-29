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
      console.log("wut?");
      return this
    })
  }
})

Template.saleFinal.helpers({
  ParkingSpaceInfo: function(){
    return Session.get("ParkingSpace")
  }
})
