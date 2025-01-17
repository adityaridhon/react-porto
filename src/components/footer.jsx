
const footer = () => {
  return (
  <footer className="bg-gray-800 text-white py-10" id="footer">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Brand / Logo */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold">Aditya Ridho</h2>
        </div>
        
        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <a
            href="https://www.linkedin.com/in/aditya-ridho/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-2"
          >
            <img
              src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </a>
          <a
            href="https://github.com/adityaridhon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-2"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/24/ffffff/github.png"
              alt="GitHub"
              className="w-5 h-5"
            />
          </a>
          <a
            href="https://www.instagram.com/adtyrdho"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-2"
          >
            <img
              src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
              alt="Instagram"
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Aditya Ridho. All rights reserved.</p>
      </div>
    </div>
  </footer>

  )
}

export default footer