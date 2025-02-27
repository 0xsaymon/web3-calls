export default [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "pathTokens",
        type: "address[]",
      },
    ],
    name: "addPathTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "optionalPath",
        type: "tuple",
      },
    ],
    name: "getExtendedPriceIn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "optionalPath",
        type: "tuple",
      },
    ],
    name: "getExtendedPriceOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "optionalPath",
        type: "tuple",
      },
    ],
    name: "getNormalizedExtendedPriceIn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "optionalPath",
        type: "tuple",
      },
    ],
    name: "getNormalizedExtendedPriceOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "getNormalizedPriceIn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "getNormalizedPriceInDEXE",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "getNormalizedPriceInUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "getNormalizedPriceOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "getNormalizedPriceOutDEXE",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "getNormalizedPriceOutUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPathTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolTypes",
    outputs: [
      {
        components: [
          {
            internalType: "enum IPriceFeed.PoolInterfaceType",
            name: "poolType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
        ],
        internalType: "struct IPriceFeed.PoolType[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolTypesLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "getPriceIn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "getPriceOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint8[]",
            name: "poolTypes",
            type: "uint8[]",
          },
        ],
        internalType: "struct IPriceFeed.SwapPath",
        name: "path",
        type: "tuple",
      },
    ],
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
    ],
    name: "isSupportedPathToken",
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
        internalType: "address[]",
        name: "pathTokens",
        type: "address[]",
      },
    ],
    name: "removePathTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IPriceFeed.PoolInterfaceType",
            name: "poolType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
        ],
        internalType: "struct IPriceFeed.PoolType[]",
        name: "poolTypes",
        type: "tuple[]",
      },
    ],
    name: "setPoolTypes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPathTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const
