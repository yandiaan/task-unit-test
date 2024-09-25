import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const handleResponse = ({ status, ...response }) => {
  return HttpResponse.json(response, { status });
};

const setupServerPost = http.get("*/posts", async () => {
  return handleResponse([
    {
      id: 1,
      user_id: 1,
      title: "Test title",
      body: "Test body content",
      commentCount: 0,
    },
  ]);
});

const setupServerPostById = http.get("*/posts/:id", async ({ params }) => {
  const { id } = params;
  return handleResponse({
    id,
    user_id: 1,
    title: "Test title",
    body: "Test body content",
    commentCount: id === 1 ? 1 : 0,
  });
});

const setupServerUser = http.get("*/users/*", async () => {
  return handleResponse({
    id: 1,
    name: "Test name",
    email: "Test email",
    gender: "Test gender",
  });
});

const setupServerComments = http.get("/api/posts/:id/comments", async ({params}) => {
  const { id } = params;

  const data = [
    {
      id: 1,
      post_id: id,
      name: "Test name",
      email: "Test email",
      body: "Test body comment",
    },
  ];

  return handleResponse({
    data: id === 1 ? data : [],
  });
});

const setupMockedPost = setupServer(
  setupServerPost,
  setupServerUser,
  setupServerComments
);

export const setupMocketDetailPost = setupServer(
  setupServerPostById,
  setupServerUser,
  setupServerComments
);

export default setupMockedPost;
