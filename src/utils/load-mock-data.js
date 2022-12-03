import projects from '../__mocks__/projects';
import users from '../__mocks__/users';
import chats from '../__mocks__/chats';

export default function LoadMockData() {
  localStorage.setItem("currentuser", "investor");

  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('chats', JSON.stringify(chats));
}
