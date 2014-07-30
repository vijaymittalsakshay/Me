(function(global){
    var HomeViewModel,
     	app = global.app = global.app || {};
    
    HomeViewModel = kendo.data.ObservableObject.extend({
        
        home : function(){
         alert("hello");   
        }
    });
    
    app.homeService = {
      viewModel: new HomeViewModel()  
    };
})(window);