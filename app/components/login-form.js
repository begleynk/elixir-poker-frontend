import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      let credentials = this.get('credentials');
      this.attrs.onSubmit(credentials.email, credentials.password); 
    }
  }
});
