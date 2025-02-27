# Getting Started

## Prerequisites

Before running the application, you need to set up your environment:

**Node.js**:
- [node.js](https://nodejs.org/en/download) v22 or higher.
- optional you can use version manager for node like [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm).

**Create a local environment file**:

- Copy the `.env.example` file and rename it to `.env.local`
- Add your blockchain configuration data:
  - `RPC_URL`: URL of the blockchain node for making requests
  - `ACCOUNT_PRIVATE_KEY`: Private key of the account that will be used for calling contract write methods and paying transaction fees

## Installation

Install all dependencies by running:

```bash
npm install
```

Run script:

```bash
npm run dev
```
