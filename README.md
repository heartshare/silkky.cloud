<div align="center">
<a href="https://silkky.cloud/">
  <img src="public/assets/img/png/brand/text-background.png" width="600px" alt="Silkky.Cloud" />
</a>
<p>
  <em>Protect your information and anonymity against global surveillance.</em>
</p>
<a href="https://liberapay.com/silkkycloud/donate" target="_blank">
  <img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg" height="30px">
</a>
<a href="https://www.buymeacoffee.com/silkkycloud" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30px" alt="Buy Me A Coffee">
</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/b10af1f4-8472-47cf-9702-82b2833d0a76/deploy-status)](https://app.netlify.com/sites/silkky-cloud/deploys)

[Join our Matrix room](https://matrix.to/#/#silkkycloud:matrix.org)
__
[Join our Discord](https://discord.com/invite/BvqJQ3hNrQ)

</div>

## Contributing

**Important:** Please sign your commits with GPG. [Guide](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification)

1. **Fork this repository**

2. **Clone your fork**

3. **Create a new branch for your new feature**

- ```git branch feature```
-  ```git checkout feature```

4. **Install dependencies and build static site**

- ```npm install```
- ```npm run build```

### Setup development server

1. **Install dependencies**

- ```npm install```

2. **Build static site**

- ```npm run build```

3. **Start development server**

- ```npm start```

4. **Go to** ```http://localhost:8080/```

### Using build scripts

To build the static site we use NPM scripts, for convenience each build is seperated into separate scripts.

Full build:

- ```npm run build```

Compile the Liquid files

- ```npm run liquid```

Compile the SASS / SCSS

- ```npm run css```

Static files (Copies files from 'node_modules' and 'public')

- ```npm run static```

**Thanks to JetBrains for supporting this project by providing free licenses for their development tools.**

<a href="https://jb.gg/OpenSource" target="_blank">
  <img src="public/assets/img/svg/jetbrains.svg" width="120px" alt="JetBrains">
</a>
