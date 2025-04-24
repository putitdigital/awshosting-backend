
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
        