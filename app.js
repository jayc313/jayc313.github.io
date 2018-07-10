
(function($j){

    var reedAPI = 'a1133cb2-dff9-4582-8408-e16317a553c3',
    reedURL = 'https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15';


    $j.ajax({url: reedURL, headers: {
        "Authorization": "Basic " + btoa(reedAPI + ":" + '')
      }, success: function(result){
        console.log(result);
    }});

    console.log(reedAPI);

})(jQuery);
