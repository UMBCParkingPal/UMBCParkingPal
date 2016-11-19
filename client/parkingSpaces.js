Template.ParkingSpaces.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('parkingSpaces');
	});
});

Template.ParkingSpaces.helpers({
	parkingSpaces: ()=> {
		console.log("out of folder");
		return ParkingSpaces.find({});
	}
});

Template.myParkingSpaces.helpers({
	myParkingSpaces: ()=>{
		console.log("hello");
		var thisId = Meteor.userId();
		if (thisId) {
			console.log("hello?",thisId);
		};
		return ParkingSpaces.find({});
		// return ParkingSpaces.find({usersName == Meteor.user().profile.name});
	}
})

Template.ParkingSpaces.events({
	'click .new-parkingSpace': () => {
		set('newParkingSpace', true);
	}
});
