"use client";

import { ConsentManagerProvider as C15TConsentManagerProvider } from "@c15t/nextjs";

import { CookieBanner } from "@/components/consent-manager/cookie-banner";
import { ConsentManagerDialog } from "@/components/consent-manager/consent-manager-dialog";

import { type PropsWithChildren } from "react";

import { setConsent, showConsentBanner, verifyConsent } from "./handlers";

export function ConsentManagerProvider({ children }: PropsWithChildren) {
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
      {children}
    </C15TConsentManagerProvider>
  );
}
