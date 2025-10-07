// Mobile Menu Toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.toggle("active")
}

// Cookie Banner
function showCookieBanner() {
  const banner = document.getElementById("cookie-banner")
  if (banner && !localStorage.getItem("cookiesAccepted")) {
    banner.classList.add("show")
  }
}

function acceptCookies() {
  const banner = document.getElementById("cookie-banner")
  localStorage.setItem("cookiesAccepted", "true")
  banner.classList.remove("show")
}

// Contact Form Handling
document.addEventListener("DOMContentLoaded", () => {
  // Show cookie banner if not accepted
  showCookieBanner()

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Basic validation
      if (!data.name || !data.email || !data.message) {
        alert("Please fill in all required fields.")
        return
      }

      if (!data["age-confirm"]) {
        alert("You must confirm that you are 21 years of age or older.")
        return
      }

      // Simulate form submission
      alert("Thank you for your message! We will respond within 24-48 hours.")
      contactForm.reset()
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add loading animation to claim buttons
  document.querySelectorAll(".claim-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const originalText = this.textContent
      this.textContent = "Loading..."
      this.disabled = true

      setTimeout(() => {
        this.textContent = originalText
        this.disabled = false
      }, 2000)
    })
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const navMenu = document.getElementById("nav-menu")
  const mobileToggle = document.querySelector(".mobile-menu-toggle")

  if (
    navMenu &&
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !mobileToggle.contains(e.target)
  ) {
    navMenu.classList.remove("active")
  }
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    header.style.backdropFilter = "none"
  }
})

// Age verification popup (optional enhancement)
function showAgeVerification() {
  if (!localStorage.getItem("ageVerified")) {
    const verified = confirm("You must be 21 years of age or older to use this site. Are you 21 or older?")
    if (verified) {
      localStorage.setItem("ageVerified", "true")
    } else {
      alert("You must be 21 or older to access this site.")
      window.location.href = "https://www.google.com"
    }
  }
}

// Uncomment the line below to enable age verification popup
// showAgeVerification();
