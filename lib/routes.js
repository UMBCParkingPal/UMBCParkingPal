FlowRouter.route('/',{
  name: 'home',
  action(){
    BlazeLayout.render('MainLayout', {main: 'Search'});
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
