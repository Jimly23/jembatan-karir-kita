
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Temukan
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}Potensi Karirmu{" "}
            </span>
            Bersama KarirKu
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Platform lengkap untuk siswa SMP dan SMA menemukan minat, merencanakan masa depan, 
            dan mempersiapkan diri menghadapi dunia kerja yang penuh peluang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4"
            >
              <Link to="/test">
                <Star className="h-5 w-5 mr-2" />
                Mulai Tes Minat Bakat
                <ArrowRight className="h-5 w-5 ml-2" />
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
                Jadwalkan Konseling
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tes Minat Bakat</h3>
              <p className="text-gray-600">Kenali potensi diri dengan tes psikologi yang akurat dan terpercaya</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Konseling Ahli</h3>
              <p className="text-gray-600">Bimbingan dari konselor berpengalaman untuk masa depan yang cerah</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="bg-gradient-to-r from-pink-400 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Perencanaan Karir</h3>
              <p className="text-gray-600">Roadmap jelas menuju cita-cita dengan rekomendasi jurusan terbaik</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
