Meteor.subscribe('parkingSpaces');
Meteor.subscribe("users");

// Template.ParkingSpaces.helpers({
// 	ParkingSpaces: ()=> {
// 		return ParkingSpaces.find({});
// 	}
// });

AutoForm.addHooks(['insertParkingSpaceForm'], {
  onSuccess: function(operation, result, template) {
    FlowRouter.go("/");
		Modal.show('sellConfirmation')
  }
});


Template.Buy.helpers({
	FilteredParkingSpaces: ()=>{
		return ParkingSpaces.find({});


		var toReturn = []

		lotsWeWant = Session.get('LotArray')

		for(i = 0; i < lotsWeWant.length; i++){
			toReturn += ParkingSpaces.find({lotNum: lotsWeWant[i]});
			console.log(ParkingSpaces.find({lotNum: lotsWeWant[i]}));
		}
		console.log(lotsWeWant);
		return toReturn
	}
})

Template.Buy.events({
	'click input': function(event,template){
		var yourArray = []
		$("input:checkbox[name=lotnumber]:checked").each(function(){
    	yourArray.push($(this).val());
 		});
		console.log(yourArray);
		Session.set('LotArray', yourArray)
	},
	'click .filterLot': function(){
		if(Session.get('LotFlag') != null){
			Session.set('LotFlag', !Session.get('LotFlag'))
		} else {
			Session.set('LotFlag', true)
		}
		console.log(Session.get('LotFlag'));

	}
})

Template.ParkingSpace.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.SellParkingSpace.events({
	'click .fa-close': function() {
		Session.set('SellParkingSpace', false);
	}
});


Template.ParkingSpace.helpers({
	editMode: function(){
		return Template.instance().editMode.get();
	},
	canDelete: function(){
		return this.usersName == Meteor.user().profile.name
	}
});

