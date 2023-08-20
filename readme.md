## sms

### Setup

#### 🦕 Deno

```ts
import { sendMessage } from 'https://deno.land/x/sms@v0.2.0/mod.ts'
```

#### 🐢 Node.js

```bash
npm i @deaddeno/sms
```

```ts
import { sendMessage } from '@deaddeno/sms'
```

### Usage

```ts
const response = await sendMessage({
  token: '...',
  sender: 'Your company',
  message: '123456 is your verification code.',
  to: 491759999999, // +49 175 9999999
})
```
