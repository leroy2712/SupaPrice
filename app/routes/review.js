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
      var reviewed = params.reviewed;
      reviewed.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return reviewed.save();
      })
      //Empty form values
      this.set("username", "");
      this.set("date", "");
      this.set("profilePicture", "");
      this.set("rating", "");
      this.set("reviewContent", "");
      this.transitionTo("review", params.reviewed);
    },
    deleteReview(review) {
      if (confirm("Are you sure you want to delete this review?")) {
        review.destroyRecord(); //No need for .store Firebase reference when destroying
      }
    },
  }
});
