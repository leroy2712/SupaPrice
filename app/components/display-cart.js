import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeFromCart(product) {
      if (confirm("Do you really want to remove this item from your cart?")) {
        this.sendAction('removeFromCart', product);
      }
    }
  }
});
