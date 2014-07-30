(function(global){
    var app = global.app = global.app || {};
    
    apps = new kendo.mobile.Application(document.body,
    													{
       													layout:'me-layout',
                                                            skin:'flat',
                                                            transition:'fade'
    													});
    
   el = new Everlive({
            apiKey: 'mtFZZFXZFkg9OvaS', // Put your Backend Services API key here
        	scheme: 'http'
    });
})(window);