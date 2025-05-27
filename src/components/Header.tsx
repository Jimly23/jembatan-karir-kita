
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              KarirKu
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Beranda</Link>
            <Link to="/test" className="text-gray-700 hover:text-purple-600 transition-colors">Tes Minat Bakat</Link>
            <Link to="/planning" className="text-gray-700 hover:text-purple-600 transition-colors">Perencanaan Karir</Link>
            <Link to="/counseling" className="text-gray-700 hover:text-purple-600 transition-colors">Konseling</Link>
            <Link to="/info" className="text-gray-700 hover:text-purple-600 transition-colors">Info Karir</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang Kami</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              <User className="h-4 w-4 mr-2" />
              Masuk
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Calendar className="h-4 w-4 mr-2" />
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-purple-100 pt-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Beranda</Link>
              <Link to="/test" className="text-gray-700 hover:text-purple-600 transition-colors">Tes Minat Bakat</Link>
              <Link to="/planning" className="text-gray-700 hover:text-purple-600 transition-colors">Perencanaan Karir</Link>
              <Link to="/counseling" className="text-gray-700 hover:text-purple-600 transition-colors">Konseling</Link>
              <Link to="/info" className="text-gray-700 hover:text-purple-600 transition-colors">Info Karir</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang Kami</Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="border-purple-200 text-purple-600">Masuk</Button>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500">Daftar Sekarang</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
