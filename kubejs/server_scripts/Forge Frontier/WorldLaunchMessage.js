// Listen for the player join event
PlayerEvents.loggedIn((event) => {
  const player = event.player;
  const welcomeTag = 'receivedWelcomeMessage'; // Tag to track if the player has received the welcome message

  // Check if the player has already received the welcome message
  if (!player.persistentData[welcomeTag]) {
      // Send a welcome message with enhanced formatting
      player.tell([
          Text.of("🌄 Welcome to ").bold().color(0x00FF00), 
          Text.of("Create - Forge Frontier, Pioneer!").bold().color(0xFFD700),
          Text.of("\nEmbark on an epic journey and explore the wonders of diverse landscapes.").color(0xFFFFFF),
          Text.of("\nMay your adventures be thrilling, and may your ").color(0xFFFFFF),
          Text.of("Create factories ").bold().color(0x00BFFF),
          Text.of("be extraordinary!").color(0xFFFFFF),
          Text.of("\n- Lead Developer, ").color(0xFFFFFF),
          Text.of("M0nkeyPr0grammer\n").bold().color(0xFF0000)
      ]);

      // Mark that the player has received the welcome message
      player.persistentData[welcomeTag] = true;
  }
});
