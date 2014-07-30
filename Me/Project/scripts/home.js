var app = app || {};

app.home = (function(){
    
    var HomeViewModel = (function(){
        
        var show = function(e){
            var userProfile = e.view.params.user;
           // $('#my-template').value('vijay');
            
           // var view = new kendo.View(userProfile, { tagName: "span" });
			//view.render($("#my-template"));
            
           //  var view = new kendo.View('<span data-bind="text:userProfile"></span>');
 		//	view.render($("#my-template"));
            
           // var index = new kendo.View('<span>'+userProfile+'</span>');
//index.render("#");
            
        };
        
        var hello = function(){
            if((localStorage.getItem("isLoggedIn")=== true))
            {
                alert("true");
            }
            else
            {
                alert("false");
            }
        };
        
        return{
          onshow:show,
            hello:hello
        };
        
    }());
    
    return HomeViewModel;
}());