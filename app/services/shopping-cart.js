import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(pro) {
    this.get('products').pushObject(pro);
  },
  remove(pro) {
    this.get('products').removeObject(pro);
  }
});
