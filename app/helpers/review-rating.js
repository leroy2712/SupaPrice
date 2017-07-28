import Ember from 'ember';

export function reviewRating(params) {
  var rating = params[0].get('rating');

  if(rating == 5) {
    return Ember.String.htmlSafe('<i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i>');
  } else if(rating == 4) {
    return Ember.String.htmlSafe('<i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i>');
  } else if(rating == 3) {
    return Ember.String.htmlSafe('<i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i>');
  } else if(rating == 2 ) {
    return Ember.String.htmlSafe('<i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i>');
  } else {
    return Ember.String.htmlSafe('<i class="glyphicon glyphicon-star"></i>');
  }
}

export default Ember.Helper.helper(reviewRating);
