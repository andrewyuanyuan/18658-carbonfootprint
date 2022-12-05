import projects from '../__mocks__/projects';
import users from '../__mocks__/users';
import chats from '../__mocks__/chats';

export default function LoadMockData() {
  if (localStorage.getItem('loaded') === null) {
    localStorage.setItem('loaded', true);
    localStorage.setItem('currentuser', 'abbysmith');
    localStorage.setItem('currentrole', 'owner');
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('chats', JSON.stringify(chats));
    localStorage.setItem('myProjects', JSON.stringify(users.abbysmith.projects));
  }
  if (localStorage.getItem('myProjects') === null || localStorage.getItem('myProjects') === undefined) {
    localStorage.setItem('myProjects', JSON.stringify(users.abbysmith.projects));
  }
}
