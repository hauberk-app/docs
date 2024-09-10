import { Hauberk } from '@hauberk/node';

const hauberk = new Hauberk('hk_123456789'); 
// Checks for .env HAUBERK_API_KEY by default

(async function() {
  /**
   * @returns { 
   *   success: boolean, 
   *   data?: { messageId: string; },
   *   error?: { code: string; message: string; },
   *   statusCode: number
   * } 
   */
  const { success, data, error } = await hauberk.emails.send({
    from: 'hello@yourapp.com',
    to: ['customer@example.com'],
    subject: 'Hello world',
    html: '<b>Delivered successfully!</b>'
  });
  
})();
