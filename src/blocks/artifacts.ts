import { alexa as ax } from "@chitchatjs/alexa";

/**
 * Block that defines some of the artifacts used by this skill.
 */
export default ax
  .compound()
  .add(ax.info().name("Chitchat Pet Match").invocationName("chitchat pet match").build())
  .add(ax.slotType("Size").values(["small", "medium", "large"]).build())
  .add(
    ax
      .slotType("Temperament")
      .values(["energetic", "calm", "friendly", "family", "active"])
      .build()
  )
  .add(ax.intent("AMAZON.YesIntent").build())
  .add(ax.intent("AMAZON.NoIntent").build())
  .build();
