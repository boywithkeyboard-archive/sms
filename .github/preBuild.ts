await Deno.mkdir('out')

await Deno.copyFile('readme.md', 'out/readme.md')
await Deno.copyFile('license', 'out/license')
await Deno.copyFile('package.json', 'out/package.json')
await Deno.copyFile('.npmrc', 'out/.npmrc')

await Deno.writeTextFile(
  './out/package.json',
  (await Deno.readTextFile('./out/package.json')).replace(
    '"version": "0.0.0"',
    `"version": "${Deno.env.get('VERSION')?.slice(1)}"`,
  ),
)
