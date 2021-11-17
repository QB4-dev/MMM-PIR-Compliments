/* Magic Mirror
 * Module: MMM-PIR-Compliments
 * 
 * By QB4-dev
 * MIT Licensed
 */

Module.register("MMM-PIR-Compliments", {
	defaults : {
		animationSpeed: 200,
		delay: 30
	},
	  
	start: function() {
		var self = this;
		this.loaded = false;	
		console.log('Starting Module: ' + this.name);
	},

	// hide compliment module by default
	notificationReceived: function(notification, payload, sender) {
        if (notification === 'DOM_OBJECTS_CREATED') {
            this.loaded = true;
            var complimentModules = MM.getModules().withClass('compliments');

            if(complimentModules && complimentModules.length == 1){

                Log.info('Hiding compliment module since all modules were loaded.');
                var compliment = complimentModules[0];
                compliment.hide(0);

            } else if (complimentModules.length < 1) {
                Log.warn('No Compliments Module loaded. Nothing to hide!');
            }
        }
	
		if (notification == 'USER_PRESENCE'){
		    var complimentModules = MM.getModules().withClass('compliments');
		    if (complimentModules.length > 0) {
			    var compliment = complimentModules[0];
		    }
		
			if(payload == true){
				clearTimeout(this.deactivateComplimentsTimeout);
				//only ask for showing when compliment is actually hidden, otherwise timeout is cleared and set again
				if(compliment.hidden)
					compliment.show(this.config.animationSpeed, {lockString: this.name});
			}
			
			if(payload == false){
			    var self = this;
	            this.deactivateComplimentsTimeout = setTimeout(function(){
					compliment.hide(self.config.animationSpeed, {lockString: this.name});
				}, this.config.delay *1000)
			}
		}	
	}
});
