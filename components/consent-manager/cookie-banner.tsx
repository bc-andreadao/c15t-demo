'use client';

import { CookieBanner as C15TCookieBanner, CookieBannerProps } from '@c15t/nextjs';
import { PropsWithChildren } from 'react';

import { Button } from '@/vibes/soul/primitives/button';

function CookieBannerTitle() {

  return (
    <C15TCookieBanner.Title asChild>
      <div className="font-heading !text-xl">We value your privacy</div>
    </C15TCookieBanner.Title>
  );
}

function CookieBannerDescription() {

  return (
    <C15TCookieBanner.Description asChild>
      <div className="font-body">This site uses cookies to improve your browsing experience, analyze site traffic, and show personalized content.</div>
    </C15TCookieBanner.Description>
  );
}

function CookieBannerFooter({ children }: PropsWithChildren) {
  return (
    <C15TCookieBanner.Footer asChild>
      <div className="!border-none !bg-transparent !pt-0">{children}</div>
    </C15TCookieBanner.Footer>
  );
}

function CookieBannerRejectButton() {
  return (
    <C15TCookieBanner.RejectButton asChild noStyle themeKey="banner.footer.reject-button">
      <Button size="small" variant="tertiary">
        Reject All
      </Button>
    </C15TCookieBanner.RejectButton>
  );
}

function CookieBannerAcceptButton() {
  return (
    <C15TCookieBanner.AcceptButton asChild noStyle themeKey="banner.footer.accept-button">
      <Button size="small" variant="primary">
        Accept All
      </Button>
    </C15TCookieBanner.AcceptButton>
  );
}

function CookieBannerCustomizeButton() {

  return (
    <C15TCookieBanner.CustomizeButton asChild noStyle themeKey="banner.footer.customize-button">
      <Button size="small" variant="secondary">
        Customize
      </Button>
    </C15TCookieBanner.CustomizeButton>
  );
}

export function CookieBanner({
  theme,
  noStyle,
  disableAnimation,
  scrollLock,
  trapFocus,
}: CookieBannerProps) {
  return (
    <C15TCookieBanner.Root
      disableAnimation={disableAnimation}
      noStyle={noStyle}
      scrollLock={scrollLock}
      theme={theme}
      trapFocus={trapFocus}
    >
      <C15TCookieBanner.Card className="!max-w-lg">
        <C15TCookieBanner.Header>
          <CookieBannerTitle />
          <CookieBannerDescription />
        </C15TCookieBanner.Header>
        <CookieBannerFooter>
          <C15TCookieBanner.FooterSubGroup>
            <CookieBannerRejectButton />
            <CookieBannerAcceptButton />
          </C15TCookieBanner.FooterSubGroup>
          <CookieBannerCustomizeButton />
        </CookieBannerFooter>
      </C15TCookieBanner.Card>
    </C15TCookieBanner.Root>
  );
}