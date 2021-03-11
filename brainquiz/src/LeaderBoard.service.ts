import axios from 'axios';

let url = 'http://localhost:8080/leaderboard';

export function postNewUser(username: string, score: number) {
    try {
        axios.post(url, {'username': username, 'score': score});
    } catch (err) {
        console.error(err);
    }
}

export function getLeaders(): any {
    try {
        axios.get(url);
    } catch (err) {
        console.error(err);
    }
}