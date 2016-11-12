ParkingSpaces = new Mongo.Collection('parkingSpaces');

// ParkingSpaces.allow({
// 	insert: function(userId, doc) {
// 		return !!userId;
// 	}
// });

ParkingSpaceSchema = new SimpleSchema({
	price: {
		type: Number,
		label: "Selling Price"
		min: 1,
		max: 27
	},
	leavingTime: {
		type: Date,
		label: "Departure Time"
	},
	desc: {
		type: String,
		label: "Description"
	},
	lotNum: {
		type: Number,
		label: "Lot Number",
		min: 1,
		max: 27
	},
	userID: {
		type: String,
		label: "User",
		autoValue: function () {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},

	usersName: {
		type: String,
		label: "User",
		autoValue: function () {
			return Meteor.user().profile.name
		},
		autoform: {
			type: "hidden"
		}
	},
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
