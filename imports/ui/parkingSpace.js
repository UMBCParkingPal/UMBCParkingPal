import { Template } from 'meteor/templating';

import { Spaces } from '../api/parkingSpaces.js';

import './parkingSpace.html';

Template.space.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Spaces.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Spaces.remove(this._id);
  },
});
