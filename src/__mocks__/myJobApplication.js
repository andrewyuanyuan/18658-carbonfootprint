import { v4 as uuid } from 'uuid';

const myJobApplications = [
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'California',
      city: 'San Francisco',
    },
    appliedAt: 1554930000000,
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    avatarUrl: '/static/images/products/product_1.png',
    title: 'Software Engineer',
    name: 'Dropbox',
    referrer: 'Anyuan Yu',
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'California',
      city: 'San Francisco',
    },
    appliedAt: 1554930000000,
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    avatarUrl: '/static/images/products/product_2.png',
    title: 'Product Manager',
    name: 'Medium Corporation',
    referrer: 'XiaoXiao Qin',
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'California',
      city: 'San Francisco',
    },
    appliedAt: 1554930000000,
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    avatarUrl: '/static/images/products/product_3.png',
    title: 'Software Engineer Intern',
    name: 'Slack',
    referrer: 'Zizhen Liu',
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'California',
      city: 'San Francisco',
    },
    appliedAt: 1554930000000,
    description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
    avatarUrl: '/static/images/products/product_4.png',
    title: 'RPM Program',
    name: 'Lyft',
    referrer: 'Dezhi Yu',
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'California',
      city: 'San Francisco',
    },
    appliedAt: 1554930000000,
    description: 'GitHub is a web-based hosting service for version control of code using Git.',
    avatarUrl: '/static/images/products/product_5.png',
    title: 'Businness Strategy',
    name: 'GitHub',
    referrer: 'Lucky Lai',
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'New York',
      city: 'New York',
    },
    appliedAt: 1554930000000,
    description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    avatarUrl: '/static/images/products/product_6.png',
    title: 'Product Designer',
    name: 'Squarespace',
    referrer: 'Anyuan Yu',
  },
];

export default myJobApplications;
