import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        export type BIP32Path = number /* double */[];
        export interface BTCGetAddress {
            showDisplay?: boolean;
            scriptType?: BTCInputScriptType;
            addressNList: BIP32Path;
            coin: Coin;
        }
        export type BTCInputScriptType = "cashaddr" | "bech32" | "p2pkh" | "p2sh" | "external" | "p2wpkh" | "p2sh-p2wpkh";
        export interface BTCSignedTx {
            signatures: string[];
            /**
             * hex string representation of the raw, signed transaction
             */
            serializedTx: string;
        }
        export interface BinanceGetAddress {
            addressNList: BIP32Path;
            showDisplay?: boolean;
        }
        export type Coin = string;
        export type Coins = Coin[];
        export interface CosmosGetAddress {
            addressNList: BIP32Path;
            showDisplay?: boolean;
        }
        export interface CosmosSignTx {
            addressNList: BIP32Path;
            tx: CosmosStdTx;
            chain_id: string;
            account_number: string;
            sequence: string;
            fee?: number; // double
        }
        export interface CosmosSignedTx {
            serialized: string;
            body: string;
            authInfoBytes: string;
            signatures: string[];
        }
        export interface CosmosStdTx {
            msg: Msg[];
            fee: StdFee;
            signatures: StdSignature[] | null;
            memo: string;
        }
        export interface CryptoPubKey {
            type: string;
            value: string;
        }
        export interface ETHGetAddress {
            addressNList: BIP32Path;
            showDisplay?: boolean;
        }
        export interface ETHSignTx {
            /**
             * bip32 path to sign the transaction from
             */
            addressNList: BIP32Path;
            /**
             * big-endian hex, prefixed with '0x'
             */
            nonce: string;
            /**
             * big-endian hex, prefixed with '0x'
             */
            gasPrice?: string;
            /**
             * big-endian hex, prefixed with '0x'
             */
            gasLimit: string;
            /**
             * EIP-1559 - The maximum total fee per gas the sender is willing to pay. <=256 bit unsigned big endian (in wei)
             */
            maxFeePerGas?: string;
            /**
             * EIP-1559 - Maximum fee per gas the sender is willing to pay to miners. <=256 bit unsigned big endian (in wei)
             */
            maxPriorityFeePerGas?: string;
            /**
             * address, with '0x' prefix
             */
            to: string;
            /**
             * bip32 path for destination (device must `ethSupportsSecureTransfer()`)
             */
            toAddressNList?: BIP32Path;
            /**
             * big-endian hex, prefixed with '0x'
             */
            value: string;
            /**
             * prefixed with '0x'
             */
            data: string;
            /**
             * mainnet: 1, ropsten: 3, kovan: 42
             */
            chainId: number; // double
            /**
             * Device must `ethSupportsNativeShapeShift()`
             */
            exchangeType?: ExchangeType;
        }
        export interface ETHSignedTx {
            /**
             * uint32
             */
            v: number; // double
            /**
             * big-endian hex, prefixed with '0x'
             */
            r: string;
            /**
             * big-endian hex, prefixed with '0x'
             */
            s: string;
            /**
             * big-endian hex, prefixed with '0x'
             */
            serialized: string;
        }
        export interface EosGetPublicKey {
            addressNList: number /* double */[];
            showDisplay?: boolean;
            kind: 0 | 1 | 2;
        }
        export interface Error {
            success: boolean;
            reason: string;
        }
        export interface ExchangeType {
            /**
             * `SignedExchangeResponse` from the `/sendamountProto2` ShapeShift endpoint, base64 encoded
             */
            signedExchangeResponse: string;
            withdrawalCoinName: string;
            withdrawalAddressNList: BIP32Path;
            withdrawalScriptType?: BTCInputScriptType;
            returnAddressNList: BIP32Path;
            returnScriptType?: BTCInputScriptType;
        }
        export interface GenericResponse {
            success: boolean;
        }
        export interface GetPublicKey {
            addressNList: BIP32Path;
            showDisplay?: boolean;
            scriptType?: BTCInputScriptType;
            curve?: string;
            coin: Coin;
            symbol?: string;
        }
        export interface LoadDevice {
            /**
             * 12, 18, or 24 word BIP39 mnemonic
             */
            mnemonic: string;
            /**
             * User-identifiable device label
             */
            label?: string;
            /**
             * Whether passphrase protection should be enabled
             */
            passphrase?: boolean;
            /**
             * pin, in plaintext
             */
            pin?: string;
            /**
             * Whether to enforce checksum
             */
            skipChecksum?: boolean;
        }
        export interface Msg {
            type: string;
            value: any;
        }
        export interface OsmosisGetAddress {
            addressNList: BIP32Path;
            showDisplay?: boolean;
        }
        export interface PairBody {
            serviceName: string;
            serviceImageUrl: string;
        }
        export interface PairResponse {
            success: boolean;
            reason: string;
        }
        export interface PublicKey {
            xpub: string;
        }
        export interface Read {
            data: string;
        }
        /**
         * Construct a type with a set of properties K of type T
         */
        export interface RecordStringUnknown {
        }
        export interface RecoverDevice {
            /**
             * Bits. Either 128 (12 words), 192 (18 words), or 256 (24 words)
             */
            entropy: 128 | 192 | 256;
            label: string;
            passphrase: boolean;
            pin: boolean;
            language?: string;
            autoLockDelayMs?: number; // double
            u2fCounter?: number; // double
        }
        export interface ResetDevice {
            /**
             * Bits. Either 128 (12 words), 192 (18 words), or 256 (24 words)
             */
            entropy?: 128 | 192 | 256;
            label: string;
            passphrase?: boolean;
            pin?: boolean;
            autoLockDelayMs?: number; // double
            u2fCounter?: number; // double
        }
        export interface RippleGetAddress {
            addressNList: BIP32Path;
            showDisplay?: boolean;
        }
        export interface RipplePayment {
            amount: string;
            destination: string;
            destinationTag?: string;
        }
        export interface RippleSignTx {
            addressNList: BIP32Path;
            tx: RippleTx;
            flags?: string;
            sequence: string;
            lastLedgerSequence: string;
            payment: RipplePayment;
        }
        export type RippleSignedTx = RippleTx;
        export interface RippleStdTx {
            msg: SdkMsg[];
            fee: StdFee;
            signatures: StdSignature[] | null;
            memo: string;
        }
        export interface RippleTx {
            type: string;
            value: RippleStdTx;
        }
        export interface SdkMsg {
            type: string;
            value: any;
        }
        export interface SignedTx {
            success: boolean;
            status: string;
            signedTx: any;
        }
        export interface Status {
            success: boolean;
            status: string;
            state: number; // double
        }
        export interface StdFee {
            amount: Coins;
            gas: string;
        }
        export interface StdSignature {
            pub_key?: CryptoPubKey;
            signature: string;
        }
        export interface ThorchainGetAddress {
            addressNList: BIP32Path;
            showDisplay?: boolean;
            testnet?: boolean;
        }
        export interface ThorchainMsg {
            type: string;
            value: any;
        }
        export interface ThorchainSignTx {
            addressNList: BIP32Path;
            tx: ThorchainStdTx;
            sequence: string;
            account_number: string;
            chain_id: string;
            fee?: number; // double
            testnet?: boolean;
        }
        export interface ThorchainStdFee {
            amount: Coins;
            gas: string;
        }
        export interface ThorchainStdSignature {
            pub_key?: CryptoPubKey;
            signature: string;
        }
        export interface ThorchainStdTx {
            fee: StdFee;
            memo: string;
            msg: Msg[];
            signatures: StdSignature[] | null;
        }
        export interface ThorchainTx {
            msg: ThorchainMsg[];
            fee: ThorchainStdFee;
            signatures: ThorchainStdSignature[] | null;
            memo: string;
        }
        export interface UserType {
            balances: any[];
            accounts: {
                caip: string;
                pubkey: any;
            }[];
            online: boolean;
        }
        export interface Write {
            output: string;
        }
        export interface WriteBody {
            data: any;
        }
    }
}
declare namespace Paths {
    namespace ApplyPolicy {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace ApplySettings {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace BinanceGetAddress {
        export type RequestBody = Components.Schemas.BinanceGetAddress;
        namespace Responses {
            export type $200 = string;
            export interface $500 {
            }
        }
    }
    namespace BinanceSignTx {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace BtcGetAddress {
        export type RequestBody = Components.Schemas.BTCGetAddress;
        namespace Responses {
            export type $200 = string;
            export interface $500 {
            }
        }
    }
    namespace BtcSignTx {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.BTCSignedTx;
            export interface $500 {
            }
        }
    }
    namespace ChangePin {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace ClearSession {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace CosmosGetAddress {
        export type RequestBody = Components.Schemas.CosmosGetAddress;
        namespace Responses {
            export type $200 = string;
            export interface $500 {
            }
        }
    }
    namespace CosmosSignTx {
        export type RequestBody = Components.Schemas.CosmosSignTx;
        namespace Responses {
            export type $200 = Components.Schemas.CosmosSignedTx;
            export interface $500 {
            }
        }
    }
    namespace Device {
        namespace Responses {
            export type $200 = /* Construct a type with a set of properties K of type T */ Components.Schemas.RecordStringUnknown;
        }
    }
    namespace Disconnect {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace EosGetPublicKey {
        export type RequestBody = Components.Schemas.EosGetPublicKey;
        namespace Responses {
            export type $200 = string;
            export interface $500 {
            }
        }
    }
    namespace EosSignTx {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace EthGetAddress {
        export type RequestBody = Components.Schemas.ETHGetAddress;
        namespace Responses {
            export type $200 = string;
            export interface $500 {
            }
        }
    }
    namespace EthSignTx {
        export type RequestBody = Components.Schemas.ETHSignTx;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace FirmwareErase {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace FirmwareUpload {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace GetCoinTable {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace GetDeviceID {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace GetFirmwareVersion {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace GetLabel {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace GetModel {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace GetNumCoins {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace GetPublicKeys {
        export type RequestBody = Components.Schemas.GetPublicKey[];
        namespace Responses {
            export type $200 = ({
                xpub: string;
            } | null)[];
            export interface $500 {
            }
        }
    }
    namespace GetVendor {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace HasOnDeviceDisplay {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace HasOnDevicePassphrase {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace HasOnDevicePinEntry {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace HasOnDeviceRecovery {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace IsInitialized {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace IsLocked {
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace LoadDevice {
        export type RequestBody = Components.Schemas.LoadDevice;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace OsmosisGetAddress {
        export type RequestBody = Components.Schemas.OsmosisGetAddress;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace OsmosisSignTx {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace Pair {
        export interface HeaderParameters {
            authorization: Parameters.Authorization;
        }
        namespace Parameters {
            export type Authorization = string;
        }
        export type RequestBody = Components.Schemas.PairBody;
        namespace Responses {
            export type $200 = Components.Schemas.PairResponse;
            export interface $500 {
            }
        }
    }
    namespace ReadDevice {
        namespace Responses {
            export type $200 = Components.Schemas.Read | Components.Schemas.Error;
            export interface $500 {
            }
        }
    }
    namespace Recover {
        export type RequestBody = Components.Schemas.RecoverDevice;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace RemovePin {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace Reset {
        export type RequestBody = Components.Schemas.ResetDevice;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace RippleGetAddress {
        export type RequestBody = Components.Schemas.RippleGetAddress;
        namespace Responses {
            export type $200 = string;
            export interface $500 {
            }
        }
    }
    namespace RippleSignTx {
        export type RequestBody = Components.Schemas.RippleSignTx;
        namespace Responses {
            export type $200 = Components.Schemas.RippleTx;
            export interface $500 {
            }
        }
    }
    namespace SendCharacter {
        export type RequestBody = string;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace SendCharacterDelete {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace SendCharacterDone {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace SendWord {
        export type RequestBody = string;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace SignTransaction {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.SignedTx | Components.Schemas.Error;
            export interface $500 {
            }
        }
    }
    namespace SoftReset {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace Status {
        namespace Responses {
            export type $200 = Components.Schemas.Status;
        }
    }
    namespace ThorchainGetAddress {
        export type RequestBody = Components.Schemas.ThorchainGetAddress;
        namespace Responses {
            export type $200 = string | null;
            export interface $500 {
            }
        }
    }
    namespace ThorchainSignTx {
        export type RequestBody = Components.Schemas.ThorchainSignTx;
        namespace Responses {
            export type $200 = Components.Schemas.ThorchainTx;
            export interface $500 {
            }
        }
    }
    namespace User {
        namespace Responses {
            export type $200 = Components.Schemas.UserType;
            export interface $401 {
            }
        }
    }
    namespace VerifyAuth {
        namespace Responses {
            export type $200 = Components.Schemas.GenericResponse;
            export interface $401 {
            }
        }
    }
    namespace Wipe {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.ETHSignedTx;
            export interface $500 {
            }
        }
    }
    namespace WriteDevice {
        export type RequestBody = Components.Schemas.WriteBody;
        namespace Responses {
            export type $200 = Components.Schemas.Write | Components.Schemas.Error;
            export interface $500 {
            }
        }
    }
}

export interface OperationMethods {
  /**
   * Status
   */
  'Status'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Status.Responses.$200>
  /**
   * Device
   */
  'Device'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Device.Responses.$200>
  /**
   * Pair
   */
  'Pair'(
    parameters?: Parameters<Paths.Pair.HeaderParameters> | null,
    data?: Paths.Pair.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Pair.Responses.$200>
  /**
   * VerifyAuth
   */
  'VerifyAuth'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VerifyAuth.Responses.$200>
  /**
   * User
   */
  'User'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.User.Responses.$200>
  /**
   * GetPublicKeys
   */
  'GetPublicKeys'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GetPublicKeys.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPublicKeys.Responses.$200>
  /**
   * BtcGetAddress
   */
  'BtcGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.BtcGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BtcGetAddress.Responses.$200>
  /**
   * EthGetAddress
   */
  'EthGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EthGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EthGetAddress.Responses.$200>
  /**
   * ThorchainGetAddress
   */
  'ThorchainGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ThorchainGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ThorchainGetAddress.Responses.$200>
  /**
   * OsmosisGetAddress
   */
  'OsmosisGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.OsmosisGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OsmosisGetAddress.Responses.$200>
  /**
   * BinanceGetAddress
   */
  'BinanceGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.BinanceGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BinanceGetAddress.Responses.$200>
  /**
   * CosmosGetAddress
   */
  'CosmosGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CosmosGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CosmosGetAddress.Responses.$200>
  /**
   * RippleGetAddress
   */
  'RippleGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.RippleGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RippleGetAddress.Responses.$200>
  /**
   * EosGetPublicKey
   */
  'EosGetPublicKey'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EosGetPublicKey.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EosGetPublicKey.Responses.$200>
  /**
   * BtcSignTx
   */
  'BtcSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.BtcSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BtcSignTx.Responses.$200>
  /**
   * ThorchainSignTx
   */
  'ThorchainSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ThorchainSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ThorchainSignTx.Responses.$200>
  /**
   * CosmosSignTx
   */
  'CosmosSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CosmosSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CosmosSignTx.Responses.$200>
  /**
   * OsmosisSignTx
   */
  'OsmosisSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.OsmosisSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OsmosisSignTx.Responses.$200>
  /**
   * RippleSignTx
   */
  'RippleSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.RippleSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RippleSignTx.Responses.$200>
  /**
   * BinanceSignTx
   */
  'BinanceSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.BinanceSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BinanceSignTx.Responses.$200>
  /**
   * EthSignTx
   */
  'EthSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EthSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EthSignTx.Responses.$200>
  /**
   * EosSignTx
   */
  'EosSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EosSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EosSignTx.Responses.$200>
  /**
   * SignTransaction
   */
  'SignTransaction'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SignTransaction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SignTransaction.Responses.$200>
  /**
   * LoadDevice
   */
  'LoadDevice'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.LoadDevice.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LoadDevice.Responses.$200>
  /**
   * RemovePin
   */
  'RemovePin'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.RemovePin.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RemovePin.Responses.$200>
  /**
   * SoftReset
   */
  'SoftReset'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SoftReset.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SoftReset.Responses.$200>
  /**
   * ClearSession
   */
  'ClearSession'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ClearSession.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClearSession.Responses.$200>
  /**
   * Reset
   */
  'Reset'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.Reset.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Reset.Responses.$200>
  /**
   * Wipe
   */
  'Wipe'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.Wipe.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Wipe.Responses.$200>
  /**
   * Disconnect
   */
  'Disconnect'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.Disconnect.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Disconnect.Responses.$200>
  /**
   * ApplyPolicy
   */
  'ApplyPolicy'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ApplyPolicy.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ApplyPolicy.Responses.$200>
  /**
   * ApplySettings
   */
  'ApplySettings'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ApplySettings.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ApplySettings.Responses.$200>
  /**
   * FirmwareErase
   */
  'FirmwareErase'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.FirmwareErase.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FirmwareErase.Responses.$200>
  /**
   * FirmwareUpload
   */
  'FirmwareUpload'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.FirmwareUpload.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FirmwareUpload.Responses.$200>
  /**
   * Recover
   */
  'Recover'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.Recover.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Recover.Responses.$200>
  /**
   * ChangePin
   */
  'ChangePin'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ChangePin.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ChangePin.Responses.$200>
  /**
   * SendWord
   */
  'SendWord'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SendWord.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendWord.Responses.$200>
  /**
   * SendCharacter
   */
  'SendCharacter'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SendCharacter.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendCharacter.Responses.$200>
  /**
   * SendCharacterDelete
   */
  'SendCharacterDelete'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SendCharacterDelete.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendCharacterDelete.Responses.$200>
  /**
   * SendCharacterDone
   */
  'SendCharacterDone'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SendCharacterDone.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendCharacterDone.Responses.$200>
  /**
   * GetNumCoins
   */
  'GetNumCoins'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetNumCoins.Responses.$200>
  /**
   * GetCoinTable
   */
  'GetCoinTable'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCoinTable.Responses.$200>
  /**
   * GetDeviceID
   */
  'GetDeviceID'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDeviceID.Responses.$200>
  /**
   * GetVendor
   */
  'GetVendor'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetVendor.Responses.$200>
  /**
   * GetModel
   */
  'GetModel'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetModel.Responses.$200>
  /**
   * GetFirmwareVersion
   */
  'GetFirmwareVersion'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFirmwareVersion.Responses.$200>
  /**
   * GetLabel
   */
  'GetLabel'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLabel.Responses.$200>
  /**
   * IsInitialized
   */
  'IsInitialized'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.IsInitialized.Responses.$200>
  /**
   * IsLocked
   */
  'IsLocked'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.IsLocked.Responses.$200>
  /**
   * HasOnDevicePinEntry
   */
  'HasOnDevicePinEntry'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.HasOnDevicePinEntry.Responses.$200>
  /**
   * HasOnDevicePassphrase
   */
  'HasOnDevicePassphrase'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.HasOnDevicePassphrase.Responses.$200>
  /**
   * HasOnDeviceDisplay
   */
  'HasOnDeviceDisplay'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.HasOnDeviceDisplay.Responses.$200>
  /**
   * HasOnDeviceRecovery
   */
  'HasOnDeviceRecovery'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.HasOnDeviceRecovery.Responses.$200>
  /**
   * ReadDevice
   */
  'ReadDevice'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ReadDevice.Responses.$200>
  /**
   * WriteDevice
   */
  'WriteDevice'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.WriteDevice.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WriteDevice.Responses.$200>
}

export interface PathsDictionary {
  ['/status']: {
    /**
     * Status
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Status.Responses.$200>
  }
  ['/device']: {
    /**
     * Device
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Device.Responses.$200>
  }
  ['/pair']: {
    /**
     * Pair
     */
    'post'(
      parameters?: Parameters<Paths.Pair.HeaderParameters> | null,
      data?: Paths.Pair.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Pair.Responses.$200>
  }
  ['/auth/verify']: {
    /**
     * VerifyAuth
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VerifyAuth.Responses.$200>
  }
  ['/user']: {
    /**
     * User
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.User.Responses.$200>
  }
  ['/getPublicKeys']: {
    /**
     * GetPublicKeys
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GetPublicKeys.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPublicKeys.Responses.$200>
  }
  ['/btcGetAddress']: {
    /**
     * BtcGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.BtcGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BtcGetAddress.Responses.$200>
  }
  ['/ethGetAddress']: {
    /**
     * EthGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EthGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EthGetAddress.Responses.$200>
  }
  ['/thorchainGetAddress']: {
    /**
     * ThorchainGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ThorchainGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ThorchainGetAddress.Responses.$200>
  }
  ['/osmosisGetAddress']: {
    /**
     * OsmosisGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.OsmosisGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OsmosisGetAddress.Responses.$200>
  }
  ['/binanceGetAddress']: {
    /**
     * BinanceGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.BinanceGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BinanceGetAddress.Responses.$200>
  }
  ['/cosmosGetAddress']: {
    /**
     * CosmosGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CosmosGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CosmosGetAddress.Responses.$200>
  }
  ['/rippleGetAddress']: {
    /**
     * RippleGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.RippleGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RippleGetAddress.Responses.$200>
  }
  ['/eosGetPublicKey']: {
    /**
     * EosGetPublicKey
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EosGetPublicKey.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EosGetPublicKey.Responses.$200>
  }
  ['/btcSignTx']: {
    /**
     * BtcSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.BtcSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BtcSignTx.Responses.$200>
  }
  ['/thorchainSignTx']: {
    /**
     * ThorchainSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ThorchainSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ThorchainSignTx.Responses.$200>
  }
  ['/cosmosSignTx']: {
    /**
     * CosmosSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CosmosSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CosmosSignTx.Responses.$200>
  }
  ['/osmosisSignTx']: {
    /**
     * OsmosisSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.OsmosisSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OsmosisSignTx.Responses.$200>
  }
  ['/rippleSignTx']: {
    /**
     * RippleSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.RippleSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RippleSignTx.Responses.$200>
  }
  ['/binanceSignTx']: {
    /**
     * BinanceSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.BinanceSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BinanceSignTx.Responses.$200>
  }
  ['/ethSignTx']: {
    /**
     * EthSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EthSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EthSignTx.Responses.$200>
  }
  ['/eosSignTx']: {
    /**
     * EosSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EosSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EosSignTx.Responses.$200>
  }
  ['/sign']: {
    /**
     * SignTransaction
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SignTransaction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SignTransaction.Responses.$200>
  }
  ['/loadDevice']: {
    /**
     * LoadDevice
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.LoadDevice.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LoadDevice.Responses.$200>
  }
  ['/removePin']: {
    /**
     * RemovePin
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.RemovePin.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RemovePin.Responses.$200>
  }
  ['/softReset']: {
    /**
     * SoftReset
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SoftReset.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SoftReset.Responses.$200>
  }
  ['/clearSession']: {
    /**
     * ClearSession
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ClearSession.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClearSession.Responses.$200>
  }
  ['/reset']: {
    /**
     * Reset
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.Reset.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Reset.Responses.$200>
  }
  ['/wipe']: {
    /**
     * Wipe
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.Wipe.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Wipe.Responses.$200>
  }
  ['/disconnect']: {
    /**
     * Disconnect
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.Disconnect.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Disconnect.Responses.$200>
  }
  ['/applyPolicy']: {
    /**
     * ApplyPolicy
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ApplyPolicy.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ApplyPolicy.Responses.$200>
  }
  ['/applySettings']: {
    /**
     * ApplySettings
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ApplySettings.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ApplySettings.Responses.$200>
  }
  ['/firmwareErase']: {
    /**
     * FirmwareErase
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.FirmwareErase.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FirmwareErase.Responses.$200>
  }
  ['/firmwareUpload']: {
    /**
     * FirmwareUpload
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.FirmwareUpload.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FirmwareUpload.Responses.$200>
  }
  ['/recover']: {
    /**
     * Recover
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.Recover.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Recover.Responses.$200>
  }
  ['/changePin']: {
    /**
     * ChangePin
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ChangePin.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ChangePin.Responses.$200>
  }
  ['/sendWord']: {
    /**
     * SendWord
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SendWord.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendWord.Responses.$200>
  }
  ['/sendCharacter']: {
    /**
     * SendCharacter
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SendCharacter.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendCharacter.Responses.$200>
  }
  ['/sendCharacterDelete']: {
    /**
     * SendCharacterDelete
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SendCharacterDelete.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendCharacterDelete.Responses.$200>
  }
  ['/sendCharacterDone']: {
    /**
     * SendCharacterDone
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SendCharacterDone.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendCharacterDone.Responses.$200>
  }
  ['/getNumCoins']: {
    /**
     * GetNumCoins
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetNumCoins.Responses.$200>
  }
  ['/getCoinTable']: {
    /**
     * GetCoinTable
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCoinTable.Responses.$200>
  }
  ['/getDeviceID']: {
    /**
     * GetDeviceID
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDeviceID.Responses.$200>
  }
  ['/getVendor']: {
    /**
     * GetVendor
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetVendor.Responses.$200>
  }
  ['/getModel']: {
    /**
     * GetModel
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetModel.Responses.$200>
  }
  ['/getFirmwareVersion']: {
    /**
     * GetFirmwareVersion
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFirmwareVersion.Responses.$200>
  }
  ['/getLabel']: {
    /**
     * GetLabel
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLabel.Responses.$200>
  }
  ['/isInitialized']: {
    /**
     * IsInitialized
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.IsInitialized.Responses.$200>
  }
  ['/isLocked']: {
    /**
     * IsLocked
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.IsLocked.Responses.$200>
  }
  ['/hasOnDevicePinEntry']: {
    /**
     * HasOnDevicePinEntry
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.HasOnDevicePinEntry.Responses.$200>
  }
  ['/hasOnDevicePassphrase']: {
    /**
     * HasOnDevicePassphrase
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.HasOnDevicePassphrase.Responses.$200>
  }
  ['/hasOnDeviceDisplay']: {
    /**
     * HasOnDeviceDisplay
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.HasOnDeviceDisplay.Responses.$200>
  }
  ['/hasOnDeviceRecovery']: {
    /**
     * HasOnDeviceRecovery
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.HasOnDeviceRecovery.Responses.$200>
  }
  ['/exchange/device']: {
    /**
     * ReadDevice
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ReadDevice.Responses.$200>
    /**
     * WriteDevice
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.WriteDevice.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WriteDevice.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
