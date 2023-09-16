import mqtt from "precompiled-mqtt";

const url = 'ws://broker.emqx.io:8083/mqtt';

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)


const options = {

    clean: true,

    connectTimeout: 4000,

    clientId: clientId,

    rejectUnauthorized: false

}


const client = mqtt.connect(url, options)

var topics = ['srec/lighton']

//connection




client.on("connect", function () {

    client.subscribe(topics, function (err) {

        console.log("err", err);

    })

})

export default client;