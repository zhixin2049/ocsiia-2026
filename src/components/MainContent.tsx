import { useState } from 'react'
import { Copy, X, Download } from 'lucide-react'

const sidebarItems = [
  { id: 'introduction', label: 'Competition Introduction' },
  { id: 'theme', label: 'Competition Theme' },
  { id: 'contestants', label: 'Contestants' },
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
          {/* Main Content - Left Side */}
          <div className="flex-1 bg-white rounded-lg shadow p-6 sm:p-8 space-y-8">
            {/* Competition Title */}
            <div className="text-center pb-6 border-b border-gray-200">
              <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: '#1a237e' }}>
                The OCSIIA 2026 Oriental Creative Star International Innovation Design Award
              </h1>
            </div>

            {/* Competition Introduction */}
            <section id="introduction">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅰ. Competition Introduction</h2>
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
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅱ. Organizations</h2>
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
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅲ. Competition Theme</h2>
              <p className="text-xl text-left font-semibold text-gray-800 py-4">
                Creativity is limitless, design knows no boundaries
              </p>
            </section>

            {/* Contestants */}
            <section id="contestants">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅳ. Contestants</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  This competition is open to art and design practitioners and enthusiasts from countries and regions outside China. Submissions from authors in Mainland China, Hong Kong, Macao, and Taiwan will not be accepted.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Student Category:</strong> Current students of higher education institutions.</li>
                  <li><strong>Professional Category:</strong> University teachers, designers, artists, and art and design enthusiasts.</li>
                </ul>
              </div>
            </section>

            {/* Competition System */}
            <section id="system">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅴ. Competition System</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-semibold">1. Competition Arrangement</h3>
                <p>Adopt the "selection award, finals" + regional coordination mode to run the organization.</p>

                <h3 className="text-lg font-semibold">(1) Trials</h3>
                <p>
                  The award area will be set up in the country or region, and the collection and evaluation of entries will be organized according to the established rules. There will be no awards, and the outstanding works that meet the specified conditions will be advanced to the finals; The sub-award area can organize forums, exhibitions, workshops and other activities related to the award.
                </p>

                <h3 className="text-lg font-semibold">(2) Finals</h3>
                <p>
                  The organizing committee of the award organizes the review of the works selected for the finals in each sub-division, and plans and organizes a series of activities such as awards ceremonies, publicity activities, and incubation applications.
                </p>

                <h3 className="text-lg font-semibold">2. Schedule</h3>
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
                        <td className="border border-gray-300 px-4 py-2">Submission Deadline</td>
                        <td className="border border-gray-300 px-4 py-2">October 10, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Competition Judging</td>
                        <td className="border border-gray-300 px-4 py-2">November</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Category of Entries */}
            <section id="category">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅵ. Category of Entries</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>Advocating the study of the essence of human culture and art, focusing on the elements of oriental culture, combining the direction of the development of science and technology industry and education, advocating the combination of local cultural and artistic characteristics, and freely choosing the theme for the creation of art and design works.</p>

                <p><strong>A. Works of art:</strong> painting, sculpture, calligraphy, seal carving, arts and crafts, etc.</p>

                <p><strong>B. Design works:</strong> industrial product design, visual communication, environmental design, fashion design, digital media, film and television arts, non-heritage cultural and creative works, meta-universe and so on.</p>

                <h3 className="text-lg font-semibold">Notes:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>AIGC works created through human-machine collaboration are permitted;</li>
                  <li>Works that are entirely created using AIGC are not accepted;</li>
                  <li>For works that utilize AI tools, the name of the tool and the proportion of human (brain) and machine involvement must be clearly indicated;</li>
                  <li>If unlabeled and suspected of AI usage, they will be treated as fully AI-generated works and considered invalid.</li>
                </ul>
              </div>
            </section>

            {/* Entry Requirements */}
            <section id="requirements">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅶ. Entry Requirements</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-semibold">1. Static Works</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Submission Format:</strong> Submit the work image(s) in the form of a design presentation board.</li>
                  <li><strong>Quantity:</strong> 3–5 boards</li>
                  <li><strong>Specifications:</strong> A3 Portrait (297mm × 420mm)</li>
                  <li><strong>Resolution:</strong> ≥300dpi</li>
                  <li><strong>File Size:</strong> No more than 5MB per image</li>
                  <li><strong>File Format:</strong> JPG</li>
                  <li><strong>Submission Method:</strong> Upload images individually; submissions in the form of compressed archives (zip files) are not allowed.</li>
                </ul>

                <h3 className="text-lg font-semibold">2. Dynamic Works</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Submission Requirements:</strong> Submit as a complete video file.</li>
                  <li><strong>Video Quantity:</strong> 1 video</li>
                  <li><strong>Video Duration:</strong> Within 5 minutes</li>
                  <li><strong>File Size:</strong> No more than 100MB</li>
                  <li><strong>File Format:</strong> MP4 (H.264 encoding)</li>
                  <li><strong>Optional Upload:</strong> Video cover image (non-mandatory).</li>
                </ul>

                <h3 className="text-lg font-semibold">3. Design Description</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Word Count:</strong> No more than 200 words</li>
                  <li><strong>Content Coverage:</strong> Design concept, creative highlights, cultural connotation, technology, or implementation path, etc.</li>
                  <li><strong>Submission Method:</strong> Fill in on the system submission page; do not upload as an attachment.</li>
                </ul>

                <h3 className="text-lg font-semibold">4. Author & Credit Norms</h3>
                <p>No author identity information shall appear in the submission materials. Both individuals and teams are eligible to participate; cross-institution and cross-unit teaming are permitted. The number of authors shall not exceed 5, and the number of advisors shall not exceed 2. Team works shall be registered based on the competition division of the first author.</p>
              </div>
            </section>

            {/* Submission Way */}
            <section id="submission">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅷ. Submission Way</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>The evaluation of works is divided into selection and finals, and the outstanding works in each division are pushed to the global finals, and each award is finally selected.</p>

                <h3 className="text-lg font-semibold">Selection contest works push e-mail:</h3>
                <p>(1) Works are submitted by e-mail to the following e-mail address: <strong style={{ color: '#2563eb' }}>ogdcns@gmail.com</strong>. The subject of the e-mail and the file name of the attachment should be "Author's name + Title of the work (CEIDA)".</p>

                <p>(2) Please submit the Author Information Sheet along with your designs. The information sheet contains the description of the work, the author's nationality, name of organization/institution, real name, email address and other information.</p>

                <p>(3) Submit the work and the author's information sheet as an attachment to an e-mail. In the body of the email, state the category of the work and the description of the work's design.</p>

                <h3 className="text-lg font-semibold">Entry Form Download</h3>
                <p>Please download and fill out the entry form:</p>
                <a
                  href="./OCSIIA2026 Entry Form.xlsx"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#1a237e' }}
                >
                  <Download className="w-4 h-4" />
                  Download Entry Form
                </a>
              </div>
            </section>

            {/* Prize Settings */}
            <section id="prize">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅸ. Prize Settings</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>1. There will be no specific awards in the selection award, and the selected works will be directly pushed to the global finals through the sub-divisions.</p>

                <p>2. Awards for the finals: Gold Award, Silver Award, Bronze Award.</p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅹ. Intellectual Property Rights & Instructions</h2>
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
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅺ. Transformation & Application of Competition Results</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-semibold">1. Participate in Grand Prix events</h3>
                <p>The winners of the main awards of the award will have the opportunity to be invited to participate in international exchange activities such as award ceremonies, exhibitions and forums, international research and workshops.</p>

                <h3 className="text-lg font-semibold">2. Fruit Incubation</h3>
                <p>The organizing committee has the right to select and incubate relevant content, and give priority to publicity and promotion through various platforms to incubate applications.</p>
              </div>
            </section>

            {/* Competition Contact Information */}
            <section id="contact">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>Ⅻ. Competition Contact Information</h2>
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

          {/* Sidebar - Right Side */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8 space-y-2">
              <nav className="bg-white rounded-lg shadow p-4">
                <ul className="space-y-1">
                  {sidebarItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded transition-colors"
                        style={{ color: '#1a237e' }}
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
                style={{ backgroundColor: '#1a237e' }}
              >
                Submit
              </button>
            </div>
          </aside>
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
              style={{ backgroundColor: '#1a237e' }}
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
