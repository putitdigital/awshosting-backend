
        // Initialize AOS animation
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        
        // DOM elements
        const loadingOverlay = document.querySelector('.loading-overlay');
        const backToTop = document.getElementById('backToTop');
        const darkModeToggle = document.getElementById('darkModeToggle');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        const productImages = document.querySelectorAll('.product-image img');
        const wishlistButtons = document.querySelectorAll('.wishlist');
        const filterButtons = document.querySelectorAll('.filter-button');
        const pageNumbers = document.querySelectorAll('.page-number');
        
        // Remove loading overlay when page is loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }, 1000);
        });
        
        // Show/hide back to top button on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
                document.querySelector('header').classList.add('scrolled');
            } else {
                backToTop.classList.remove('visible');
                document.querySelector('header').classList.remove('scrolled');
            }
        });
        
        // Scroll to top when back to top button is clicked
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        
        
        // Toggle wishlist button
        wishlistButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
                const icon = button.querySelector('i');
                if (button.classList.contains('active')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                }
            });
        });
        
        // Filter buttons functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
        
        // Pagination functionality
        pageNumbers.forEach(page => {
            page.addEventListener('click', () => {
                if (!page.classList.contains('active') && !page.querySelector('i')) {
                    pageNumbers.forEach(p => p.classList.remove('active'));
                    page.classList.add('active');
                }
            });
        });
        
        // Add to cart animation
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.innerHTML = '<i class="fas fa-check"></i> Added';
                this.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                    this.style.backgroundColor = '';
                }, 2000);
                
                // Update cart count
                const cartBadge = document.querySelector('.fa-shopping-cart').nextElementSibling;
                cartBadge.textContent = parseInt(cartBadge.textContent) + 1;
            });
        });
        

        // ______________________________________________________________________________[slider]

    // HERO SLIDER
    var menu = [];
    console.log("test");
    jQuery('.swiper-slide').each( function(index){
        menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
        
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }      
            },

            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },

            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);
   
    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // ____________________________________________________________________[expansion]
    class Accordion {
        constructor({ element, active = null, multi = false }) {
          this.el = element;
          this.activePanel = active;
          this.multi = multi;
      
          this.init();
        }
      
        cacheDOM() {
          this.panels = this.el.querySelectorAll(".expansion-panel");
          this.headers = this.el.querySelectorAll(".expansion-panel-header");
          this.bodies = this.el.querySelectorAll(".expansion-panel-body");
        }
      
        init() {
          this.cacheDOM();
          this.setSize();
          this.initialExpand();
          this.attachEvents();
        }
      
        // Remove "active" class from all expansion panels.
        collapseAll() {
          for (const h of this.headers) {
            h.closest(".expansion-panel").classList.remove("active");
          }
        }
      
        // Add "active" class to the parent expansion panel.
        expand(idx) {
          this.panels[idx].classList.add("active");
        }
      
        // Toggle "active" class to the parent expansion panel.
        toggle(idx) {
          this.panels[idx].classList.toggle("active");
        }
      
        // Get the height of each panel body and store it in attribute
        // for the CSS transition.
        setSize() {
          this.bodies.forEach((b, idx) => {
            const bound = b
              .querySelector(".expansion-panel-body-content")
              .getBoundingClientRect();
            b.setAttribute("style", `--ht:${bound.height}px`);
          });
        }
      
        initialExpand() {
          if (this.activePanel > 0 && this.activePanel < this.panels.length) {
            // Add the "active" class to the correct panel
            this.panels[this.activePanel - 1].classList.add("active");
            // Fix the current active panel index "zero based index"
            this.activePanel = this.activePanel - 1;
          }
        }
      
        attachEvents() {
          this.headers.forEach((h, idx) => {
            h.addEventListener("click", (e) => {
              if (!this.multi) {
                // Check if there is an active panel and close it before opening another one.
                // If there is no active panel, close all the panels.
                if (this.activePanel === idx) {
                  this.collapseAll();
                  this.activePanel = null;
                } else {
                  this.collapseAll();
                  this.expand(idx);
                  this.activePanel = idx;
                }
              } else {
                this.toggle(idx);
              }
            });
          });
      
          // Recalculate the panel body height and store it on resizing the window.
          addEventListener("resize", this.setSize.bind(this));
        }
      }
      
      // element: The expansion panels parent.
      // active: The active panel index.
      // multi: Open more than one panel at once.
      const myAccordion = new Accordion({
        element: document.querySelector(".accordion"),
        active: 2,
        multi: true
      });
      
      
      
      

