dojo.declare("Sincro", wm.Page, {
	start: function() {
		document.addEventListener("deviceready", this.handleDeviceReady, false);
	},
	"preferredDevice": "desktop",
    
    handleDeviceReady: function (event) {   
        // onSuccess Callback
        // This method accepts a Position object, which contains the
        // current GPS coordinates
        //
       // navigator.splashscreen.hide();
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFSSuccess, onError);

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
                alert("ci sono");
                
                
        };
        function gotFS(fs) {
            var fail = failCB('getFile');
            var fileURL = "cdvfile://localhost/persistent/enumera/clienti.txt";
            fs.root.getFile(fileURL, {create: true, exclusive: false},
                            gotFileEntry, fail);
        }        
        
        function gotFileEntry(fileEntry) {
            var fail = failCB('createWriter');
            file.entry = fileEntry;
 
            fileEntry.createWriter(gotFileWriter, fail);
            readText();
        }
 
        function gotFileWriter(fileWriter) {
            file.writer.available = true;
            file.writer.object = fileWriter;
        }
        
        function saveText(e) {
 
            if (file.writer.available) {
                file.writer.available = false;
                file.writer.object.onwriteend = function (evt) {
                    file.writer.available = true;
                    file.writer.object.seek(0);
                }
                file.writer.object.write("cicciopoccio");
            }
 
            return false;
        }        
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
        

        saveText();
        

    },
	button1Click: function(inSender) {

		// !! Assumes variable fileURL contains a valid URL to a path on the device,
//    for example, cdvfile://localhost/persistent/path/to/downloads/
        var fileURL = "cdvfile://localhost/persistent/enumera/ciccio.txt";
        var fileTransfer = new FileTransfer();
        var uri = encodeURI("http://2.228.76.239/json/ciccio.txt");

        fileTransfer.download(
            uri,
            fileURL,
            function(entry) {
                alert("download complete: " + entry.toURL());
                $.getJSON(fileURL, function(json) {
                    app.varClienti.setData(json);
                    app.toastSuccess("Clienti sincronizzati con successso");
                });
	        },
            function(error) {
                alert("download error source " + error.source);
                alert("download error target " + error.target);
                alert("upload error code" + error.code);
            },
            false,
            {
                headers: {
                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                }
            }
        );
        
    },
    
	buttonClientiClick: function(inSender) {
		$.getJSON("http://2.228.76.239/json/ciccio.txt", function(json) {
            app.varClienti.setData(json);
            app.toastSuccess("Clienti sincronizzati con successso");
        });

	},
	button2Click: function(inSender) {
        this.serviceClienti.update();

	},
	serviceClientiSuccess: function(inSender, inDeprecated) {
		var fileURL = "cdvfile://localhost/persistent/enumera/clienti.txt";
    	alert (JSON.stringify(this.serviceClienti.getData()));
	},
	_end: 0
});