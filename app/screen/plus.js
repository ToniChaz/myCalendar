iris.screen(function(self){
    
    self.create = function(){
      self.tmpl(iris.path.plus.html);        
      self.on("getPlus", getPlus);
        
    };
    
    self.awake = function(){
        self.destroyUIs("viewUiPlus");        
        iris.notify("handleClientLoad");
    };        
    
    function getPlus() {       
        gapi.client.load("plus", "v1", function() {
            var request = gapi.client.plus.people.get({
                'userId': 'me'
            });
            request.execute(function(resp) {
                self.ui("viewUiPlus", iris.path.viewUiPlus.js, {data: resp}); 
            });
        });
    };
}, iris.path.plus.js);