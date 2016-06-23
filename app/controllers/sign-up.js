import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    createUser(user) {
      let newUser = user;
      newUser.save().catch((error) => {
        this.set('errorMessage', error);
      })
      .then(() => {  
        this.get('session')
        .authenticate('authenticator:custom', {
          identification: newUser.get('email'), 
          password: newUser.get('password')
        })
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
      });
    }
  }
});
