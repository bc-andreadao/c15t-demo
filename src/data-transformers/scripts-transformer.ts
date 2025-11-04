import type { ConsentManagerProviderProps } from '@c15t/nextjs/client';
import { type BigCommerceScriptsResult } from '@/src/script-data';

import { transformedScripts } from '@/src/script-data';

type BigCommerceScripts = BigCommerceScriptsResult['scripts'] | null;
type C15tScripts = NonNullable<ConsentManagerProviderProps['options']['scripts']>;

export function scriptsTransformer(scripts: BigCommerceScripts): C15tScripts {

    // Transform scripts to C15tScripts format
    // For details, see https://github.com/bigcommerce/catalyst/blob/canary/core/data-transformers/scripts-transformer.ts 
    console.log("Transform scripts ...")

    return transformedScripts;

}