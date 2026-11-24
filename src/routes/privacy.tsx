import { createFileRoute } from "@tanstack/react-router";

import { A, LegalPage, List, type LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — stack42" },
      {
        name: "description",
        content: "What stack42.tech collects (almost nothing), why, and what you can do about it.",
      },
      { property: "og:title", content: "Privacy Policy — stack42" },
      { property: "og:url", content: "https://www.stack42.tech/privacy" },
    ],
  }),
  component: Privacy,
});

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "What this covers",
    body: (
      <>
        <p>
          This policy covers the stack42 website at <strong>stack42.tech</strong> (this site). Each
          of our products (csdecoded, schoolers, aeset, peeko, relaunch) runs on its own site or on
          your own device. Where a product handles personal data, its own privacy policy explains
          how, and that policy is the one that applies to it.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p>
          Very little. This site is a static showcase. It has no accounts, no sign-up forms, no
          comment boxes and no newsletter, so there is nowhere for you to type personal information
          in.
        </p>
        <p>
          We do <strong>not</strong> use analytics, advertising trackers, tracking pixels or
          fingerprinting on this site, and we set no cookies.
        </p>
      </>
    ),
  },
  {
    id: "technical-data",
    title: "Technical data from services we rely on",
    body: (
      <>
        <p>
          Like any website, loading this one means your browser talks to some servers, and those
          servers see the basic details every web request carries: your IP address, browser type
          (user agent), the page requested and the time.
        </p>
        <List>
          <li>
            <strong>Hosting.</strong> Our hosting provider may keep short-lived server logs of these
            requests to keep the site running and secure (for example, to block abuse). We don't use
            these logs to identify or profile visitors.
          </li>
          <li>
            <strong>Google Fonts.</strong> The typefaces are loaded from Google Fonts, so your
            browser requests them from Google's servers. Google describes how it handles that data
            in its <A href="https://developers.google.com/fonts/faq/privacy">Fonts privacy FAQ</A>.
          </li>
        </List>
      </>
    ),
  },
  {
    id: "links",
    title: "Links to other sites",
    body: (
      <p>
        This site links to our products, to GitHub and to other websites. Once you follow a link you
        are on a site with its own privacy practices, which this policy does not cover.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Selling and sharing",
    body: (
      <p>
        We don't sell personal data, and we don't share it with anyone for advertising. Beyond the
        service providers named above, we only disclose information if the law requires us to.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Depending on where you live (for example under the EU/UK GDPR or California's CCPA), you
          may have the right to ask what personal data we hold about you, and to have it corrected
          or deleted. Because this site itself doesn't collect personal data, in most cases the
          honest answer will be that we hold none.
        </p>
        <p>
          For data held by our hosting provider or by Google Fonts, contact them directly, or ask us
          and we'll help where we can.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        This site isn't aimed at children under 13, and we don't knowingly collect personal data
        from them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        If we change how this site handles data, we'll update this page and the date at the top. If
        we ever start collecting personal data here, we'll say so on this page before we do.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about privacy? Reach us through our GitHub organization at{" "}
        <A href="https://github.com/stack-42">github.com/stack-42</A>.
      </p>
    ),
  },
];

function Privacy() {
  return (
    <LegalPage
      tag="[§] PRIVACY POLICY"
      title="Privacy"
      updated="NOV 24, 2026"
      intro={
        <p>
          Short version: this site doesn't track you. No analytics, no cookies, no forms. Here's the
          full picture, in plain words.
        </p>
      }
      sections={sections}
    />
  );
}
