import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Trade $BOOBAM',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x279d41f3f78fe5c1f0ba41ae963d6e545113c973',
      },
      {
        label: 'Trade $PRT',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x50f4220C82c9325dC99f729C3328FB5c338BEaae',
      },
      {
        label: 'Buy $BOOBFUT',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x42bA7BbDDEcb471c1e1Fe08636918952b6C19019',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farm Boobfut',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Mint NFTs',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'My NFT Collection',
    icon: 'NftIcon',
    href: '/my-collection',
  },
  {
    label: 'Past Farms',
    icon: 'PoolIcon',
    href: 'https://life.vlad.finance',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/boobamfinance',
      },
      {
        label: 'Token Facts',
        href: 'https://vlad.finance/token-facts',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/boobamfinance',
      },
      {
        label: 'Boobam Finance',
        href: 'https://vlad-finance.medium.com/introducing-vlad-token-and-the-path-to-immortality-ce96990fdf66/',
      },
      // {
      //   label: 'Roadmap',
      //   href: 'https://vlad-finance.medium.com/roadmap/',
      // },
    ],
  },
  {
    label: 'Partnerships',
    icon: 'NftIcon',
    href: 'https://gordian.agency',
  },
  {
    label: 'SOLIDITY come Soon',
    icon: 'NftIcon',
    href: '#',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
]

export default config
