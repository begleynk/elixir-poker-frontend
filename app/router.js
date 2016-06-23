import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tables');
  this.route('table', { path: '/tables/:table_id' });
  this.route('sign-up');
  this.route('login');
});

export default Router;
