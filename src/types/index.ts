import { BigNumber } from 'ethers'

export * from './block'
export * from './networkish'
export * from './http'

export type UINT256 = BigNumber
export type BOOL = boolean
export type ADDRESS = string
export type UINT64 = number
export type UINT8 = number
export type INT8 = number

export {
  BigNumber
}
