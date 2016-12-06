Meteor.subscribe('parkingSpaces');
Meteor.subscribe("users");
Modal.allowMultiple = true



Session.set('LotFlag',false)
Session.set('PriceFlag',false)

AutoForm.addHooks(['insertParkingSpaceForm'], {
  onSuccess: function(operation, result, template) {
    FlowRouter.go("/");
		Modal.show('sellConfirmation')
  }
});

Template.MyParkingSpace.events({
  'click .confirm': function(){
    Modal.hide()
    console.log("Yo");
    Modal.show('saleFinal', function (){
      console.log(this);
      return this
    })
  }
})

Template.MyParkingSpaces.helpers({
	MyParkingSpacesList: ()=> {
		var thisId = Meteor.userId();
		if (thisId) {

      // This functionality gets the user's listing they puchased or are selling BOTH.
      if(ParkingSpaces.find({sellerID: thisId},{isBought: false})){
			   return ParkingSpaces.find({sellerID: thisId},{isBought: false});
       } else if (ParkingSpaces.find({sellerID: thisId},{isBought: true})) {
         return ParkingSpaces.find({sellerID: thisId},{isBought: true});
       }

		};
	}
})

Template.Buy.events({
  'click .buy': function(){
    Session.set('ParkingSpace',this)
    Modal.show('confirmation', function (){
      return this
    })
  }
})

Template.Buy.helpers({
	FilteredParkingSpaces: ()=>{
    console.log(Session.get('PriceFilter'));
    console.log(Session.get('LotNumberFilter'));

    if(Session.get('LotFlag') && Session.get('PriceFlag')){
      return ParkingSpaces.find({
        "isBought": false,
        "price" : { $lte: Session.get('PriceFilter')},
        "lotNum" : Session.get('LotNumberFilter')
      });
    } else if(Session.get('LotFlag')){
      return ParkingSpaces.find({
        "isBought": false,
        "lotNum" : Session.get('LotNumberFilter')
      });
    } else if(Session.get('PriceFlag')) {
      return ParkingSpaces.find({
        "isBought": false,
        "price" : { $lte: Session.get('PriceFilter')},
      });
    } else {
      return ParkingSpaces.find({
        "isBought": false,
      });
    }
  }
})

Template.Buy.events({
	'change #lot': function(event){
    var input = $(event.target).val()
    if(input == 0){
      Session.set('LotFlag',false)
    } else {
      Session.set('LotFlag',true)
  		Session.set('LotNumberFilter',parseInt(input))
    }
	},
	'click #price': function(){
    var input = $(event.target).val()
    if(input == 0){
      Session.set('PriceFlag',false)
    } else {
      Session.set('PriceFlag',true)
      Session.set('PriceFilter',parseInt(input))
    }
	}
})

Template.ParkingSpace.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.SellParkingSpace.events({
	'click .fa-close': function() {
		Session.set('SellParkingSpace', false);
	}
});


Template.ParkingSpace.helpers({
	canDelete: function(){
		return this.usersName == Meteor.user().profile.name
	}
});


Template.ParkingSpace.helpers({
  getUserRating:()=> {

    thisId = Template.instance().data.sellerID;
    var rating = Meteor.users.findOne({ "_id" : thisId }).profile.totalRating
    var numRatings = Meteor.users.findOne({ "_id" : thisId }).profile.numRatings

    if(numRatings == 0){
      return "No Ratings"
    }

    var average = rating/numRatings

    if(numRatings == 1){
      return average.toFixed(2) + "/5 ("+ numRatings +" rating)"
    }
    return average.toFixed(2) + "/5 ("+ numRatings +" ratings)"
  }
})


Template.MyParkingSpace.helpers({
  isSold:()=>{
    console.log(Template.instance().data.isBought);
    return Template.instance().data.isBought;
  },

  isSeller: function() {
    var user = Meteor.userId();
    var seller = Template.instance().data.sellerID;
    if(!seller){
      return false;
    }
    if( user == seller){
      return true;
    }else {
      return false;
    }
  },
  isBuyer: function() {
    var user = Meteor.userId();
    var buyer = Template.instance().data.buyerID;
    if(!buyer){
      return false;
    }
    if( user == buyer){
      return true;
    }else {
      return false;
    }
  },
  buyerMake: function() {
    var buyer = Template.instance().data.buyerID;
    console.log(buyer);
    var student = Meteor.users.findOne({"_id" : buyer});
    if(!student){
      return "no info";
    }
    
    return student.profile.make;
  },
  sellerMake: function() {
    var seller = Template.instance().data.sellerID;
    var student = Meteor.users.findOne({seller});
    if(!student){
      return "no info";
    }
    return student.profile.make;
  },
  sellerPhone:()=>{
    sellerID = Template.instance().sellerID
    return Meteor.users.findOne({"sellerID" : sellerID}).profile.phonenumber;
  },
  isMySpace: ()=> {
    return Template.instance().data.sellerID == Meteor.user().profile.sellerID;

  }
})

Template.MyParkingSpace.events({
	'click .delete': function () {
    toDelete = Template.instance().data._id
    new Confirmation({
      title: "Confirmation",
      cancelText: "Cancel",
      okText: "Ok",
      success: true, // whether the button should be green or red
      focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
    }, function (ok) {
      if(ok){
        console.log(toDelete);
        Meteor.call('deleteParkingSpace', toDelete);
        ParkingSpaces.remove(this._id);
      }
    });
    // Meteor.call('deleteParkingSpace', this._id);
    //ParkingSpaces.remove(this._id);
  },
});
