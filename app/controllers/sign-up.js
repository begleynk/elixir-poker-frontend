import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    createUser(user) {
      let newUser = user;
      newUser.save()
      .then(() => {  
        this.get('session')
        .authenticate('authenticator:custom', {
          identification: newUser.get('email'), 
          password: newUser.get('password')
        })
        .catch((reason) => {
          this.set('errorMessages', reason.errors);
        });
      }, (response) => {
        console.log(response.errors);
        this.set('errorMessages', response.errors);
      });
    }
  }
});
