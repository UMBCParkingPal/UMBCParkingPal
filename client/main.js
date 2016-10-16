import angular from 'angular';
import angularMeteor from 'angular-meteor';
import spacesList from '../imports/components/parkingSpaces/parkingSpaces';

angular.module('simple-spaces', [
  angularMeteor,
  spacesList.name
]);
