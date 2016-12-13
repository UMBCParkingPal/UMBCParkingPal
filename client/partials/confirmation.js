Meteor.subscribe('parkingSpaces');

//rating functionality
Template.saleFinal.events({
  'click .rate': function(event,template){
    var element = template.find('input:radio[name=rating]:checked');

    var rating = parseInt($(element).val());

    var userID = null;
    var buyer = false;
    if(ParkingSpaces.findOne({buyerID:Meteor.userId()})){
      userID = ParkingSpaces.findOne({buyerID:Meteor.userId()}).sellerID
      buyer = true;
    }
    else if(ParkingSpaces.findOne({sellerID:Meteor.userId()})){
      userID = ParkingSpaces.findOne({sellerID:Meteor.userId()}).buyerID
    }

    Meteor.users.update( {_id:userID},{$inc: {'profile.totalRating' : rating}})
    Meteor.users.update( {_id:userID},{$inc: {'profile.numRatings' : 1}})

    if(buyer){
      Meteor.call('deleteParkingSpace', ParkingSpaces.findOne({buyerID:Meteor.userId()})._id);
    }
    else {
      Meteor.call('deleteParkingSpace', ParkingSpaces.findOne({sellerID:Meteor.userId()})._id);
    }


  }
})

//parking confirmation checks
Template.confirmation.helpers({
  ParkingSpaceInfo: function(){
    return Session.get("ParkingSpace")
  },
  canBuySpace: function(){
    var thisId = Meteor.userId();
    if (ParkingSpaces.find({sellerID: thisId}).fetch().length == 0 && ParkingSpaces.find({buyerID: thisId}).fetch().length == 0){
      return true
    }
    return false
  }
})

Modal.allowMultiple = true

//handle confirmation events
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
