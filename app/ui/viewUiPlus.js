iris.ui(function(self) {
    
    self.settings({
        data :  null
    });
    
    self.create = function() {
        self.tmplMode(self.APPEND);
        self.tmpl(iris.path.viewUiPlus.html);        
        
        self.inflate(self.setting("data"));       
            
    };
    
    self.awake = function() {
       
    };
    
}, iris.path.viewUiPlus.js);