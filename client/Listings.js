import '/imports/startup/accounts-config.js';

Template.Listings.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('parkingSpaces');
	});
});

Template.Listings.helpers({
	shoppingList: ()=> {
		return ParkingSpaces.find();
	}
});
