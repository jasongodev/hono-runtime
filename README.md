# hono-runtime
Instantiate hono using the same code across different runtimes.
## Installation
Using hono-runtime npm package:
```shell
npm i hono-runtime
```
No need to include `hono` package because `hono-runtime` includes hono as its dependency.
You can also use a template to start a hono-runtime project:
```shell
npm create hono-runtime-template
```
## Code Usage
```javascript
import { Hono } from './lib/cloudflare'

const app = new Hono()

/* your code here */

export default app.serve()

```