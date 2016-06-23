import Model from 'ember-data/model';
import DS from 'ember-data';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  status: DS.attr(),
  position: DS.attr(),
});
