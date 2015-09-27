/*globals rdioUtils, Main, R */

(function() {

  // ----------
  window.Main = {
    $albums: {},

    // ----------
    init: function() {
      var self = this;
      
      if (!rdioUtils.startupChecks()) {
        return;
      }

      R.ready(function() {
	      R.logger.verbosity('all');

        R.request({
	  method: "getTopCharts", 
	  content: {
            type: "Track"
          },
          success: function(response) {
//alert( "got response for tracks" );
            if (!response.result || !response.result.length) {
              self.log('Unable to find tracks.');
              return;
            }

	   //$('#songlist').append('<select name="song" size="8">');
            _.each(response.result, function(v, i) {
              //var widget = rdioUtils.trackWidget(v);
              //$('body').append(widget.element());
	      console.log( "result: " + v.name + " artist: " + v.artist + " key: " + v.key);
	      //$('body').append('<p>' + v.name + "&nbsp;  " + v.key);
	      //$('#songlist').append('<p>' + v.name + "&nbsp;  " + v.key);
	      $('#songlist').append('<option value="' + v.key + '"><b>' + v.name + '</b> - ' + v.artist + '</option>');
            });
 	    //$('#songlist').append('</select>');
          },
          error: function(response) {
            self.log(response.message);
          }
        });
      });
    },

    // ----------
    log: function(message) {
      $('<p>')
        .text(message)
        .appendTo('.log');
    },

    // ----------
    template: function(name, config) {
      var rawTemplate = $.trim($("#" + name + "-template").text());
      var template = _.template(rawTemplate);
      var html = template(config);
      return $(html);
    }
  };

  // ----------
  $(document).ready(function() {
    Main.init();
  });

})();
