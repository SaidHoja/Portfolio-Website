import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
export default function Home() {
  return (
    <main className = "mx-auto max-w-3xl px-4 sn:px-4 md:max-w-5xl">
      <Hero/>
      <About/>
      <Projects/>
    </main>
  )
}
