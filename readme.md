## sms

### Setup

#### Deno

```ts
import { sendMessage } from 'https://den.ooo/sms/index.ts'
```

#### Node.js

```bash
npm i @boywithkeyboard/sms
```

```ts
import { sendMessage } from '@boywithkeyboard/sms'
```

### Usage

> [!IMPORTANT]
> You need to open a [GatewayAPI](https://gatewayapi.com) account first to use this module.

```ts
const response = await sendMessage({
  token: '...',
  sender: 'Your company',
  message: '123456 is your verification code.',
  to: 491759999999 // +49 175 9999999
})
```
