# useCopy 📋

 A React Hook that provides an easy interface to copy textual data.
 
 ```js
import React from 'react';
import useCopy from 'use-copy';

function Count() {
    const [copied, copy, setCopied] = useCopy("Text to copy");

    const copyText = () => {
      copy();

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    };

    return (
        <div>
            { copied ? "Copied to clipboard" : <a onClick={copyText}>Copy text</a>
        </div>
    );
}
```

## Install

```bash
# Yarn
yarn add use-copy

# NPM
npm install use-copy
```

## Features

- Feather light
- Pass dynamic text
- Easy interface
- Full Typescript support
- Uses the battle-tested ![copy-to-clipboard](https://github.com/sudodoki/copy-to-clipboard)

## Prerequisites

⚠️ React hooks require `react` at version 16.7.0-alpha.0 or higher.

## Issues & suggestions

If you find any runtime issues or have any suggestions on how to improve the package please do open an ![issue](https://github.com/animify/useCopy/issues)!

## License

![MIT License](LICENSE)
