const CONFIG = {
  github: {
    username: 'phatthanh69',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: [
          'phatthanh69/BrainAgeCL3D', // Dự án nghiên cứu về Brain Age Prediction
          'phatthanh69/RAG-Vector-Search', // Hệ thống RAG Vector Search
        ],
      },
    },
    external: {
      header: 'Key Projects',
      projects: [
        {
          title: 'VNCSCC WebGIS & Satellite Analytics',
          description: 'Comprehensive WebGIS platform and satellite imagery analytics for UNDP Climate-Smart Coastal Communities, supporting multi-layer mapping and NDVI calculations. \n Framework: Nestjs & Reactjs',
          imageUrl: '/undp_screenshot.png',
          link: 'https://www.undp.org/vietnam/projects/viet-nam-climate-smart-coastal-communities-vncscc',
        },
        {
          title: 'Berthing Aid System (BAS)',
          description: 'Real-time ship positioning and berthing support system with JavaScript, sensor processing, and Kafka/Postgres streaming pipeline.\n Create with Typescript & Reactjs',
          imageUrl: '/bas.jpg',
          link: 'https://reecotech.com.vn/en/solutions/reeco-mooring-support-system/',
        },
        {
          title: 'VnEmisoft Hydromet Monitoring',
          description: 'Big-data processing & dashboard monitoring for environmental metrics (rainfall, flow, water level), responsive web interface, data integration from multiple stations. \n Create with Typescript & Reactjs',
          imageUrl: '/vnemisoft.png',
          link: 'https://reecotech.com.vn/en/pham-mem/vnemisoft-automatic-monitoring-data-management-software/',
        },
        {
          title: 'RAG Chatbot',
          description: 'Retrieval Augmented Generation chatbot using LangChain and vector search.',
          imageUrl: '/rag.png',
          link: 'https://github.com/phatthanh69/RAG-Chatbot',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Pham Le Thanh Phat',
    description: 'Portfolio & Data Science Work of Pham Le Thanh Phat',
    imageURL: '',
  },
  social: {
    linkedin: 'phatthanh69',
    facebook: 'phatthanh69.jp',
    instagram: 'phatthanh69.jp',
    telegram: '+84326509854',
    phone: '+84326509854',
    email: 'phatthanh69.work@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/drive/folders/1mUk9t96npSQ2EQIIuie26kTxQx7pjJvw?usp=sharing',
  },
  skills: [
    'Python',
    'NumPy',
    'Pandas',
    'Scikit-learn',
    'TensorFlow',
    'PyTorch',
    'FastAPI',
    'Flask',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'NestJS',
    'Express.js',
    'React.js',
    'Java',
    'Spring',
    'SQL',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',
    'Kafka',
    'MQTT',
    'Docker',
    'Nginx',
    'GIS',
    'QGIS',
    'ArcGIS Pro',
    'PostGIS',
    'Leaflet.js',
    'OpenLayers',
    'MapBox',
    'GeoServer',
    'FFmpeg',
    'MediaMTX',
    'PowerBI',
    'Tableau',
  ],
  experiences: [
    {
      company: 'Reeco Tech Co., Ltd.',
      position: 'Software Developer & Data Engineer',
      from: 'July 2024',
      to: 'Present',
      companyLink: 'https://reecotech.com.vn/en/',
    },
  ],
  certifications: [
    {
      name: 'TOEIC 780',
      body: 'Listening 445, Reading 335',
      year: '2022',
      link: '',
    },
    {
      name: 'Google AI Essentials',
      body: 'Critical Thinking Certificate',
      year: '2023',
      link: '',
    },
    {
      name: 'SEO Foundation Certificate',
      body: '',
      year: '2023',
      link: '',
    },
    {
      name: 'Business Analytics Foundation',
      body: '',
      year: '2023',
      link: '',
    },
    {
      name: 'VNU-EPT B1.4 Level',
      body: 'English Proficiency Test',
      year: '2025',
      link: '',
    },
    {
      name: 'WebGIS Course - OpenGIS',
      body: '',
      year: '2025',
      link: '',
    },
    {
      name: 'Remote Sensing - OpenGIS',
      body: '',
      year: '2025',
      link: '',
    },
    {
      name: 'GIS ArcGIS QGIS - OpenGIS',
      body: '',
      year: '2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Information Technology (VNU-HCM)',
      degree: 'Bachelor of Data Science',
      from: '2021',
      to: '2025',
      major: 'Data Science',
      gpa: '8.05/10.0',
    },
    {
      institution: 'University of Information Technology (VNU-HCM)',
      degree: 'Master of Computer Science',
      from: '2025',
      to: '',
      major: 'Computer Science',
      gpa: '',
    },
  ],
  publications: [
    {
      title: 'Brain Age Prediction Framework',
      journalName: '',
      authors: 'Pham Le Thanh Phat',
      link: 'https://github.com/phatthanh69/BrainAgeCL3D',
      description:
        'Develop deep learning models for accurate brain age estimation using neuroimaging data. Achieved MAE of 4.2 years on test set. Application for early detection of neurodegenerative risk.',
    },
    {
      title: 'RAG Vector Search System Architecture',
      journalName: '',
      authors: 'Pham Le Thanh Phat',
      link: 'https://github.com/phatthanh69/RAG-Chatbot',
      description:
        'Comprehensive Retrieval Augmented Generation system using LangChain, Sentence-BERT, BM25, PGVector, and multi-modal search for chatbot/document QA.',
    },
  ],
  blog: {
    source: '',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'pastel',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
