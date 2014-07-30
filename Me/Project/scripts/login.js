/*var app = app || {};

app.login = (function() {
    isLoggedIn:(localStorage.getItem("isLoggedIn") === true) ?  true : false;
    var LoginViewModel = (function() {
        
        
        
        //validation
        var LoginValidation = function() {
            var Username = $('#log_uname').val().trim();
            var Password = $('#log_pwd').val().trim();
            
            if (Username === "") {
                navigator.notification.alert("Please Enter Username.", function() {
                }, 'Notification', 'OK');
            } else if (Password === "") {
                navigator.notification.alert("Please Enter Password.", function() {
                }, 'Notification', 'OK');
            } else {
                this.onsubmit();
            }
        };
        
        //LOGIN DATA FUNCTION
        var onsubmit = function() {
            var Username = $('#log_uname').val().trim();
            var Password = $('#log_pwd').val().trim();
          // app.mobileApp.pane.loader.show();
            app.el.Users.login(Username, Password)
                .then(function () {
                    app.mobileApp.navigate('views/home.html?user=' + Username);
                    localStorage.setItem("isLoggedIn",true);
                })
                .then(null,
                      function (err) {
                          navigator.notification.alert(err.message, function() {
                              $('#log_uname').val('');
                              $('#log_pwd').val('');
                          }, 'Notification', 'OK');
                      }
                    )
        };
        
        //KEYUP ENTER
        var checkEnter = function(e) {
            if (e.keyCode === 13) {
                $(e.target).blur();
                this.LoginValidation();
            }
        };
        
        var facebook = function(){
         // alert("hi");  
            
            //alert(localstorage.getItem('isLoggedIn'));
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
            onsubmit:onsubmit,
            checkEnter:checkEnter,
            validator:LoginValidation,
            facebook:facebook
        };
    }());
    
    return LoginViewModel;
}());*/

(function(global){
    var LoginViewModel,
        app = global.app = global.app || {};
    
    LoginViewModel = kendo.data.ObservableObject.extend({
        
        LoginValidation:function(){
             var Username = this.val('login_username').trim();
            var Password =  this.val('login_password').trim();
            alert(Username);
            if (Username === "") {
                navigator.notification.alert("Please Enter Username.", function() {
                }, 'Notification', 'OK');
            } else if (Password === "") {
                navigator.notification.alert("Please Enter Password.", function() {
                }, 'Notification', 'OK');
            } else {
                this.onsubmit();
            }
       } ,
        
        onsubmit:function(){
             var Username = $('#log_uname').val().trim();
            var Password = $('#log_pwd').val().trim();
          // app.mobileApp.pane.loader.show();
            app.el.Users.login(Username, Password)
                .then(function () {
                    app.mobileApp.navigate('views/home.html?user=' + Username);
                    localStorage.setItem("isLoggedIn",true);
                })
                .then(null,
                      function (err) {
                          navigator.notification.alert(err.message, function() {
                              $('#log_uname').val('');
                              $('#log_pwd').val('');
                          }, 'Notification', 'OK');
                      }
                    )
        }
    });
        app.loginService = {
          viewModel:new LoginViewModel()  
        };
})(window);