(function(global){
    var LoginViewModel,
        app = global.app = global.app || {};
    
    LoginViewModel = kendo.data.ObservableObject.extend({
        login_username:'',
        login_password:'',
        isLoggedIn:false,
        
        LoginValidation:function(){
            
            var Username = this.get('login_username').trim();
            var Password = this.get('login_password').trim();
            //alert(Username+" "+Password);
             if (Username === "") {
                navigator.notification.alert("Please Enter Username.", function() {
                }, 'Notification', 'OK');
            } else if (Password === "") {
                navigator.notification.alert("Please Enter Password.", function() {
                }, 'Notification', 'OK');
            } else {
                this.onsubmit();
            }
       },
        
        onsubmit:function(){
            var Username = this.get('login_username').trim();
            var Password = this.get('login_password').trim();
          // app.mobileApp.pane.loader.show();
            el.Users.login(Username, Password)
                .then(function () {
                    //apps.navigate('views/home.html?user=' + Username);
                    //localStorage.setItem("isLoggedIn",true);
                    apps.navigate('views/home.html');
                })
                .then(null,
                      function (err) {
                          navigator.notification.alert(err.message, function() {
                              $('#log_uname').val('');
                              $('#log_pwd').val('');
                          }, 'Notification', 'OK');
                      }
                    )
        },
        
        checkEnter:function(e) {
            if (e.keyCode === 13) {
                $(e.target).blur();
                this.LoginValidation();
            }
        },
        
        facebook:function(){
           if((localStorage.getItem("isLoggedIn")=== true))
            {
                alert("true");
            }
            else
            {
                alert("false");
            }
        }
    });
       app.loginService = {
        viewModel: new LoginViewModel()
    };
})(window);