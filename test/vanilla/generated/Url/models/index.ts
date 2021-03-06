/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/core-http";
import * as coreHttp from "@azure/core-http";

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing AutoRestUrlTestServiceOptions.
 */
export interface AutoRestUrlTestServiceOptions extends ServiceClientOptions {
  /**
   * should contain value null
   */
  globalStringQuery?: string;
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface QueriesGetBooleanNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * null boolean value
   */
  boolQuery?: boolean;
}

/**
 * Optional Parameters.
 */
export interface QueriesGetIntNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * null integer value
   */
  intQuery?: number;
}

/**
 * Optional Parameters.
 */
export interface QueriesGetLongNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * null 64 bit integer value
   */
  longQuery?: number;
}

/**
 * Optional Parameters.
 */
export interface QueriesFloatNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * null numeric value
   */
  floatQuery?: number;
}

/**
 * Optional Parameters.
 */
export interface QueriesDoubleNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * null numeric value
   */
  doubleQuery?: number;
}

/**
 * Optional Parameters.
 */
export interface QueriesStringNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * null string value
   */
  stringQuery?: string;
}

/**
 * Optional Parameters.
 */
export interface QueriesEnumValidOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * 'green color' enum value. Possible values include: 'red color', 'green color', 'blue color'
   */
  enumQuery?: UriColor;
}

/**
 * Optional Parameters.
 */
export interface QueriesEnumNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * null string value. Possible values include: 'red color', 'green color', 'blue color'
   */
  enumQuery?: UriColor;
}

/**
 * Optional Parameters.
 */
export interface QueriesByteMultiByteOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   */
  byteQuery?: Uint8Array;
}

/**
 * Optional Parameters.
 */
export interface QueriesByteNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * null as byte array (no query parameters in uri)
   */
  byteQuery?: Uint8Array;
}

/**
 * Optional Parameters.
 */
export interface QueriesDateNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * null as date (no query parameters in uri)
   */
  dateQuery?: Date;
}

/**
 * Optional Parameters.
 */
export interface QueriesDateTimeNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * null as date-time (no query parameters)
   */
  dateTimeQuery?: Date;
}

/**
 * Optional Parameters.
 */
export interface QueriesArrayStringCsvValidOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * csv-array format
   */
  arrayQuery?: string[];
}

/**
 * Optional Parameters.
 */
export interface QueriesArrayStringCsvNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * a null array of string using the csv-array format
   */
  arrayQuery?: string[];
}

/**
 * Optional Parameters.
 */
export interface QueriesArrayStringCsvEmptyOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * an empty array [] of string using the csv-array format
   */
  arrayQuery?: string[];
}

/**
 * Optional Parameters.
 */
export interface QueriesArrayStringSsvValidOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * ssv-array format
   */
  arrayQuery?: string[];
}

/**
 * Optional Parameters.
 */
export interface QueriesArrayStringTsvValidOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * tsv-array format
   */
  arrayQuery?: string[];
}

/**
 * Optional Parameters.
 */
export interface QueriesArrayStringPipesValidOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * pipes-array format
   */
  arrayQuery?: string[];
}

/**
 * Optional Parameters.
 */
export interface PathItemsGetAllWithValuesOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * should contain value 'localStringQuery'
   */
  localStringQuery?: string;
  /**
   * A string value 'pathItemStringQuery' that appears as a query parameter
   */
  pathItemStringQuery?: string;
}

/**
 * Optional Parameters.
 */
export interface PathItemsGetGlobalQueryNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * should contain value 'localStringQuery'
   */
  localStringQuery?: string;
  /**
   * A string value 'pathItemStringQuery' that appears as a query parameter
   */
  pathItemStringQuery?: string;
}

/**
 * Optional Parameters.
 */
export interface PathItemsGetGlobalAndLocalQueryNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * should contain null value
   */
  localStringQuery?: string;
  /**
   * A string value 'pathItemStringQuery' that appears as a query parameter
   */
  pathItemStringQuery?: string;
}

/**
 * Optional Parameters.
 */
export interface PathItemsGetLocalPathItemQueryNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * should contain value null
   */
  localStringQuery?: string;
  /**
   * should contain value null
   */
  pathItemStringQuery?: string;
}

/**
 * Defines values for UriColor.
 * Possible values include: 'red color', 'green color', 'blue color'
 * @readonly
 * @enum {string}
 */
export type UriColor = 'red color' | 'green color' | 'blue color';
