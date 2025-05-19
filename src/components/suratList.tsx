'use client'
import SuratItem from './suratItem'

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

interface SuratListProps {
  daftarSurat: Surat[]
}

export default function SuratList({ daftarSurat }: SuratListProps) {
  return (
    <div className="mt-4">
      {daftarSurat.map((surat, i) => (
        <SuratItem key={i} surat={surat} />
      ))}
    </div>
  )
}
