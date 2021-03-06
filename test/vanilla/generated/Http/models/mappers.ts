/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";


export const ErrorModel: coreHttp.CompositeMapper = {
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

export const A: coreHttp.CompositeMapper = {
  serializedName: "A",
  type: {
    name: "Composite",
    className: "A",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const B: coreHttp.CompositeMapper = {
  serializedName: "B",
  type: {
    name: "Composite",
    className: "B",
    modelProperties: {
      ...A.type.modelProperties,
      textStatusCode: {
        serializedName: "textStatusCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const C: coreHttp.CompositeMapper = {
  serializedName: "C",
  type: {
    name: "Composite",
    className: "C",
    modelProperties: {
      httpCode: {
        serializedName: "httpCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const D: coreHttp.CompositeMapper = {
  serializedName: "D",
  type: {
    name: "Composite",
    className: "D",
    modelProperties: {
      httpStatusCode: {
        serializedName: "httpStatusCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsHead300Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-head300-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsHead300Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsGet300Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-get300-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsGet300Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsHead301Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-head301-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsHead301Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsGet301Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-get301-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsGet301Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsPut301Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-put301-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsPut301Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsHead302Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-head302-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsHead302Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsGet302Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-get302-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsGet302Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsPatch302Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-patch302-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsPatch302Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsPost303Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-post303-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsPost303Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsHead307Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-head307-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsHead307Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsGet307Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-get307-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsGet307Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsPut307Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-put307-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsPut307Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsPatch307Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-patch307-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsPatch307Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsPost307Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-post307-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsPost307Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpRedirectsDelete307Headers: coreHttp.CompositeMapper = {
  serializedName: "httpredirects-delete307-headers",
  type: {
    name: "Composite",
    className: "HttpRedirectsDelete307Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};
