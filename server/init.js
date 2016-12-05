import { Meteor } from 'meteor/meteor';
//import {ParkingSpaces} from 'collections/parkingSpaces.js';

Meteor.startup(function () {
    Accounts.loginServiceConfiguration.remove({service: "google"});

    Accounts.loginServiceConfiguration.insert({
    service: "google",
    clientId: "1018992891762-sospk99694ek5efevhsqlkri17b4l8vk.apps.googleusercontent.com",
    secret: "WBeQbU_GHjxnNexAQJvIKbPU"
  });

    ParkingSpaces._ensureIndex( {"expireAt": 1}, {expireAfterSeconds: 0});

});
