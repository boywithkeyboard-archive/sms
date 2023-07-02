<div align='center'>
  <picture>
    <source media='(prefers-color-scheme: dark)' srcset='https://raw.githubusercontent.com/azurystudio/sms/dev/.github/sms_darkmode.svg' width='256px'>
    <source media='(prefers-color-scheme: light)' srcset='https://raw.githubusercontent.com/azurystudio/sms/dev/.github/sms_lightmode.svg' width='256px'>
    <img src='https://raw.githubusercontent.com/azurystudio/sms/dev/.github/sms_lightmode.svg' width='256px'>
  </picture>
  <br>
  <br>
  <h1>sms</h1>
</div>

<br>

### Setup

#### Deno

```ts
import { sendSMS } from 'https://deno.land/x/sms@v0.1.3/mod.ts'
```

#### Node.js

```bash
npm i @azury/sms
```

```ts
import { sendSMS } from '@azury/sms'
```

### Usage

```ts
const response = await sendSMS({
  token: '...',
  sender: 'Your Company',
  message: '123456 is your verification code.',
  to: 491759999999, // +49 175 9999999
})
```
