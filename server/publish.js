Meteor.publish('parkingSpaces', function(){
	return ParkingSpaces.find({});
});

Meteor.publish('SingleParkingSpace', function(id){
	check(id, String);
	return ParkingSpaces.find({});
});
