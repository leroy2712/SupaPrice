import Ember from 'ember';

export default Ember.Route.extend({
  moodel(){
    return this.store.findAll('opinion');
  },
});
