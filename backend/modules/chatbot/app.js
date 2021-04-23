const https = require('https')
const express = require('express')
const { WebhookClient } = require('dialogflow-fulfillment')
const app = express()
var fs = require('fs');
var options = {
  // Specify the key file for the server
  key: fs.readFileSync('/etc/ssl/lucasraza.com.key'),
  // Specify the certificate file
  cert: fs.readFileSync('/etc/ssl/cloudflare.crt'),
  // Specify the Certificate Authority certificate
  ca: fs.readFileSync('./ca-crt.pem'),
  // Requesting the client to provide a certificate, to authenticate the user.
  requestCert: true,
  // As specified as "true", so no unauthenticated traffic
  // will make it to the specified route specified
  rejectUnauthorized: false
};
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Server Is Working......")
})

app.use(function (req, res, next) {
    if (!req.client.authorized) {
      //return res.status(401).send('Client cert failed. User is not authorized\n');
    }
    // Examine the cert itself, and even validate based on that!
    var cert = req.socket.getPeerCertificate();
    if (cert.subject) {
      console.log('Client Certificate: ',cert);
      console.log('Client Certificate Common Name: '+cert.subject.CN);
      console.log('Client Certificate Location: '+cert.subject.L);
      console.log('Client Certificate Organization Name: '+cert.subject.O);
      console.log('Client Certificate Email Address: '+cert.subject.emailAddress);
    }
  
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("hello world from client cert\n");
    next();
  });

/**
* on this route dialogflow send the webhook request
* For the dialogflow we need POST Route.
* */
app.post('/dialogflow', (req, res) => {
    // get agent from request
    let agent = new WebhookClient({request: req, response: res})

    // create intentMap for handle intent
    let intentMap = new Map();

    // add intent map 2nd parameter pass function
    intentMap.set('test',handleWebHookIntent)

    // now agent is handle request and pass intent map
    agent.handleRequest(intentMap)
})

function handleWebHookIntent(agent){
    agent.add("Hello I am Webhook demo How are you...")
}

/**
* now listing the server on port number 3000 :)
* */
var listener = https.createServer(options, app).listen(4000, function () {
  console.log('Express HTTPS server listening on port ' + listener.address().port);
});