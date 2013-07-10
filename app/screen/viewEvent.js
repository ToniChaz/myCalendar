iris.screen(function(self) {
    
    //var items = {}; 
    
    self.create = function() {
        self.tmpl(iris.path.viewEvent.html);
        self.on("getEvent", getEvent);
        self.on("deleteEvent", deleteEvent);
        
    };

    self.awake = function() {
         self.destroyUIs("viewUiEvent"); 
         iris.notify("handleClientLoad");
    };
        
    function getEvent() {
        gapi.client.load("calendar", "v3", function() {
            var request = gapi.client.calendar.events.list({
                'calendarId': 'primary'
            });
            request.execute(function(resp) {
                for (i = 0; i < resp.items.length; i++) {
                    // var ui = 
                    self.ui("viewUiEvent", iris.path.viewUiEvent.js, {data: resp.items[i]});                    
                    //items[resp.items[i].id] = ui;                    
                }
            });
        });
    };    
    function deleteEvent(delData) {
        gapi.client.load("calendar", "v3", function() {
            var request = gapi.client.calendar.events.delete({
                'calendarId': 'primary',
                'eventId': delData.data.id
            });
            request.execute(function(resp) {
                console.log(resp);
            });
        });
    };
    
}, iris.path.viewEvent.js);