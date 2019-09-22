
const AssistantV2 = require('ibm-watson/assistant/v2');

function botmessager(req, res) {

  const assistant = new AssistantV2({
    version: process.env.WATSON_VERSION,
    iam_apikey: process.env.APIKEY,
    url: 'https://gateway-wdc.watsonplatform.net/assistant/api'
  });
  
  assistant.createSession({
    assistant_id: '{assistant_id}'
  })
  .then ((ibmres) => {
	console.log(ibmres);
  });
}

module.exports = {
	botmessager: botmessager
}