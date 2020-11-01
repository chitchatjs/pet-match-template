import { alexa as ax, Locale } from "@chitchatjs/alexa";
import { common } from "@chitchatjs/plugin-ax-common";

import artifacts from "./blocks/artifacts";
import confirm from "./blocks/confirm";
import requestSizeTemperament from "./blocks/requestslots";
import welcome from "./blocks/welcome";

/**
 * A plugin building block
 * It will help us render experiences for builtin intents like
 * - Stop, Cancel, Fallback etc.
 */
let builtins = common.defaultHandlers({
  help: ax.ask("You can tell me dog size or temperament to get started.").build(),
});

// welcome
let init = ax
  .start()
  .block(
    ax
      .compound()
      .add(artifacts)
      .add(welcome)
      .add(builtins)
      .add(ax.goto("PetMatcher"))
      .build()
  )
  .build();

// match a pet
let petMatcher = ax
  .state("PetMatcher")
  .block(ax.compound().add(requestSizeTemperament).add(confirm).add(builtins).build())
  .build();

let skill = ax.skill().addState(init).addState(petMatcher).build();

export = ax.dialogManager(skill).exports();
