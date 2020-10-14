import { alexa as ax, AlexaDialogContext, AlexaEvent } from "@chitchatjs/alexa";
import { IntentRequest } from "ask-sdk-model";

export default ax.setStateVar((ctx: AlexaDialogContext, event: AlexaEvent) => {
  let intent = (<IntentRequest>event.currentRequest.request).intent;
  if (intent.slots) {
    let size = intent.slots["size"];
    let temperament = intent.slots["temperament"];
    let ret: any = {};
    if (temperament.value) ret["temperament"] = temperament.value;
    if (size.value) ret["size"] = size.value;
    return ret;
  }
  return {};
});
