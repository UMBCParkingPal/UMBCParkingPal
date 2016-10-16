import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Spaces } from '../../api/parkingSpaces.js';

import template from './parkingSpaces.html';

class SpaceListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      spaces() {
        // Show newest Spaces at the top
        return Spaces.find({}, {
          sort: {
            createdAt: -1
          }
        });
      }
    })
  }

  addSpace(newSpace) {
    // Insert a Space into the collection

    Spaces.insert({
      text: newSpace,
      createdAt: new Date
    });

    // Clear form
    this.newSpace = '';
  }
}

export default angular.module('spacesList', [
  angularMeteor
])
  .component('spacesList', {
    templateUrl: 'imports/components/parkingSpaces/parkingSpaces.html',
    controller: ['$scope', SpaceListCtrl]
});
