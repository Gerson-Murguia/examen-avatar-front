import { Films } from './Films';

export class FilmResponse {
    private count: number;
    private next: number;
    private previous: number;
    private results: Films[];
}