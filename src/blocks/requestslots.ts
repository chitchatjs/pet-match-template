import { alexa as ax } from "@chitchatjs/alexa";

/**
 * Ensures both size and temperament slots are present
 * by asking questions to the user.
 */
let ensureBothSlotsPresent = ax
  .compound()
  .add(
    ax
      .whenMissingSlot("size")
      .then(ax.ask("which size do you prefer?").build())
      .otherwise(
        ax
          .whenMissingSlot("temperament")
          .then(ax.ask("okay, {size} dog and what about temperament?").build())
          .otherwise(ax.ask("you want a {size} dog with {temperament} temperament, right?").build())
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
