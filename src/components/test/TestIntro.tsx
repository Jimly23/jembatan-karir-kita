
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Star, CheckCircle } from "lucide-react";

interface TestIntroProps {
  onStartTest: () => void;
}

export const TestIntro = ({ onStartTest }: TestIntroProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tes Potensi Diri dan
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}Minat Bakat
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Temukan potensi tersembunyi dalam dirimu! Tes ini akan membantu mengidentifikasi 
            kekuatan, minat, dan bakat yang dapat mengarahkanmu ke jalur karir yang tepat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-white/80 backdrop-blur-sm border-2 border-blue-100">
            <CardContent className="p-6">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">30 Pertanyaan</h3>
              <p className="text-sm text-gray-600">Estimasi waktu 15-20 menit</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm border-2 border-purple-100">
            <CardContent className="p-6">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Analisis Mendalam</h3>
              <p className="text-sm text-gray-600">Soft skills & hard skills</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm border-2 border-pink-100">
            <CardContent className="p-6">
              <div className="bg-gradient-to-r from-pink-400 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Rekomendasi Jurusan</h3>
              <p className="text-sm text-gray-600">Berdasarkan hasil analisis</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm border-2 border-green-100">
            <CardContent className="p-6">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Hasil Instan</h3>
              <p className="text-sm text-gray-600">Langsung setelah selesai</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-2 border-purple-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              Apa yang Akan Kamu Dapatkan?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Profil Kekuatan Pribadi</h4>
                    <p className="text-gray-600 text-sm">Identifikasi soft skills dan hard skills yang menonjol</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Kategori Minat Karir</h4>
                    <p className="text-gray-600 text-sm">Apakah kamu lebih tertarik di bidang artistik, ilmiah, atau sosial?</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Rekomendasi Jurusan</h4>
                    <p className="text-gray-600 text-sm">Saran program studi yang sesuai dengan potensimu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Visualisasi Hasil</h4>
                    <p className="text-gray-600 text-sm">Grafik dan indikator visual yang mudah dipahami</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            onClick={onStartTest}
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-12 py-6 text-white font-semibold"
          >
            <Star className="h-6 w-6 mr-3" />
            Mulai Tes Sekarang
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Gratis • Tanpa perlu mendaftar • Hasil langsung
          </p>
        </div>
      </div>
    </div>
  );
};
