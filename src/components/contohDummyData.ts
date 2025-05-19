type Surat = {
  id: number
  judul: string
  pengirim: string
  kop: string
  isi: string
  status: 'dibaca' | 'belum_dibaca'
  kategori: 'surat' | 'pesan'
  receivedAt: string // ISO datetime string
}

export const dummySurat: Surat[] = [
  {
    id: 1,
    judul: 'Undangan Rapat Koordinasi',
    pengirim: 'Admin Sekretariat',
    kop: 'Sekretariat Bersama Nusantara',
    isi: `Dengan hormat,\n\nSehubungan dengan rencana kegiatan bulan depan, kami mengundang seluruh anggota untuk hadir dalam rapat koordinasi yang akan diselenggarakan pada:\n\nHari/Tanggal : Senin, 20 Mei 2025\nWaktu        : 10.00 WIB\nTempat       : Ruang Rapat Utama, Lt. 2\n\nDemikian undangan ini kami sampaikan. Atas perhatian dan kehadiran saudara, kami ucapkan terima kasih.\n\nHormat kami,\nAdmin Sekretariat`,
    status: 'belum_dibaca',
    kategori: 'surat',
    receivedAt: '2025-05-18T08:30:00'
  },
  {
    id: 2,
    judul: 'Surat Pemberitahuan Cuti',
    pengirim: 'Bagian HRD',
    kop: 'Departemen SDM PT. Maju Terus',
    isi: `Kepada Yth.\nBapak/Ibu Karyawan,\n\nBersama surat ini kami beritahukan bahwa cuti tahunan Anda untuk periode bulan ini telah disetujui oleh manajemen. Harap melakukan serah terima tugas sebelum keberangkatan cuti.\n\nApabila ada hal yang perlu didiskusikan lebih lanjut, silakan hubungi HRD.\n\nTerima kasih atas kerjasamanya.`,
    status: 'dibaca',
    kategori: 'surat',
    receivedAt: '2025-05-17T14:45:00'
  },
  {
    id: 3,
    judul: 'Pesan Penting dari Rekan Kerja',
    pengirim: 'Rina Anindita',
    kop: 'Pesan Internal',
    isi: `Hai, bisa bantu cek laporan keuangan yang kemarin saya kirim? Sepertinya ada bagian yang perlu revisi di halaman 4 dan 7.\n\nKalau ada waktu, kita bisa meeting singkat sore ini via Zoom. Thanks sebelumnya!`,
    status: 'belum_dibaca',
    kategori: 'pesan',
    receivedAt: '2025-05-18T11:20:00'
  },
  {
    id: 4,
    judul: 'Notifikasi Update Sistem',
    pengirim: 'Tim IT Support',
    kop: 'Departemen IT Pusat',
    isi: `Kami informasikan bahwa akan dilakukan maintenance sistem pada:\n\nHari/Tanggal : Jumat, 24 Mei 2025\nWaktu        : 22.00 WIB - 04.00 WIB\n\nSelama waktu tersebut, beberapa layanan mungkin tidak dapat diakses. Mohon maklum atas ketidaknyamanan ini.`,
    status: 'dibaca',
    kategori: 'surat',
    receivedAt: '2025-05-16T09:00:00'
  },
  {
    id: 5,
    judul: 'Pesan Motivasi Pagi Ini',
    pengirim: 'Robby Santoso',
    kop: 'Pesan Pribadi',
    isi: `Selamat pagi!\n\nSemoga harimu menyenangkan dan produktif. Jangan lupa istirahat cukup dan jaga kesehatan di tengah padatnya aktivitas.\n\nSemangat terus, bro! 💪`,
    status: 'belum_dibaca',
    kategori: 'pesan',
    receivedAt: '2025-05-18T06:45:00'
  },
  {
    id: 6,
    judul: 'Pengumuman Lomba Desain Logo',
    pengirim: 'Komunitas Desain Nusantara',
    kop: 'Panitia Lomba Desain',
    isi: `Kepada seluruh anggota,\n\nKami membuka kesempatan untuk mengikuti lomba desain logo komunitas dengan hadiah jutaan rupiah. Pendaftaran dibuka mulai 18 Mei hingga 30 Mei 2025.\n\nSyarat dan ketentuan dapat dilihat di website resmi kami. Yuk, ikut berpartisipasi dan tunjukkan kreativitasmu!`,
    status: 'dibaca',
    kategori: 'surat',
    receivedAt: '2025-05-15T16:00:00'
  },
]