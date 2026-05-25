export interface AttackCard { n: string; m: number | string; d: string; e: string }
export interface DefenseCard { n: string; m: number | string; e: string }
export interface StatCard { n: string; m: number | string; e: string }
export interface ManaCard { n: string; m: number | string; e: string }
export interface Character { name: string; cost: number; effect: string; trigger: string; dur: number | string; unlock: string; tier: string }
export interface Relic { name: string; effect: string; location: string; tier: string; note: string }
export interface Dungeon { name: string; diff: number; chain: string; unlock: string; reward: string; boss: string; note: string }
export interface FAQ { q: string; a: string }
export interface UnlockSection { title: string; icon: string; items: { item: string; cond: string }[] }

export const attackCards: AttackCard[] = [
  {n:'Whip',m:0,d:'8',e:'Hits multiple enemies. Great combo starter.'},
  {n:'Bone',m:0,d:'3–15',e:'Random damage spread across enemies.'},
  {n:'Knife',m:0,d:'40',e:'Guaranteed critical hit on full-HP enemies.'},
  {n:'Magic Wand',m:0,d:'30',e:'Auto-targets the enemy that attacked last.'},
  {n:'Cherry Bomb',m:1,d:'18',e:'15% chance to explode, dealing AoE damage.'},
  {n:'Fire Wand',m:1,d:'45',e:'Standard single-target damage.'},
  {n:'Garlic',m:1,d:'10',e:'Hits front row. Inflicts Disarm (enemy skips attack).'},
  {n:'Gatti Amari',m:1,d:'25–40',e:'10% chance to Scuffle — enemies attack each other.'},
  {n:'Gorgeous Moon',m:1,d:'Erase',e:'Erases 1 non-boss enemy. Triggers Moonrise buff.'},
  {n:'King Bible',m:1,d:'40',e:'40% chance to Knockback.'},
  {n:'Runetracer',m:1,d:'15–79',e:'Bounces between enemies. +10 dmg per bounce (max 7).'},
  {n:'Axe',m:2,d:'45',e:'Hits multiple enemies. Knockback on kill.'},
  {n:'Bloody Tear',m:2,d:'40',e:'Multi-target. On Crit: Heal 3 HP.'},
  {n:'Carrello',m:2,d:'45',e:'Multi-target. Guaranteed Knockback.'},
  {n:'Celestial Dusting',m:2,d:'35',e:'Triggers Little Heart — spawns healing pickups.'},
  {n:'Cross',m:2,d:'80',e:'High single-target damage. No extra effects.'},
  {n:'Eight The Sparrow',m:2,d:'35',e:'Fast animation. Good for speedrunning.'},
  {n:'Holy Wand',m:2,d:'150',e:'Auto-targets attackers. Highest dmg at 2-cost.'},
  {n:'Lightning Ring',m:2,d:'125',e:'Consistent high damage. Reliable finisher.'},
  {n:'Unholy Vespers',m:2,d:'120',e:'Chance to Knockback. Wide hitbox.'},
  {n:'Vicious Hunger',m:2,d:'50–100',e:'May turn enemies into gold coins on kill.'},
  {n:'Valkyrie Turner',m:2,d:'25',e:'Front row. Triggers Valkyrie\'s Inferno burn effect.'},
  {n:'Death Spiral',m:3,d:'160',e:'Front row. Guaranteed Crit.'},
  {n:'Heaven Sword',m:3,d:'100',e:'Guaranteed Crit. Pairs well with combo multiplier.'},
  {n:'Hellfire',m:3,d:'225',e:'Chance to Knockback. Highest raw dmg at 3-cost.'},
  {n:'NO FUTURE',m:3,d:'15',e:'Bounces and explodes on final hit. Chain reaction.'},
  {n:'Peachone',m:3,d:'100',e:'Bombards — attacks again after every subsequent card.'},
  {n:'Phiera Der Tuphello',m:3,d:'70',e:'Standard 3-cost attacker.'},
  {n:'Santa Water',m:3,d:'60',e:'Burns enemies for 15 dmg/turn after attack.'},
  {n:'Shadow Pinion',m:3,d:'90',e:'Retrigger — plays again if next card costs 2+.'},
  {n:'Soul Eater',m:3,d:'100',e:'Front row. Heal 3 + Disarm. Sustain + control.'},
  {n:'Thousand Edge',m:3,d:'180',e:'Pure damage. No extra effects.'},
  {n:'Ebony Wings',m:4,d:'140',e:'Bombards after every turn. Consistent DPS.'},
  {n:'La Borra',m:4,d:'150',e:'Burns after every turn. Stack with Santa Water.'},
  {n:'Phieraggi',m:4,d:'350',e:'Massive single-target damage.'},
  {n:'Thunder Loop',m:4,d:'150',e:'Attacks again at end of turn. Double value.'},
  {n:'Mannajja',m:5,d:'79',e:'Multi-target. Raw Mana — refunds 2 mana on kill.'},
  {n:'Pentagram',m:5,d:'Erase',e:'Erases 8 rows of enemies. Countdown: 3 turns.'},
  {n:'Vandalier',m:5,d:'500',e:'Chance Knockback. Big Bird — hits entire screen.'},
  {n:'Bracelet',m:'W',d:'100',e:'Wild card. Fits any deck. Reliable filler damage.'},
];

