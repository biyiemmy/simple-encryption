# simple-cipher-js
A simple cryptography library for NodeJS.

## Installing:

Install with npm:

```
$ npm install simple-cipher-js --save
```

with yarn:
```
$ yarn add simple-cipher-js
```

or add it directly to your webpage using a CDN:
```html
<head>
	<script src="https://cdn.jsdelivr.net/npm/simple-cipher-js@0.0.7/dist/index.min.js"></script>
</head>
```

if you are working off an older version of the CDN, simply replace simple-cipher-js@X.X.X with a more precise version #

## Implementing:

```javascript

const cipher = require('simple-cipher-js');

cipher.rot13.encrypt('hello world!'); // uryyb jbeyq!

```


```javascript

import { rot13, caesar } from 'simple-cipher-js';

rot13.decrypt('fvzcyr pvcuref ner sha'); // simple ciphers are fun

caesar.encrypt('password', 23); // mxpptloa 

```
##

Using the CDN:
```html
	
<html> 
	<head>
		<script src="https://cdn.jsdelivr.net/npm/simple-cipher-js@0.0.7/dist/index.min.js"></script>
	</head>
</head>


// inside of js file (or script tag)
document.querySelector("body").onload = function() {
	var encrypt = cipher.rot13.encrypt('hello world');

	console.log('encrypt: ', encrypt);
}

```

## API:

### Rot13 Cipher
```javascript
import { rot13 } from 'simple-cipher-js';
		 

rot13.encrypt('special password') // => fcrpvny cnffjbeq
rot13.decrypt('fcrpvny cnffjbeq') // => special password

```  
##

### Caesar Cipher
```javascript
import { caesar } from 'simple-cipher-js';
		 

caesar.encrypt('et tu brute', 4) // => ix xy fvyxi
caesar.decrypt('ix xy fvyxi', -4) // => et tu brute

```  
##
