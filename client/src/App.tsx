
import './App.css'
import { ToastContainer } from 'react-toastify';
import { CustomCursor } from './components/custom-cursor'
import { Footer } from './components/footer'
import { Navigation } from './components/navigation'
import Home from './pages/page'

function App() {

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <ToastContainer position='top-right' />
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default App
