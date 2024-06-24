// Listen for the player join event
PlayerEvents.loggedIn((event) => {
  const player = event.player;

  // Send a welcome message in bold
  player.tell("Welcome to Create: Forge Frontier, Pioneer!\n");
  player.tell("Embark on an epic journey and explore diverse landscapes. May your adventures be thrilling and your Create factories be extraordinary!\n");
  player.tell("- Lead Developer, M0nkeyPr0grammer")


});
