/*Be sure to use meaningful variable names.
Try to use map and reduce in your functions as appropriate. */
//The following objects record the season statistics for players on a basketball team.
const player1 = {
    jersey: 8,
    stats: [
        { game: 1, points: 6 },
        { game: 2, points: 7 },
    ],
};
const player2 = {
    jersey: 12,
    stats: [
        { game: 1, points: 16 },
        { game: 2, points: 14 },
    ],
};
export const player3 = {
    jersey: 6,
    stats: [
        { game: 1, points: 10 },
        { game: 2, points: 6 },
    ],
};
export const teamStats = [player1, player2, player3];
export function findTotalPlayerPoints(player) {
    let totalPoint = 0;
    player.stats.map(({ points }) => {
        totalPoint += points;
    });
    return totalPoint;
}
export function findTotalScores(teamStats) {
    let result = [];
    for (const player of teamStats) {
        const { jersey, stats } = player;
        stats;
        result.push({ jersey, total: findTotalPlayerPoints(player) });
    }
    return result;
}
export function findTotalPointsByJersey(jerseyNum) {
    let result = 0;
    for (const player of teamStats) {
        if (jerseyNum === player.jersey) {
            result = findTotalPlayerPoints(player);
        }
    }
    return result;
}
