curl -X POST 'https://api.hauberk.app/email' \
  -H 'Authorization: Bearer: hk_123456789' \
  -H 'Content-Type: application/json' \
  -d $'{
  "from": "hello@yourapp.com",
  "to": ["customer@example.com"],
  "subject": "Hello world",
  "html": "<b>Delivered successfully!</b>"
}'
