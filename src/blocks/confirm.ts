import { alexa as ax } from "@chitchatjs/alexa";

/**
 * This block is used to confirm a dog match suggestion.
 */
export default ax
  .compound()
  .add(
    ax
      .whenIntentName("AMAZON.YesIntent")
      .then(ax.say("Great, I have foo dog for you based on {size} size and {temperament} temperament."))
      .build()
  )
  .add(
    ax
      .whenIntentName("AMAZON.NoIntent")
      .then(ax.say("No worries, come back later to find the best match dog for you. Good bye!"))
      .build()
  )
  .build();
