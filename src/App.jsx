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
    desc: [
      'Conducted site assessments and performed solar PV system sizing',
      'Installed and commissioned residential and commercial solar PV systems',
      'Mounted panels and performed DC string wiring and AC distribution integration',
      'Configured inverters and routed DC/AC cabling across installations',
      'Installed protection devices including MCBs, RCCBs, isolators, and surge protection devices',
      'Integrated solar systems with building electrical distribution boards',
      'Performed electrical wiring, grounding, and load connections for residential and commercial installations',
      'Performed system testing, commissioning, and troubleshooting using electrical test equipment',
      'Ensured installations complied with electrical standards and safety procedures'
    ],
  },
  {
    date: 'Jan 2023 – Aug 2024',
    org: 'Bhachu Industries Ltd\nNairobi',
    role: 'Mechanical Design Engineer',
    desc: [
      'Developed over 70 detailed CAD models and engineering drawings',
      'Designed trailers, pressure vessels, and structural components for industrial use',
      'Prepared manufacturing drawings with dimensions, tolerances, and bill of materials',
      'Performed basic structural analysis to ensure mechanical integrity of components',
      'Collaborated with fabrication teams to translate designs into manufacturable products',
      'Resolved manufacturing constraints through iterative design improvements',
      'Supported quality assurance by verifying fabricated components against design specifications',
      'Maintained engineering documentation and design revisions for production'
    ],
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
