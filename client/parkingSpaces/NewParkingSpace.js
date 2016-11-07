Template.NewParkingSpace.events({
	'click .fa-close': function() {
		Session.set('newParkingSpace', false);
	}
});
