(function(global){
    var SignupViewModel,
    	app = global.app = global.app || {};
    
    SignupViewModel = kendo.data.ObservableObject.extend({
    	
        regName:'',
        regEmail:'',
        regContact:'',
        regUName:'',
        regUPwd:'',
        regCity:'',
        Gender:'',
        
        //SHOW FUNCTION
        
        show:function(){
          //alert("hi");  
            
            //date picker
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
            
            //contact number hide
            $('#cont_no').attr('checked',true);
            $('#cont_div').hide();	
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
            
            //address details
            $('#add_no').attr('checked',true);
            $('#addressDetail').hide();
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
            
            //cascading between city,state
           
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
    			dataValueField: "zipcode",
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
                $('#zip').val(cityDetail.value());
            }
        },
        
        //SUBMIT FUNCTION
        
        onSubmit : function(){
         	var DisplayName = this.get("regName").trim();
             var Email = this.get("regEmail").trim();
             var Mobile_number = this.get("regContact");
             var Username = this.get("regUName").trim();
             var Password = this.get("regUPwd").trim();
             var City = this.get("regCity").trim();
             var Gender = this.get("Gender").trim();
            
           //alert(Mobile_number);
          /*   
            if(DisplayName === "")
        	{
          	navigator.notification.alert("Please Enter your name",function(){},"Register","OK");
              return;
        	}
            else
        	if(!isNaN(DisplayName))
            {
              navigator.notification.alert("Please Enter your Name in String format",function(){},"Register","OK");
              return;
            }  
            else
            if(Email ==="")
            {
                navigator.notification.alert("Please Enter Email Address",function(){},"Register","OK");
                return;
            }
            else
            if(Username === "")
            {
                 navigator.notification.alert("Please Enter Username",function(){},"Register","OK");
                 return;
            }
            else
            if(Password ==="")
            {
                 navigator.notification.alert("Please Enter Password",function(){},"Register","OK");
                 return;
            }
            else
            if(Gender ==="")
            {
                 navigator.notification.alert("Please select Gender",function(){},"Register","OK");
                 return;
            }
            else
            if(City === "")
            {
                 navigator.notification.alert("Please Enter your City",function(){},"Register","OK");
                 return;
            }
            else
          	if(Mobile_number ==="")
              {
                 navigator.notification.alert("Please Enter Valid Mobile Number",function(){},"Register","OK");
                 return;
              }
            else
            {
                alert("good");
            }
                 */
        }
    });
    
    app.signupService = {
      viewModel: new SignupViewModel()  
    };
})(window);