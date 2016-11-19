Students = new Mongo.Collection('students');

Students.allow({
    insert: function(userId, doc) {
 		return !!userId;
 	}
 });
 
Students.schema = new SimpleSchema({
	studentId: {
		type: Number,
		label: "ID",
		autoValue: function () {
	 		return this.userId;
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
		label: "Email",
        autoform: {
            afFieldInput: {
                type: "email"
            }
	 	}
	},
	phone: {
		type: Number,
		label: "Phone",
        autoform: {
            afFieldInput: {
                type: "tel"
            }
	 	}
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
    //active listing/purchase (can ony have one)
    activeListing: {
        type: String,
        label: "Active Listing",
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
	deleteStudent: function(id){
		Students.remove(id);
	}
});

