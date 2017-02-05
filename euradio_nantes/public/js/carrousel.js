jQuery(document).ready(function($){

    loadJSON(initCarrousel);

    function loadJSON(next) {
		$.getJSON('public/data/emissions.json', function(data) {
            var carrousel = $(".carousel-inner");
            jQuery.each(data, function() {
                carrousel.append(
                    '<div class="item">' +
                        '<div class="col-xs-4">' +
                            '<a href="#1"></a>' +
                                '<img src="img/emissions/' + this.img + '" class="img-responsive">' +
                            '</a>' +
                        '</div>' +
                    '</div>'
                );
            });
            carrousel.children().first().addClass("active");
			next();
		});
	}

    function initCarrousel() {
        // Instantiate the Bootstrap carousel
        $('.multi-item-carousel').carousel({
          interval: false
        });

        // for every slide in carousel, copy the next slide's item in the slide.
        // Do the same for the next, next item.
        $('.multi-item-carousel .item').each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));

          if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
          } else {
          	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
          }
        });

        /* Caché parce que c'est moche*/
        $('.carousel-control').css("background-image", "none");
    }
});
