Meteor.subscribe('parkingSpaces')

Template.ParkingSpaces.helpers({
	parkingSpaces: ()=> {
		console.log("In Folder");
		return ParkingSpaces.find({});
	},
	myParkingSpaces: ()=> {
		console.log("hello");
		var thisId = Meteor.userId();
		if (thisId) {
			console.log("hello?",thisId);
		};
		return ParkingSpaces.find({});
		// return ParkingSpaces.find({usersName == Meteor.user().profile.name});
	}
});
