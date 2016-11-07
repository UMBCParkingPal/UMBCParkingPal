ParkingSpaces = new Mongo.Collection('parkingSpaces');

// ParkingSpaces.allow({
// 	insert: function(userId, doc) {
// 		return !!userId;
// 	}
// });

ParkingSpaceSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	lotNum: {
		type: Number,
		label: "Lot Number"
	},
	// user: {
	// 	type: String,
	// 	label: "User",
	// 	autoValue: function () {
	// 		return this.userId
	// 	},
	// 	autoform: {
	// 		type: "hidden"
	// 	}
	// },
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	deleteParkingSpace: function(id){
		ParkingSpaces.remove(id);
	}
});

ParkingSpaces.attachSchema(ParkingSpaceSchema);
