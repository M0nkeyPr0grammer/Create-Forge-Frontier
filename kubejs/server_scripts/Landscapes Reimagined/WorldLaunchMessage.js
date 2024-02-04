// Listen for the player join event
PlayerEvents.loggedIn((event) => {
  const player = event.player;

  // Send a welcome message in bold
  player.tell('§lWelcome to Landscapes Reimagined Forge Frontier\n\n');

  // Inform the player about the resource packs
  player.tell('To improve your overall player experience, we recommend downloading two essential resource packs. Please ensure you have these installed for the best experience.\n\n');

  // Send the second message with clickable links
  player.tell('Download the resource packs from clicking the links below: \n');
  player.tell('- Create Pipez Resource Pack:\n https://legacy.curseforge.com/minecraft/texture-packs/create-pipez/download/4691998 \n');
  player.tell('- Create Style Construction Wands Resource Pack:\n https://legacy.curseforge.com/minecraft/texture-packs/create-style-construction-wands/download/4655257 \n');

});
