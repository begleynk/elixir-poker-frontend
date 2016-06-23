import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  blinds: DS.attr(),
  size: DS.attr(),
  occupiedSeats: DS.attr()
});
