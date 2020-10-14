import { alexa as ax, AlexaDialogContext, AlexaEvent, Intent, Locale } from "@chitchatjs/alexa";
import builtins from "./blocks/builtins";
import artifacts from "./blocks/artifacts";
import welcome from "./blocks/welcome";
import requestSizeTemperament from "./blocks/requestslots";
import confirm from "./blocks/confirm";

// welcome
let init = ax
  .start()
  .block(ax.compound().add(artifacts).add(welcome).add(builtins).add(ax.goto("PetMatcher")).build())
  .build();

// match a pet
let petMatcher = ax
  .state("PetMatcher")
  .block(ax.compound().add(requestSizeTemperament).add(confirm).add(builtins).add(ax.end()).build())
  .build();

let skill = ax.skill().addState(init).addState(petMatcher).build();

export = ax.dialogManager(skill).exports();
