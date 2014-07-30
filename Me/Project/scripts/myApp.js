var app = (function(win){
    
    var apps = new kendo.mobile.Application(document.body,
    												{
                                                        layout:'me-layout',
                                                        skin:'flat',
                                                        transition:'fade',
                                                        loading:'please wait....'
                                                    });
    
    var el = new Everlive({
            apiKey: 'mtFZZFXZFkg9OvaS', // Put your Backend Services API key here
        	scheme: 'http'
    });
    
    
    return{
      mobileApp:apps,
        el:el
    };
    
}(window));