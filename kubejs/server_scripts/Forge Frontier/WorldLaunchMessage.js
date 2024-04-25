// Listen for the player join event
PlayerEvents.loggedIn((event) => {
  const player = event.player;

  // Send a welcome message in bold
  player.tell('Welcome to Forge Frontier, a Create modpack created by M0nkeyPr0gammer!\n\n');
  player.tell("Hope you enjoy the modpack, and may you have fun adventuring across the many landscapes!")

});
