const fastify = require("./fastify.js");
const express = require("./express.js");

async function init(c) {
    if(c.type === "fastify") {
        c.emit('debug', "[DEBUG] Starting Fastify Server");
        await fastify.init(c);
    } else {
        c.emit('debug', "[DEBUG] Starting Express Server");
        await express.init(c);
    }
}

module.exports = init;