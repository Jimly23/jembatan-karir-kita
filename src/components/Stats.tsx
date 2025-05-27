
export const Stats = () => {
  const stats = [
    { number: "15,000+", label: "Siswa Aktif", icon: "👥" },
    { number: "500+", label: "Sekolah Partner", icon: "🏫" },
    { number: "95%", label: "Tingkat Kepuasan", icon: "⭐" },
    { number: "1,200+", label: "Konselor Ahli", icon: "👨‍🏫" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Dipercaya Ribuan Siswa di Indonesia
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Bergabunglah dengan komunitas besar siswa yang telah menemukan jalan menuju masa depan cemerlang
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/30 transition-all duration-300">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-100 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
