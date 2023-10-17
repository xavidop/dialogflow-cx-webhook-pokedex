/* eslint-disable max-len */
import {http, Request, Response} from "@google-cloud/functions-framework";
import {protos as dftypes} from "@google-cloud/dialogflow-cx";
// import * as protos from "@google-cloud/dialogflow-cx/build/protos/protos";

import {struct} from "pb-util";


import {MainClient} from "pokenode-ts";

http("HandleWebhookRequest", async (req: Request, res: Response) => {
  type WebhookRequest = dftypes.google.cloud.dialogflow.cx.v3beta1.WebhookRequest;
  type WebhookResponse = dftypes.google.cloud.dialogflow.cx.v3beta1.WebhookResponse;

  const body = <WebhookRequest>req.body;
  console.log(body);

  let information = "";
  let pokemon = "";
  let language = "";

  switch (body.fulfillmentInfo?.tag) {
  case "fetch_information":
    pokemon = <string>body.sessionInfo?.parameters?.pokemon;
    language = body.languageCode;
    information = await getPokemonInformation(pokemon, language)+ " Deseas saber algo mas?";
    break;

  default:
    break;
  }


  const response: WebhookResponse = new dftypes.google.cloud.dialogflow.cx.v3beta1.WebhookResponse();

  response.fulfillmentResponse = {
    messages: [{
      text: {
        text: [
          information,
        ],
      },
      payload: struct.encode({
        richContent: [
          [
            {
              type: "image",
              rawUrl: "https://example.com/images/logo.png",
              accessibilityText: "Example logo",
            },
          ],
        ],
      }),
    }],
  };

  console.log(response);

  res.status(200).send(response.toJSON());
});


/**
 * Returns information about a given Pokemon in the specified language.
 * @param {string} pokemon - The name of the Pokemon to get information for.
 * @param {string} language - The language to return the information in.
 * @return {string} - The information about the Pokemon in the specified language.
 */
async function getPokemonInformation(pokemon:string, language:string): Promise<string> {
  const api = new MainClient();

  const pokemonInfo = await api.pokemon
    .getPokemonSpeciesByName(pokemon);

  const languageFiltered = pokemonInfo.flavor_text_entries.filter((info) => {
    return info.language.name === language;
  });

  return languageFiltered[0].flavor_text;
}
