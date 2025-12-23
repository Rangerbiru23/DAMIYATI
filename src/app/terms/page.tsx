'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, Shield, AlertCircle, CheckCircle, Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">DAMIYATI</h1>
                <p className="text-xs text-slate-600">Terms & Conditions</p>
              </div>
            </div>

            {/* Back Button */}
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Syarat & Ketentuan</h1>
            <p className="text-lg text-slate-600">
              Syarat dan Ketentuan Layanan DAMIYATI
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Penerimaan Syarat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Dengan mengakses dan menggunakan website DAMIYATI, Anda menyetujui 
                  dan terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju 
                  dengan syarat-syarat ini, harap jangan menggunakan layanan kami.
                </p>
                <p className="text-slate-700">
                  Syarat dan Ketentuan ini berlaku untuk semua pengguna website, 
                  pelanggan, dan pengunjung DAMIYATI.
                </p>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Deskripsi Layanan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  DAMIYATI menyediakan layanan perdagangan eceran suku cadang dan aksesori mobil, meliputi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Penjualan suku cadang mobil original dan aftermarket</li>
                  <li>Penjualan aksesori mobil dan perlengkapan kendaraan</li>
                  <li>Konsultasi teknis dan rekomendasi produk</li>
                  <li>Layanan purnajual dan garansi produk</li>
                  <li>Pengiriman produk ke seluruh Indonesia</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Tanggung Jawab Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Sebagai pengguna layanan DAMIYATI, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Menjaga kerahasiaan akun dan kata sandi</li>
                  <li>Tidak menggunakan layanan untuk kegiatan ilegal</li>
                  <li>Mematuhi semua peraturan yang berlaku</li>
                  <li>Tidak merusak atau mengganggu sistem kami</li>
                  <li> Bertanggung jawab atas semua aktivitas di akun Anda</li>
                </ul>
              </CardContent>
            </Card>

            {/* Product Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Informasi Produk
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Mengenai produk yang kami tawarkan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Kami berusaha menyajikan informasi produk yang akurat</li>
                  <li>Warna produk mungkin sedikit berbeda karena faktor layar</li>
                  <li>Ketersediaan stok dapat berubah sewaktu-waktu</li>
                  <li>Harga dapat berubah tanpa pemberitahuan sebelumnya</li>
                  <li>Kami berhak membatasi jumlah pembelian per produk</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-blue-600" />
                  Syarat Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Ketentuan pembayaran di DAMIYATI:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Pembayaran harus dilakukan sebelum pengiriman produk</li>
                  <li>Kami menerima berbagai metode pembayaran (transfer, e-wallet, dll)</li>
                  <li>Harga belum termasuk biaya pengiriman</li>
                  <li>Pembayaran tidak dapat dikembalikan kecuali sesuai kebijakan</li>
                  <li>Biaya tambahan mungkin berlaku untuk daerah tertentu</li>
                </ul>
              </CardContent>
            </Card>

            {/* Shipping and Delivery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Pengiriman dan Pengantaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Kebijakan pengiriman kami:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Waktu pengiriman tergantung lokasi dan kurir</li>
                  <li>Kami tidak bertanggung jawab atas keterlambatan pengiriman</li>
                  <li>Pembeli bertanggung jawab memberikan alamat yang benar</li>
                  <li>Produk yang rusak saat pengiriman akan kami ganti</li>
                  <li>Biaya pengiriman ditanggung pembeli</li>
                </ul>
              </CardContent>
            </Card>

            {/* Returns and Refunds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Pengembalian dan Refund
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Kebijakan pengembalian produk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Pengembalian dapat dilakukan dalam 7 hari setelah penerimaan</li>
                  <li>Produk harus dalam kondisi asli dan tidak digunakan</li>
                  <li>Segel dan kemasan harus utuh</li>
                  <li>Biaya pengembalian ditanggung pembeli</li>
                  <li>Refund akan diproses dalam 3-5 hari kerja</li>
                </ul>
                <p className="text-slate-700 font-semibold">
                  Produk yang tidak dapat dikembalikan: elektronik, cairan, dan produk khusus lainnya.
                </p>
              </CardContent>
            </Card>

            {/* Warranty */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Garansi Produk
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Kebijakan garansi DAMIYATI:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Garansi berlaku sesuai ketentuan produsen</li>
                  <li>Garansi tidak berlaku untuk kerusakan akibat kesalahan instalasi</li>
                  <li>Garansi tidak berlaku untuk kerusakan akibat penggunaan yang salah</li>
                  <li>Klaim garansi memerlukan bukti pembelian yang sah</li>
                  <li>Keputusan mengenai klaim garansi bersifat final</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-blue-600" />
                  Hak Kekayaan Intelektual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Semua konten di website DAMIYATI dilindungi oleh hak cipta dan 
                  hak kekayaan intelektual lainnya, meliputi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Teks, gambar, dan desain website</li>
                  <li>Logo, merek dagang, dan nama dagang</li>
                  <li>Deskripsi produk dan konten marketing</li>
                  <li>Software dan kode sumber website</li>
                </ul>
                <p className="text-slate-700">
                  Dilarang menyalin, mendistribusikan, atau menggunakan konten kami 
                  tanpa izin tertulis dari DAMIYATI.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Sejauh diizinkan oleh hukum:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Kami tidak bertanggung jawab atas kerugian tidak langsung</li>
                  <li>Tanggung jawab kami dibatasi pada nilai pembelian</li>
                  <li>Kami tidak menjamin website bebas dari gangguan</li>
                  <li>Kami tidak bertanggung jawab atas kerugian bisnis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-blue-600" />
                  Hukum yang Berlaku
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan 
                  hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui 
                  perundingan baik-baik, dan jika tidak mencapai kesepakatan, 
                  akan diselesaikan melalui pengadilan yang berwenang di Banjarbaru, Kalimantan Selatan.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Perubahan Syarat dan Ketentuan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  DAMIYATI berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. 
                  Perubahan akan berlaku efektif setelah dipublikasikan di website. 
                  Pengguna disarankan untuk secara berkala meninjau Syarat dan Ketentuan ini.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, 
                  silakan hubungi kami:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-700"><strong>Email:</strong> legal@damiyati.com</p>
                  <p className="text-slate-700"><strong>Telepon:</strong> 085285703526</p>
                  <p className="text-slate-700"><strong>Alamat:</strong> JL. SEMPATI TEGAL ARUM, Desa/Kelurahan Syamsudin Noor, Kec. Landasan Ulin, Kota Banjarbaru, Provinsi Kalimantan Selatan</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600">
              Dengan menggunakan layanan DAMIYATI, Anda mengakui telah membaca, 
              memahami, dan menyetujui Syarat dan Ketentuan ini.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-lg font-bold">DAMIYATI</h4>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; 2024 DAMIYATI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}