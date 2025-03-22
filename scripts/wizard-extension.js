// wizard-extension.js
Hooks.once("ready", async () => {
  const occupationsCompendium = game.packs.get("korean-coc7-wizard-module.korean-occupations");
  if (!occupationsCompendium) return;

  const occupations = await occupationsCompendium.getDocuments();
  for (const occ of occupations) {
    if (!game.coc7?.wizards?.occupations) continue;
    const exists = game.coc7.wizards.occupations.find(o => o.name === occ.name);
    if (!exists) {
      game.coc7.wizards.occupations.push({
        name: occ.name,
        id: occ._id,
        pack: occupationsCompendium.metadata.id
      });
    }
  }
});
