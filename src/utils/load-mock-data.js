import projects from '../__mocks__/projects';

export default function LoadMockData() {
  localStorage.setItem('projects', JSON.stringify(projects));
}
