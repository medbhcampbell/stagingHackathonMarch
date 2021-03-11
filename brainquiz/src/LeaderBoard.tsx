import React, { useEffect, useState } from 'react';
import { getLeaders } from './LeaderBoard.service';

export default function LeaderBoard() {

    let [leaders, setLeaders] = useState([]);
    //dummy data
    //let leaders: any = [];
    // [
    //     {'username': 'hi', 'score': 50},
    //     {'username': 'hello', 'score': 35},
    //     {'username': 'goodbye', 'score':20}
    // ];

    useEffect(() => {
        async function callService() {
            console.log('getting leaderboard');
            setLeaders(await getLeaders());
            console.log(JSON.stringify(leaders));
        }

        if (leaders.length === 0) {
            callService();
        }
    }, [leaders]);

    return (
        <table className="table table-dark">
            <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            {leaders.map((ele: any, index: any) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{ele.username}</td>
                        <td>{ele.score}</td>
                    </tr>
                )
            })}
        </table>
    )
}