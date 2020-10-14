import { alexa as ax } from "@chitchatjs/alexa";

export default ax
  .compound()
  .add(
    ax
      .ask(
        "Welcome to pet match. I can help you find the best dog for you. " +
          "What size and temperament are you looking for in a dog?"
      )
      .reprompt("You can say something like i want small and family dog.")
      .build()
  )
  .build();
