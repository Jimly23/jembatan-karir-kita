
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Star, 
  Calendar, 
  Users, 
  BookOpen, 
  User, 
  CheckCircle, 
  ArrowRight, 
  Check 
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Star,
      title: "Tes Minat & Bakat",
      description: "Analisis mendalam potensi diri dengan teknologi AI",
      gradient: "from-blue-400 to-purple-500",
      action: "Mulai Tes",
      benefits: ["Hasil akurat & personal", "Rekomendasi karir", "Laporan lengkap"]
    },
    {
      icon: Calendar,
      title: "Perencanaan Karir",
      description: "Roadmap interaktif menuju cita-cita impian",
      gradient: "from-purple-400 to-pink-500",
      action: "Buat Rencana",
      benefits: ["Timeline jelas", "Target terukur", "Progress tracking"]
    },
    {
      icon: Users,
      title: "Konseling Karir",
      description: "Bimbingan dari konselor profesional berpengalaman",
      gradient: "from-pink-400 to-red-500",
      action: "Jadwal Konseling",
      benefits: ["Konselor bersertifikat", "Sesi online/offline", "Follow-up berkala"]
    },
    {
      icon: BookOpen,
      title: "Info Karir & Pendidikan",
      description: "Artikel terkini tentang profesi dan tren industri",
      gradient: "from-green-400 to-blue-500",
      action: "Jelajahi Info",
      benefits: ["Info universitas", "Beasiswa terbaru", "Tren industri"]
    },
    {
      icon: User,
      title: "Koneksi Industri",
      description: "Networking dengan profesional dan perusahaan",
      gradient: "from-orange-400 to-pink-500",
      action: "Mulai Networking",
      benefits: ["Profil perusahaan", "Program magang", "Mentoring"]
    },
    {
      icon: CheckCircle,
      title: "Simulasi Kesiapan Kerja",
      description: "Latihan wawancara dan pembuatan CV profesional",
      gradient: "from-purple-400 to-blue-500",
      action: "Mulai Simulasi",
      benefits: ["Mock interview", "Template CV", "Tips & trik"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Fitur Lengkap untuk
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}Masa Depan Cemerlang
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Semua yang kamu butuhkan untuk menemukan passion, merencanakan karir, 
            dan mempersiapkan diri menghadapi dunia kerja yang kompetitif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 group-hover:shadow-lg transition-all duration-300"
                >
                  {feature.action}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
