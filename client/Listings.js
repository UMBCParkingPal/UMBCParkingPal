Template.Listings.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('parkingSpaces');
	});
});

Template.Listings.helpers({
	parkingSpaces: ()=> {
		return ParkingSpaces.find({});
	}
});

Template.Listings.events({
	'click .new-parkingSpace': () => {
		set('newParkingSpace', true);
	}
});
