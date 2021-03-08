import http from "./httpService";
import { apiUrl } from "../config/config.json";

export function getMyCards() {
    return http.get(`${apiUrl}/cards/my-cards`);
}

export function createCard(card) {
    return http.post(`${apiUrl}/cards`, card);
}

export default {
    createCard,
    getMyCards
};
