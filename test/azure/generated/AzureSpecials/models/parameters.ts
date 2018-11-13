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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2.0',
    type: {
      name: "String"
    }
  }
};
export const apiVersion2: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "apiVersion"
  ],
  mapper: {
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const fooClientRequestId0: msRest.OperationParameter = {
  parameterPath: "fooClientRequestId",
  mapper: {
    required: true,
    serializedName: "foo-client-request-id",
    type: {
      name: "String"
    }
  }
};
export const fooClientRequestId1: msRest.OperationParameter = {
  parameterPath: [
    "headerCustomNamedRequestIdParamGroupingParameters",
    "fooClientRequestId"
  ],
  mapper: {
    required: true,
    serializedName: "foo-client-request-id",
    type: {
      name: "String"
    }
  }
};
export const orderby: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "orderby"
  ],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};
export const q10: msRest.OperationQueryParameter = {
  parameterPath: "q1",
  mapper: {
    required: true,
    serializedName: "q1",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const q11: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "q1"
  ],
  mapper: {
    serializedName: "q1",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const q12: msRest.OperationQueryParameter = {
  parameterPath: "q1",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "q1",
    defaultValue: 'value1&q2=value2&q3=value3',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};
export const unencodedPathParam0: msRest.OperationURLParameter = {
  parameterPath: "unencodedPathParam",
  mapper: {
    required: true,
    serializedName: "unencodedPathParam",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const unencodedPathParam1: msRest.OperationURLParameter = {
  parameterPath: "unencodedPathParam",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "unencodedPathParam",
    defaultValue: 'path1/path2/path3',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const xMsClientRequestId: msRest.OperationParameter = {
  parameterPath: "xMsClientRequestId",
  mapper: {
    required: true,
    serializedName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};
