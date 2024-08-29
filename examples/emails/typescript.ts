import { Hauberk } from '@hauberk/node';

const hauberk = new Hauberk('hk_123456789'); // Defaults to: .env HAUBERK_API_KEY

(async function() {
  const { data, error } = await hauberk.emails.send({
    from: 'hello@yourapp.com',
    to: ['customer@example.com'],
    subject: 'Hello world',
    html: '<b>Delivered successfully!</b>'
  });
})();
