Meteor.subscribe('parkingSpaces');
Meteor.subscribe("users");


Template.ParkingSpaces.helpers({
	ParkingSpaces: ()=> {
		return ParkingSpaces.find({});
	}
});

Template.MyParkingSpaces.helpers({
	MyParkingSpaces: ()=> {
		var thisId = Meteor.userId();
		if (thisId) {
			return ParkingSpaces.find({userID: thisId});
		};
	}
})

Template.ParkingSpaces.helpers({
	FilteredParkingSpaces: (lotNum,price)=>{
		return ParkingSpaces.find({});
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
	editMode: function(){
		return Template.instance().editMode.get();
	},
	canDelete: function(){
		return this.usersName == Meteor.user().profile.name
	}
});

Template.MyParkingSpaces.events({
	'click .delete': function () {
		Meteor.call('deleteParkingSpace', this._id);
		Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.activeListing' :0}})
	},
	'click .buy': function(){
		Session.set('ParkingSpace',this)
		Modal.show('confirmation', function (){
			return this
		})
	}
});
