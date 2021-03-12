import axios from 'axios';

let url = 'http://localhost:8080/leaderboard';

export function postNewUser(username: string, score: number) {
    try {
        axios.post(url, {'username': username, 'score': score});
    } catch (err) {
        console.error(err);
    }
}

export async function getLeaders(): Promise<any> {
    try {
        let ret = (await axios.get(url)).data;
        console.log(ret);
        console.log(JSON.stringify(ret));
        return ret;
    } catch (err) {
        console.error(err);
    return null;
    }
    // let arr = [{'username': 'hi', 'score': 50},
    //         {'username': 'hello', 'score': 35},
    //         {'username': 'goodbye', 'score':20}
    //     ];
    // return await arr;
}
