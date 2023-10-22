## Dialogflow CX Agents:
1. Intent Based: this Agent is going to be used to test the webhook. It is an agent that retrieves information about pokemons. The interaction is based on intents and entities and calling webhooks.
2. Generative AI: this Agent is going to be used to test the generateive AI capabilities, it calls LLMs (PALM 2 instead of a webhook). It is an agent that retrieves information about pokemons. The interaction is based on intents and entities and LLMs to fetch information. It uses Generative Fallback and Generators Capabilities.

The intent-based one has a webhook that is going to be used to test the webhook capabilities of Dialogflow CX. The webhook is going to be written in Typescript and deployed on Google Cloud Functions. It uses the Dialogflow Messenger to test the agent and adds visual elements to the conversation:
![image](/img/messenger.png)


## Deploying your Dialogflow CX Webhook

With the code ready to go, we need to deploy it on Google Cloud so it can be connected to the agent.

Before we continue, make sure that you have enabled the Cloud functions API enabled:

```bash
    gcloud services enable cloudfunctions.googleapis.com
```

Now we can deploy our webhook with gcloud CLI on the root folder:

```bash
    gcloud functions deploy my-agent-ts-function --runtime nodejs18 --trigger-http --entry-point HandleWebhookRequest
```

The public endpoint of this function is going to have this format:
```bash
    https://<region>-<project-id>.cloudfunctions.net/<function-name>
```

So imagine that we have deployed this function in `us-central1` and the project `test-cx-346408`, the URL will look like this:
```bash
    https://us-central1-test-cx-346408.cloudfunctions.net/my-agent-ts-function
```

Now the code is ready to be tested on the Console!