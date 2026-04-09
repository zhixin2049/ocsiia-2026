export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a0533' }} className="text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Competition Introduction */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Competition Introduction</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The OCSIIDA 2026 Oriental Creative Star International Innovation Design Award is a premier international design award in the industry, promoting the integration and innovation of design education and industry worldwide.
            </p>
          </div>

          {/* Entry Requirements */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entry Requirements</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Original works only</li>
              <li>No IP infringement</li>
              <li>Not previously published</li>
              <li>Comply with regulations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Email: ogdcns@gmail.com</li>
              <li>WeChat: Mr. Wang +86 13391219369</li>
              <li>Official: https://www.ogdcn.com/</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Oriental Creative Star International Innovation Design Award. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
