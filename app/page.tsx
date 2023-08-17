import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Footer from "../components/footer"
export default function Home() {
  return (
    <main className = "mx-auto max-w-3xl px-4 sn:px-4 md:max-w-5xl text-zinc-300">
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  )
}
