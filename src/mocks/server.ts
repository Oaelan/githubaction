// src/mocks/server.ts
import { setupServer } from "msw/node";
import { loginHandlers } from "./handlers/loginHandler";

export const server = setupServer(...loginHandlers);
