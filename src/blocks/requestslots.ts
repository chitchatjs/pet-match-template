import { alexa as ax, AlexaDialogContext, AlexaEvent } from "@chitchatjs/alexa";
import { IntentRequest } from "ask-sdk-model";
import saveSlotsToGlobalState from "./state";

/**
 * Ensures both size and temperament slots are present
 * by asking questions to the user.
 */
let ensureBothSlotsPresent = ax
  .compound()
  .add(saveSlotsToGlobalState)
  .add(
    ax
      .when()
      .true((c: AlexaDialogContext, e: AlexaEvent) => {
        return (
          c.platformState.globalState["size"] !== undefined && c.platformState.globalState["temperament"] !== undefined
        );
      })
      .then(ax.ask("ok, {size} {temperament} dog. Right?").build())
      .otherwise(
        ax
          .when()
          .true((c: AlexaDialogContext, e: AlexaEvent) => {
            return c.platformState.globalState["size"] === undefined;
          })
          .then(ax.ask("ok, {temperament} dog, how about size?").build())
          .otherwise(ax.ask("ok, {size} dog, how about temperament?").build())
          .build()
      )
      .build()
  )
  .build();

// export the block
export default ax
  .whenUserSays([
    "i want {size} {temperament} dog",
    "i want {size} and {temperament} dog",
    "{size} {temperament} dog",
    "{size} and {temperament} dog",
    "i want {size} dog",
    "i wamt {temperament} dog",
    "{temperament} dog",
    "{size} dog",
  ])
  .withSlotType("size", "Size")
  .withSlotType("temperament", "Temperament")
  .then(ensureBothSlotsPresent)
  .build();
