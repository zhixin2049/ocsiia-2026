import { useState } from 'react'
import { Copy, X, Download } from 'lucide-react'

const sidebarItems = [
  { id: 'introduction', label: 'Competition Introduction' },
  { id: 'theme', label: 'Competition Theme' },
  { id: 'system', label: 'Competition System' },
  { id: 'category', label: 'Category of Entries' },
  { id: 'requirements', label: 'Entry Requirements' },
  { id: 'submission', label: 'Submission Way' },
  { id: 'prize', label: 'Prize Settings' },
  { id: 'contact', label: 'Competition Contact Information' },
]

export default function MainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ogdcns@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      setIsModalOpen(false)
    }, 1000)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8 space-y-2">
              <nav className="bg-white rounded-lg shadow p-4">
                <ul className="space-y-1">
                  {sidebarItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary rounded transition-colors"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Submit Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 px-4 text-white font-semibold rounded-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: '#1a0533' }}
              >
                Submit
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow p-6 sm:p-8 space-y-8">
            {/* Competition Introduction */}
            <section id="introduction">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅰ. Competition Introduction</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  The OCSIIDA 2026 Oriental Creative Star International Innovation Design Award is a premier international design award in the industry, held consecutively with the support of the Center for International Economic and Technological Cooperation, Ministry of Industry and Information Technology. The award focuses on the field of industrial design, takes into account other types of design fields, highlights the international characteristics of participants and works, aims to promote the integration and innovation of design education and industry, stimulate the enthusiasm of art design and interdisciplinary talents, gather outstanding creative design thinking from around the world, improve the comprehensive quality and ability of designers, and promote international exchanges and cooperation. Taking the award as the starting point, through international platforms such as the China International Industrial Design Expo and the China-ASEAN Expo Industrial Design Week, we will continue to strengthen the linkage and cooperation with major design organizations and international awards around the world, carry out international exchanges and cooperation among global universities and related industries, provide services for contemporary design talents with international vision, and build a platform for global design cultural exchanges.
                </p>
                <p>
                  Over the past six editions, the Award has attracted participation from 94 countries and regions, gaining extensive recognition within global universities, the design industry, and related sectors. This year's Award features 10 international sub-regions and adopts a "Regional Qualifying → Final" competition format.
                </p>
                <p>
                  The Award was officially launched on December 14, 2025, during the 2025 Wuhan International Industrial Design Expo.
                </p>
              </div>
            </section>

            {/* Organizations */}
            <section id="organizations">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅱ. Organizations</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  As the host, the Oriental Creative Design (China) Research Institute takes the lead in coordinating all relevant participating units to establish the Competition Organizing Committee (hereinafter referred to as the "Competition Organizing Committee"). Under the Committee, the Competition Secretariat, Sub-Division Execution Committee, Expert Judging Committee, Arbitration Committee, and Supervisory Committee are established to be responsible for the specific organization and operation of the award. To ensure the smooth conduct of the award, the Provincial Division Execution Committee is established. The Competition Organizing Committee has set up the Secretariat as the main permanent executive body of the award.
                </p>
                <p>
                  <strong>Official Platform:</strong>{' '}
                  <a href="https://www.ogdcn.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.ogdcn.com/
                  </a>
                </p>
              </div>
            </section>

            {/* Competition Theme */}
            <section id="theme">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅲ. Competition Theme</h2>
              <p className="text-xl text-center font-semibold text-gray-800 py-4">
                Creativity is limitless, design knows no boundaries
              </p>
            </section>

            {/* Competition System */}
            <section id="system">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅳ. Competition System</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-semibold">1. Competition Groups</h3>
                <p>Student group, Professional group</p>

                <h3 className="text-lg font-semibold">2. Competition Division</h3>
                <p>
                  The Award adopts the "Regionals + Finals" competition system. The regionals are divided into domestic and international divisions. The domestic division is divided into provincial divisions. The international division is divided into 10 sub-divisions: East Asia, Southeast Asia, South Asia, Central Asia, West Asia, Europe, America, Oceania, Africa, and Cross-border Integration.
                </p>

                <h3 className="text-lg font-semibold">3. Competition Schedule</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Stage</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Entry Submission</td>
                        <td className="border border-gray-300 px-4 py-2">December 14, 2025 - June 30, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Regional Review</td>
                        <td className="border border-gray-300 px-4 py-2">July 1 - July 31, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Final Review</td>
                        <td className="border border-gray-300 px-4 py-2">August 1 - August 31, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Results Announcement</td>
                        <td className="border border-gray-300 px-4 py-2">September 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Category of Entries */}
            <section id="category">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅴ. Category of Entries</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-semibold">1. Industrial Design</h3>
                <p>Product design, intelligent equipment, transportation design, household appliances, etc.</p>

                <h3 className="text-lg font-semibold">2. Visual Communication Design</h3>
                <p>Brand design, packaging design, book design, poster design, font design, etc.</p>

                <h3 className="text-lg font-semibold">3. Environmental Art Design</h3>
                <p>Interior design, landscape design, architectural design, public art design, etc.</p>

                <h3 className="text-lg font-semibold">4. Fashion Design</h3>
                <p>Clothing design, accessory design, textile design, etc.</p>

                <h3 className="text-lg font-semibold">5. Digital Media Design</h3>
                <p>Animation design, game design, interaction design, film and television design, etc.</p>

                <h3 className="text-lg font-semibold">6. Comprehensive Design</h3>
                <p>Other design works that do not belong to the above categories.</p>
              </div>
            </section>

            {/* Entry Requirements */}
            <section id="requirements">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅵ. Entry Requirements</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-semibold">1. Entry Requirements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Entries must be original works created by the participant.</li>
                  <li>Entries must not infringe on the intellectual property rights of others.</li>
                  <li>Entries must not have been published or awarded in other competitions.</li>
                  <li>Entries must comply with laws, regulations, and social morality.</li>
                </ul>

                <h3 className="text-lg font-semibold">2. Entry Format</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Image format: JPG, PNG, with a resolution of not less than 300dpi.</li>
                  <li>Image size: A3 size (297mm × 420mm), horizontal or vertical.</li>
                  <li>Number of images: Each work can submit 1-5 images.</li>
                  <li>File size: Each image should not exceed 10MB.</li>
                </ul>

                <h3 className="text-lg font-semibold">3. Entry Content</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Work display image (necessary)</li>
                  <li>Work detail image (optional)</li>
                  <li>Work scene application image (optional)</li>
                  <li>Work design description (within 200 words)</li>
                </ul>
              </div>
            </section>

            {/* Submission Way */}
            <section id="submission">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅶ. Submission Way</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-semibold">1. Submission Method</h3>
                <p>Entries are submitted via email to <strong>ogdcns@gmail.com</strong></p>

                <h3 className="text-lg font-semibold">2. Submission Requirements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Email subject: "OCSIIA 2026 + Entry Category + Work Name + Author Name"</li>
                  <li>Email attachment: Work images + "OCSIIA2026 Entry Form"</li>
                  <li>Email body: Work category, work design description, author's nationality, organization/institution name, real name, email address and other information.</li>
                </ul>

                <h3 className="text-lg font-semibold">3. Entry Form Download</h3>
                <p>Please download and fill out the entry form:</p>
                <a
                  href="/OCSIIA2026 Entry Form.xlsx"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#1a0533' }}
                >
                  <Download className="w-4 h-4" />
                  Download Entry Form
                </a>
              </div>
            </section>

            {/* Prize Settings */}
            <section id="prize">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅷ. Prize Settings</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-semibold">1. Regional Selection</h3>
                <p>There will be no specific awards in the selection award, and the selected works will be directly pushed to the global finals through the sub-divisions.</p>

                <h3 className="text-lg font-semibold">2. Final Awards</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Gold Award:</strong> Certificate + Trophy</li>
                  <li><strong>Silver Award:</strong> Certificate + Trophy</li>
                  <li><strong>Bronze Award:</strong> Certificate + Trophy</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅸ. Intellectual Property Rights & Instructions</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-semibold">1. Intellectual Property Rights</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The participant shall own the full intellectual property rights of the entry, and once the infringement is discovered, the qualification and the award will be invalid, and the participant shall bear all legal responsibilities.</li>
                  <li>Entrants bear the responsibility of protecting the intellectual property rights of their works. The organizing committee has the right to carry out media publicity, publication and distribution, display and industrialization trading of the contents.</li>
                  <li>Participants have the obligation to cooperate with the organizing committee of the award to promote the transformation and industrial application of achievements. If you do not cooperate, the organizing committee reserves the right to cancel the relevant awards.</li>
                </ul>

                <h3 className="text-lg font-semibold">2. Instructions</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>If there is any dispute about the award, the evaluation result shall prevail. According to the quality and degree of innovation of the entries, the organizing committee has the right to vacate the award.</li>
                  <li>The specific arrangements of the award shall be formulated and announced by the organizing committee. The organizing committee reserves the right of final interpretation of the award.</li>
                </ul>
              </div>
            </section>

            {/* Transformation & Application */}
            <section id="transformation">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅹ. Transformation & Application of Competition Results</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-semibold">1. Participate in Grand Prix events</h3>
                <p>The winners of the main awards of the award will have the opportunity to be invited to participate in international exchange activities such as award ceremonies, exhibitions and forums, international research and workshops.</p>

                <h3 className="text-lg font-semibold">2. Fruit Incubation</h3>
                <p>The organizing committee has the right to select and incubate relevant content, and give priority to publicity and promotion through various platforms to incubate applications.</p>
              </div>
            </section>

            {/* Competition Contact Information */}
            <section id="contact">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ⅺ. Competition Contact Information</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <ul className="space-y-2">
                  <li><strong>Contact / WeChat:</strong> Mr. Wang +86 13391219369</li>
                  <li><strong>Official WeChat public account:</strong> 东方好创意</li>
                  <li><strong>Email:</strong> ogdcns@gmail.com</li>
                  <li><strong>Tournament Supervision:</strong> dasaijiandu@163.com</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  The Organizing Committee reserves the final interpretation rights for this Award. Related information is subject to the official website announcements.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Submission Email</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="text-center text-lg font-medium text-gray-800">
                ogdcns@gmail.com
              </p>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-white font-semibold rounded-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: '#1a0533' }}
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
