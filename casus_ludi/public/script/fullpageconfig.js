$(document).ready(function(){    	

        //CETTE FONCTION DETERMINE LES PARAMETRES DE NAVIGATION DE FULLPAGE
        //MODIFIER AVEC PRECAUTION !!
        $('#fullpage').fullpage({
        	//Navigation
                menu: '#myMenu',
                lockAnchors: false,
        	anchors:['accueil', 'Intro', 'dataviz1', 'dataviz2', 'dataviz3', 'conclusion', 'Outro'],
                navigation: true,
                navigationPosition: 'right',
                navigationTooltips: [],
                showActiveTooltip: false,
                slidesNavigation: true,
                slidesNavPosition: 'top',

                //Scrolling
                css3: true,
                scrollingSpeed: 600,
                autoScrolling: true,
                fitToSection: true,
                fitToSectionDelay: 1000,
                scrollBar: false,
                easing: 'easeInOutCubic',
                easingcss3: 'ease',
                loopBottom: false,
                loopTop: false,
                loopHorizontal: true,
                continuousVertical: false,
                continuousHorizontal: false,
                scrollHorizontally: false,
                interlockedSlides: false,
                dragAndMove: false,
                offsetSections: false,
                resetSliders: false,
                fadingEffect: false,
                normalScrollElements: '#element1, .element2',
                scrollOverflow: false,
                scrollOverflowReset: false,
                scrollOverflowOptions: null,
                touchSensitivity: 15,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,

                //Accessibility
                keyboardScrolling: true,
                animateAnchor: true,
                recordHistory: true,

                //Design
                controlArrows: true,
                verticalCentered: true,
                sectionsColor : [],
                paddingTop: '3em',
                paddingBottom: '10px',
                fixedElements: '#header, .footer, #myMenu',
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: false,

                //Custom selectors
                sectionSelector: '.section',
                slideSelector: '.slide',

                lazyLoading: true,

                //events
                onLeave: function(index, nextIndex, direction){
                        //Si on remonte sur la première section
                        if(index == 1 && direction =='down'){
                                resetIntro();
                        }
                        else if((index == 2 && direction =='up')||(index == 2 && direction =='down')){
                                resetMotion();
                        }
                },
                afterLoad: function(anchorLink, index){
                        //Une fois qu'on est remonté sur la première section
                        if(index == 1){
                                animerIntro();
                        }
                        else if(index == 2){
                                animerMotion();
                        }else if(index == 3){
                                anime2013();
                        }
                },
                afterRender: function(){},
                afterResize: function(){},
                afterResponsive: function(isResponsive){},
                afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
                onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

});