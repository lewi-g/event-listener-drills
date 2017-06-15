// your code here


$(function() {
    $('.thumbnail').click(function(event) {
      $(event.currentTarget).addClass('.hero')
        .removeClass('.thumbnail');
      // $('.hero').removeClass('.hero')
      //   .addClass('.thumbnail');
    
  
 })
//on click of thumbnail => addclass/removeclass/toggleclass

//addClass(hero) to our thumbnail && removeClass(thumbnail)

//removeClass(hero) && addClass(thumbnail) from current hero
  
})
    
//  $(function() {
  
//   $("button").click(function(event) {
//     $("ul").append(
//       "<li>" +
//       ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"
//     );
//   });
  
//   $('ul').on('click', 'li', function(event) {
//     this.remove();
//   });
// });