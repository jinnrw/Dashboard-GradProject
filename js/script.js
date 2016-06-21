$('.allBox').mixItUp({
    selectors: {
		target: '.box'
	},
    animation: {
		effects: 'fade rotateY(-50deg)',
        perspectiveDistance: '3000px',
        perspectiveOrigin: '50% 50%'
	}
});

$('.filter-button').click(function(){
    var currentFilter = $(this).data('filter');

    $('.allBox').mixItUp('filter', '.' + currentFilter);
});


var url = "http://www.ebay.com/itm/Microsoft-Surface-Pro-3-12-"
          + "Tablet-256GB-SSD-Intel-Core-i7-Haswell-8GB-RAM-/281656969697";

// $.getJSON("http://www.mattcoady.me/labs&callback=?"
//   , function(data) {
//       // `data`:`json` returned from request
//       console.log(data);
//       // filter returned `results.meta` array for
//       // object having property `property`:`og:*` `meta` elements ;
//       // and has `property` `og:image`
//       var res = $.grep(data.query.results.meta, function(image, key) {
//         return image.hasOwnProperty("property") && image.property === "og:image"
//       });
//       // if object having property `og:image` returned , do stuff
//       if (res.length > 0) {
//         console.log(res[0].property);
//         $("body").append(res[0].content);
//       } else {
//         // else, log notification
//         console.log("og:image not found")
//       };
//
// });
