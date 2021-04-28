export class ResponseError extends Error {
  response;
}

export function queryString(data) {
  if (!data) return "";
  return Object.keys(data)
    .filter((key) => data[key] !== null && data[key] !== undefined)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new ResponseError(response.statusText);
  error.message = "HTTP Status 500 – Internal Server Error";
  throw error;
}

/**
 * @param url request url
 * @param data form data as object literal
 */
export async function postForm(url, data) {
  let headers = new Headers();
  headers.append(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  return request(url, {
    method: "POST",
    body: queryString(data),
    headers: headers,
  });
}

/**
 *
 * @param url request url
 * @param data request data as object literal
 */
export function post(url, data) {
  let headers = new Headers();
  headers.append("Content-Type", "application/json; charset=UTF-8");
  return request(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
  });
}

/**
 *
 * @param url request url
 * @param data request data as object literal
 */
export function get(url, data) {
  let headers = new Headers();
  headers.append("Content-Type", "application/json; charset=UTF-8");
  const path = `${url}?${queryString(data)}`;
  console.log(path);
  return request(path, {
    method: "GET",
    headers: headers,
  });
}

export default async function request(url, options = {}) {
  const response = await fetch(url, options);

  var text = null;

  checkStatus(response);

  try {
    text = await response.text();
    const data = JSON.parse(text);
    return { data };
  } catch (error) {
    console.log(error);
    return { data: text };
  }
}
