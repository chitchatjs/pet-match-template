import { alexa as ax, Locale } from "@chitchatjs/alexa";
import { axkit } from "@chitchatjs/plugin-ax-kit";

import artifacts from "./blocks/artifacts";
import confirm from "./blocks/confirm";
import requestSizeTemperament from "./blocks/requestslots";
import welcome from "./blocks/welcome";

/**
 * A plugin building block
 * It will help us render experiences for builtin intents like
 * - Stop, Cancel, Fallback etc.
 */
let builtins = axkit.builtin.all("You can tell me dog size or temperament to get started.", [
  Locale.en_US,
]);

// welcome
let init = ax
  .start()
  .block(ax.compound().add(artifacts).add(welcome).add(ax.goto("PetMatcher")).build())
  .build();

// match a pet
let petMatcher = ax
  .state("PetMatcher")
  .block(ax.compound().add(requestSizeTemperament).add(confirm).add(builtins).build())
  .build();

let skill = ax.skill().addState(init).addState(petMatcher).build();

export = ax.dialogManager(skill).exports();
