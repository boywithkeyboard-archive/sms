<div align='center'>
  <img src='https://raw.githubusercontent.com/azurystudio/sms/dev/.github/sms_darkmode.svg#gh-dark-mode-only' width='256px' />
  <img src='https://raw.githubusercontent.com/azurystudio/sms/dev/.github/sms_lightmode.svg#gh-light-mode-only' width='256px' />
  <br>
  <br>
  <h1>sms</h1>
</div>

<br>

A JavaScript module for sending SMS messages using [GatewayAPI](https://gatewayapi.com) or [Twilio](https://www.twilio.com).

### Setup

#### Deno

```ts
import { sendSMS } from 'https://deno.land/x/sms@v0.1.0/mod.ts'
```

#### Node.js

```bash
npm i @azury/sms
```

```ts
import { sendSMS } from 'sms'
```

### Usage

```ts
sendSMS({
  gateway: 'twilio' // default: 'gatewayapi'
})
```
