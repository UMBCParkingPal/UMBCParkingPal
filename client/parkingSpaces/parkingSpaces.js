Meteor.subscribe('parkingSpaces')

Template.ParkingSpaces.helpers({
	parkingSpaces: ()=> {
		return ParkingSpaces.find({});
	}
});
