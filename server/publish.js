Meteor.publish('parkingSpaces', function(){
	return ParkingSpaces.find({});
});
