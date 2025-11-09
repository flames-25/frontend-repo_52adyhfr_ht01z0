import React from 'react'
import { X, Apple, PlayCircle, QrCode } from 'lucide-react'

const storeLinks = {
  android: 'https://play.google.com/store/search?q=Spotles%20Solutions&c=apps',
  ios: 'https://apps.apple.com/us/search?term=Spotles%20Solutions',
}

export default function DownloadAppModal({ open, onClose }) {
  if (!open) return null

  const androidQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    storeLinks.android
  )}`
  const iosQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    storeLinks.ios
  )}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white w-[95%] max-w-3xl rounded-2xl shadow-xl overflow-hidden">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Book in our mobile app</h3>
            <p className="text-gray-600 mb-4">
              All bookings are handled in the Spotles Solutions mobile app for the fastest, most secure experience.
            </p>
            <div className="flex gap-3">
              <a
                href={storeLinks.android}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
              >
                <PlayCircle className="h-5 w-5" />
                Get on Play Store
              </a>
              <a
                href={storeLinks.ios}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black hover:bg-gray-900 text-white"
              >
                <Apple className="h-5 w-5" />
                Get on App Store
              </a>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-xl p-3 text-center">
                <div className="flex items-center justify-center gap-2 mb-2 text-gray-800 font-medium">
                  <PlayCircle className="h-5 w-5" /> Android
                </div>
                <img
                  src={androidQR}
                  alt="QR code to Spotles Solutions on Google Play"
                  className="mx-auto rounded"
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </div>
              <div className="border rounded-xl p-3 text-center">
                <div className="flex items-center justify-center gap-2 mb-2 text-gray-800 font-medium">
                  <Apple className="h-5 w-5" /> iOS
                </div>
                <img
                  src={iosQR}
                  alt="QR code to Spotles Solutions on the App Store"
                  className="mx-auto rounded"
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500 flex items-center justify-center gap-2">
              <QrCode className="h-4 w-4" />
              Scan a code or use the store buttons to continue in the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
