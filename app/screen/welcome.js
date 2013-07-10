iris.screen(function(self) {
    
    self.create = function() {
        self.tmpl(iris.path.welcome.html);
        self.screens("screens", [
            ["home", iris.path.home.js],
            ["plus", iris.path.plus.js],
            ["viewEvent", iris.path.viewEvent.js],
            ["createEvent", iris.path.createEvent.js],
            ["notFound", iris.path.notFound.js]
        ]);
        self.on("handleClientLoad", handleClientLoad);
        
        iris.on(iris.SCREEN_NOT_FOUND, function (path) {
            iris.log("Upss, path[" + path + "] not found");
            iris.navigate("#/notFound");
        });
        
    };
    self.awake = function() {        
        if (!document.location.hash) {
            iris.navigate("#/home"); //Index page
        }
    };
    
    var clientId = "31400052534.apps.googleusercontent.com";

    var apiKey = "AIzaSyAEO8FqmfcexNLG3NsoeZC5mNnWP1bZdNk";

    var scopes = ["https://www.googleapis.com/auth/plus.me","https://www.googleapis.com/auth/calendar"];
   
   function handleClientLoad() {
        gapi.client.setApiKey(apiKey);
        window.setTimeout(checkAuth, 1);
    };

    function checkAuth() {        
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
    };


    function handleAuthResult(authResult) {
        var authorizeButton = $("#authorize-button");
        if (authResult && !authResult.error) {            
            authorizeButton.css("visibility","hidden");
            if($("#formCreateEvent").is(":hidden")){                
                $("#formCreateEvent").show();
            }
            self.notify("getEvent");
            self.notify("getPlus");            
            $("#myModalAuth").modal("hide");
        } else {
            authorizeButton.css("visibility","");
            authorizeButton.on("click", function(){
                handleAuthClick();
            });            
            $("#myModalAuth").modal("show");
            if($("#formCreateEvent").length){                
                $("#formCreateEvent").hide();
            }            
        }
    };

    function handleAuthClick(event) {        
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
        return false;
    };
    
}, iris.path.welcome.js);