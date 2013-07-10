iris.ui(function(self) {
    
    self.settings({
        data :  null
    });
    
    self.create = function() {
        self.tmplMode(self.APPEND);
        self.tmpl(iris.path.viewUiEvent.html);
        
        self.inflate( self.setting("data") );
        
        self.get("btnDelete").on("click", deleteEvent);        
    };
    
    self.awake = function() {
       
    };    
    function deleteEvent() { 
        self.notify("deleteEvent", {data: self.setting("data")});
        self.destroyUI();
    };
}, iris.path.viewUiEvent.js);