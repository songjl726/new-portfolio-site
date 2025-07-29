export const projects = [
  {
    id: 1,
    title: 'Climate Cents Interactive Map',
    description:
      'An interactive volunteering project map web app built over the course of a school year with USC Code the Change for nonprofit Blue Sky LA. Features weather overlays, searching and filtering, and admin-side operations (such as creating new projects to display).',
    images: [
      require('../assets/code/climate-cents-1.png'),
      require('../assets/code/climate-cents-2.png'),
      require('../assets/code/climate-cents-3.png'),
      require('../assets/code/climate-cents-4.png'),
      require('../assets/code/climate-cents-5.png'),
      require('../assets/code/climate-cents-6.png'),
      require('../assets/code/climate-cents-7.png'),
      require('../assets/code/climate-cents-8.png'),
    ],
    tags: ['TypeScript', 'Tailwind CSS', 'Mapbox API', 'NextJS', 'React', 'CloudFlare', 'Git', 'Figma', 'Scrum', 'Full-stack Web Dev'],
    links: {
      // github: 'https://github.com/yourname/pixel-platformer',
      live: 'https://climate-cents.pages.dev/',
    },
  },
  {
    id: 2,
    title: 'Bon-Bon Voyage',
    description:
      'A ride-share service for out-of-state university students made with a team in 48 hours. Intended to help search for other students from nearby schools to split transportation costs with. Awarded Best Beginner at AthenaHacks 2024.',
    images: [
      require('../assets/code/bon-bon-voyage-1.png'),
      require('../assets/code/bon-bon-voyage-2.jpg'),
      require('../assets/code/bon-bon-voyage-3.png'),
      require('../assets/code/bon-bon-voyage-4.png'),
      require('../assets/code/bon-bon-voyage-5.png'),
    ],
    tags: ['Google Firebase', 'Full-stack Web Dev', 'Javascript', 'HTML/CSS'],
    links: {
      github: 'https://github.com/jasminegau/Bon-bon-voyage',
      // live: 'https://weather.yourdomain.com',
      devpost: 'https://devpost.com/software/bon-bon-voyage',
    },
  },
  // …add more
];
