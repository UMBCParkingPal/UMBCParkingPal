Meteor.subscribe('parkingSpaces');


Template.saleFinal.events({
  'click .rate': function(event,template){
    var element = template.find('input:radio[name=rating]:checked');

    var rating = parseInt($(element).val());

    var sellerID = Session.get("ParkingSpace").sellerID

    Meteor.users.update( {_id:sellerID},{$set: {'profile.totalRating' : Meteor.users.findOne(Session.get("ParkingSpace").sellerID).profile.totalRating + rating}})
    Meteor.users.update( {_id:sellerID},{$set: {'profile.numRatings' : Meteor.users.findOne(Session.get("ParkingSpace").sellerID).profile.numRatings + 1}})


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

    postID = Session.get("ParkingSpace")._id

    console.log(postID);
    console.log(ParkingSpaces.findOne()._id);
    ParkingSpaces.update( {_id:postID},{$set: {isBought : true} } )
    ParkingSpaces.update( {_id:postID},{$set: {buyerID : Meteor.userId()} } )

  }
})

Template.saleFinal.helpers({
  ParkingSpaceInfo: function(){
    return Session.get("ParkingSpace")
  }
})
