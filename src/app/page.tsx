'use client'
import Sidebar from '@/components/sidebar'
import SuratList from '@/components/suratList'
import { ArrowDownAZ, ArrowUpDown, Mail, MessageCircleMore, User2 } from 'lucide-react'

import { dummySurat } from '@/components/contohDummyData'

type Surat = {
  id: number
  judul: string
  pengirim: string
  kop: string
  isi: string
  status: 'dibaca' | 'belum_dibaca'
  kategori: 'surat' | 'pesan'
}


export default function Home() {
  

  return (
    <div className="flex h-screen bg-slate-200 text-slate-800">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4"># Kotak Surat</h1>
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Telusuri surat..."
            className="mx-auto p-2 pl-4 w-[40em] bg-slate-50 rounded-4xl"
          />
        </div>
        <div className="flex justify-start gap-5 mb-4 mt-4 ml-3">

          <div className="cursor-pointer pb-2 flex flex-row gap-2 items-center">
            <Mail className="w-8 h-8 text-blue-500" />
            <div className="flex flex-col items-start text-left px-1 rounded-3xl font-medium ">
              Surat Resmi
              <p className="text-xs text-slate-500">Surat resmi dari user lain.</p>
            </div>
          </div>
          {/* yang aktif yang ini */}
          <div className="cursor-pointer pb-2 flex flex-row gap-2 items-center border-b-2 border-blue-600">
            <MessageCircleMore className="w-8 h-8 text-blue-600" />
            <div className="flex flex-col items-start text-left px-1 rounded-3xl font-medium ">
              <p className="text-blue-600">Pesan User Tidak Resmi</p>
              <p className="text-xs text-slate-500">Pesan biasa yang dikirimkan user lain.</p>
            </div>
          </div>
          <div className="cursor-pointer  pb-1">
            <div className="flex flex-col items-start text-left px-1 rounded-3xl font-medium ">
              A - Z
              <p className="text-xs text-slate-500">Sort by Ascending Subject.</p>
            </div>
          </div>

          <div className="cursor-pointer  pb-1 flex flex-row gap-1 items-center">
            <ArrowUpDown className="w-8 h-8 text-blue-500" />
            <div className="flex flex-col items-start text-left px-1 rounded-3xl font-medium ">
              Time
              <p className="text-xs text-slate-500">Sort by received time.</p>
            </div>
          </div>
        </div>
        <SuratList daftarSurat={dummySurat} />
      </div>
    </div>
  )
}
