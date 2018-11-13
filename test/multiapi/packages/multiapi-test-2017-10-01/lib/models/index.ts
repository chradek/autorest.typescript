/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing AutoRestParameterizedHostTestClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface AutoRestParameterizedHostTestClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [host] A string value that is used as a global part of
   * the parameterized host. Default value: 'host' .
   */
  host?: string;
}

