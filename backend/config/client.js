const { createClient } = require("redis");

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));
async function main () {
    await client.connect();
}

main();

module.exports = client;