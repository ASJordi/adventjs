function maxGifts(houses) {
    let dp = new Array(houses.length);
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);

    for (let i = 2; i < houses.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
    }

    return dp[houses.length - 1];
}

module.exports = maxGifts