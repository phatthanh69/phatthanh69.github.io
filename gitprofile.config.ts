// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'phatthanh69', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'ReecoTech Berthing Aid System',
          description:
            'Berthing Aid System (BAS), also known as the BlueEco-BAS, is designed to continuously monitor a ship’s approach to the berth during berthing maneuvers and provide real-time data to relevant parties in a clear and timely manner.',
          imageUrl:
            'https://reecotech.com.vn/wp-content/uploads/2023/12/he-thong-bas.png',
          link: 'https://reecotech.com.vn/en/solutions/reeco-mooring-support-system/',
        },
        {
          title: 'VnEmisoft – Automatic Monitoring Data Management Software',
          description:
            'The VnEmisoft software was developed by the Reeco Tech team. The system is built on a big data platform. Data is collected from various sources such as automatic environmental monitoring stations, hydrometeorological stations, and measuring and analysis devices (which have been calibrated) shared by organizations or individuals. This data is synthesized and integrated by location and time. It is then processed using scientific analysis and statistical tools, combined with AI to build forecasting and warning models.',
          imageUrl:
            'https://reecotech.com.vn/wp-content/uploads/2024/02/chuc-nang-bieu-do-phan-mem-vnemisoft.jpg',
          link: 'https://reecotech.com.vn/en/pham-mem/vnemisoft-automatic-monitoring-data-management-software/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of phatthanh69',
    description: 'phatthanh69 portfolio',
    imageURL: '',
  },
  social: {
    linkedin: 'phatthanh69',
    // x: 'phatthanh69',
    // mastodon: '',
    researchGate: '',
    facebook: 'phatthanh69.jp',
    instagram: 'phatthanh69.jp',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '+84326509854',
    website: '',
    phone: '+84326509854',
    email: 'phatthanh69.work@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // 'PHP',
    // 'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Python',
    'Java/ Scala',
    // 'Nest.js',
    'Git',
    'Docker',
    // 'PHPUnit',
    // 'Antd',
    // 'Tailwind',
    'HuggingFace',
    'Apache Kafka',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'MongoDB',
    'AWS',
    'GCP'
  ],
  experiences: [
    {
      company: 'REECO Science and Technology Company Limited (Reecotech)',
      position: 'Data Engineer & Developer',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://reecotech.com.vn/en/',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'VNUHCM - University of Information Technology (UIT)',
      degree: 'Bachelor',
      from: '2021',
      to: '2025',
      major: 'Data Science'
    },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  // enablePWA: true,
};

export default CONFIG;
