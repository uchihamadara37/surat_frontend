'use client'
import { useState } from 'react'

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
    </div>
  )
}
