(function(global){
    var SignupViewModel,$canvas,
    	app = global.app = global.app || {};
    
    SignupViewModel = kendo.data.ObservableObject.extend({
        regName:'',
        regEmail:'',
        regUName:'',
        regUPwd:'',
        Gender:'',
        dob:'',
        regContact:'',
        state:'',
        city:'',
        address:'',
        zipcode:'',
        Signdata:'',
        
        show:function(){
            
            $('#cont_no').attr('checked',true);
            $('#add_no').attr('checked',true);
            $('#cont_div').hide();
            $('#addressDetail').hide();
            
            $('#cont_no,#cont_yes').change(function(){
               if($('#cont_yes').is(':checked'))
               {
                    $('#cont_div').fadeIn("slow");
               }
               else
                {
                     $('#cont_div').fadeOut("slow");
                }
            });
            
            $('#add_yes,#add_no').change(function(){
                if($('#add_yes').is(':checked'))
                {
                    $('#addressDetail').fadeIn('slow');
                }
                else
                {
                 	$('#addressDetail').fadeOut('slow');   
                }
            });
            
             $('#dob').kendoDatePicker({
                animation: {
                   close: {
                     effects: "fadeOut zoom:out",
                     duration: 800
                   },
                   open: {
                     effects: "fadeIn zoom:in",
                     duration: 800
                   }
  				},
                format:"dd/MM/yyyy",
                max:new Date(),
                min:new Date(2000,0,1)
            });
            
            var stateDetail =  $('#state').kendoComboBox({
                delay: 1000,
                highlightFirst: false,
                filter: "contains",
                placeholder:"Select State",
                dataTextField: "stateName",
    			dataValueField: "stateId",
                dataSource:{
                    transport:{
                        read:{
                            url:"data/state.json",
                            dataType:"json"
                        }
                    }
                }
            }).data("kendoComboBox");
            
            var cityDetail = $('#city').kendoComboBox({
                cascadeFrom: "state",
    			
                placeholder:"Select City",
                dataTextField: "cityName",
    			dataValueField: "cityId",
                change:onChange,
                dataSource:{
                    transport:{
                        read:{
                            url:"data/city.json",
                            dataType:"json"
                        }
                    }
                }
                
            }).data('kendoComboBox');
            
            function onChange(){
                $('#zip').val(cityDetail.value().zipcode);
            }
            
            
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
          var canvas = document.getElementById("newSignature");// save canvas image as data url (png format by default)
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
           
           
            this.set("Signdata",dataURL); // set this value in textarea field using Jquery.
            
            $("#signature-field").val(dataURL);
            this.set("Signdata",dataURL); // set the data into the Signdata bind field in textarea.
           
           $("#signatureBTN").attr("disabled","disabled");
            apps.navigate("#register"); // form navigate to registeration form
        },
        
        signup:function(){
           
            var d = this.get("Signdata").trim();
            alert(d);
        }
        
    });
    app.signupService = {
      viewModel : new SignupViewModel()  
    };
})(window);