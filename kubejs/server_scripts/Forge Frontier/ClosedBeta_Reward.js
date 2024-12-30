// List of usernames that should receive the custom item
const rewardUsernames = [
    "M0nkeyPr0grammer",
    "MyPoopSmells",
    "the_ellagator",
    "Voidmaster01",
    "Tammlin7703",
    "shaneleelevin",
    "thegrugg",
    "DYLTHEKILLER",
    "Scooter1974",
    "raydee",
    "gamma_02",
    "ZhuHer",
    "CapezOnMyBack",
    "Nick_Dixon37",
    "Tookiyo",
    "Sabermech",
    "Dongington"
];

// Custom item to give to the players
const customItem = 'forge_frontier:closed_beta_coin'; // Replace with your custom item

// Tag to mark that a player has received the reward
const rewardTag = 'has_received_reward';

// Event triggered when a player joins or loads a world
PlayerEvents.loggedIn(event => {
    let player = event.player;

    // Check if the player's username is in the reward list
    if (rewardUsernames.includes(player.username)) {
        // Check if the player has already received the reward
        if (!player.persistentData[rewardTag]) {
            // Give the custom item to the player
            player.give(Item.of(customItem));

            // Mark the player as having received the reward
            player.persistentData[rewardTag] = true;

            // Notify the player that they have received a reward
            player.tell([
                Text.of("🎉 Congratulations! 🎉\n").bold().color(0xFFD700), // Golden color
                Text.of("You've been awarded an exclusive ").color(0xFFFFFF),
                Text.of("Closed Beta Coin").color(0xFFD700).bold(),
                Text.of(" for your invaluable support and dedication as a beta tester!\n"),
                Text.of("Thank you for helping us shape this adventure — your efforts mean the world to us! ").color(0xFFFFFF),
                Text.of("🪙💫\n").color(0xFFD700)
            ]);     
        } else {
            // Optionally, notify the player that they have already received the reward
            event.player.tell([
                Text.of("💬 You've already received your ").color(0xFFFFFF),
                Text.of("Closed Beta Coin ").bold().color(0xFFD700),
                Text.of("for being a valued closed beta tester for this world. \n").color(0xFFFFFF),
                Text.of("Thank you once again for your support!").color(0xFFFFFF),
                Text.of("\n- Lead Developer, ").color(0xFFFFFF),
                Text.of("M0nkeyPr0grammer").bold().color(0xFF0000)
            ]);
        }
    }
});