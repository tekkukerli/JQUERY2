$(function() { 
//     // fade out element
//     //red box
//     //duration 5 sek = 5000msek
//   $('.red-box').fadeOut(5000);
//   //fade in
//   $('.red-box').fadeIn(5000);
//   //fade out to opacity
//   $('.blue-box').fadeTo(5000, 0.5);
//   //blue box
//   //fade in, fade out depending on status
//   $('.blue-box').fadeToggle();
//   $('.blue-box').fadeToggle();


//   //fade out- fade to
//   $('.red-box').fadeOut(2000);
//   //fade to - try to use
//   $('.red-box').fadeTo(2000, 1.0);
//   //fade in
//   $('.red-box').fadeIn(500);
//   //fade to
//   $('.red-box').fadeTo(1000, 0.0);
//   $('.red-box').fadeTo(1000, 1.0);


    //  //hide and show
    //  //hide
    //  $('.red-box').hide(2000);
    //  //show
    //  $('.red-box').show(2000);
    //  //depends on status
    //  $('.red-box').toggle();

    // //slide up and down
    // //slide up
    // $('.blue-box').slideUp(2000);
    // //slide down
    // $('.blue-box').slideDown(2000);
    // //depending on status
    // $('.blue-box').slideToggle(2000);
    // $('.blue-box').slideToggle(2000);



    // //animate
    // //shift right 100px
    // $('.green-box').animate({
    //     "margin-left" : "+=100px"
    // }, 2000, "linear");
    // //shift left 100px
    // $('.green-box').animate({
    //     "margin-left" : "-=100px"
    // }, 2000);

    // //delay
    // $('.red-box').fadeTo(2000, 0.5);
    // $('.green-box').delay(2000).fadeTo(2000, 0.5);
    // $('.blue-box').delay(4000).fadeTo(2000, 0.5);

    // $('.blue-box').fadeTo(2000, 1.0);

    // $('.blue-box').delay(8000).fadeTo(2000, 0.5).fadeTo(2000, 1.0).fadeOut();

    //challenge
//     $('.blue-box').animate({
//         "margin-left" : "100px"
//     }, 2000);
//     $('.green-box').delay(2000).animate({
//         "margin-left" : "100px"
//     }, 2000);
//     $('.blue-box').animate({
//         "margin-left" : "-1px"
//     }, 2000);
//     $('.red-box').delay(4000).animate({
//         "margin-left" : "100px"
//     }, 2000);
//     $('.green-box').animate({
//         "margin-left" : "-0px"
//     }, 2000);
//     $('.blue-box').animate({
//         "margin-left" : "-0px"
//     }, 2000);

// //tagasi liikumine
//     $('.red-box').animate({
//         "margin-left" : "-=100px"
//     }, 2000);
//     $('.green-box').animate({
//         "margin-left" : "100px"
//     }, 2000);
//     $('.green-box').animate({
//         "margin-left" : "-=100px"
//     }, 2000);
//     $('.blue-box').animate({
//         "margin-left" : "100px"
//     }, 2000);
//     $('.blue-box').animate({
//         "margin-left" : "-=100px"
//     }, 2000);



//   // callback functions 
//   $('.red-box').fadeTo(1000, 0, function() {
//         $('.green-box').fadeTo(1000, 0, function() {
//                 $('.blue-box').fadeTo(1000, 0, function() {
//                         $('.blue-box').fadeTo(1000, 1, function() {
//                                 $('.green-box').fadeTo(1000, 1, function() {
//                                         $('.red-box').fadeTo(1000, 1);
//                                     });
//                             });
//                     });
//             });
//     });

    //sign in tuleb lehele varsti
  $('.lightbox').delay(2000).fadeIn(2000);


//   $('.blue-box').animate({
//       "margin-left" : "+=100px"
//       }, 1000, function() {
//         $('.green-box').delay(2000).animate({
//             "margin-left" : "+=100px"
//             }, 1000, function() {
//                 $('.red-box').animate({
//                     "margin-left" : "+=100px"
//                     }, 1000);
//             }
//             );
//       }
//       );
});