
import { BookOpen, Calendar, User, Check } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">KarirKu</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Platform terdepan untuk siswa Indonesia menemukan potensi diri, 
              merencanakan karir, dan mempersiapkan masa depan yang cemerlang.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-purple-600 hover:bg-purple-700 p-2 rounded-lg transition-colors">
                📘
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors">
                📷
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                🐦
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Fitur Utama</h3>
            <ul className="space-y-3">
              <li><Link to="/test" className="text-gray-400 hover:text-purple-400 transition-colors">Tes Minat Bakat</Link></li>
              <li><Link to="/planning" className="text-gray-400 hover:text-purple-400 transition-colors">Perencanaan Karir</Link></li>
              <li><Link to="/counseling" className="text-gray-400 hover:text-purple-400 transition-colors">Konseling Online</Link></li>
              <li><Link to="/info" className="text-gray-400 hover:text-purple-400 transition-colors">Info Karir</Link></li>
              <li><Link to="/skills" className="text-gray-400 hover:text-purple-400 transition-colors">Pelatihan Skills</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Kontak</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Karir</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 KarirKu. Semua hak cipta dilindungi.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-green-400">
              <Check className="h-4 w-4 mr-1" />
              <span className="text-sm">Terpercaya & Aman</span>
            </div>
            <div className="flex items-center text-blue-400">
              <User className="h-4 w-4 mr-1" />
              <span className="text-sm">15,000+ Siswa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
