Template.ParkingSpaces.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('parkingSpaces');
	});
});

Template.ParkingSpaces.helpers({
	parkingSpaces: ()=> {
		return ParkingSpaces.find({});
	}
});

Template.ParkingSpaces.events({
	'click .new-parkingSpace': () => {
		set('newParkingSpace', true);
	}
});
