dojo.declare("Main", wm.Page, {
	"preferredDevice": "desktop",
	start: function() {
        document.addEventListener("deviceready", this.handleDeviceReady, false);
/*     
        // ATTIVO IL TIMOUT IN CASO DI INATTIVITA RIMANDO ALLA HOME
        var timeoutID;
 
        function setup() {
            this.addEventListener("mousemove", resetTimer, false);
            this.addEventListener("mousedown", resetTimer, false);
            this.addEventListener("keypress", resetTimer, false);
            this.addEventListener("DOMMouseScroll", resetTimer, false);
            this.addEventListener("mousewheel", resetTimer, false);
            this.addEventListener("touchmove", resetTimer, false);
            this.addEventListener("MSPointerMove", resetTimer, false);
 
            startTimer();
        }
        setup();
 
        function startTimer() {
            // timeout a 30 secondi
            timeoutID = window.setTimeout(goInactive, 90000);
        }
 
        function resetTimer(e) {
            window.clearTimeout(timeoutID);
 
            goActive();
        }
 
        function goInactive() {
           main.toggleButtonHome.click()
        }
 
        function goActive() {
            startTimer();
        }
        
       */ 
        // carico i combo delle date
        function strPad(input, length, string) {
            string = string || '0';
            input = input + '';
            return input.length >= length ? input : new Array(length - input.length + 1).join(string) + input;
        }


                // giorni    
        for (i = 0;
        (i <= 30); i++) {
            var data = {
                "codice": strPad(i + 1, 2, "0")
            };
            app.variableGG.addItem(data, i)
        }

        // Mesi    
        for (i = 0;
        (i <= 11); i++) {
            var data = {
                "codice": strPad(i + 1, 2, "0")
            };
            app.variableMM.addItem(data, i)
        }
        // anni    
        for (i = 0;
        (i <= 100); i++) {
            var data = {
                "codice": strPad(i + 1900, 4, "0")
            };
            app.variableAA.addItem(data, i)
        }
        
        // anni futuri
        var d = new Date();
        var n = d.getFullYear();
        
        for (i = 0;
        (i <= 10); i++) {
            var data = {
                "codice": strPad(i + n, 4, "0")
            };
        app.variableAAfuturi.addItem(data, i)
        }


	},

    handleDeviceReady: function (event) {   
        // onSuccess Callback
        // This method accepts a Position object, which contains the
        // current GPS coordinates
        //
       // navigator.splashscreen.hide();
       // document.addEventListener("backbutton", onBackButton, false);
        /*
        document.addEventListener("searchbutton", onSearch, false);
        document.addEventListener("menubutton", onMenuButton, false);
        
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);

        function onOnline() {
            this.pictureNetwork.setImageIndex(49);
        }
        function onOffline() {
            this.pictureNetwork.setImageIndex(50);
        }        
        // Handle the backbutton
        //
        function onBackButton() {
            alert("You hit the back button!");
        }
        // Handle the menubutton
        //
        function onMenuButton() {
            alert("You hit the menu button!");
        }
        // Handle the searchbutton
        //
        function onSearchButton() {
            alert("You hit the search button!");
        }
        */
        alert("ci sono");
                        // load dei dati
        function loadJSON(url) {
                    return jQuery.ajax({
                        url : url,
                        async : false,
                        dataType : 'json'
                    }).responseText;
                }
                var fileURL = "cdvfile://localhost/persistent/enumera/ciccio.txt";
                var clientiLocal = loadJSON(fileURL);
                if (clientiLocal){
                    alert ("Carico clienti");    
                    app.varClienti.setData();
        }
        

        var onSuccess = function(position) {
            
        /*    
            app.deviceInformation.setData([{
                "uuid":device.uuid,
                "name":device.name,
                "model":device.model,
                "platform":device.platform,
                "version":device.version,
                "phonenumber":"-",
                "latitude": position.coords.latitude,
                "longitude": position.coords.longitude,
                "altitude": position.coords.altitude,
                "speed": position.coords.speed,
                "gpstimestamp": position.timestamp,
                "dataValue": 0}]);
                
                //window.plugin.backgroundMode.disable();
                app.serviceNotify.update();
                */


                
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        }
        
        function onBackButton() {
            //navigator.notification.confirm("Are you sure want to exit from App?", onConfirmExit, "Confirmation", "Yes,No");
            app.confirmExit.update();
        }
        
        

    },    

	_end: 0
});