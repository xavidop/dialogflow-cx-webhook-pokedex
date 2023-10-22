/* eslint-disable max-len */
import {http, Request, Response} from "@google-cloud/functions-framework";
import {protos as dftypes} from "@google-cloud/dialogflow-cx";

import {MainClient} from "pokenode-ts";
import {RichContent, RichContentElement} from "dialogflow-cx-messenger-ts";

http("HandleWebhookRequest", async (req: Request, res: Response) => {
  const body = <dftypes.google.cloud.dialogflow.cx.v3beta1.IWebhookRequest>req.body;
  console.log(body);

  let information = "";
  let pokemon = "";
  let language = "";
  let sprite = "";

  switch (body.fulfillmentInfo?.tag) {
  case "fetch_information":
    pokemon = <string>body.sessionInfo?.parameters?.pokemon;
    language = body.languageCode || "es";
    information = await getPokemonInformation(pokemon, language)+ " Deseas saber algo mas?";
    sprite = await getPokemonSprite(pokemon) || "";
    break;

  default:
    break;
  }

  const response: dftypes.google.cloud.dialogflow.cx.v3beta1.IWebhookResponse = {};

  const content = new RichContent();
  const richContentElement = new RichContentElement();
  richContentElement.type = "image";
  richContentElement.rawUrl = sprite;
  richContentElement.accessibilityText = "Example logo";
  content.richContent = [[richContentElement]];

  response.fulfillmentResponse = {
    messages: [{
      text: {
        text: [
          information,
        ],
      },
    },
    {
      payload: content,
    }],
  };

  console.log(response);

  res.status(200).send(response);
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

/**
 * Returns information about a given Pokemon in the specified language.
 * @param {string} pokemon - The name of the Pokemon to get information for.
 * @return {string} - The URL of the Pokemon Sprite.
 */
async function getPokemonSprite(pokemon:string): Promise<string|null> {
  const api = new MainClient();

  const p = await api.pokemon
    .getPokemonByName(pokemon);

  return p.sprites.front_default;
}
