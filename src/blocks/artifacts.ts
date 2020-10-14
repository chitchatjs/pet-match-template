import { alexa as ax } from "@chitchatjs/alexa";

/**
 * Block that defines some of the artifacts used by this skill.
 */
export default ax
  .compound()
  .add(ax.info().name("Chitchat Pet Match").invocationName("chitchat pet match").build())
  .add(ax.slotType("Size").values(["small", "medium", "large"]).build())
  .add(ax.slotType("Temperament").values(["energetic", "calm", "friendly", "family", "active"]).build())
  // temporary. this dependency will be removed in later releases.
  .add(ax.intent("AMAZON.YesIntent", ["yes"]).build())
  .add(ax.intent("AMAZON.NoIntent", ["no"]).build())
  .build();
