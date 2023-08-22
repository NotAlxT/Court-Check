import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import MainContent from "@/components/MainContent";
import Nav from "@/components/Nav";
import './globals.css'

export default function Home() {

  return (
    <main>
      <Loader />
      <Nav />
      <MainContent />
      <Footer />
    </main>
  )
}
