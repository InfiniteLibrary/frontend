import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('catalog');
  this.route('library');
  this.route('book');
  this.route('read');
  this.route('signin');
});

export default Router;