export const defenseCards: DefenseCard[] = [
  {n:'Armor',m:0,e:'Add 2 Armor. Free defense — always keep one.'},
  {n:'Golden Armor',m:1,e:'Add 4 Armor. Solid mid-cost shield.'},
  {n:'Pummarola',m:1,e:'Recovery: Heal 2 HP after encounter ends.'},
  {n:'Rainbow Armor',m:2,e:'Add 6 Armor. Strong shield for boss fights.'},
  {n:'Pummadora',m:2,e:'Recovery: Heal 4 HP after encounter ends.'},
  {n:'Clock Lancet',m:3,e:'Apply 1 Freeze — enemy skips next turn.'},
  {n:"Hero's Armor",m:3,e:'Add 8 Armor. Maximum single-card protection.'},
  {n:'Parm Aegis',m:'W',e:'Add 1 Armor. Wild card. Small but fits any deck.'},
];

export const statCards: StatCard[] = [
  {n:'Bracer',m:0,e:'Hand: Increase hand size by 1 this battle.'},
  {n:'Candle',m:0,e:'Area: Attacks deal 5% splash damage.'},
  {n:"Skull O'Maniac",m:0,e:'Enemies +10% strength. You gain bonus XP. High risk/reward.'},
  {n:'Spellbinder',m:0,e:'Duration: Crawlers trigger 2 more abilities this turn.'},
  {n:'Attractorb',m:1,e:'Draw 1 card immediately.'},
  {n:'Candella',m:1,e:'Area: Attacks deal 10% splash damage.'},
  {n:'Crown',m:1,e:'Gain 15% XP Growth. (Destroy — one use per battle).'},
  {n:'Hollow Heart',m:1,e:'Gain 3 Max Health. (Destroy — one use per battle).'},
  {n:'Spinach',m:1,e:'Might: Deal 10% more damage this battle.'},
  {n:'Stone Mask',m:1,e:'Greed: Gain 10% more coins. (Destroy).'},
  {n:'Candelabrador',m:2,e:'Area: Attacks deal 15% splash damage.'},
  {n:'Clover',m:2,e:'Add 10% Luck (affects crit chance + drop quality).'},
  {n:'Crystal Crown',m:2,e:'Gain 20% XP Growth. (Destroy).'},
  {n:'Duplicator',m:2,e:'Amount: Fire 1 more projectile this battle.'},
  {n:'Du-Duplicator',m:2,e:'Amount: Fire 2 more projectiles. Rare card.'},
  {n:'Forever Heart',m:2,e:'Gain 1 Max Health. Not Destroy-type — reusable.'},
  {n:"Sprig o' Spinach",m:2,e:'Might: Deal 20% more damage this battle.'},
  {n:'Tirajisu',m:2,e:'Revival: Gain 10% Revival chance. (Destroy).'},
];

