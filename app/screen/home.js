iris.screen(function(self) {
    
    self.create = function() {
        
        iris.locale(
                "es_ES", {
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            dateFormat: "l d -  F -  Y"
        });
        
        var params = {
            "date": new Date()
        };        
              
        self.tmpl(iris.path.home.html, params); 
        
    };
    
    self.awake = function() {
        iris.notify("handleClientLoad");
    };
    
}, iris.path.home.js);