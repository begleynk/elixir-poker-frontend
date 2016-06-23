import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    login(email, password) {
      let authenticator = 'authenticator:custom';
      let credentials = {
        identification: email,
        password: password
      };

      this.get('session').authenticate(authenticator, credentials)
      .catch((message) => {
        console.log(message);
        this.set('errorMessage', message);
      });
    }
  }
});