export const manaCards: ManaCard[] = [
  {n:'Empty Tome',m:0,e:'Add 1 Mana. Essential. Free mana every cycle.'},
  {n:'Light Tome',m:1,e:'Add 2 Mana. Net +1. Reliable mana engine.'},
  {n:'Weighty Tome',m:2,e:'Add 3 Mana. Net +1. For mid-to-late encounters.'},
  {n:'Ancient Tome',m:3,e:'Add 4 Mana. Net +1. For expensive finishers.'},
  {n:'Song of Mana',m:4,e:'Deal 10 dmg (multi) + Raw Mana (refunds 2).'},
  {n:'Wings',m:'W',e:'Reduce mana cost of next card by 1. Wild card.'},
];

export const characters: Character[] = [
  { name: 'Antonio', cost: 0, effect: 'Add 3 Armor to all Crawlers', trigger: '+10% damage when <span class="c-red">red</span> card played', dur: 5, unlock: 'Default', tier: 'Starter' },
  { name: 'Arca', cost: 0, effect: 'Add 3 Mana', trigger: '+1 Mana when <span class="c-purple">purple</span> card played', dur: 5, unlock: 'Default', tier: 'Starter' },
  { name: 'Cavallo', cost: 0, effect: 'Fire 2 more projectiles (2s)', trigger: '+1 Amount when <span class="c-yellow">yellow</span> card played', dur: 2, unlock: 'Default', tier: 'Starter' },
  { name: 'Christine', cost: 0, effect: 'Reduce Mana cost by 1 (9s)', trigger: 'Disarm 1 enemy when <span class="c-purple">purple</span> card played', dur: 3, unlock: 'Default', tier: 'Starter' },
  { name: 'Clerici', cost: 0, effect: 'Heal 3 HP', trigger: 'Heal 1 after encounter when <span class="c-blue">blue</span> card played', dur: 6, unlock: 'Default', tier: 'Starter' },
  { name: 'Imelda', cost: 0, effect: 'Add 18 XP', trigger: '+1% XP Growth when <span class="c-yellow">yellow</span> card played', dur: 5, unlock: 'Default', tier: 'Starter' },
  { name: 'MissingN0', cost: 0, effect: 'Add 4 Armor', trigger: '<strong>Draw 2 cards</strong> when <span class="c-red">red</span> card played', dur: 170, unlock: 'Hidden', tier: 'Secret' },
  { name: 'Mortaccio', cost: 0, effect: 'Fire 2 more projectiles', trigger: 'Fire 1 more projectile when <span class="c-blue">blue</span> card played', dur: 7, unlock: 'Default', tier: 'Starter' },
  { name: 'Porta', cost: 0, effect: 'Projectiles hit 50% more targets (11s)', trigger: '+1 Mana when <span class="c-red">red</span> card played', dur: '∞', unlock: 'Default', tier: 'Starter' },
  { name: 'Concetta', cost: 1, effect: 'Attacks deal 10% splash damage', trigger: '+5% splash when <span class="c-red">red</span> card played', dur: 10, unlock: 'Gallo Tower', tier: 'Mid' },
  { name: 'Dommario', cost: 1, effect: 'Crawlers trigger 2 more abilities', trigger: 'Deal 40 dmg + Knockback when <span class="c-purple">purple</span> card played', dur: 7, unlock: 'Level 20 Milestone', tier: 'Mid' },
  { name: 'Gallo', cost: 1, effect: 'Gain 25% more coins', trigger: '+10% coins when <span class="c-gold">Wild</span> card played', dur: 8, unlock: 'Gallo Tower', tier: 'Mid' },
  { name: 'Gennaro', cost: 1, effect: 'Fire 2 more projectiles', trigger: 'Deal 90 damage when <span class="c-red">red</span> card played', dur: 5, unlock: 'Inlaid Library (Level 20)', tier: 'Mid' },
  { name: 'Giovanna', cost: 1, effect: 'Add 20% Luck', trigger: 'Draw 1 card when <span class="c-purple">purple</span> card played', dur: 6, unlock: 'Library Sanctum', tier: 'Mid' },
  { name: 'Krochi', cost: 1, effect: 'Gain 10% Revival', trigger: '+5% Revival when <span class="c-gold">Wild</span> card played', dur: 10, unlock: 'Dairy Plant', tier: 'Mid' },
  { name: 'Lama', cost: 1, effect: 'Deal 50% more damage', trigger: '+15% damage when <span class="c-blue">blue</span> card played', dur: 5, unlock: 'Capella Magna', tier: 'Late' },
  { name: "O'Sole", cost: 1, effect: 'Fire 3 more projectiles', trigger: '+5% Luck when <span class="c-red">red</span> card played', dur: 4, unlock: 'Curd Refinery', tier: 'Late' },
  { name: 'Pasqualina', cost: 1, effect: 'Attacks deal 10% splash damage', trigger: 'Increase Hand by 1 when <span class="c-purple">purple</span> card played', dur: 2, unlock: 'Dairy Plant', tier: 'Mid' },
  { name: 'Poe', cost: 1, effect: 'Attacks deal 20% splash damage', trigger: 'Draw 1 card when <span class="c-blue">blue</span> card played', dur: 3, unlock: 'Mad Forest (Level 30)', tier: 'Mid' },
  { name: 'Poppea', cost: 1, effect: 'Increase Hand by 1', trigger: 'Crawlers trigger 1 more ability when <span class="c-yellow">yellow</span> card played', dur: 9, unlock: 'Milk Factory', tier: 'Mid' },
  { name: 'Pugnala', cost: 1, effect: 'Deal 20% more damage', trigger: 'Draw 1 card when <span class="c-yellow">yellow</span> card played', dur: 3, unlock: 'Berserk Wood', tier: 'Mid' },
  { name: 'Ramba', cost: 1, effect: 'Fire 3 more projectiles', trigger: '+1 Amount when <span class="c-purple">purple</span> card played', dur: '∞', unlock: 'Cappella Ultima', tier: 'Endgame' },
];

