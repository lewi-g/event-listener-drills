// your code here


$(function() {
    $('.thumbnail').click(function(event) {
    	let newHeroImage = $(event.currentTarget).find('img').attr('src');
    	console.log(newHeroImage);
    	$('.hero img').attr('src', newHeroImage);
    	 })
})
    

// on click, find attribute
// add said attribute to .hero img 
  


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