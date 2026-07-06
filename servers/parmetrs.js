import http from "http";

// 1

function extractId(url) {
  const parts = url.split("/");
  console.log(parts[2]);
}

// extractId("/users/42");
// extractId("/users/1");
// extractId("/users");

// 2

function parseQuery(url) {
  const qs = url.split("?")[1] || "";
  const parts = qs.split("&");
  if (parts.length === 1) {
    return {};
  }
  const role = parts[0].split("=")[1] || "";
  const page = parts[1].split("=")[1] || "";
  return { role, page };
}

// console.log(parseQuery("/users?role=admin&page=2"));
// console.log(parseQuery("/users"));

// 3

import { URL } from "url";

function getQueryParams(rawUrl) {
  const parsed = new URL(rawUrl, "http://localhost");
  if (parsed.length === 1) {
    return {};
  }
  const qs = parsed.searchParams;
  return {
    page: qs.get("page") || "1",
    limit: qs.get("limit") || "10",
    sort: qs.get("sort"),
  };
}
// console.log(getQueryParams("/users?page=3&sort=name"));

// 4

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function getParam(url, pattern) {
  // /users/:id vs /users/42
  const pp = pattern.split("/");
  //   console.log(pp);
  const up = url.split("/");
  //   console.log(up);
  const key = pp.find((s) => s.startsWith(":"))?.slice(1);
  //   console.log(key);
  const idx = pp.findIndex((s) => s.startsWith(":"));
  //   console.log(idx);
  if (!key) {
    return {};
  }
  return { [key]: up[idx] };
}

const url = "/users/1";
const url = "/users/5551";

const { id } = getParam(url, "/users/:id");
const user = users.find((u) => u.id === +id);

// if (user) {
//   console.log(200, user);
// } else {
//   console.log(404, "Error");
// }

//  קבלתי אישור לדלג על ההמשך
