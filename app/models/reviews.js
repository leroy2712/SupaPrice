import DS from 'ember-data';

export default DS.Model.extend({
username: DS.attr(),
date: DS.attr(),
profilePicture: DS.attr("number"),
reviewContent: DS.attr(),
opinion: DS.belongsTo("opinion", {async: true})
});
