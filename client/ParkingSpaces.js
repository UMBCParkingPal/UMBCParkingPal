Meteor.subscribe('parkingSpaces');
Meteor.subscribe("users");

// Template.ParkingSpaces.helpers({
// 	ParkingSpaces: ()=> {
// 		return ParkingSpaces.find({});
// 	}
// });

AutoForm.addHooks(['insertParkingSpaceForm'], {
  onSuccess: function(operation, result, template) {
    FlowRouter.go("/");
		Modal.show('sellConfirmation')
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

Template.Buy.helpers({
	FilteredParkingSpaces: ()=>{
		return ParkingSpaces.find({});
	}
})

Template.Buy.events({
	'click input': function(event,template){
		var yourArray = []
		$("input:checkbox[name=lotnumber]:checked").each(function(){
    	yourArray.push($(this).val());
		});
		console.log(yourArray);
		Session.set('LotArray', yourArray)
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
		Meteor.users.update( {_id:Meteor.userId()},{$set: {'profile.activeListing' : 0}})
		console.log("Deleted");
	},
	'click .buy': function(){
		Session.set('ParkingSpace',this)
		Modal.show('confirmation', function (){
			return this
		})
	}
});
