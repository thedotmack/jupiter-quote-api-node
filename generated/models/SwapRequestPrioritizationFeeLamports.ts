/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API v6
 * The core of [jup.ag](https://jup.ag). Easily get a quote and swap through Jupiter API.  ### Rate Limit We update our rate limit from time to time depending on the load of our servers. We recommend running your own instance of the API if you want to have high rate limit, here to learn how to run the [self-hosted API](https://station.jup.ag/docs/apis/self-hosted).  ### API Wrapper - Typescript [@jup-ag/api](https://github.com/jup-ag/jupiter-quote-api-node)  ### Data types - Public keys are base58 encoded strings - raw data such as Vec<u8\\> are base64 encoded strings 
 *
 * The version of the OpenAPI document: 6.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Prioritization fee lamports paid for the transaction in addition to the signatures fee. Mutually exclusive with compute_unit_price_micro_lamports. If `auto` is used, Jupiter will automatically set a priority fee and it will be capped at 5,000,000 lamports / 0.005 SOL.
 * @export
 * @interface SwapRequestPrioritizationFeeLamports
 */
export interface SwapRequestPrioritizationFeeLamports {
}

/**
 * Check if a given object implements the SwapRequestPrioritizationFeeLamports interface.
 */
export function instanceOfSwapRequestPrioritizationFeeLamports(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SwapRequestPrioritizationFeeLamportsFromJSON(json: any): SwapRequestPrioritizationFeeLamports {
    return SwapRequestPrioritizationFeeLamportsFromJSONTyped(json, false);
}

export function SwapRequestPrioritizationFeeLamportsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwapRequestPrioritizationFeeLamports {
    return json;
}

export function SwapRequestPrioritizationFeeLamportsToJSON(value?: SwapRequestPrioritizationFeeLamports | null): any {
    return value;
}

