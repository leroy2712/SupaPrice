import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cart');
  this.route('about');
  this.route('contact');
  this.route('results');
  this.route('opinion');
  this.route('product', {path: '/products/:products_id'});
  this.route('check', {path: '/products/:products_id'});
});

export default Router;
