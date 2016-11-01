import { Template } from 'meteor/templating';

import './parkingSpace.js';


Template.body.helpers({
  spaces() {
    // Show newest tasks at the top
    console.log("Spaces Body")
    return Spaces.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-space'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    console.log("Insert")
    // Insert a task into the collection
    Spaces.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});
