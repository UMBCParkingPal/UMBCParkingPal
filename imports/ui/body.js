import { Template } from 'meteor/templating';
import { navbar } from './navbar.html';
import { Spaces } from '../api/parkingSpaces.js';

import './parkingSpace.js';
import './body.html';

Template.body.helpers({
  spaces() {
    // Show newest tasks at the top
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

    // Insert a task into the collection
    Spaces.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});
