/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const comp0: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'list',
    type: {
      name: "String"
    }
  }
};
export const comp1: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'properties',
    type: {
      name: "String"
    }
  }
};
export const comp2: coreHttp.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'acl',
    type: {
      name: "String"
    }
  }
};
export const restype0: coreHttp.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'service',
    type: {
      name: "String"
    }
  }
};
export const restype1: coreHttp.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'container',
    type: {
      name: "String"
    }
  }
};
