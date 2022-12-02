import { v4 as uuid } from 'uuid';

const projects = {
  "ocean": {
    "cleanocean": {
      name: 'Clean Ocean',
      city: 'Fremont, CA',
      country: 'U.S.',
      pricing: '$6.32/tCO2e',
      contact: 'Andrew Smith',
      description: 'Investing in clean ocean technologies',
      image: '/static/images/projects/ocean/CleanOcean.png',
    },
    "whaledefender": {
      name: 'Whale Defender',
      city: 'Fremont, CA',
      country: 'U.S.',
      pricing: '$6.32/tCO2e',
      contact: 'Andrew Smith',
      description: 'Studies near extinct whale species and educates the public',
      image: '/static/images/projects/ocean/WhaleDefender.png',
    },
  },
  "animal": {},
  "forest": {},
}

export default projects