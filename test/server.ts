import express, { Request, Response } from "express";
import { defaultSuvidha } from "./prayog";
import bodyParser from "body-parser";
import { z } from "zod";

export const app = express();
app.use(bodyParser.json());

app.get(
    "/tests",
    defaultSuvidha.prayog({}, () => {
        return { message: "/tests" };
    }),
);

const params = z.object({ name: z.string() });
app.post(
    "/post/create",
    defaultSuvidha.prayog({ body: params }, (req, _) => {
        const body = req.body; // type of body: { name: string }
        // do some stuff...
        return {
            message: "mission completed",
        };
    }),
);

function handler(req: Request<{ name: string }>, res: Response) {
    // some stuff...
    return {
        message: "mission completed.",
    };
}

app.post("/post/create", defaultSuvidha.prayog({ params }, handler));
