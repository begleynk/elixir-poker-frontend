import Ember from 'ember';
import JWTAuthenticator from 'ember-simple-auth-token/authenticators/jwt';

export default JWTAuthenticator.extend({
  // Make sure the data is in the correct format
  // for our API.
  makeRequest(url, data, headers) {
    return Ember.$.ajax({
      url: url,
      method: 'POST',
      data: JSON.stringify({data: { attributes: data }}),
      dataType: 'json',
      contentType: 'application/json',
      headers: this.headers,
      beforeSend: (xhr, settings) => {
        xhr.setRequestHeader('Accept', settings.accepts.json);

        if (headers) {
          Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, headers[key]);
          });
        }
      }
    });
  },

  // Monkey patch FTW.
  // Backend expects current time to be seconds, while the
  // JWTAuthenticator returns milliseconds, causing the session
  // to be invalidated on refresh. This should be fixed in
  // ember-simple-auth-token 2.0
  //
  // https://github.com/jpadilla/ember-simple-auth-token/pull/141
  //
  getCurrentTime() {
     return Math.floor((new Date()).getTime() / 1000);
   },
});

