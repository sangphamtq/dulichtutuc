"use client"

import Button from "@/src/components/Button";

export default function Home() {
    return (
        <section className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-16">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 glass text-orange-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                            🇻🇳 Nền tảng phượt hàng đầu Việt Nam
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            Khám phá<br /><span className="text-primary-300">Việt Nam</span><br />theo cách của bạn
                        </h1>
                        <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">Tìm kiếm địa điểm, lập kế hoạch chuyến đi, ước tính chi phí – tất cả trong một nơi. Dành cho dân phượt, sinh viên và những ai yêu du lịch tự túc.</p>
                        <div className="glass rounded-2xl p-2 flex items-center gap-2 search-glow transition-all mb-8 max-w-lg">
                            <div className="flex items-center gap-2 flex-1 px-3">
                                <i className="fas fa-search text-white/40"></i>
                                <input type="text" placeholder="Tìm kiếm địa điểm, tỉnh thành..." className="bg-transparent text-white placeholder-white/40 text-sm w-full outline-none py-2" />
                            </div>
                            {/* <button className="bg-linear-to-r from-orange-500 to-orange-400 text-white font-semibold text-sm px-5 py-3 rounded-xl hover:from-orange-400 hover:to-yellow-400 transition-all whitespace-nowrap">Tìm kiếm</button> */}
                            <Button>Tìm kiếm</Button>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-10">
                            <span className="text-white/50 text-sm mr-1 self-center">Phổ biến:</span>
                            <a href="#" className="glass text-white/70 hover:text-orange-300 text-xs px-3 py-1.5 rounded-full transition">Sapa</a>
                            <a href="#" className="glass text-white/70 hover:text-orange-300 text-xs px-3 py-1.5 rounded-full transition">Đà Lạt</a>
                            <a href="#" className="glass text-white/70 hover:text-orange-300 text-xs px-3 py-1.5 rounded-full transition">Hội An</a>
                            <a href="#" className="glass text-white/70 hover:text-orange-300 text-xs px-3 py-1.5 rounded-full transition">Phú Quốc</a>
                            <a href="#" className="glass text-white/70 hover:text-orange-300 text-xs px-3 py-1.5 rounded-full transition">Hà Giang</a>
                        </div>
                        <div className="flex gap-6">
                            <div><div className="text-2xl font-bold text-white">500+</div><div className="text-white/50 text-xs mt-0.5">Địa điểm</div></div>
                            <div className="w-px bg-white/10"></div>
                            <div><div className="text-2xl font-bold text-white">12K+</div><div className="text-white/50 text-xs mt-0.5">Phượt thủ</div></div>
                            <div className="w-px bg-white/10"></div>
                            <div><div className="text-2xl font-bold text-white">8K+</div><div className="text-white/50 text-xs mt-0.5">Bài review</div></div>
                        </div>
                    </div>
                    <div className="hidden lg:block relative">
                        <div className="floating">
                            <div className="glass rounded-3xl overflow-hidden shadow-2xl">
                                <div className="relative h-56 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80" alt="Sapa" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="font-bold text-xl">Sapa, Lào Cai</div>
                                        <div className="text-white/70 text-sm"><i className="fas fa-map-marker-alt mr-1"></i>Tây Bắc Việt Nam</div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-full">⭐ 4.9</div>
                                </div>
                                <div className="p-4 grid grid-cols-3 gap-3 text-center">
                                    <div className="stat-card rounded-xl p-3"><div className="text-orange-400 text-lg font-bold">2.5tr</div><div className="text-white/60 text-xs mt-0.5">Chi phí/người</div></div>
                                    <div className="stat-card rounded-xl p-3"><div className="text-orange-400 font-bold">3–4 ngày</div><div className="text-white/60 text-xs mt-0.5">Thời gian</div></div>
                                    <div className="stat-card rounded-xl p-3"><span className="difficulty-medium text-white text-xs font-bold px-2 py-0.5 rounded-full">Trung bình</span><div className="text-white/60 text-xs mt-1">Độ khó</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -left-8 glass rounded-2xl p-3 flex items-center gap-3 shadow-xl w-52">
                            <img src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=100&q=80" alt="Hoi An" className="w-12 h-12 rounded-xl object-cover" />
                            <div>
                                <div className="text-white text-sm font-semibold">Hội An</div>
                                <div className="flex items-center gap-1 mt-0.5"><span className="text-yellow-400 text-xs">★★★★★</span><span className="text-white/50 text-xs">4.8</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#f9fafb" />
                </svg>
            </div>
        </section>

    );
}
