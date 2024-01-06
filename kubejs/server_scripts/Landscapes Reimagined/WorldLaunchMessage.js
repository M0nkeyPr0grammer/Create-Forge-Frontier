
// Listen for the player join event
PlayerEvents.loggedIn((event) => {
  const player = event.player;

  // Send a welcome message in bold
  player.tell('§lWelcome to Landscapes Reimagined Forge Frontier');

  // Send the second message with clickable links
  player.tell('To improve your overall player experience, download these two resource packs, hint click the links: \n');
  player.tell('- Create Pipez Resource Pack: https://legacy.curseforge.com/minecraft/texture-packs/create-pipez/download/4691998 \n');
  player.tell('- Create Style Construction Wands Resource Pack: https://legacy.curseforge.com/minecraft/texture-packs/create-style-construction-wands/download/4655257 \n');
});
