Template.Home.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('parkingSpaces');
	});
});

Template.Home.helpers({
	parkingSpaces: ()=> {
    var thisId = Meteor.userId();
		if (thisId) {
		console.log("hello?",thisId);
		};
		return ParkingSpaces.find({});
		// return ParkingSpaces.find({usersName == Meteor.user().profile.name});
	}
});


Template.Home.events({
	'click .new-parkingSpace': () => {
		set('newParkingSpace', true);
	}
});
