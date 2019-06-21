 $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.slider').slider({
      indicators: false, 
      interval: 20000,
    });
    
   $('.slider').slider({
   	duration:600,
   	indicators:false,
   	interval: 500
   });
    $('.tabs').tabs();
     $('.parallax').parallax();
     $('.collapsible').collapsible({
     	inDuration:10000
     });
      $('.parallax').parallax();
      $('.tap-target').tapTarget();
      $('input.autocomplete').autocomplete({
            data: {
              "Apple": null,
              "Microsoft": null,
              "Google": 'https://placehold.it/250x250'
            },
            limit:0
       });
  });
        