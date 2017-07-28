import Ember from 'ember';

export default Ember.Component.extend({
  addNewReviewForm: false,
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
    showNewReviewForm() {
      this.set("addNewReviewForm", true);
    },
    saveNewReview() {
      var params = {
        username: this.get("username"),
        date: this.get("date"),
        profilePicture: this.get("profilePicture"),
        rating: parseInt(this.get("rating")),
        reviewContent: this.get("reviewContent"),
        review: this.get("review") //Don't forget to connect review to book
      };
      this.set("addNewReviewForm", false);
      this.sendAction("saveNewReview", params);
      //Empty form values
      this.set("username", "");
      this.set("date", "");
      this.set("profilePicture", "");
      this.set("rating", "");
      this.set("reviewContent", "");
    }
  }
});
