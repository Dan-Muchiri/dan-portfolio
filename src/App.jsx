import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Mechatronics from './components/Mechatronics'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Footer from './components/Footer'

const experience = [
  {
    date: 'Sep 2024 – Mar 2026',
    org: 'Streamlan Solutions Ltd\nNairobi',
    role: 'Solar & Electrical Technician',
    desc: 'Installed residential and commercial solar PV systems. Mounted panels, routed DC/AC cabling, and supported inverter setup. Ensured compliance with electrical standards and safety procedures.',
  },
  {
    date: 'Jan 2023 – Aug 2024',
    org: 'Bhachu Industries Ltd\nNairobi',
    role: 'Mechanical Design Engineer',
    desc: 'Created over 50 SolidWorks drawings for trailers and gas cylinders. Designed components that passed quality assurance checks. Collaborated across teams to meet engineering specifications.',
  },
]

const education = [
  {
    date: '2024 – Present',
    org: 'JKUAT',
    role: 'MSc Mechatronic Engineering',
    desc: 'Laser Systems · Advanced CAD/CAM · Robust Control Theory · Precision Engineering · Sensors & Actuators · Manufacturing Systems',
  },
  {
    date: '2023 – 2024',
    org: 'Moringa School',
    role: 'Full Stack Software Development',
    desc: 'React · Python · Flask · JavaScript · REST APIs · Collaborative software engineering practice',
  },
  {
    date: '2018 – 2023',
    org: 'Dedan Kimathi University',
    role: 'BSc Mechatronic Engineering — 2nd Class Honours, Upper Division',
    desc: 'Engineering Design · Thermodynamics · Electronics · Microprocessors · Power Electronics · PLCs · System Programming',
  },
]

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Mechatronics />
        <Timeline
          id="experience"
          sectionNum="02"
          title="Experience"
          entries={experience}
        />
        <Timeline
          id="education"
          sectionNum="03"
          title="Education"
          entries={education}
        />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
