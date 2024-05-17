"use client"

function Footer() {
  return (
    <footer className="bg-indigo-950 text-gray-300 font-sans py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Education All Solutions is an online platform that helps you to find the right courses for your needs.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@eduallsolution.com</p>
          <p>Phone: 987 102 3007</p>
        </div>
      </div>
      <p className="text-center text-sm pt-8">© 2024 Education All Solutions. All rights reserved.</p>
    </footer>
  )
}

export default Footer