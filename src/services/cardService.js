import http from "./httpService";
import { apiUrl } from "../config/config.json";

export function createCard(card) {
    return http.post(`${apiUrl}/cards`, card);
}

export default {
    createCard
};
