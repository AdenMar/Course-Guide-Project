import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";

const apiEndpoint = apiUrl + "users";

export function register(user) {
  return http.post(apiEndpoint + "/register", {
    username: user.username,
    password: user.password,
    lastname: user.lastname,
    firstname: user.firstname,
  });
}
function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getUsers() {
  http.setJwt(getJwt());
  console.log(http.get(apiEndpoint));
  return http.get(apiEndpoint);
}
export function getAdvisees(userId) {
  http.setJwt(getJwt());
  console.log(http.get(apiEndpoint));
  return http.get(userUrl(userId) + "/advisees");
}

export function getUser(userId) {
  http.setJwt(getJwt());
  return http.get(userUrl(userId));
}

export function getSchedule(userId) {
  http.setJwt(getJwt());
  return http.get(userUrl(userId) + "/schedule");
}
export function getAdviseeSchedule(userId) {
  http.setJwt(getJwt());
  return http.get(getAdvisees(userId) + "/schedule");
}
export function saveUser(user) {
  http.setJwt(getJwt());
  if (user._id) {
    const body = { ...user };
    delete body._id;
    return http.put(userUrl(user._id), body);
  }

  return http.post(apiEndpoint, user);
}

export function deleteUser(userId) {
  http.setJwt(getJwt());
  return http.delete(userUrl(userId));
}
