import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    image: DS.attr(),
    category: DS.attr(),
    Tuskys: DS.attr(),
    Naivas: DS.attr(),
    Nakumatt: DS.attr(),
    Uchumi: DS.attr()
});
