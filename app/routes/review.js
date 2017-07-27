import Ember from 'ember';

export default Ember.Route.extend ({
  model() {
    return Ember.RSVP.hash ({
      review: this.store.findAll("review"),
      products: this.store.findAll("products")
    });
  },
  actions: {
    saveNewReview(params) {
      var newReview = this.store.createRecord("review", params);
      newReview.save();
      this.transitionTo("review");
    },
    deleteReview(review) {
      if (confirm("Are you sure you want to delete this review?")) {
        review.destroyRecord(); //No need for .store Firebase reference when destroying
      }
    },
  }
});
