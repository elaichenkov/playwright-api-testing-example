// global-setup.ts
import { request, FullConfig } from '@playwright/test';

const defaultPost = {
  title: 'json-server',
  author: 'typicode',
  id: 1,
};

async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use;
  const req = await request.newContext({
    baseURL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      authorization: 'token 5jsBfMf72VYA9QzCXC5eXZkd3q6VB8Gc',
    },
  });

  const posts = await (await req.get('/posts')).json();
  await Promise.all(posts.map(({ id }) => req.delete(`/posts/${id}`)));
  await req.post('/posts', { data: JSON.stringify(defaultPost) });
  await req.dispose();
}

export default globalSetup;
