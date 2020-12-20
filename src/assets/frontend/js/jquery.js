$("document").ready(function(){
    $("#btn-container a").on("click", function(){
        $( "#domain-name" ).prop( "disabled", true );
    });
    $("#add-butn").on("click", function(){
        $( "#domain-name" ).prop( "disabled", false );
    });
});
