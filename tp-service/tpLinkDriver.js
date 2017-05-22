var express = require('express');
var app = express();

const Hs100Api = require('hs100-api');

const client = new Hs100Api.Client();

app.get('/devices', function (req, res) {
  client.startDiscovery().on('plug-new', (plug) => {
    plug.getInfo().then(response => {
      res.send(response);
    }).catch(err => {
      res.send(err);
    });
  });
});

app.post('/switch', function (req, res) {
  client.startDiscovery().on('plug-new', (plug) => {
    plug.getPowerState().then(response => {
      plug.setPowerState(!response);
      res.send(true);
    }).catch(err => {
      res.send(false);
    });
  });
});

app.listen(4555, function () {
  console.log('HS Service running on port 4555!')
});
