
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, MessageSquare, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Counseling = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    grade: "",
    preferredDate: "",
    preferredTime: "",
    topic: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.grade || !formData.preferredDate || !formData.preferredTime || !formData.topic) {
      toast({
        title: "Formulir Tidak Lengkap",
        description: "Mohon lengkapi semua field yang wajib diisi.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Halo, saya ingin mengajukan konseling karir:

📝 *Detail Pengajuan Konseling*
• Nama Lengkap: ${formData.fullName}
• Kelas: ${formData.grade}
• Tanggal Preferensi: ${formData.preferredDate}
• Waktu Preferensi: ${formData.preferredTime}
• Topik Konseling: ${formData.topic}
${formData.notes ? `• Catatan Tambahan: ${formData.notes}` : ''}

Mohon konfirmasi ketersediaan jadwal. Terima kasih!`;

    // WhatsApp number (you can change this to the actual counselor's number)
    const whatsappNumber = "6281234567890"; // Replace with actual number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    toast({
      title: "Berhasil!",
      description: "Permintaan konseling Anda telah dikirim melalui WhatsApp.",
    });
  };

  const handleNewRequest = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      grade: "",
      preferredDate: "",
      preferredTime: "",
      topic: "",
      notes: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Konseling Karir
            </h1>
            <p className="text-lg text-gray-600">
              Jadwalkan sesi konseling dengan konselor sekolah untuk membantu merencanakan masa depan Anda
            </p>
          </div>

          {!isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-purple-500" />
                Formulir Pengajuan Konseling
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 font-medium">
                    Nama Lengkap *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap Anda"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="grade" className="text-gray-700 font-medium">
                    Kelas *
                  </Label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Pilih kelas Anda</option>
                    <option value="7 SMP">Kelas 7 SMP</option>
                    <option value="8 SMP">Kelas 8 SMP</option>
                    <option value="9 SMP">Kelas 9 SMP</option>
                    <option value="10 SMA">Kelas 10 SMA</option>
                    <option value="11 SMA">Kelas 11 SMA</option>
                    <option value="12 SMA">Kelas 12 SMA</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate" className="text-gray-700 font-medium">
                      Tanggal Preferensi *
                    </Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="preferredTime" className="text-gray-700 font-medium">
                      Waktu Preferensi *
                    </Label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="">Pilih waktu</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="09:00 - 10:00">09:00 - 10:00</option>
                      <option value="10:00 - 11:00">10:00 - 11:00</option>
                      <option value="11:00 - 12:00">11:00 - 12:00</option>
                      <option value="13:00 - 14:00">13:00 - 14:00</option>
                      <option value="14:00 - 15:00">14:00 - 15:00</option>
                      <option value="15:00 - 16:00">15:00 - 16:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="topic" className="text-gray-700 font-medium">
                    Topik Konseling *
                  </Label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Pilih topik konseling</option>
                    <option value="Pemilihan Jurusan">Pemilihan Jurusan</option>
                    <option value="Perencanaan Karir">Perencanaan Karir</option>
                    <option value="Konsultasi Minat Bakat">Konsultasi Minat Bakat</option>
                    <option value="Persiapan Kuliah">Persiapan Kuliah</option>
                    <option value="Masalah Akademik">Masalah Akademik</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-gray-700 font-medium">
                    Catatan Tambahan (Opsional)
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Jelaskan secara singkat hal-hal yang ingin Anda diskusikan..."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 text-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Kirim via WhatsApp
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Permintaan Berhasil Dikirim!
              </h2>
              
              <p className="text-gray-600 mb-6">
                Permintaan konseling Anda telah dikirim melalui WhatsApp. 
                Konselor akan segera menghubungi Anda untuk konfirmasi jadwal.
              </p>
              
              <div className="space-y-3">
                <Button
                  onClick={handleNewRequest}
                  variant="outline"
                  className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  Ajukan Konseling Lagi
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Counseling;
