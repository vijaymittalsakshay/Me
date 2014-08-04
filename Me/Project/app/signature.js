(function (global) {
    var SignViewModel,$canvas,
        app = global.app = global.app || {};

    SignViewModel = kendo.data.ObservableObject.extend({
        
        Signdata:'',
        
        show:function(){
        
                        onResize = function(event) {
                            $canvas.attr({
                                             height: window.innerHeight,
                                             width: window.innerWidth
                                         });
                        };
                                                   
                   // $(document).ready(function() {
                        $canvas = $('canvas');
                        window.addEventListener('orientationchange', onResize, false);
                        window.addEventListener('resize', onResize, false);
                        onResize();
                                                   
                        $('#ss').signaturePad({
                                                   drawOnly: true,
                                                   defaultAction: 'drawIt',
                                                   validateFields: false,
                                                   lineWidth: 0,
                                                   output: null,
                                                   sigNav: null,
                                                   name: null,
                                                   typed: null,
                                                   clear: 'input[type=reset]',
                                                   typeIt: null,
                                                   drawIt: null,
                                                   typeItDesc: null,
                                                   drawItDesc: null
                                               });
                  // }); 
        },
        
        saveData:function(){
          /* var canvas = document.getElementById("newSignature");// save canvas image as data url (png format by default)
                    var dataURL = canvas.toDataURL("image/png");
                    //document.getElementById("saveSignature").src = dataURL;
                    // window.location.href = dataURL;
                    // alert(dataURL);
                    //var data = 'My Image/ Sign: ' + '<img src="' + dataURL + '"/>';
            //document.write(data);
             //$("#signature").val("vijay");
            //alert(dataURL);
             //$("#signature-field").val(dataURL);
            // this.set("app.signupService.viewModel.Signdata",dataURL)
            this.set("Signdata",dataURL);*/
            
            $("#reg_name").val("hello");
            apps.navigate("#register");
        }
        
    });

    app.signService = {
        viewModel: new SignViewModel()
    };
})(window);