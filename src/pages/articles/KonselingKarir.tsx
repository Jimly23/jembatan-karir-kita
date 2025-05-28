
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, CheckCircle, Users, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const KonselingKarir = () => {
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
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MessageSquare className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Konseling Karir
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bimbingan personal dari konselor berpengalaman untuk membantu merencanakan masa depan yang cerah
            </p>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Apa itu Konseling Karir?</h2>
              <p className="text-gray-600 mb-6">
                Konseling karir adalah proses bimbingan profesional yang membantu siswa memahami diri mereka sendiri, 
                mengeksplorasi pilihan karir, dan membuat keputusan yang tepat tentang masa depan. Konselor karir 
                yang berpengalaman akan membantu mengidentifikasi minat, nilai, dan tujuan hidup untuk menciptakan 
                rencana karir yang realistis dan dapat dicapai.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mengapa Konseling Karir Diperlukan?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <Heart className="h-8 w-8 text-purple-500 mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Dukungan Emosional</h4>
                  <p className="text-gray-600 text-sm">Mendapat dukungan dan motivasi dalam menghadapi keraguan tentang masa depan.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-blue-500 mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Perspektif Ahli</h4>
                  <p className="text-gray-600 text-sm">Mendapat wawasan dari konselor yang berpengalaman dan memahami dunia kerja.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Topik yang Dapat Dibahas</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Pemilihan Jurusan:</strong> Membantu memilih jurusan kuliah yang tepat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Eksplorasi Karir:</strong> Mengenal berbagai profesi dan peluang kerja</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Pengembangan Diri:</strong> Mengidentifikasi kekuatan dan area yang perlu diperbaiki</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Persiapan Kuliah:</strong> Tips dan strategi untuk sukses di perguruan tinggi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Masalah Akademik:</strong> Mengatasi kesulitan belajar dan motivasi</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Proses Konseling</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Pengajuan Jadwal</h4>
                      <p className="text-gray-600 text-sm">Isi formulir pengajuan konseling dengan topik yang ingin dibahas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Konfirmasi Jadwal</h4>
                      <p className="text-gray-600 text-sm">Konselor akan menghubungi untuk konfirmasi jadwal dan persiapan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Sesi Konseling</h4>
                      <p className="text-gray-600 text-sm">Sesi 1-on-1 dengan konselor selama 60 menit melalui video call atau tatap muka</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Tindak Lanjut</h4>
                      <p className="text-gray-600 text-sm">Mendapat rencana aksi dan rekomendasi untuk langkah selanjutnya</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Siapa Konselor Kami?</h3>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-4">
                  Tim konselor KarirKu terdiri dari psikolog pendidikan dan konselor karir bersertifikat dengan pengalaman 
                  bertahun-tahun dalam membimbing siswa. Mereka memahami tantangan dan keunikan setiap siswa Indonesia 
                  serta perkembangan dunia kerja terkini.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Psikolog berlisensi dan konselor bersertifikat</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Pengalaman minimal 5 tahun dalam konseling siswa</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Pemahaman mendalam tentang sistem pendidikan Indonesia</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-lg text-white mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Siap Merencanakan Masa Depanmu?</h3>
                    <p className="opacity-90">Jadwalkan sesi konseling dengan konselor ahli dan dapatkan panduan yang tepat!</p>
                  </div>
                  <Calendar className="h-12 w-12 opacity-80" />
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
              <Link to="/counseling">
                <Calendar className="h-5 w-5 mr-2" />
                Jadwalkan Konseling
              </Link>
            </Button>
            <p className="text-gray-500 mt-4">Sesi pertama gratis • Fleksibel online atau offline</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KonselingKarir;