export const tierColors: Record<string, string> = { Starter: '#22c55e', Mid: '#a855f7', Late: '#f0a500', Endgame: '#e94560', Secret: '#e94560' };

export const relics: Relic[] = [
  { name: 'Combo Stack', effect: 'Play cards in ascending mana cost order for a growing damage multiplier. <strong>Core mechanic.</strong>', location: 'Tutorial', tier: 'Essential', note: 'Received automatically. Never disable this.' },
  { name: 'Milky Way Map', effect: 'Shows enemy positions and types on the dungeon mini-map before each encounter.', location: 'Default', tier: 'Utility', note: 'Unlocks after completing any 2 dungeons.' },
  { name: 'Rilevatore', effect: 'See weapon effect previews when hovering over enemies — damage, status, and hit chances.', location: 'Default', tier: 'Utility', note: 'Unlocks after completing any 2 dungeons.' },
  { name: 'Gem Hammer', effect: 'Unlock the <strong>Blacksmith</strong> in the Village. Socket gems into cards for permanent stat bonuses.', location: 'Mad Forest', tier: 'Essential', note: 'Found in a breakable crate near the end of Mad Forest.' },
  { name: 'Guiding Light', effect: 'Highlight destructible objects (barrels, crates, torches) on the mini-map. Makes relic hunting much easier.', location: 'Inlaid Library', tier: 'High', note: 'Get this early — helps find all other relics.' },
  { name: 'Grim Grimoire', effect: 'Pause menu shows all discovered card evolutions & combos. Tracks your collection.', location: 'Library West Wing', tier: 'High', note: 'Invaluable for planning evolutions.' },
  { name: 'Polentir', effect: 'Unlock the <strong>Fortune Teller</strong> tent in the Village. Grants access to the Arcana system (run-wide passive bonuses).', location: 'Furious Forest', tier: 'Essential', note: 'Arcanas dramatically change how runs play out.' },
  { name: 'Arcana Finder', effect: 'Random Arcana chests spawn in dungeon floors. More Arcanas = more options before each run.', location: 'Library Sanctum', tier: 'High', note: 'Pairs with Polentir. More Arcana drops = more builds.' },
  { name: 'Stardust Anvil', effect: "Unlock the <strong>Blacksmith's gem slotting</strong> — add up to 3 gem slots per card.", location: 'Teeny Bridge', tier: 'Essential', note: 'Two relics in Teeny Bridge. High priority.' },
  { name: 'Overkill', effect: 'After beating a boss, keep attacking during the "overkill window" for bonus gold. Cap: <strong>500 gold</strong>.', location: 'Teeny Bridge', tier: 'Essential', note: 'Two relics in Teeny Bridge. Pairs with Ultimate Ultra Overkill.' },
  { name: 'Bomba Infernale', effect: "One-click clear all enemies on Floor 1 of any dungeon you've previously completed. Saves time farming.", location: 'Dairy Plant', tier: 'Utility', note: 'Great for speedrunning or farming specific floors.' },
  { name: 'Ultimate Ultra Overkill', effect: 'Increase Overkill gold cap from 500 to <strong>5,000</strong>. 10x more gold from overkill!', location: 'Curd Refinery', tier: 'High', note: 'Must have Overkill first. Transforms gold economy.' },
  { name: 'Lapidary Loupe', effect: 'Unlock the <strong>Jeweler</strong> counter — adjust gem drop rates or ban specific gem types.', location: 'Gallo Tower', tier: 'High', note: 'Lets you target-farm specific gem colors for your build.' },
  { name: "Sorceress' Tears", effect: 'Adds a <strong>"Speed Up"</strong> button to the world map. 2x animation speed for faster dungeon traversal.', location: 'Gallo Tower', tier: 'Utility', note: 'Quality of life. Makes replays much faster.' },
  { name: 'Ovenkilt', effect: 'Overkill triggers on the <strong>last enemy of every encounter</strong>, but chests no longer give gold. Trade-off relic.', location: 'Cappella Ultima', tier: 'Endgame', note: 'Final relic. Pairs with Overkill + Ultimate Ultra Overkill. Can toggle off if you need chest gold.' },
];

