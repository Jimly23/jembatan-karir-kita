
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TestResult } from "@/pages/Test";
import { Star, BookOpen, Users, Award, RefreshCw } from "lucide-react";

interface TestResultsProps {
  results: TestResult;
  onRetakeTest: () => void;
}

export const TestResults = ({ results, onRetakeTest }: TestResultsProps) => {
  const getInterestDescription = (category: string) => {
    const descriptions = {
      "Artistik": "Kamu memiliki minat tinggi dalam bidang seni, kreativitas, dan ekspresi diri. Kamu menyukai aktivitas yang melibatkan imajinasi dan estetika.",
      "Ilmiah": "Kamu tertarik pada penelitian, analisis, dan pemecahan masalah. Kamu senang mengeksplorasi bagaimana sesuatu bekerja dan menemukan jawaban.",
      "Sosial": "Kamu peduli dengan orang lain dan senang membantu. Kamu tertarik pada aktivitas yang melibatkan interaksi sosial dan membantu masyarakat.",
      "Teknis": "Kamu tertarik pada teknologi, mesin, dan sistem. Kamu senang bekerja dengan tools dan memahami cara kerja teknologi.",
      "Bisnis": "Kamu memiliki jiwa entrepreneur dan tertarik pada dunia bisnis. Kamu senang dengan tantangan dan mencari peluang.",
      "Konvensional": "Kamu senang dengan struktur, organisasi, dan detail. Kamu tertarik pada pekerjaan yang membutuhkan ketelitian dan sistem."
    };
    return descriptions[category] || "";
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Award className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hasil Tes Potensi Dirimu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selamat! Kamu telah menyelesaikan tes. Berikut adalah analisis lengkap potensi dan minat bakatmu.
          </p>
        </div>

        {/* Top Interest Category */}
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center">
              <Star className="h-6 w-6 mr-2" />
              Kategori Minat Utama: {results.topInterestCategory}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg text-purple-100">
              {getInterestDescription(results.topInterestCategory)}
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Soft Skills */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-gray-800">
                <Users className="h-5 w-5 mr-2 text-blue-500" />
                Kekuatan Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(results.softSkills).map(([skill, score]) => (
                <div key={skill}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{skill}</span>
                    <span className="text-sm text-blue-600 font-semibold">{Math.round(score)}%</span>
                  </div>
                  <Progress value={score} className="h-3" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Interest Categories */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-gray-800">
                <Star className="h-5 w-5 mr-2 text-purple-500" />
                Profil Minat Karir
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(results.interests).map(([interest, score]) => (
                <div key={interest}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{interest}</span>
                    <span className="text-sm text-purple-600 font-semibold">{Math.round(score)}%</span>
                  </div>
                  <Progress value={score} className="h-3" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recommended Majors */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-green-200 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-gray-800">
              <BookOpen className="h-5 w-5 mr-2 text-green-500" />
              Rekomendasi Program Studi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Berdasarkan hasil analisis minat dan bakatmu, berikut adalah program studi yang direkomendasikan:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.recommendedMajors.map((major, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 w-3 h-3 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800">{major}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800 text-center">
              Langkah Selanjutnya
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Jelajahi Info Karir</h3>
                <p className="text-sm text-gray-600">Pelajari lebih lanjut tentang profesi yang sesuai dengan minatmu</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Konseling Karir</h3>
                <p className="text-sm text-gray-600">Diskusikan hasil tesmu dengan konselor profesional</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-400 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Buat Rencana Karir</h3>
                <p className="text-sm text-gray-600">Susun roadmap menuju cita-cita berdasarkan hasil tes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            onClick={onRetakeTest}
            variant="outline"
            className="border-purple-200 text-purple-600 hover:bg-purple-50 mr-4"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Ulangi Tes
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Jadwalkan Konseling
          </Button>
        </div>
      </div>
    </div>
  );
};
