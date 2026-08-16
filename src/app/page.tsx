import About from "@/components/landing/About"
import Footer from "@/components/landing/Footer"
import Hero from "@/components/landing/Hero"
import WorkSection from "@/components/landing/Work"


const HomePage = () => {
  return (
    <main>
      <Hero />
      <WorkSection />
      <About />
      <Footer />
    </main>
  )
}

export default HomePage