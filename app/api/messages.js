import client from './client';

const send = (message, listingId) =>
  client.post('/messages', {
    message,
    listingId,
  }); // The server expects the message and listingId in the request body

export default {
  send,
};
