Template.ParkingSpaceSingle.onCreated(function(){
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('SingleParkingSpace', id);
	});
});

Template.ParkingSpaceSingle.helpers({
	parkingSpace: ()=> {
		var id = FlowRouter.getParam('id');
		return ParkingSpaces.findOne({_id: id});
	}
});
