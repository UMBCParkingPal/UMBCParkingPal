FlowRouter.route('/Home',{
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

FlowRouter.route('/Post', {
	name: 'Post',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NewParkingSpace'});
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
