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

## 2. Verify DNS records

Verifying DNS records requires adding the Hauberk-generated records to your DNS provider. Adding these DNS records to your provider authorizes Hauberk to send email using your provided domain name.

### DNS Providers

[Cloudflare](#cloudflare)

### Cloudflare

Add a domain to Hauberk with Cloudflare as your DNS provider.

#### Login to CLoudflare

Login to your [Cloudflare account](https://dash.cloudflare.com) and go to the DNS records for your domain.




