export { VerifiableCredential } from "@extrimian/vc-core";
export { Agent } from "./agent";
export { DataShareBehavior } from "./data-share-behaviours/data-share-behavior";
export { IdentityDataShareBehavior, IdentityExportParams, IdentityExportResult } from "./data-share-behaviours/identity-data-share-behavior";
export { IdentityPlainTextDataShareBehavior } from "./data-share-behaviours/identity-plaintext-data-share-behavior";
export * from "./models/agent-registry";
export {
  AgentModenaResolver,
  AgentModenaUniversalResolver, IAgentResolver
} from "./models/agent-resolver";
export { AgentSecureStorage } from "./models/agent-secure-storage";
export { IAgentStorage, IStorage } from "./models/agent-storage";
export { DID } from "./models/did";
export { DWNTransport } from "./models/transports/dwn-transport";
export { ITransport } from "./models/transports/transport";
export { WebsocketClientTransport } from "./models/transports/websocket-client-transport";
export { WebsocketServerTransport } from "./models/transports/websocket-server-transport";
export { WebsocketTransport } from "./models/transports/websocket-transport";
export { IVCStorage } from "./models/vc-storage";
export { IAgentPlugin, IAgentPluginMessage, IAgentPluginResponse } from "./plugins/iplugin";
export { CredentialFlow } from "./vc/models/credentia-flow";
export {
  OpenIDProtocol
} from "./vc/protocols/openid-protocol";
export {
  CredentialRequestedEventArg,
  VCMessageType,
  VCProtocol,
  VCProtocolResponse
} from "./vc/protocols/vc-protocol";
export {
  WACICredentialOfferRejected, WACICredentialOfferResult, WACICredentialOfferSucceded, WACICredentialOfferWaitForResponse,
  WACIProtocol
} from "./vc/protocols/waci-protocol";
export { VerifiableCredentialWithInfo, SelectiveDisclosure } from "./vc/protocols/waci-protocol";
export { ConnectableTransport } from "./models/transports/connectable-transport";

export { CredentialManifestStyles, InputDescriptor, WACIMessage } from "@extrimian/waci";
export { Issuer } from "@extrimian/vc-core";