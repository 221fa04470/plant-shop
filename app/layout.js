import './globals.css'

export const metadata = {
  title: 'GreenLeaf - Premium Plant Store',
  description: 'Discover beautiful plants for your home and garden',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
