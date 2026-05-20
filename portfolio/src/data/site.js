import wsscmImage from '../assets/projects/wsscm.jpg'
import yummyImage from '../assets/projects/yummy.jpg'
import faceRecognitionImage from '../assets/projects/face-recognition.jpg'
import certificateGeneratorImage from '../assets/projects/certificate-generator.jpg'
import ecommerceImage from '../assets/projects/ecommerce.jpg'
import breastCancerCnnImage from '../assets/projects/breast-cancer-cnn.jpg'

const GITHUB_USER = 'https://github.com/Muhammad-Faisal-Fayaz'

export const SITE = {
  name: 'Muhammad Faisal Fayaz',
  title: 'Frontend Web Developer | PHP Backend Developer',
  email: 'muhammadfaisalfayaz@gmail.com',
  /** Web3Forms access key — https://web3forms.com */
  web3formsAccessKey: 'cb430744-cbc5-4665-9425-cfb62878ba38',
  github: GITHUB_USER,
  linkedin: 'https://www.linkedin.com/in/muhammad-faisal-fayaz',
  twitter: 'https://twitter.com',
  livePortfolio: 'https://intreactive-portfolio-git-main-muhammad-faisal-fayazs-projects.vercel.app/',
  /** Add `public/cv.pdf` and this link will download your file. */
  cvPath: '/cv.pdf',
}

export const projects = [
  {
    id: 'wsscm',
    title: 'WSSCM Project',
    description:
      'A responsive organizational website with clear navigation, structured content, and a polished layout built for a strong first impression.',
    image: wsscmImage,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    github: `${GITHUB_USER}/wsscm-project`,
    category: 'Websites',
  },
  {
    id: 'yummy',
    title: 'YUMMY',
    description:
      'A vibrant food website with appetizing visuals, menu highlights, and mobile-first responsive design.',
    image: yummyImage,
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: `${GITHUB_USER}/YUMMY`,
    category: 'Food & UI',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Website',
    description:
      'A full-featured online store with product listings, cart flows, and PHP-powered backend logic for a complete shopping experience.',
    image: ecommerceImage,
    tech: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    github: `${GITHUB_USER}/ecommerece-website`,
    category: 'E-commerce',
  },
  {
    id: 'face-detection',
    title: 'Face Detection (React)',
    description:
      'An interactive React app demonstrating face detection workflows with a clean UI and real-time visual feedback.',
    image: faceRecognitionImage,
    tech: ['React', 'JavaScript'],
    github: `${GITHUB_USER}/face-detection-using-react-js`,
    category: 'AI & Vision',
  },
  {
    id: 'certgen',
    title: 'Certificate & QR Generator',
    description:
      'Create branded certificates in the browser and generate QR codes for verification, with export-friendly layouts and intuitive controls.',
    image: certificateGeneratorImage,
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    github: `${GITHUB_USER}/certificate-creation-and-also-generate-QR-Code`,
    category: 'Tools',
  },
  {
    id: 'breast-cancer-cnn',
    title: 'Breast Cancer Detection (CNN)',
    description:
      'A university machine-learning project using convolutional neural networks to classify medical imaging data.',
    image: breastCancerCnnImage,
    tech: ['Python', 'Jupyter Notebook', 'TensorFlow', 'CNN'],
    github: `${GITHUB_USER}/BREST-CANCER-USING-CNN`,
    category: 'AI & Vision',
  },
]

export const projectFilters = [
  'All',
  'Websites',
  'Food & UI',
  'E-commerce',
  'AI & Vision',
  'Tools',
]
