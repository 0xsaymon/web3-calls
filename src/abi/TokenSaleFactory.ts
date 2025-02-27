export default [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wethAmount",
        type: "uint256",
      },
    ],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bnbAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bnbFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "daoFee",
        type: "uint256",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bnbAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bnbReserve",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenReserve",
        type: "uint256",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withDao",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "finishingTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxWalletAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "vTokenBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "vBNBBalance",
        type: "uint256",
      },
    ],
    name: "TokenSaleConfig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referralLink",
        type: "address",
      },
    ],
    name: "TokenSaleCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenReserve",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bnbReserve",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sentToDao",
        type: "uint256",
      },
    ],
    name: "TokenSaleFinished",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minTokenAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "referralLink",
        type: "address",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
        ],
        internalType: "struct ITokenSaleFactory.TokenInfo",
        name: "tokenInfo",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        internalType: "address",
        name: "referralLink",
        type: "address",
      },
      {
        internalType: "bool",
        name: "withDao",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "finishingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxWalletAmount",
        type: "uint256",
      },
    ],
    name: "createTokenSale",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
        ],
        internalType: "struct ITokenSaleFactory.TokenInfo",
        name: "tokenInfo",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        internalType: "address",
        name: "referralLink",
        type: "address",
      },
      {
        internalType: "bool",
        name: "withDao",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "finishingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxWalletAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTokenAmount",
        type: "uint256",
      },
    ],
    name: "createTokenSaleAndBuy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
    ],
    name: "getExchangeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAfterSwap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountWithCommission",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withDao",
        type: "bool",
      },
    ],
    name: "getInitExchangeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAfterSwap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountWithCommission",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getRedeemBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "tokensToRedeem",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "wethToReturn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isRedeemable",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "getReferralsList",
    outputs: [
      {
        internalType: "address[]",
        name: "referrers",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getReferrer",
    outputs: [
      {
        internalType: "address",
        name: "referree",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenSaleInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "tokenBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "wethBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxWalletAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withDao",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "daoBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finishingTime",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
        ],
        internalType: "struct ITokenSaleFactory.TokenSaleInfoView",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "getWethAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "wethAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "isFinished",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "onTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "predictTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minWethAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "referralLink",
        type: "address",
      },
    ],
    name: "sell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const
