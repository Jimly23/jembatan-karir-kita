
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckCircle, Target, TrendingUp, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const PerencanaanKarir = () => {
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
            <div className="bg-gradient-to-r from-pink-400 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Perencanaan Karir
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Roadmap jelas menuju cita-cita dengan strategi terstruktur dan rekomendasi jurusan terbaik
            </p>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Apa itu Perencanaan Karir?</h2>
              <p className="text-gray-600 mb-6">
                Perencanaan karir adalah proses sistematis untuk menetapkan tujuan profesional jangka pendek dan jangka 
                panjang, kemudian merancang langkah-langkah konkret untuk mencapainya. Ini melibatkan evaluasi diri, 
                eksplorasi pilihan, pengambilan keputusan, dan implementasi rencana yang realistis dan dapat diukur.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mengapa Perencanaan Karir Penting?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <Target className="h-8 w-8 text-pink-500 mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Arah yang Jelas</h4>
                  <p className="text-gray-600 text-sm">Memberikan fokus dan arah yang spesifik untuk perjalanan pendidikan dan karir.</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-red-500 mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Peluang Lebih Besar</h4>
                  <p className="text-gray-600 text-sm">Meningkatkan peluang sukses dengan persiapan yang matang dan strategis.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Komponen Perencanaan Karir</h3>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Lightbulb className="h-5 w-5 text-purple-500 mr-2" />
                    1. Self Assessment (Evaluasi Diri)
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">Memahami minat, bakat, nilai, dan kepribadian diri sendiri.</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Identifikasi kekuatan dan kelemahan</li>
                    <li>• Analisis minat dan passion</li>
                    <li>• Evaluasi nilai-nilai hidup</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                    2. Career Exploration (Eksplorasi Karir)
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">Mengenal berbagai pilihan karir dan persyaratannya.</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Riset profesi dan industri</li>
                    <li>• Memahami tren pasar kerja</li>
                    <li>• Networking dengan profesional</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Target className="h-5 w-5 text-green-500 mr-2" />
                    3. Goal Setting (Penetapan Tujuan)
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">Menetapkan tujuan SMART (Specific, Measurable, Achievable, Relevant, Time-bound).</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Tujuan jangka pendek (1-2 tahun)</li>
                    <li>• Tujuan jangka menengah (3-5 tahun)</li>
                    <li>• Tujuan jangka panjang (5+ tahun)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <TrendingUp className="h-5 w-5 text-pink-500 mr-2" />
                    4. Action Planning (Rencana Aksi)
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">Merancang langkah-langkah konkret untuk mencapai tujuan.</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Pemilihan jurusan dan universitas</li>
                    <li>• Pengembangan skills yang dibutuhkan</li>
                    <li>• Timeline dan milestone</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Langkah-Langkah Perencanaan Karir untuk Siswa</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Kenali Diri Sendiri</h4>
                      <p className="text-gray-600 text-sm">Lakukan tes minat bakat, refleksi diri, dan identifikasi passion serta nilai-nilai hidup.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Eksplorasi Pilihan Karir</h4>
                      <p className="text-gray-600 text-sm">Riset berbagai profesi, syarat pendidikan, prospek gaji, dan peluang kerja di masa depan.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Tentukan Tujuan</h4>
                      <p className="text-gray-600 text-sm">Tetapkan karir impian dan buat tujuan yang spesifik, terukur, dan realistis.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Pilih Jalur Pendidikan</h4>
                      <p className="text-gray-600 text-sm">Tentukan jurusan kuliah, universitas, dan program studi yang mendukung karir impian.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Kembangkan Skills</h4>
                      <p className="text-gray-600 text-sm">Identifikasi dan kembangkan soft skills dan hard skills yang dibutuhkan untuk karir impian.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Evaluasi dan Adaptasi</h4>
                      <p className="text-gray-600 text-sm">Review rencana secara berkala dan lakukan penyesuaian sesuai perkembangan dan peluang baru.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tips Sukses Perencanaan Karir</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Mulai Sejak Dini</h4>
                  <p className="text-gray-600 text-xs">Semakin awal memulai, semakin banyak waktu untuk persiapan dan eksplorasi.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Fleksibel dan Adaptif</h4>
                  <p className="text-gray-600 text-xs">Bersedia mengubah rencana sesuai dengan perkembangan dan peluang baru.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-purple-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Seek Guidance</h4>
                  <p className="text-gray-600 text-xs">Jangan ragu untuk meminta bantuan dari konselor, guru, atau profesional.</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-pink-500 mb-2" />
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Continuous Learning</h4>
                  <p className="text-gray-600 text-xs">Terus belajar dan mengembangkan diri sesuai dengan tuntutan zaman.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-red-600 p-6 rounded-lg text-white mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mulai Rencanakan Karirmu Hari Ini!</h3>
                    <p className="opacity-90">Dapatkan panduan lengkap dan roadmap personal untuk mencapai cita-citamu.</p>
                  </div>
                  <Target className="h-12 w-12 opacity-80" />
                </div>
              </div>
            </article>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4"
              >
                <Link to="/test">
                  <Target className="h-5 w-5 mr-2" />
                  Mulai dengan Tes Minat Bakat
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 text-lg px-8 py-4"
              >
                <Link to="/counseling">
                  <Calendar className="h-5 w-5 mr-2" />
                  Konsultasi dengan Ahli
                </Link>
              </Button>
            </div>
            <p className="text-gray-500 mt-4">Mulai perjalanan menuju karir impianmu sekarang juga!</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PerencanaanKarir;
