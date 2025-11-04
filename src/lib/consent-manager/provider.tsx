"use client";

import { ConsentManagerProvider as C15TConsentManagerProvider } from "@c15t/nextjs";

import { CookieBanner } from "@/components/consent-manager/cookie-banner";
import { ConsentManagerDialog } from "@/components/consent-manager/consent-manager-dialog";

import { ClientSideOptionsProvider } from "@c15t/nextjs/client";
import type { ComponentProps, PropsWithChildren } from "react";

import { setConsent, showConsentBanner, verifyConsent } from "./handlers";

export type C15tScripts = NonNullable<
  ComponentProps<typeof ClientSideOptionsProvider>["scripts"]
>;

interface ConsentManagerProviderProps extends PropsWithChildren {
  scripts: C15tScripts;
}

export function ConsentManagerProvider({
  children,
  scripts,
}: ConsentManagerProviderProps) {
  return (
    <C15TConsentManagerProvider
      options={{
        mode: "custom",
        consentCategories: [
          "necessary",
          "functionality",
          "marketing",
          "measurement",
        ],

        // @ts-expect-error endpointHandlers type is not yet exposed by the package
        endpointHandlers: {
          showConsentBanner,
          setConsent,
          verifyConsent,
        },
      }}
    >
      <CookieBanner />
      <ConsentManagerDialog />
      <ClientSideOptionsProvider scripts={scripts}>
        {children}
      </ClientSideOptionsProvider>
    </C15TConsentManagerProvider>
  );
}
