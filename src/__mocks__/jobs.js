import { v4 as uuid } from 'uuid';

const jobs = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: '/static/images/products/product_1.png',
    title: 'Dropbox - Software Engineer',
    referrer: 'Anyuan Yu',
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    media: '/static/images/products/product_2.png',
    title: 'Medium Corporation - Product Manager',
    referrer: 'XiaoXiao Qin',
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: '/static/images/products/product_3.png',
    title: 'Slack - Software Engineer Intern',
    referrer: 'Zizhen Liu',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
    media: '/static/images/products/product_4.png',
    title: 'Lyft - RPM Program',
    referrer: 'Dezhi Yu',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'GitHub is a web-based hosting service for version control of code using Git.',
    media: '/static/images/products/product_5.png',
    title: 'GitHub - Businness Strategy',
    referrer: 'Lucky Lai',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    media: '/static/images/products/product_6.png',
    title: 'Squarespace - Product Designer',
    referrer: 'Anyuan Yu',
  },
];

export default jobs;
