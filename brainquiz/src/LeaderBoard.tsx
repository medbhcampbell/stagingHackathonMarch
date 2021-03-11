import React, { useEffect } from 'react';
import { getLeaders } from './LeaderBoard.service';

export default function LeaderBoard() {

    //dummy data
    let leaders = [
        {'username': 'hello', 'score': 35},
        {'username': 'hi', 'score': 50},
        {'username': 'goodbye', 'score':20}
    ];

    return (
        <table>
            <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            {leaders.map((ele, index) => {
                return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{ele.username}</td>
                    <td>{ele.score}</td>
                </tr>
            )})}
        </table>
    )
}