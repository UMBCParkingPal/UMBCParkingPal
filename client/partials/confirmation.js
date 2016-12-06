Meteor.subscribe('parkingSpaces');


Template.saleFinal.events({
  'click .rate': function(event,template){
    var element = template.find('input:radio[name=rating]:checked');

    var rating = parseInt($(element).val());


    var sellerID = ParkingSpaces.findOne({buyerID:Meteor.userId()}).sellerID

    Meteor.users.update( {_id:sellerID},{$inc: {'profile.totalRating' : rating}})
    Meteor.users.update( {_id:sellerID},{$inc: {'profile.numRatings' : 1}})

    Meteor.call('deleteParkingSpace', ParkingSpaces.findOne({buyerID:Meteor.userId()})._id);

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
    console.log("Hey");
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
