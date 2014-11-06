// var hammer = $('#nav').hammer();

    Meteor.startup(function () {
        $('body').hammer();
    });



// /*
// Template.hammerDiv.rendered = function() {
//   $('#hammerDiv').hammer();
//   $('#btn').hammer();
// };
// */

Template.hammerDiv.events({
  'doubletap #hammerDiv': function(event) {
    event.stopPropagation();
    alert("Double Tap!");
  },
  'hold #hammerDiv': function(event) {
    event.stopPropagation();
    alert("Hold!");
  },
  'pinchin #hammerDiv': function(event) {
    event.stopPropagation();
    alert("Pinch In!");
  },
  'pinchout #hammerDiv': function(event) {
    event.stopPropagation();
    alert("Pinch Out!");
  },
  'swiperight #hammerDiv': function(event) {

    event.stopPropagation();
    alert("Swipe Right!");
  },
  'tap #btn': function(event){
    event.stopPropagation();
    alert("Yeah!");
  }
});
