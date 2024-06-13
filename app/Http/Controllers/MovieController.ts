import { Controller, response } from '@formidablejs/framework';
import fetch from 'node-fetch';

export class MovieController extends Controller {
    async search({ request }) {
        const query = request.input('query');
        const apiKey = 'c8757789'; // Your OMDB API key
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
        const res = await fetch(apiUrl, query);
        const data = await res.json();
        return response().json(data);
    }
}