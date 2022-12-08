var users = {
  chrisjohnson: {
    name: 'Chris Johnson',
    role: 'investor',
    avatar: '/static/images/avatar/chrisjohnson.png',
    notification: false,
    transactions: [
      {
        id: '1d135d5e-4932-46fa-9fee-4b3066c753a4',
        ref: 'CDD4645',
        projectName: 'Clean Ocean',
        type: 'pending',
        name: 'ocean/cleanocean',
        amount: 4000.0,
        date: '9/20/2021',
        time: '2:42:07 PM',
      },
    ],
  },
  abbysmith: {
    name: 'Abby Smith',
    role: 'owner',
    avatar: '/static/images/avatar/abbysmith.png',
    notification: false,
    projects: ['ocean/cleanocean', 'ocean/plasticbank', 'ocean/whaledefender'],
    transactions: [
      {
        id: '809f7636-a8ae-4e84-bd5d-8b6805e17da2',
        ref: 'CDD4645',
        projectName: 'Clean Ocean',
        type: 'deposit',
        name: 'ocean/cleanocean',
        amount: 3000.0,
        date: '9/20/2021',
        time: '2:42:07 PM',
      },
    ],
  },
};

export default users;
