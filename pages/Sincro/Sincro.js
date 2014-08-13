dojo.declare("Sincro", wm.Page, {
	start: function() {
		document.addEventListener("deviceready", this.handleDeviceReady, false);
	},
	"preferredDevice": "desktop",
    
    handleDeviceReady: function (event) {   
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        
        function gotFS(fileSystem) {
            fileSystem.root.getFile("clienti.txt", null, gotFileEntry, fail);
        }

        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }

        function gotFileWriter(writer) {
            writer.onwrite = function(evt) {
                alert("write success");
            };
            writer.write("some sample text");
            // contents of file now 'some sample text'
            writer.truncate(11);
            // contents of file now 'some sample'
            writer.seek(4);
            // contents of file still 'some sample' but file pointer is after the 'e' in 'some'
            writer.write(" different text");
            // contents of file now 'some different text'
        }

        function fail(error) {
            alert(error.code);
        }

        

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