'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">DAMIYATI</h1>
                <p className="text-xs text-slate-600">Privacy Policy</p>
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
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-600">
              Kebijakan Privasi DAMIYATI - Perlindungan Data Pribadi Anda
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
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-blue-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Di DAMIYATI, kami sangat memperhatikan privasi dan keamanan data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                  melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan 
                  layanan kami atau mengunjungi website kami.
                </p>
                <p className="text-slate-700">
                  Dengan menggunakan layanan DAMIYATI, Anda menyetujui praktik-praktik yang 
                  dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-blue-600" />
                  Pengumpulan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Informasi yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Data Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman</li>
                  <li><strong>Informasi Kontak:</strong> Nomor WhatsApp, alamat rumah/kantor</li>
                  <li><strong>Informasi Kendaraan:</strong> Merek, model, tahun pembuatan mobil</li>
                  <li><strong>Informasi Transaksi:</strong> Riwayat pembelian, preferensi produk</li>
                  <li><strong>Data Teknis:</strong> Alamat IP, browser, informasi perangkat</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-blue-600" />
                  Penggunaan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Kami Menggunakan Data Anda Untuk:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Memproses dan menyelesaikan transaksi pembelian</li>
                  <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                  <li>Mengirim informasi produk dan penawaran khusus</li>
                  <li>Meningkatkan kualitas layanan dan pengalaman pengguna</li>
                  <li>Memberikan rekomendasi produk yang sesuai</li>
                  <li>Keperluan internal seperti analisis dan pengembangan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Perlindungan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Kami berkomitmen untuk melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Enkripsi Data:</strong> Menggunakan teknologi enkripsi terkini</li>
                  <li><strong>Akses Terbatas:</strong> Hanya personil berwenang yang dapat mengakses data</li>
                  <li><strong>Keamanan Server:</strong> Server yang aman dan terpercaya</li>
                  <li><strong>Update Rutin:</strong> Sistem keamanan yang selalu diperbarui</li>
                  <li><strong>Backup Data:</strong> Cadangan data yang aman dan teratur</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-blue-600" />
                  Pembagian Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                  tanpa persetujuan Anda, kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Untuk memproses transaksi (mitra pembayaran, jasa pengiriman)</li>
                  <li>Jika diwajibkan oleh hukum atau peraturan yang berlaku</li>
                  <li>Untuk melindungi hak, keamanan, atau properti DAMIYATI</li>
                  <li>Dengan persetujuan eksplisit dari Anda</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-blue-600" />
                  Hak Anda Sebagai Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Mengakses Data:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Mengoreksi Data:</strong> Memperbarui atau memperbaiki data yang tidak akurat</li>
                  <li><strong>Menghapus Data:</strong> Meminta penghapusan data pribadi Anda</li>
                  <li><strong>Membatasi Penggunaan:</strong> Membatasi cara kami menggunakan data Anda</li>
                  <li><strong>Menolak Pemasaran:</strong> Menolak menerima komunikasi pemasaran</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-blue-600" />
                  Kebijakan Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Website kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Mengingat preferensi dan pengaturan Anda</li>
                  <li>Menganalisis traffic dan penggunaan website</li>
                  <li>Menyediakan konten yang dipersonalisasi</li>
                  <li>Meningkatkan keamanan dan performa website</li>
                </ul>
                <p className="text-slate-700">
                  Anda dapat mengatur cookies melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Jika Anda memiliki pertanyaan atau kekhawatiran mengenai kebijakan privasi kami, 
                  silakan hubungi kami melalui:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-700"><strong>Email:</strong> privacy@damiyati.com</p>
                  <p className="text-slate-700"><strong>Telepon:</strong> 085285703526</p>
                  <p className="text-slate-700"><strong>Alamat:</strong> JL. SEMPATI TEGAL ARUM, Desa/Kelurahan Syamsudin Noor, Kec. Landasan Ulin, Kota Banjarbaru, Provinsi Kalimantan Selatan</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600">
              Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu. 
              Kami akan memberitahukan perubahan penting melalui website atau email.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
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