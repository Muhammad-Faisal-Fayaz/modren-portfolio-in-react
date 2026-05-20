import PDFDocument from 'pdfkit'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.join(__dirname, '..', 'public', 'cv.pdf')

const ACCENT = '#5b21b6'
const MUTED = '#475569'
const BODY = '#1e293b'

const CV = {
  name: 'Muhammad Faisal Fayaz',
  title: 'Frontend Web Developer | PHP Backend Developer',
  email: 'faisalkhanoo357@gmail.com',
  phone: '+92 3255529518',
  github: 'https://github.com/Muhammad-Faisal-Fayaz',
  linkedin: 'https://www.linkedin.com/in/muhammad-faisal-fayaz-4a072640a/',
  portfolio: 'https://intreactive-portfolio-git-main-muhammad-faisal-fayazs-projects.vercel.app/',
  summary:
    'Frontend Web Developer with strong fundamentals in HTML, CSS, and JavaScript, focused on responsive, user-friendly interfaces and modern design systems. Experienced building full-stack features with PHP and MySQL, and shipping real projects through Git-based workflows. Passionate about performance, accessibility, clean code structure, and polished user experiences.',
  education: {
    degree: 'Bachelor of Science (B.S.) — Computer Science',
    note: 'Coursework and projects in web development, databases, and machine learning.',
  },
  skills: [
    'HTML5, CSS3, JavaScript, React.js',
    'Bootstrap, Tailwind CSS, Responsive UI',
    'PHP, MySQL, RESTful patterns',
    'Git, GitHub, collaborative workflows',
    'Python, TensorFlow (academic ML projects)',
  ],
  projects: [
    {
      title: 'WSSCM Project',
      tech: 'HTML5, CSS3, JavaScript, Bootstrap',
      desc: 'Responsive organizational website with clear navigation and polished layout.',
      link: 'github.com/Muhammad-Faisal-Fayaz/wsscm-project',
    },
    {
      title: 'YUMMY — Food Website',
      tech: 'HTML5, CSS3, JavaScript',
      desc: 'Vibrant food site with menu highlights and mobile-first responsive design.',
      link: 'github.com/Muhammad-Faisal-Fayaz/YUMMY',
    },
    {
      title: 'E-Commerce Website',
      tech: 'PHP, MySQL, HTML5, CSS3, JavaScript',
      desc: 'Online store with product listings, cart flows, and PHP backend logic.',
      link: 'github.com/Muhammad-Faisal-Fayaz/ecommerece-website',
    },
    {
      title: 'Face Detection (React)',
      tech: 'React, JavaScript',
      desc: 'Interactive app with face detection workflows and real-time visual feedback.',
      link: 'github.com/Muhammad-Faisal-Fayaz/face-detection-using-react-js',
    },
    {
      title: 'Certificate & QR Generator',
      tech: 'JavaScript, HTML5, CSS3',
      desc: 'Browser-based certificate creation with QR verification and export layouts.',
      link: 'github.com/Muhammad-Faisal-Fayaz/certificate-creation-and-also-generate-QR-Code',
    },
    {
      title: 'Breast Cancer Detection (CNN)',
      tech: 'Python, TensorFlow, Jupyter, CNN',
      desc: 'University ML project classifying medical imaging with convolutional neural networks.',
      link: 'github.com/Muhammad-Faisal-Fayaz/BREST-CANCER-USING-CNN',
    },
  ],
  certificates: [
    'Frontend Web Development — Online Learning Platform (2024)',
    'React.js Essentials — Skills Bootcamp (2024)',
    'PHP & MySQL Backend — Developer Academy (2023)',
    'Git & Version Control — Open Source Workshop (2023)',
  ],
}

function sectionTitle(doc, text, y) {
  doc
    .fillColor(ACCENT)
    .fontSize(11)
    .font('Helvetica-Bold')
    .text(text.toUpperCase(), 50, y)
  const lineY = y + 14
  doc
    .strokeColor(ACCENT)
    .lineWidth(1)
    .moveTo(50, lineY)
    .lineTo(545, lineY)
    .stroke()
  return lineY + 10
}

function bodyText(doc, text, y, options = {}) {
  doc.fillColor(BODY).fontSize(10).font('Helvetica')
  doc.text(text, 50, y, { width: 495, align: 'left', ...options })
  return doc.y + 6
}

const doc = new PDFDocument({ margin: 50, size: 'A4' })
const stream = fs.createWriteStream(outPath)
doc.pipe(stream)

// Header
doc.fillColor(ACCENT).fontSize(22).font('Helvetica-Bold').text(CV.name, 50, 50)
doc.fillColor(MUTED).fontSize(11).font('Helvetica').text(CV.title, 50, 78)
doc.fillColor(BODY).fontSize(9).text(CV.email, 50, 96)
doc.text(`${CV.phone}  |  ${CV.linkedin.replace('https://www.', '')}`, 50, 108)
doc.text(`${CV.github.replace('https://', '')}  |  ${CV.portfolio.replace('https://', '')}`, 50, 120)

let y = 138

y = sectionTitle(doc, 'Professional Summary', y)
y = bodyText(doc, CV.summary, y)

y = sectionTitle(doc, 'Education', y)
doc.fillColor(BODY).fontSize(10).font('Helvetica-Bold').text(CV.education.degree, 50, y)
y = doc.y + 4
doc.font('Helvetica').fillColor(MUTED).text(CV.education.note, 50, y)
y = doc.y + 10

y = sectionTitle(doc, 'Technical Skills', y)
for (const skill of CV.skills) {
  doc.fillColor(BODY).fontSize(10).font('Helvetica').text(`•  ${skill}`, 58, y, { width: 487 })
  y = doc.y + 2
}
y += 6

y = sectionTitle(doc, 'Selected Projects', y)
for (const p of CV.projects) {
  if (y > 700) {
    doc.addPage()
    y = 50
  }
  doc.fillColor(BODY).fontSize(10).font('Helvetica-Bold').text(p.title, 50, y)
  y = doc.y + 2
  doc.font('Helvetica').fillColor(MUTED).fontSize(9).text(p.tech, 50, y)
  y = doc.y + 3
  doc.fillColor(BODY).fontSize(9).text(p.desc, 50, y, { width: 495 })
  y = doc.y + 2
  doc.fillColor(ACCENT).text(p.link, 50, y, { width: 495 })
  y = doc.y + 8
}

if (y > 680) {
  doc.addPage()
  y = 50
}

y = sectionTitle(doc, 'Certifications', y)
for (const c of CV.certificates) {
  doc.fillColor(BODY).fontSize(9).font('Helvetica').text(`•  ${c}`, 58, y, { width: 487 })
  y = doc.y + 3
}

doc.end()

stream.on('finish', () => {
  console.log(`CV written to ${outPath}`)
})

stream.on('error', (err) => {
  console.error(err)
  process.exit(1)
})
