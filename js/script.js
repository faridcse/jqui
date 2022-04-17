$(document).ready(function() {

	//draggable 
	$( "#draggable" ).draggable();

	//droppable
	$( "#dragg" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    //sortable
    $( "#sortable" ).sortable();

    //datepicker
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });

    //accordion
    $( "#accordion" ).accordion({
      collapsible: true
    });

    // autocomplete
    var availableTags = [
      "HTML",
      "CSS",
      "Bootstrap",
      "PHP",
      "Java",
      "JavaScript",
      "JQuery",
      "Angular JS",
      "Vue.JS",
      "MySQL",
      "Wordpress"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    //menu
    $( "#menu" ).menu({
      items: "> :not(.ui-widget-header)"
    });

    //tabs
    $( "#tabs" ).tabs({
      collapsible: true
    });

    //animate-demo

    var state = true;
    $( "#animdemobtn" ).on( "click", function() {
      if ( state ) {
        $( "#animeffect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#animeffect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });

    //addClass
    $( "#addclsbtn" ).on( "click", function() {
      $( "#addclseffect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#addclseffect" ).removeClass( "newClass" );
      }, 1500 );
    }
    

    //switchclass
    $( "#swclassbtn" ).on( "click", function() {
      $( ".newswClass" ).switchClass( "newswClass", "anotherNewClass", 1000 );
      $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newswClass", 1000 );
    });


});