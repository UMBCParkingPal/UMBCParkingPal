Meteor.subscribe('parkingSpaces')

Template.ParkingSpaces.helpers({
	parkingSpaces: ()=> {
    var thisId = Meteor.userId();
		console.log("hello?",thisId);
		return ParkingSpaces.find({});
		// return ParkingSpaces.find({usersName == Meteor.user().profile.name});
	}
});
