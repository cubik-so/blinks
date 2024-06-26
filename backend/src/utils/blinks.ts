export interface SolanaPaySpecGetResponse {}
export interface ActionSpecGetResponse {
  icon: string; // image
  label: string; // button text
  title: string;
  description: string;
  disabled?: boolean; // allows to model invalid state of the action e.g. nft sold out
  links?: {
    // linked actions inspired by HAL https://datatracker.ietf.org/doc/html/draft-kelly-json-hal-11
    actions: LinkedAction[];
  };
  // optional error indication for non-fatal errors, if present client should display it to the user
  // doesn't prevent client from interpreting the action or displaying it to the user
  // e.g. can be used together with 'disabled' to display the reason: business constraints, authorization
  error?: ActionError;
}

// Linked action inspired by HAL https://datatracker.ietf.org/doc/html/draft-kelly-json-hal-11
export interface LinkedAction {
  href: string; // solana pay/actions get/post url
  label: string; // button text
  // optional parameters for the action, e.g. input fields, inspired by OpenAPI
  // enforcing single parameter for now for simplicity and determenistic client UIs
  // can be extended to multiple inputs w/o breaking change by switching to Parameter[]
  // note: there are no use-cases for multiple parameters atm, e.g. farcaster frames also have just single input
  parameters?: [Parameter];
}

export interface Parameter {
  name: string; // parameter name in url
  label?: string; // input placeholder
}

// A common error data structure that should be used in all responses for error indication,
// can be used in all APIs and extended with additional fields in the future if needed
// interoperable with: https://github.com/anza-xyz/solana-pay/blob/master/SPEC1.1.md#error-handling
export interface ActionError {
  message: string;
}

// Error response body that can be used in both GET and POST for non 200 status codes
// interoperable with: https://github.com/anza-xyz/solana-pay/blob/master/SPEC1.1.md#error-handling
export interface ActionsSpecErrorResponse extends ActionError {}
