var users = {
  chrisjohnson: {
    name: 'Chris Johnson',
    role: 'investor',
    avatar: '/static/images/avatar/avatar_13.png',
    notification: false,
    transactions: [
      {
        name: 'ocean/cleanocean',
        amount: 3000,
        date: '9/20/2021'

      },
    ],
  },
  abbysmith: {
    name: 'Abby Smith',
    role: 'provider',
    avatar: '/static/images/avatar/avatar_14.png',
    notification: false,
    projects: ['ocean/cleanocean', 'ocean/cleanocean1'],
    transactions: [
      {
        name: 'ocean/cleanocean',
        amount: 3000,
        date: '9/20/2021'
      },
    ],
  },
};

export default users;
