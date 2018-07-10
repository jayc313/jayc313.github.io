(function($j){

    var reedAPI = 'a1133cb2-dff9-4582-8408-e16317a553c3',
    reedURL = 'https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london';


    $j.ajax({url: reedURL, username: reedAPI,
    password: '', success: function(result){
        console.log(result);
    }});

    console.log(reedAPI);

})(jQuery);
