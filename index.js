const request = require('request-promise-native');

async function postMessage(payload) {
  const res = await request.post('https://slack.com/api/chat.postMessage', {
    headers: {
      'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    json: payload,
  });
  if (!res.ok) {
    console.error(res);
  }
  return res;
}

const onRequest = async (req, res) => {
  const payload = req.body;

  if (payload.type === 'url_verification') { // これがないとSlackのEvent Subscriptionsが使えない
    return res.status(200).json({
      'challenge': payload.challenge
    });
  }

  console.log('payload');
  console.log(payload);

  if (typeof payload.payload === 'string') {
    payload = JSON.parse(payload.payload);
  }

  if (payload.event && payload.event.type === 'app_mention') {
    if (payload.event.text.includes('hi')) {
      const slackRes = await postMessage({
        text: `<@${payload.event.user}> hi!`,
        channel: payload.event.channel
      });
      return res.status(200).send('OK');
    }
  }
  res.status(200).send('Hello World!');
}

exports.slackBotEvent = onRequest;