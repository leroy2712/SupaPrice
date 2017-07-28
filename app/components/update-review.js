import Ember from 'ember';

export default Ember.Component.extend({
  updateReviewForm: false,
  actions: {
    sortedRating5: function() {
      this.$("#fourStar").hide();
      this.$("#threeStar").hide();
      this.$("#twoStar").hide();
      this.$("#oneStar").hide();
      this.set('rating', 5);
    },
    sortedRating4: function() {
      this.$("#fiveStar").hide();
      this.$("#threeStar").hide();
      this.$("#twoStar").hide();
      this.$("#oneStar").hide();
      this.set('rating', 4);
    },
    sortedRating3: function() {
      this.$("#fourStar").hide();
      this.$("#fiveStar").hide();
      this.$("#twoStar").hide();
      this.$("#oneStar").hide();
      this.set('rating', 3);
    },
    sortedRating2: function() {
      this.$("#fourStar").hide();
      this.$("#threeStar").hide();
      this.$("#fiveStar").hide();
      this.$("#oneStar").hide();
      this.set('rating', 2);
    },
    sortedRating1: function() {
      this.$("#fourStar").hide();
      this.$("#threeStar").hide();
      this.$("#twoStar").hide();
      this.$("#oneStar").hide();
      this.set('rating', 1);
    },
    showUpdateReviewForm() {
      this.set("updateReviewForm", true);
    },
    updateReview(review) {
      review.save();
      this.set("updateReviewForm", false);
    }
  }
});
