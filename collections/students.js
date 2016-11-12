Students = new Mongo.Collection('students');

Students.allow({
 	insert: function(userId, doc) {
 		return !!userId;
 	}
 });

StudentSchema = new SimpleSchema({
	studentId: {
		type: Number,
		label: "ID",
		autoValue: function () {
	 		return this.userId
	 	},
	 	autoform: {
	 		type: "hidden"
	 	}
	},
	name: {
		type: String,
		label: "Name"
	},
	email: {
		type: String,
		label: "Email"
	},
	phone: {
		type: String,
		label: "Phone"
	},
	avgRating: {
		type: Number,
		label: "Average Rating",
		autoform: {
	 		type: "hidden"
	 	}
	},
	totalRatings: {
		type: Number,
		label: "Total Ratings",
		autoform: {
	 		type: "hidden"
	 	}
	},
	
	//Car info
	permit: {
		type: String,
		label: "Permit Type"
	},
	make: {
		type: String,
		label: "Car Make"
	},
	model: {
		type: String,
		label: "Car Model"
	},
	color: {
		type: String,
		label: "Car Color"
	},
	licensePlate: {
		type: String,
		label: "License Plate Number"
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
	deleteUser: function(id){
		Students.remove(id);
	}
});

Students.attachSchema(StudentsSchema);