var app = app || {};

app.signup = (function(){
    
    var SignupViewModel = (function(){
        
        //DATA SHOW FUNCTION
        var show = function(){
        	
             $('#cont_no').attr('checked',true);
             $('#cont_div').hide();	
             $('#add_no').attr('checked',true);
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
            
        };
        
        //REGISTRATION DATA FUNCTION
        var register = function(){
            
            var name = $('#reg_name').val().trim();
            var email = $('#reg_email').val().trim();
            var rusername = $('#reg_uname').val().trim();
            var rpassword = $('#reg_pwd').val().trim();
            var gender = $('#gen').val();
            var dob = $('#dob').val().trim();
            var contact = $('#reg_contact').val();
            var state = $('#state').val().trim();
            var city = $('#city').val().trim();
            var zipcode = $('#zip').val();
            var address = $('#address').val().trim();
           // alert("hello");
            
            alert(name+" , "+email+" , "+rusername+" , "+rpassword+" , "+gender+" , "+dob+" , "+contact+" , "+state+" , "+city+" , "+zipcode+" and "+address);
        };
        
        return{
            show:show,
            signup:register
        };
        
    }());
    
    return SignupViewModel;
}());