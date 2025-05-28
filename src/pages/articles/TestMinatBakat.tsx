
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, CheckCircle, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const TestMinatBakat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Beranda
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tes Minat & Bakat
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kenali potensi diri dan temukan jalur karir yang sesuai dengan kepribadian dan kemampuan unikmu
            </p>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Apa itu Tes Minat & Bakat?</h2>
              <p className="text-gray-600 mb-6">
                Tes minat dan bakat adalah alat psikologi yang dirancang untuk membantu siswa memahami kecenderungan alami mereka, 
                preferensi dalam belajar, dan potensi yang dimiliki. Tes ini menggunakan pendekatan ilmiah untuk menganalisis 
                kepribadian, gaya belajar, dan kemampuan kognitif seseorang.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mengapa Tes Minat & Bakat Penting?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-blue-500 mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Mengenal Diri Sendiri</h4>
                  <p className="text-gray-600 text-sm">Memahami kekuatan, kelemahan, dan preferensi personal dalam belajar dan bekerja.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-purple-500 mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Pilihan Jurusan Tepat</h4>
                  <p className="text-gray-600 text-sm">Membantu memilih jurusan kuliah yang sesuai dengan minat dan kemampuan.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Apa yang Akan Kamu Dapatkan?</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Laporan lengkap tentang tipe kepribadian dan gaya belajarmu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Rekomendasi jurusan kuliah yang sesuai dengan profilmu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Saran pengembangan kemampuan dan soft skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Panduan langkah konkret untuk mencapai cita-cita</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Bagaimana Cara Kerja Tesnya?</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Mengisi Kuesioner</h4>
                    <p className="text-gray-600 text-sm">Jawab pertanyaan tentang preferensi, minat, dan pengalaman hidupmu</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Analisis Sistem</h4>
                    <p className="text-gray-600 text-sm">Sistem menganalisis jawaban menggunakan algoritma psikologi terpercaya</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Laporan Personal</h4>
                    <p className="text-gray-600 text-sm">Terima laporan komprehensif dengan rekomendasi yang personal</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Siap Mengenal Dirimu Lebih Dalam?</h3>
                    <p className="opacity-90">Mulai tes minat dan bakat sekarang dan temukan jalur karir yang tepat untukmu!</p>
                  </div>
                  <Clock className="h-12 w-12 opacity-80" />
                </div>
              </div>
            </article>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4"
            >
              <Link to="/test">
                <Star className="h-5 w-5 mr-2" />
                Mulai Tes Sekarang
              </Link>
            </Button>
            <p className="text-gray-500 mt-4">Durasi: 15-20 menit • Gratis untuk siswa</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TestMinatBakat;
