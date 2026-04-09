import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroBanner />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
