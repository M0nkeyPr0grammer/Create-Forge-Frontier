// List of usernames that should receive the custom item
const rewardUsernames = [
    "M0nkeyPr0grammer"
];

// Custom item to give to the players
const customItem = 'minecraft:nether_star'; // Replace with your custom item

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
            player.tell('You have been rewarded with a special item for being a closed beta tester. Thank you for your support and testing!\n');     
        } else {
            // Optionally, notify the player that they have already received the reward
            player.tell('You have already received your special item for being a closed beta tester for this world, thanks again for your support!\n');   
            player.tell("- Lead Developer, M0nkeyPr0grammer\n");
        }
    }
});