export const relicTierColors: Record<string, string> = { Essential: '#e94560', High: '#f0a500', Utility: '#3b82f6', Endgame: '#a855f7' };

export const dungeons: Dungeon[] = [
  { name: 'Mad Forest', diff: 1, chain: 'Forest', unlock: 'Starting dungeon', reward: 'Gem Hammer relic', boss: 'Giant Bat', note: '' },
  { name: 'Inlaid Library', diff: 2, chain: 'Library', unlock: 'Reach Level 10 in Mad Forest', reward: 'Guiding Light relic', boss: 'Necronomicon', note: 'Die after Level 10 — unlock still counts' },
  { name: 'Furious Forest', diff: 2, chain: 'Forest', unlock: 'Complete Mad Forest', reward: 'Polentir relic (Arcana system)', boss: 'Giant Bat (Enraged)', note: '' },
  { name: 'Library West Wing', diff: 3, chain: 'Library', unlock: 'Complete Inlaid Library', reward: 'Grim Grimoire relic', boss: 'Flying Tome', note: '' },
  { name: 'Teeny Bridge', diff: 3, chain: 'Bridge', unlock: 'Reach Level 15 in Inlaid Library', reward: 'Stardust Anvil + Overkill relics', boss: 'Troll', note: 'Two relics in one dungeon. High priority.' },
  { name: 'Berserk Wood', diff: 3, chain: 'Forest', unlock: 'Complete Furious Forest', reward: 'Pugnala character', boss: 'Ent', note: '' },
  { name: 'Library Sanctum', diff: 4, chain: 'Library', unlock: 'Complete Library West Wing', reward: 'Arcana Finder relic + Giovanna', boss: 'Archmage Tome', note: '' },
  { name: 'Dairy Plant', diff: 4, chain: 'Industrial', unlock: 'Complete Teeny Bridge', reward: 'Bomba Infernale relic', boss: 'Giant Slime', note: '' },
  { name: 'Milk Factory', diff: 4, chain: 'Industrial', unlock: 'Complete Dairy Plant', reward: 'Poppea character', boss: 'Factory Foreman', note: '' },
  { name: 'Weeny Bridge', diff: 5, chain: 'Bridge', unlock: 'Reach Level 15 in Dairy Plant', reward: '—', boss: 'Troll Champion', note: 'No relic, but required for Gallo Tower' },
  { name: 'Curd Refinery', diff: 6, chain: 'Industrial', unlock: 'Complete Milk Factory', reward: 'Ultimate Ultra Overkill relic', boss: 'Cheese Golem', note: 'Common bottleneck. Make sure Milk Factory is done.' },
  { name: 'Gallo Tower', diff: 6, chain: 'Tower', unlock: 'Complete Weeny Bridge', reward: "Concetta + Gallo, Sorceress' Tears + Lapidary Loupe", boss: 'Giant Enemy Crab', note: 'Major milestone. 2 characters + 2 relics.' },
  { name: 'Meany Bridge', diff: 7, chain: 'Bridge', unlock: 'Defeat Giant Enemy Crab in Gallo Tower', reward: '—', boss: 'Bridge Wyrm', note: 'Must kill the Crab in Gallo Tower first.' },
  { name: 'Capella Magna', diff: 8, chain: 'Final', unlock: 'Complete Meany Bridge', reward: '—', boss: 'Holy Guardian', note: '' },
  { name: 'Cappella Ultima', diff: 9, chain: 'Final', unlock: 'Complete Capella Magna', reward: 'Ovenkilt relic', boss: 'The Director', note: 'Final dungeon. Bring your best deck.' },
];

