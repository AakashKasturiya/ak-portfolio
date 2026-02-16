

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href='/' className="animate-pulse text-2xl md:text-4xl font-extrabold gradient-text text-transparent bg-clip-text">AK</a>
            <p className="text-gray-400 mt-2">
              Frontend Developer & Content Creator
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 mb-2">
              © {new Date().getFullYear()} Aakash Kasturiya. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with passion and a lot of coffee ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
