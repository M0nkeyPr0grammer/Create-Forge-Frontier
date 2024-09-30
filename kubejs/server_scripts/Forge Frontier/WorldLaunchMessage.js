// Listen for the player join event
PlayerEvents.loggedIn((event) => {
  const player = event.player;
  const welcomeTag = 'receivedWelcomeMessage'; // Tag to track if the player has received the welcome message

  // Check if the player has already received the welcome message
  if (!player.persistentData[welcomeTag]) {
    // Send a welcome message in bold
    player.tell("§lWelcome to Create - Forge Frontier, Pioneer!\n");
    player.tell("Embark on an epic journey and explore diverse landscapes. May your adventures be thrilling and your Create factories be extraordinary!\n");
    player.tell("- Lead Developer, M0nkeyPr0grammer");

    // Mark that the player has received the welcome message
    player.persistentData[welcomeTag] = true;
  }
});
