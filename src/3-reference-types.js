const team1 = {
  name: "Warriors",
  wins: 45,
  losses: 20
};

const team2 = { ...team1 };
team2.wins = 50;
team2.losses = 15;
console.log(team1, team2)
/* 
Part A: What will team1.wins and team1.losses be after this code runs? Write your prediction as a comment below:

- Prediction: I think after the code runs it will change those win values to both be equal to 50 wins and losses 15, because the values of win and losses are being changed when assigning the new variable team2, and because we are using the dot method

Part B: Fix the code so that team2 is a TRUE COPY of team1. After making your fix, changing team2 should NOT affect team1.
Part C: Verify your fix by logging both team1.wins (should still be 45) and team2.wins (should be 50)
*/

