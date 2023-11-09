/* global Deno */

import { describe, it } from "https://deno.land/std/testing/bdd.ts";
import {
  assert,
  assertEquals,
  assertMatch,
} from "https://deno.land/std/testing/asserts.ts";

globalThis.describe = describe;
globalThis.it = it;
globalThis.assert = assert;
globalThis.assertEquals = assertEquals;
globalThis.assertMatch = assertMatch;

globalThis.OTPAuth = await import(Deno.env.get("TEST_LIBPATH"));

await import("./test.mjs");
