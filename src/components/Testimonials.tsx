
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sari Indah",
      school: "SMA Negeri 1 Jakarta",
      text: "Berkat KarirKu, aku akhirnya tahu kalau passion-ku di bidang desain grafis. Sekarang aku udah diterima di jurusan DKV ITB!",
      avatar: "👩‍🎓",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      school: "SMP Negeri 5 Bandung",
      text: "Konseling di KarirKu membantu banget! Konselor-nya sabar jelasin berbagai pilihan karir yang cocok sama minat aku.",
      avatar: "👨‍🎓",
      rating: 5
    },
    {
      name: "Maya Sari",
      school: "SMA Negeri 3 Surabaya",
      text: "Fitur simulasi wawancara kerja di KarirKu bikin aku lebih percaya diri. Sekarang aku siap menghadapi dunia kerja!",
      avatar: "👩‍💼",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Apa Kata
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}Siswa KarirKu?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dengar langsung pengalaman siswa yang telah merasakan manfaat platform KarirKu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.school}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
