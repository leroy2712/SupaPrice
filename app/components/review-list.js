import Ember from 'ember';

export default Ember.Component.extend({
  sortRatingDesc: ["rating:desc"],
  sortedReviewsByRating: Ember.computed.sort("reviews.reviews", "sortRatingDesc")
});
