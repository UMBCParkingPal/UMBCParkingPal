Template.ParkingSpace.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.ParkingSpace.helpers({
	editMode: function(){
		return Template.instance().editMode.get();
	},
	canDelete: function(){

		return this.usersName == Meteor.user().profile.name
	}
});

Template.ParkingSpace.events({
	'click .delete': function () {
		Meteor.call('deleteParkingSpace', this._id);
	}
});
