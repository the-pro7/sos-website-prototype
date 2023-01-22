// Display menu when user clicks the hamburger menu Icon
 let navLinks = document.getElementById("navLinks");
      const showMenu = () => {
        navLinks.style.right = "0";
      }
      // Hide menu when user clicks the close button while the menu  is open
      const hideMenu = () => {
        navLinks.style.right = "-300px";
      }
      
      
      // Animations
      let tl = gsap.timeline({defaults: {duration: 0.5}})
      tl.from('nav', {y: '-100px', opacity: 0, ease: 'elastic', duration: 2})
      tl.from('nav ul li a', {stagger: 0.5}, '<.5s')
      tl.fromTo('.header_text h1', {opacity: 0, xPercent: -100, ease: "rough"}, {opacity: 1, xPercent: 0}, "<")
      tl.fromTo('.header_text p', {opacity: 0, y: -30, ease: "rough"}, {opacity: 1, y: 0}, "<")
      tl.fromTo('.header_text a', {opacity: 0, y: -50}, {opacity: 1, y: 0}, "<")
      // Animations end here
      
      // Dropdown menu starts here
      const dropDown = document.querySelector('.more')
      const dropdownContent = document.querySelector('.dropdown-content')
      const arrow = document.querySelector('.fa-angle-down')
      // Event listener
      dropDown.addEventListener('mouseover', (e) => {
        let target = e.target
        if (target.matches('a')) {
          dropdownContent.style.display = 'block'
          gsap.to('.fa-angle-down', {rotation: '180deg'})
        }
      })
    
      
      window.addEventListener('click', () => {
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none'
            gsap.to('.fa-angle-down', {rotation: '0'})
        }// else {
          //dropdownContent.style.display = 'block'
        //}
      })
      
      // Intserection observer
      const headerText = document.querySelector('.header_text')
      const navBar = document.querySelector('nav')
      const image = document.querySelector('nav a img')
      const arrowDown = document.querySelector('.fa-angle-down')
      
      // Options
        const headerTextOptions = {
        rootMargin: "-50px 0px 0px 0px"
      }
      
      const headerTextObserver = new IntersectionObserver((entries, headerTextObserver) => {
        entries.forEach(entry => {
          if(!entry.isIntersecting) {
          navBar.classList.add('nav-scrolled')
          image.src = 'logo2.png'
          arrowDown.style.color = 'var(--color-primary)'
          } else {
            navBar.classList.remove('nav-scrolled')
            image.src = 'logo.png'
            arrowDown.style.color = 'var(--nav-link-col-white)'
          }
        })
      }, headerTextOptions)
      
      // observer
        headerTextObserver.observe(headerText)
      
      // Cookies pop-up box
      let cookieBox = document.querySelector('.cookie-box')
      window.addEventListener('load', () => {
        cookieBox.style.display = 'block'
        let header = document.querySelector('header')
        let sections = document.querySelectorAll('section')
        sections.style.pointerEvents = 'none'
      })
      
      // Accept Cookies
      let accept = document.querySelector('#accept')
      accept.addEventListener('click', (event) => {
        let eventTarget = event.target
        if (!eventTarget.matches('div')) {
          cookieBox.style.display = 'none'
          header.style.pointerEvents = 'auto'
        }
      })