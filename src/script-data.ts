export type BigCommerceScriptsResult = {
  scripts: {
    edges: Array<{
      node: {
        __typename: 'InlineScript' | 'SrcScript';
        integrityHashes: Array<{
          hash: string;
        }>;
        entityId: string;
        consentCategory: 'ANALYTICS' | 'ESSENTIAL' | 'FUNCTIONAL' | 'TARGETING' | 'UNKNOWN';
        visibility: 'ALL_PAGES' | 'STOREFRONT' | 'CHECKOUT' | 'ORDER_CONFIRMATION';
      } & (
        | {
            __typename: 'InlineScript';
            scriptTag: string;
          }
        | {
            __typename: 'SrcScript';
            src: string;
          }
      );
    }>;
  };
};

type RootData = {
  data: {
    site: {
      content: {
        scripts: BigCommerceScriptsResult['scripts'];
      };
    };
  };
};

export const rootData: RootData = {
  data: {
    site: {
      content: {
        scripts: {
          edges: [
            {
              node: {
                __typename: "InlineScript" as const,
                entityId: "1",
                integrityHashes: [],
                consentCategory: "ESSENTIAL",
                visibility: "ALL_PAGES",
                scriptTag: "<script>console.log('This is sample script for ESSENTIAL')</script>"
              }
            },
            {
              node: {
                __typename: "InlineScript" as const,
                entityId: "2",
                integrityHashes: [],
                consentCategory: "ANALYTICS",
                visibility: "ALL_PAGES",
                scriptTag: "<script>console.log('This is sample script for ANALYTICS')</script>"
              }
            },
            {
              node: {
                __typename: "InlineScript" as const,
                entityId: "3",
                integrityHashes: [],
                consentCategory: "FUNCTIONAL",
                visibility: "ALL_PAGES",
                scriptTag: "<script>console.log('This is sample script for FUNCTIONAL')</script>"
              }
            },
            {
              node: {
                __typename: "InlineScript" as const,
                entityId: "4",
                integrityHashes: [],
                consentCategory: "TARGETING",
                visibility: "ALL_PAGES",
                scriptTag: "<script>console.log('This is sample script for TARGETING')</script>"
              }
            },
          ]
        },
      },
    },
  }
};


export const transformedScripts = [
  {
    category: 'necessary' as const,
    id: '1',
    textContent: "console.log('This is sample script for ESSENTIAL')",
    attributes: undefined
  },
  {
    category: 'measurement' as const,
    id: '2',
    textContent: "console.log('This is sample script for ANALYTICS')",
    attributes: undefined
  },
  {
    category: 'functionality' as const,
    id: '3',
    textContent: "console.log('This is sample script for FUNCTIONAL')",
    attributes: undefined
  },
  {
    category: 'marketing' as const,
    id: '4',
    textContent: "console.log('This is sample script for TARGETING')",
    attributes: undefined
  }
]