export const chainColors: Record<string, string> = { Forest: '#10b981', Library: '#8b5cf6', Bridge: '#f59e0b', Industrial: '#3b82f6', Tower: '#e94560', Final: '#f0a500' };

export const faqs: FAQ[] = [
  { q: 'What is Vampire Crawlers?', a: 'A turn-based deckbuilder roguelite from <strong>poncle</strong>, the creators of Vampire Survivors. Released April 21, 2026 on Steam, Xbox Series S|X, PlayStation 5, and Nintendo Switch. Unlike Vampire Survivors (real-time bullet heaven), Crawlers is a <strong>turn-based card game</strong> — you build decks and play cards one at a time.' },
  { q: 'How much does it cost?', a: '<strong>$14.99 USD</strong> on Steam. Regional pricing applies on console stores. DLC and expansions TBA.' },
  { q: 'Is it on mobile?', a: 'No. Currently available on <strong>Steam (PC/Mac/Linux)</strong>, Xbox Series S|X, PlayStation 5, and Nintendo Switch. No mobile version has been announced.' },
  { q: 'How many cards are in the game?', a: '<strong>80+ unique cards</strong> across 6 types: 37 Attack (Red), 7 Defense (Blue), 18 Stat Boost (Yellow), 6 Mana (Purple), 22 Character (Teal), and several Wild/Temporary cards. See the <a href="/guides/cards-list">Cards List</a> for the full catalog.' },
  { q: 'How do I unlock new dungeons?', a: 'Two ways: <strong>(1) Complete</strong> the previous dungeon in that chain, or <strong>(2) Reach a specific Level</strong> (10 or 15) in a related dungeon. You don\'t need to survive — hitting the level threshold permanently unlocks the next stage. See the <a href="/guides/dungeons-guide">Dungeons Guide</a> for all requirements.' },
  { q: 'What are relics?', a: 'Permanent upgrades hidden in breakable objects (barrels, crates, torches) in specific dungeons. Once collected, they stay active <strong>forever</strong> across all runs. You can toggle them on/off in the Museum. The <a href="/guides/relics-guide">Relics Guide</a> lists all 15.' },
  { q: 'What is Combo Stack and why is it important?', a: 'The most important relic in the game. Received automatically from the Tutorial. It gives you a <strong>damage multiplier</strong> for playing cards in ascending mana cost order. 0-cost → 1-cost → 2-cost → etc. Higher combos = exponentially more damage. <strong>Never disable this relic.</strong>' },
  { q: 'How do characters work?', a: 'You equip up to <strong>5 characters</strong> at the Gorton Bell Inn. The first (leader) adds their stats + 4 character cards to your deck. Additional characters add 1 card each. Each character has a unique <strong>trigger effect</strong> that activates when you play cards of a specific color. See the <a href="/guides/characters-guide">Characters Guide</a>.' },
  { q: "What's the best beginner strategy?", a: "<strong>1)</strong> Clear Mad Forest and find the Gem Hammer relic. <strong>2)</strong> Reach Level 10 in Mad Forest to unlock Inlaid Library. <strong>3)</strong> Buy 8 starter characters at the Inn (free/cheap). <strong>4)</strong> Reach Level 15 in Inlaid Library for Teeny Bridge (Stardust Anvil + Overkill). <strong>5)</strong> Branch into any chain with your core relic setup. See the <a href='/guides/beginners-guide'>Beginner's Guide</a> for a full walkthrough." },
  { q: 'What are gems and how do I use them?', a: 'Gems are permanent stat bonuses you socket into individual cards at the Blacksmith. Unlocked by the <strong>Gem Hammer</strong> relic (Mad Forest). The <strong>Stardust Anvil</strong> (Teeny Bridge) adds more gem slots per card. The <strong>Lapidary Loupe</strong> (Gallo Tower) lets you customize which gems drop.' },
  { q: 'What are Arcanas?', a: 'Run-wide passive bonuses selected before each dungeon run. Unlocked by the <strong>Polentir</strong> relic (Furious Forest), which opens the Fortune Teller tent. More Arcanas are found via the <strong>Arcana Finder</strong> relic (Library Sanctum). Each Arcana dramatically changes how your run plays.' },
  { q: 'What is Overkill?', a: 'After beating a boss, you can keep attacking during a short "overkill window" to earn bonus gold. Base cap: 500 gold (from Overkill relic in Teeny Bridge). Upgraded cap: 5,000 gold (from Ultimate Ultra Overkill in Curd Refinery). The final <strong>Ovenkilt</strong> relic makes Overkill trigger on every encounter\'s last enemy.' },
  { q: 'Does the game have multiplayer?', a: 'No. Vampire Crawlers is <strong>single-player only</strong>. No co-op or PvP modes.' },
  { q: 'Is there a post-game or NG+?', a: 'After completing Cappella Ultima, you can replay any dungeon with your full relic collection. The Museum lets you toggle relics for self-imposed challenges. Additional content updates are expected, following Vampire Survivors\' DLC model.' },
  { q: 'How do I get more gold/coins?', a: 'Best methods: <strong>1)</strong> Use Overkill + Ultimate Ultra Overkill for boss gold farming. <strong>2)</strong> Equip Gallo (25% more coins) as your leader. <strong>3)</strong> Play Stone Mask (+10% Greed) cards. <strong>4)</strong> Use Vicious Hunger to turn enemies into coins on kill.' },
  { q: 'What is Disco Mode?', a: 'A rare event at the Gorton Bell Inn. After you own 5+ characters, there\'s a <strong>10% chance</strong> per Inn visit that Disco Mode activates — granting a <strong>5% discount</strong> on all purchases that visit. Purely cosmetic but saves gold over time.' },
];

