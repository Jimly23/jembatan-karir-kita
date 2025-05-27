
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Calendar, Check } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Inklusif",
      description: "Menyediakan akses yang sama untuk semua siswa, tanpa memandang latar belakang"
    },
    {
      icon: BookOpen,
      title: "Edukatif",
      description: "Memberikan informasi dan panduan yang akurat serta mudah dipahami"
    },
    {
      icon: Calendar,
      title: "Berkelanjutan",
      description: "Mendampingi siswa dalam jangka panjang hingga mencapai tujuan karir"
    }
  ];

  const team = [
    { name: "Dr. Sarah Wijaya", role: "Direktur Pendidikan", avatar: "👩‍🏫" },
    { name: "Ahmad Pratama", role: "Lead Technology", avatar: "👨‍💻" },
    { name: "Maya Sari", role: "Head of Counseling", avatar: "👩‍💼" },
    { name: "Budi Santoso", role: "Community Manager", avatar: "👨‍💼" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tentang
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}KarirKu
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Kami berkomitmen membantu siswa Indonesia menemukan potensi diri dan 
            merencanakan masa depan yang cerah melalui teknologi dan bimbingan profesional.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-2xl text-center">🎯 Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Memberikan akses mudah dan terjangkau untuk layanan konseling karir berkualitas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Mengembangkan platform yang user-friendly untuk semua tingkat pendidikan</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Membangun ekosistem pendukung untuk pengembangan karir siswa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-center">🌟 Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi platform terdepan di Indonesia yang memberdayakan setiap siswa 
                  untuk menemukan passion, mengembangkan potensi, dan mencapai kesuksesan 
                  dalam karir yang mereka impikan melalui bimbingan yang tepat dan teknologi inovatif.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-2 border-purple-100 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Tim Ahli Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-2 border-purple-100">
                <CardHeader>
                  <div className="text-5xl mb-4">{member.avatar}</div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
