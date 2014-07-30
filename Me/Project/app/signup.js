(function(global){
    var SignupViewModel,
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
            
           // alert("hi");
        },
        
        hello:function(){
            alert("jkk");
        }
        
    });
    app.signupService = {
      viewModel : new SignupViewModel()  
    };
})(window);