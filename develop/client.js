import foxql from '../index.js';

const client = new foxql();

client.open();

window.foxql = client;