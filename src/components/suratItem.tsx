'use client'
import { useState } from 'react'

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

const optionsConversiDate: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
}



export default function SuratItem({ surat }: { surat: Surat }) {
    const [showDetail, setShowDetail] = useState(false)

    const klikItem = () => {
        setShowDetail(!showDetail)
    }

    return (
        <div className=" p-3 bg-white rounded-md mb-2 shadow" onClick={klikItem}>
            <div className="flex justify-between items-center">
                <div className="flex justify-start gap-3">
                    <h3 className="font-semibold">{surat.judul}</h3>
                    <p className="font-light text-slate-400">{surat.pengirim}</p>

                </div>
                <div className="">
                    <p className="font-light text-sm text-slate-800">{new Date(surat.receivedAt).toLocaleString("id-ID", optionsConversiDate)}</p>
                </div>
            </div>
            {showDetail && (
                <div className="mt-2 text-sm text-gray-700">
                    <p><strong>Dari:</strong> {surat.pengirim}</p>
                    <p><strong>Isi:</strong> {surat.isi}</p>
                </div>
            )}
        </div>
    )
}
