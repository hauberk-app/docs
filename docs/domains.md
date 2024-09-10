# Domains

Hauberk sends emails on your behalf using your verified domain(s).

To verify a domain, you must configure DNS records granting us permission to send email on your behalf. If you don't have access to configure DNS records, we provide an easy way to send domain setup instructions to a teammate.

Need help configuring DNS? Contact us at [team@hauberk.app](mailto:team@hauberk.app)

## 1. Adding a Domain

[Login to your Hauberk account and add a domain](/domains/new)

**Region:** select the region closest to the majority of your users

**Domain:** Enter your root domain, or a subdomain that corresponds to the type of emails you will be sending.

*On the Pro plan you can create as many domains as you need.*

> Best practice is to use a subdomain to segment your reputation based on topic or purpose. (For example: auth.example.com - transaction email, hello.example.com - marketing email)


For example: use `auth.yourdomain.com` for sending password reset emails, use `updates.yourdomain.com` for sending monthly account statements.

## 2. Verify DNS Records

Verifying DNS records requires adding the Hauberk-generated records to your DNS provider. Adding these DNS records to your provider authorizes Hauberk to send email using your provided domain name.

### DNS Records

**MX:** A MX (Mail Exchange) record accepts inbound email. Hauberk generates two MX records: `feedback-smtp` for receiving email events like bounces and clicks, and `inbound-smtp` for [processing inbound email](/inbound-email.md) sent to your domain. [Learn more about MX records](/docs/dns/mx-mail-exchange)

**TXT:** TXT (Text) records are checked by recipient email providers to verify the authenticity of the emails you send. Hauberk generates three TXT records: a SPF record, a DKIM/DomainKey record, and a DMARC record. [Learn more about TXT records](/docs/dns/txt)

**SPF:** A SPF (TXT) record tells a receiving email provider what hostnames and/or IP addresses are authorized to send email on behalf of the domain. [Learn more about SPF](/docs/dns/spf-sender-policy-framework)

**DKIM/DomainKey:** Hauberk cryptographically signs all email we send on your behalf with a private key,  DKIM/DomainKey (TXT) record contains the public key that a receiving email provider uses to confirm the cryptographic signature. [Learn more about DKIM](/docs/dns/dkim-domainkeys-identified-email)

**DMARC:** A DMARC record instructs a receiving email provider how to handle an email that does not pass authentication (not sent from an approved hostname/IP address, or has an invalid cryptographic signature). [Learn more about DMARC](/docs/dns/dmarc-domain-based-messge-authentication-reporting-conformance)

### DNS Providers

[Cloudflare](#cloudflare)

### Cloudflare

Add a domain to Hauberk with Cloudflare as your DNS provider.

#### Login to CLoudflare

Login to your [Cloudflare account](https://dash.cloudflare.com) and go to the DNS records for your domain.

1. Add the **MX Record (feedback-smtp)** to Cloudflare
2. Add the **SPF TXT Record** to Cloudflare
3. Add the **DKIM/DomainKey TXT Record** to Cloudflare
4. Add the **DMARC TXT Record** to Cloudflare (you may or may not already have a DMARC record)
5. (Recommended) Add the **MX Record (inbound-smtp)** to Cloudflare. Adding this record allows Hauberk to route your inbound email in one of three ways: transparently proxy email to and from your personal inbox, provide a shared team inbox on Hauberk, or send your app webhooks for each inbound message with it's contents. [Learn more about inbound email processing](/docs/inbound-email)




