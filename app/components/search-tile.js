import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    search(){
      var words = {
        productToSearch: this.get('srch-term')
      };
      this.sendAction('search',words);
    }
  }
});
