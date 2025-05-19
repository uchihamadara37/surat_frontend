'use client'
import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { Shell, ShieldX } from 'lucide-react'


export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="w-64 bg-slate-300 h-screen p-4">
      <div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="w-full text-left font-semibold text-lg mb-4"
        >
          User 📧
        </button>
        {openMenu && (
          <div className="ml-4 space-y-2">
            <button className="block w-full text-left">📨 All Surat</button>
            <button className="block w-full text-left">📖 Surat Dibaca</button>
            <button className="block w-full text-left">✉️ Surat Belum Dibaca</button>
          </div>
        )}
      </div>

      <button
        onClick={() => { }}
        className="w-full text-left font-semibold text-lg mb-4"
      >
        Semua kotak masuk
      </button>
      <button
        onClick={() => { }}
        className="w-full text-left font-semibold text-lg mb-4"
      >
        inbox sudah dibaca
      </button>
      <button
        onClick={() => { }}
        className="w-full text-left font-semibold text-lg mb-4"
      >
        inbox belum dibaca
      </button>
      <button
        onClick={() => { }}
        className="w-full text-left font-semibold text-lg mb-4"
      >
        Pesan terkirim
      </button>
      <button
        onClick={() => { }}
        className="w-full text-left font-semibold text-lg mb-4"
      >
        Keranjang Sampah
      </button>
      <Badge variant="outline">Badge</Badge>
      <div className="">
        <Shell className='h-10 w-10 text-blue-600'/>
        okokoko
      </div>

    </div>
  )
}
