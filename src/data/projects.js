export const projects = [
  {
    id: 1,
    title: 'Climate Cents Interactive Map',
    description:
      'A 2D pixel platformer built in Unity featuring various challenge mechanics and a captivating story.',
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
    tags: ['Phaser', 'TypeScript', 'Game'],
    links: {
      // github: 'https://github.com/yourname/pixel-platformer',
      live: 'https://climate-cents.pages.dev/',
    },
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description:
      'Minimal weather PWA that caches offline, uses Tailwind, OpenWeatherMap API, and Vite.',
    images: [
    //   require('../assets/code/weather-1.png'),
    //   require('../assets/code/weather-2.png'),
    ],
    tags: ['React', 'Tailwind', 'API', 'PWA'],
    links: {
      github: 'https://github.com/yourname/weather-dashboard',
      live: 'https://weather.yourdomain.com',
    },
  },
  // …add more
];
