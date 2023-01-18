/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.6.0.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as createTask from "../createTask";
import type * as getCurrentUser from "../getCurrentUser";
import type * as getTask from "../getTask";
import type * as listTasks from "../listTasks";
import type * as listUsers from "../listUsers";
import type * as storeUser from "../storeUser";
import type * as updateTask from "../updateTask";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  createTask: typeof createTask;
  getCurrentUser: typeof getCurrentUser;
  getTask: typeof getTask;
  listTasks: typeof listTasks;
  listUsers: typeof listUsers;
  storeUser: typeof storeUser;
  updateTask: typeof updateTask;
}>;
