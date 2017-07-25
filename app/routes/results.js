import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  addedToCart: false,
//  model(**PARAMS**) {
//    return this.store.findRecord('**product**', params.**product**_id);
//  },
  actions: {
    addToCart(product) {
      alert("Added to Cart!");
      this.set('addedToCart', true);
      this.get('shoppingCart').add(product);
    },
    removeFromCart(product) {
      this.set('addedToCart', false);
      this.get('shoppingCart').remove(product);
    }
  }
});
