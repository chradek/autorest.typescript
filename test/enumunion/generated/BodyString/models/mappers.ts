/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RefColorConstant: msRest.CompositeMapper = {
  serializedName: "RefColorConstant",
  type: {
    name: "Composite",
    className: "RefColorConstant",
    modelProperties: {
      colorConstant: {
        required: true,
        isConstant: true,
        serializedName: "ColorConstant",
        defaultValue: 'green-color',
        type: {
          name: "String"
        }
      },
      field1: {
        serializedName: "field1",
        type: {
          name: "String"
        }
      }
    }
  }
};
