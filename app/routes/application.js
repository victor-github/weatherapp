export default Ember.Route.extend({
  setupController: function(controller) {

    var self = this;
    //get and set user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      controller.set('latitude', position.coords.latitude);
      controller.set('longitude', position.coords.longitude);
      self.callWeatherApi(controller);
                  
    }, function(err) {
      if (err.code == 1) {
        //handle error
      }
    });
  },

  callWeatherApi: function(controller) {
    //make API call
    var apiKey = '126afc6fb1a74a4f4205b932da9f0dfc';
    var url = 'https://api.forecast.io/forecast/';
    var data;
    $.getJSON(url + apiKey + "/" + controller.get('latitude') + "," + controller.get('longitude') + "?callback=?", function(data) {
      console.log(data)
    });

  }
});
