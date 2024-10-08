import { app } from "./server";

const request = require("supertest");

test("GET /tests", async () => {
    const { status, body } = await request(app).get("/tests");

    expect(status).toEqual(200);
    expect(body).toEqual({ status: "success", data: { message: "/tests" } });
});

test("POST /posts", async () => {
    const { status, body } = await request(app)
        .post("/posts")
        .send({ name: "warrrr" });

    expect(status).toEqual(200);
    expect(body).toEqual({
        status: "success",
        data: { message: "mission completed" },
    });
});

test("POST /echo", async () => {
    const bodyData = { name: "warrrr" };
    const { status, body } = await request(app).post("/echo").send(bodyData);

    expect(status).toEqual(200);
    expect(body).toEqual({
        status: "success",
        data: bodyData,
    });
});
