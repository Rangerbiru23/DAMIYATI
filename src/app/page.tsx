'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Clock, Wrench, Car, Shield, Star, ChevronRight, Menu, X } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">DAMIYATI</h1>
                <p className="text-xs text-slate-600">Suku Cadang & Aksesori Mobil</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-slate-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#produk" className="text-slate-700 hover:text-blue-600 transition-colors">Produk</a>
              <a href="#tentang" className="text-slate-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#kontak" className="text-slate-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Hubungi Kami
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-3">
                <a href="#beranda" className="text-slate-700 hover:text-blue-600 transition-colors">Beranda</a>
                <a href="#produk" className="text-slate-700 hover:text-blue-600 transition-colors">Produk</a>
                <a href="#tentang" className="text-slate-700 hover:text-blue-600 transition-colors">Tentang</a>
                <a href="#kontak" className="text-slate-700 hover:text-blue-600 transition-colors">Kontak</a>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Hubungi Kami
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                <Shield className="w-4 h-4 mr-1" />
                Terpercaya Sejak 2020
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Suku Cadang Mobil <span className="text-blue-600">Berkualitas</span> untuk Kendaraan Anda
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                DAMIYATI menyediakan berbagai macam suku cadang dan aksesori mobil original dengan kualitas terbaik. 
                Dapatkan produk berkualitas dengan harga kompetitif untuk semua jenis mobil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Sekarang
                </Button>
                <Button size="lg" variant="outline">
                  Lihat Katalog
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="DAMIYATI Logo" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Mengapa Memilih DAMIYATI?</h3>
            <p className="text-lg text-slate-600">Kami berkomitmen memberikan layanan terbaik untuk kebutuhan otomotif Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Produk Berkualitas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Suku cadang original dan bergaransi untuk semua merek mobil</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Pelayanan Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Respon cepat dan pengiriman tepat waktu untuk setiap pesanan</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Garansi Resmi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Semua produk dilengkapi garansi resmi dari produsen</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Harga Terbaik</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Harga kompetitif dan bersaing dengan kualitas terjamin</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Kategori Produk</h3>
            <p className="text-lg text-slate-600">Berbagai macam suku cadang dan aksesori mobil tersedia</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Mesin & Performa</CardTitle>
                <CardDescription>Oli filter, busi, timing belt, dan komponen mesin lainnya</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Lihat Produk
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Rem & Kaki-kaki</CardTitle>
                <CardDescription>Kampas rem, cakram, shockbreaker, dan komponen kaki-kaki</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Lihat Produk
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Aksesori & Interior</CardTitle>
                <CardDescription>Audio, cover jok, karpet, dan aksesori interior lainnya</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Lihat Produk
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Tentang DAMIYATI</h3>
              <p className="text-lg text-slate-600 mb-6">
                DAMIYATI adalah toko suku cadang dan aksesori mobil terpercaya di Banjarbaru, Kalimantan Selatan. 
                Sejak berdiri, kami telah berkomitmen untuk menyediakan produk berkualitas tinggi dengan layanan terbaik bagi pelanggan.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Kami mengutamakan kepuasan pelanggan dengan menyediakan suku cadang original, 
                harga kompetitif, dan pelayanan yang ramah dan profesional.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-blue-600 mb-2">1000+</h4>
                  <p className="text-slate-600">Produk Tersedia</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-blue-600 mb-2">500+</h4>
                  <p className="text-slate-600">Pelanggan Puas</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-slate-700">Produk original bergaransi</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-slate-700">Harga kompetitif</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-slate-700">Pelayanan ramah & profesional</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-slate-700">Pengiriman cepat & tepat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Hubungi Kami</h3>
            <p className="text-lg text-slate-600">Siap melayani kebutuhan suku cadang mobil Anda</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Alamat Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  JL. SEMPATI TEGAL ARUM, Desa/Kelurahan Syamsudin Noor<br />
                  Kec. Landasan Ulin, Kota Banjarbaru<br />
                  Provinsi Kalimantan Selatan
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  Kontak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-slate-600">
                    <strong>Telepon:</strong> 085285703526
                  </p>
                  <p className="text-slate-600">
                    <strong>Email:</strong> info@damiyati.com
                  </p>
                  <p className="text-slate-600">
                    <strong>Jam Buka:</strong> Senin - Sabtu, 08:00 - 17:00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">DAMIYATI</h4>
                  <p className="text-sm text-slate-400">Suku Cadang & Aksesori Mobil</p>
                </div>
              </div>
              <p className="text-slate-400">
                Terpercaya menyediakan suku cadang mobil berkualitas dengan harga terbaik.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#produk" className="hover:text-white transition-colors">Produk</a></li>
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Layanan</h5>
              <ul className="space-y-2 text-slate-400">
                <li>Suku Cadang Original</li>
                <li>Aksesori Mobil</li>
                <li>Konsultasi Teknis</li>
                <li>Pengiriman Produk</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 DAMIYATI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}