export const unlockSections: UnlockSection[] = [
  {
    title: 'Unlock Characters',
    icon: '👤',
    items: [
      { item: 'Antonio', cond: 'Default (starter)' }, { item: 'Arca', cond: 'Default (starter)' },
      { item: 'Cavallo', cond: 'Default (starter)' }, { item: 'Christine', cond: 'Default (starter)' },
      { item: 'Clerici', cond: 'Default (starter)' }, { item: 'Imelda', cond: 'Default (starter)' },
      { item: 'Mortaccio', cond: 'Default (starter)' }, { item: 'Porta', cond: 'Default (starter)' },
      { item: 'Concetta', cond: 'Complete Gallo Tower' }, { item: 'Gallo', cond: 'Complete Gallo Tower' },
      { item: 'Giovanna', cond: 'Complete Library Sanctum' }, { item: 'Poppea', cond: 'Complete Milk Factory' },
      { item: 'Pugnala', cond: 'Complete Berserk Wood' }, { item: 'MissingN0', cond: 'Hidden — secret condition (unknown trigger)' },
      { item: 'Gennaro', cond: 'Reach Level 20 in Inlaid Library' }, { item: 'Krochi', cond: 'Complete Dairy Plant' },
      { item: 'Pasqualina', cond: 'Complete Dairy Plant' }, { item: 'Dommario', cond: 'Reach Level 20 total (any dungeon)' },
      { item: 'Poe', cond: 'Reach Level 30 in Mad Forest' }, { item: "O'Sole", cond: 'Complete Curd Refinery' },
      { item: 'Lama', cond: 'Complete Capella Magna' }, { item: 'Ramba', cond: 'Complete Cappella Ultima' },
    ],
  },
  {
    title: 'Unlock Relics',
    icon: '💎',
    items: [
      { item: 'Combo Stack', cond: 'Tutorial — received automatically' },
      { item: 'Milky Way Map', cond: 'Complete any 2 dungeons' },
      { item: 'Rilevatore', cond: 'Complete any 2 dungeons' },
      { item: 'Gem Hammer', cond: 'Break crate in Mad Forest (near end)' },
      { item: 'Guiding Light', cond: 'Break object in Inlaid Library' },
      { item: 'Grim Grimoire', cond: 'Break object in Library West Wing' },
      { item: 'Polentir', cond: 'Break object in Furious Forest' },
      { item: 'Arcana Finder', cond: 'Break object in Library Sanctum' },
      { item: 'Stardust Anvil', cond: 'Break object in Teeny Bridge' },
      { item: 'Overkill', cond: 'Break object in Teeny Bridge (separate location)' },
      { item: 'Bomba Infernale', cond: 'Break object in Dairy Plant' },
      { item: 'Ultimate Ultra Overkill', cond: 'Break object in Curd Refinery' },
      { item: 'Lapidary Loupe', cond: 'Break object in Gallo Tower' },
      { item: "Sorceress' Tears", cond: 'Break object in Gallo Tower (separate location)' },
      { item: 'Ovenkilt', cond: 'Break object in Cappella Ultima' },
    ],
  },
  {
    title: 'Unlock Stages',
    icon: '🗺️',
    items: [
      { item: 'Mad Forest', cond: 'Starting dungeon — always available' },
      { item: 'Inlaid Library', cond: 'Reach Level 10 in Mad Forest (survive not required)' },
      { item: 'Furious Forest', cond: 'Complete Mad Forest (beat the boss)' },
      { item: 'Library West Wing', cond: 'Complete Inlaid Library' },
      { item: 'Teeny Bridge', cond: 'Reach Level 15 in Inlaid Library' },
      { item: 'Berserk Wood', cond: 'Complete Furious Forest' },
      { item: 'Library Sanctum', cond: 'Complete Library West Wing' },
      { item: 'Dairy Plant', cond: 'Complete Teeny Bridge' },
      { item: 'Milk Factory', cond: 'Complete Dairy Plant' },
      { item: 'Weeny Bridge', cond: 'Reach Level 15 in Dairy Plant' },
      { item: 'Curd Refinery', cond: 'Complete Milk Factory' },
      { item: 'Gallo Tower', cond: 'Complete Weeny Bridge' },
      { item: 'Meany Bridge', cond: 'Defeat the Giant Enemy Crab boss in Gallo Tower' },
      { item: 'Capella Magna', cond: 'Complete Meany Bridge' },
      { item: 'Cappella Ultima', cond: 'Complete Capella Magna — final dungeon' },
    ],
  },
];
