/*
This file defines the schema used to collect information about parking Spaces that are sold
All it's attributes are descibed here
*/

ParkingSpaces = new Mongo.Collection('parkingSpaces');

ParkingSpaceSchema = new SimpleSchema({
	price: {
		type: Number,
		label: "Selling Price (USD)",
		min: 1,
		max: 5
	},
    time: {
        type: Object
    },
    'time.hour': {
        type: Number,
		label: "Hour",
        min: 1,
        max:12
    },

    'time.minute': {
        type: Number,
		label: "Minute",
        min: 0,
        max: 59
    },
    'time.minuteStr': {
    	type: String,
    	label: "Min String",
    	autoform: {
    		type: "hidden"
    	},
    	autoValue: function () {
				//normalize input
    		num = this.field('time.minute').value;
    		var numStr
				if(!num){
					return //exit gracefully
				}

    		if( num < 10){
					numStr = num.toString();
    			numStr = "0" + numStr;
    		} else {
					numStr = num.toString()
				}
				console.log(numStr);
    		return numStr;
    	}
    },
    'time.ampm': {
        type: String,
		label: "AM/PM",
        autoform: {
            type: "select",
            options: function() {
                return [
                    {label: "AM", value: "AM"},
                    {label: "PM", value: "PM"}
                ];
            }
        }
    },
	lotNum: {
		type: Number,
		label: "Lot Number",
        autoform: {
			type: "select",
            options: function() {
                return [
                    {label: "1", value: 1},
                     {label: "2", value: 2},
                    {label: "3", value: 3},
                     {label: "4", value: 4},
                    {label: "5", value: 5},
                     {label: "6", value: 6},
                    {label: "7", value: 7},
                     {label: "8", value: 8},
                    {label: "9", value: 9},
                     {label: "10", value: 10},
                    {label: "11", value: 11},
                    {label: "12", value: 12},
                     {label: "13", value: 13},
                    {label: "14", value: 14},
                     {label: "15", value: 15},
                    {label: "16", value: 16},
                     {label: "17", value: 17},
                    {label: "18", value: 18},
                     {label: "19", value: 19},
                     {label: "20", value: 20},
                    {label: "21", value: 21},
                    {label: "22", value: 22},
                     {label: "23", value: 23},
                    {label: "24", value: 24},
                     {label: "25", value: 25},
                    {label: "26", value: 26},
                     {label: "27", value: 27},
                    {label: "28", value: 28},
                    {label: "29", value: 29}
                ];
            }
		}
	},
    desc: {
        type: String,
        label: "Description"
    },
	sellerID: {
		type: String,
		label: "User",
		autoValue: function () {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	buyerID: {
		type: String,
		label: "User",
		defaultValue: "",
		autoform: {
			type: "hidden"
		}
	},
	isBought: {
		type: Boolean,
		label: "User",
		defaultValue: false,
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
	},
	expireAt: {
		//delete listing after time interval
		type: Date,
		label: "Expire At",
		autoValue: function() {

			current = new Date();
			console.log(current);
			hour = this.field('time.hour').value;
			//convert to military
			if( this.field('time.ampm').value == "PM" ){
				hour = hour + 12;
			}
			min = this.field('time.minute').value;
			if(!min){
				console.log("No Minute. Safe Return (happens when buying, weird error)");
				return
			}
			date =  new Date(current.getFullYear(), current.getMonth(), current.getDate(), hour, min);
			console.log(min);
			console.log(date);
			return	date;
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
