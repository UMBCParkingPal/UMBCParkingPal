FlowRouter.route('/',{ //DO NOT CHANGE THIS. THIS IS HOME DIRECTORY
  name: 'Home',
  action(){
    BlazeLayout.render('MainLayout', {main: 'Home'});
  }
});

FlowRouter.route('/Account', {
	name: 'Account',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Account'});
	}
});

FlowRouter.route('/Search', {
	name: 'Search',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Search'});
	}
});

FlowRouter.route('/Sell', {
	name: 'Sell',
	action() {
		BlazeLayout.render('MainLayout', {main: 'SellParkingSpace'});
	}
});

FlowRouter.route('/Help', {
	name: 'Help',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Help'});
	}
});

FlowRouter.route('/Register', {
	name: 'Register',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Register'});
	}
});

FlowRouter.route('/Listings', {
	name: 'Listings',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Listings'});
	}
});
