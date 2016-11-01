import { Accounts } from 'meteor/accounts-base';

// Accounts.config({ restrictCreationByEmailDomain: 'umbc.edu' })

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
