import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const handleResponse = ({ status, ...response }) => {
  return HttpResponse.json(response, { status });
};

const setupServerUsers = http.get("*/users", async () => {
  return handleResponse([
    {
      id: 1,
      name: "Test name 1",
      email: "Test email 1",
      gender: "Test gender 1",
    },
    {
      id: 2,
      name: "Test name 2",
      email: "Test email 2",
      gender: "Test gender 2",
    },
  ]);
});

const setupServerUser = http.get("*/users/:id", async () => {
  return handleResponse({
    id: 1,
    name: "Test name",
    email: "Test email",
    gender: "Test gender",
  });
});

const setupServerCreateUser = http.post("*/users", async ({request}) => {
    const data = await request.json();
    const payload = {
        name: data.name,
        email: data.email,
        gender: data.gender
    }

    if(payload.name === "test gagal" || payload.email === "testgagal@example.com" || payload.gender === "") {
        return handleResponse({
            status: 400
        })
    }

    return handleResponse({
        id: 9,
        name: payload.name,
        email: payload.email,
        gender: payload.gender,
    })

})

const setupMockedUser = setupServer(setupServerUsers, setupServerUser, setupServerCreateUser);

export default setupMockedUser;
