const skillsList = [
  {title: 'Python', value: 80},
  {title: 'React JS', value: 90},
  {title: 'Next JS', value: 70},
  {title: 'React Native', value: 80},
  {title: 'Django', value: 80},
  {title: 'Typescript', value: 75},
  {title: 'Tailwind CSS', value: 80},
  {title: 'Javascript ', value: 60},
  {title: 'Bootstrap', value: 70},
  {title: 'HTML & CSS', value: 90},
  {title: 'Linux', value: 70},
  {title: 'SQL', value: 70},
  {title: 'Git', value: 70},
  {title: 'Photoshop', value: 70},
];
const projectList = [
  {
    id: 1,
    title: 'Client Manager',
    technologies: ['React JS', 'Typescript', 'Tailwind CSS', 'Redux Toolkit', 'Axios'],
    backgroundImage:
      'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600',
    frontImage: 'https://res.cloudinary.com/db3oikvrl/image/upload/v1715292813/Screenshot_from_2024-05-09_23-01-31_zm0oq6.png',
    liveLink: 'http://sandbox.tawol-tech.com:3001/',
    githubLink: 'https://github.com/codydematth',
  },
  {
    id: 2,
    title: 'Lead Certificate',
    technologies:['React JS', 'Typescript', 'Tailwind CSS', 'Redux Toolkit', 'Axios'],
    backgroundImage:
      'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600',
    frontImage: 'https://res.cloudinary.com/db3oikvrl/image/upload/v1715292814/Screenshot_from_2024-05-09_23-02-52_o7h9sj.png',
    liveLink: 'http://sandbox.tawol-tech.com:3003/',
    githubLink: 'https://github.com/codydematth',
  },
  {
    id: 3,
    title: 'Delbott Delivery WebApp',
    technologies: ['React JS', 'Typescript', 'Tailwind CSS'],
    backgroundImage:
      'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600',
    frontImage: 'https://codydematth.pythonanywhere.com/media/img/delbott.jpg',
    liveLink: 'https://delivery.delbott.com',
    githubLink: 'https://github.com/codydematth',
  },
  {
    id: 4,
    title: 'Cargo Express Logistic App',
    technologies: ['React Native, Typescript, Javascript, Vallina CSS '],
    backgroundImage:
      'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600',
    frontImage:
      'https://codydematth.pythonanywhere.com/media/img/cargoexp-min.jpg',
    liveLink: 'https://abccargoxpress.com/',
    githubLink: 'https://github.com/codydematth',
  },
  {
    id: 5,
    title: 'Tekol Africa Computer Show Room',
    technologies: ['Python, Django', 'Bootstrap', 'Postgresql, Javascript'],
    backgroundImage:
      'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600',
    frontImage: 'https://codydematth.pythonanywhere.com/media/img/tekol.png',
    liveLink: 'https://tekolafrica.onrender.com/',
    githubLink: 'https://github.com/codydematth',
  },
  {
    id: 6,
    title: 'Multimedia Learning System',
    technologies: ['Python, Django', 'Bootstrap', 'Postgresql, Javascript'],
    backgroundImage:
      'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600',
    frontImage: 'https://codydematth.pythonanywhere.com/media/img/1.png',
    liveLink: 'https://codyteaching.pythonanywhere.com/',
    githubLink: 'https://github.com/codydematth/multimedia_system',
  }
];

const experienceList = [
  {
    id: 0,
    company: 'SterlingTech & Data Science Ltd',
    links: {
      website: 'https://sterlingtech.com.ng/',
      linkedin: 'https://www.linkedin.com/company/sterling-tech-and-data-sciences',
      facebook: 'https://web.facebook.com/sterlingtechng'
    },
  },
  {
    id: 1,
    company: 'TAWOL TECHNOLOGIES LTD',
    links: {
      website: 'http://www.tawol-tech.com/',
      linkedin: 'https://ng.linkedin.com/company/tawol',
    },
  },
  {
    id: 2,
    company: 'DELBOTT',
    links: {
      website: 'https://delivery.delbott.com/login',
      facebook: 'https://web.facebook.com/delbottnigeria/?_rdc=1&_rdr',
      instagram: 'https://www.instagram.com/delbottnigeria/',
    },
  },
  {
    id: 3,
    company: 'JOYSBRIGHT PROGRAMMING',
    links: {
      facebook: 'https://web.facebook.com/joysbrightcrew/?_rdc=1&_rdr',
      instagram: 'https://www.instagram.com/joysbrightcrew/?hl=en',
    },
  },
];

export {skillsList, projectList, experienceList};
