// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 text-white mb-8 md:mb-0">
            <motion.img
              src="logo.jpg"
              alt="Logo"
              className="w-24 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-gray-400 mb-4">
              আমরা দূর্ণীতি প্রতিরোধের জন্য কাজ করছি। আপনার সহযোগিতা আমাদের মিশনের অংশ।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-pink-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl text-pink-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl text-pink-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-2xl text-pink-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl text-pink-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="w-full md:w-1/4 text-white mb-8 md:mb-0">
            <h3 className="text-pink-500 text-lg mb-4 relative">সেবাসমূহ</h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <a href="#" className="block text-gray-400 mb-2 hover:text-pink-500 transition-all">
                দূর্ণীতি বিরোধী প্রশিক্ষণ
              </a>
              <a href="#" className="block text-gray-400 mb-2 hover:text-pink-500 transition-all">
                প্রতিবেদন করার জন্য আইনগত সহায়তা
              </a>
              <a href="#" className="block text-gray-400 mb-2 hover:text-pink-500 transition-all">
                সচেতনতা ক্যাম্পেইন
              </a>
              <a href="#" className="block text-gray-400 mb-2 hover:text-pink-500 transition-all">
                অনলাইন অভিযোগ পোর্টাল
              </a>
            </motion.div>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/4 text-white mb-8 md:mb-0">
            <h3 className="text-pink-500 text-lg mb-4 relative">লিংকসমূহ</h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a href="#" className="block text-gray-400 mb-2 hover:text-pink-500 transition-all">
                আমাদের সম্পর্কে
              </a>
              <a href="#" className="block text-gray-400 mb-2 hover:text-pink-500 transition-all">
                আমাদের মিশন
              </a>
              <a href="#" className="block text-gray-400 mb-2 hover:text-pink-500 transition-all">
                দূর্ণীতি প্রতিরোধ নীতি
              </a>
              <a href="#" className="block text-gray-400 mb-2 hover:text-pink-500 transition-all">
                সহায়তা এবং সমর্থন
              </a>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 text-white mb-8 md:mb-0">
            <h3 className="text-pink-500 text-lg mb-4 relative">যোগাযোগ</h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <i className="fas fa-location mr-3"></i>
                <p className="text-gray-400">সেগুনবাগিচা, ঢাকা- ১০০০</p>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-phone mr-3"></i>
                <p className="text-gray-400">হটলাইন-১০৬</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subscription Form */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <form className="flex items-center justify-center space-x-4">
            <input
              type="email"
              placeholder="ইমেইল এখানে লিখুন..."
              className="px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r-lg bg-pink-500 text-white hover:bg-pink-600 transition-all"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
