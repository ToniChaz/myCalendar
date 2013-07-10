iris.screen(function(self) {

    self.create = function() {
        self.tmpl(iris.path.createEvent.html);
        self.get("btnCreate").on("click", createEvent);
        
    };

    self.awake = function() {
        
    };

    function createEvent() {
        gapi.client.load('calendar', 'v3', function() {
            var request = gapi.client.calendar.events.insert({
                "calendarId": 'primary',
                "resource": {
                    "end": {
                        "date": self.get('endDate').val(),
                        "timeZone": "Europe/Madrid"
                    },
                    "start": {
                        "date": self.get('startDate').val(),
                        "timeZone": "Europe/Madrid"
                    },
                    "description": self.get('description').val(),
                    "summary": self.get('title').val()
                }

            });
            request.execute(function(resp) {                
                if (resp.status == "confirmed") {                   
                    $('#myModalSuccess').modal('show');                    
                    $("#linkToEvent").attr("href", resp.htmlLink);
                    $("#formCreateEvent")[0].reset()
                } else {
                    var error = "Invalid value for";
                    if(error.search(resp.message)){
                        $('#myModalErrorInvDate').modal('show');
                    }else{
                        $('#myModalError').modal('show');
                    };
                }
            });
        });
    };
    
}, iris.path.createEvent.js);