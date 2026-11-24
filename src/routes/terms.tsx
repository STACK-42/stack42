import { createFileRoute } from "@tanstack/react-router";

import { A, LegalPage, List, type LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — stack42" },
      {
        name: "description",
        content: "The terms for using stack42.tech and the things we link to from it.",
      },
      { property: "og:title", content: "Terms & Conditions — stack42" },
      { property: "og:url", content: "https://www.stack42.tech/terms" },
    ],
  }),
  component: Terms,
});

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement",
    body: (
      <>
        <p>
          These terms apply to your use of the stack42 website at <strong>stack42.tech</strong>{" "}
          (this site). By using this site, you agree to them. If you don't agree, please don't use
          the site.
        </p>
        <p>
          &ldquo;stack42&rdquo;, &ldquo;we&rdquo; and &ldquo;us&rdquo; mean the stack42 group that
          runs this site.
        </p>
      </>
    ),
  },
  {
    id: "products",
    title: "Our products",
    body: (
      <p>
        This site showcases products we build (csdecoded, schoolers, aeset, peeko, relaunch). Each
        one runs on its own site or on your device and may come with its own terms, privacy policy
        or open-source license. When it does, those apply to that product, and they take priority
        over these terms where the two differ.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <List>
          <li>use this site in any way that breaks the law;</li>
          <li>
            try to disrupt, overload or gain unauthorized access to the site or the systems behind
            it;
          </li>
          <li>
            scrape or copy the site in bulk in a way that harms it or misrepresents your copy as
            ours.
          </li>
        </List>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <p>
          The stack42 name, wordmark, logos, product names, icons and the site's design and text
          belong to stack42. You may link to this site and mention our products by name, but please
          don't use our branding in a way that suggests we endorse you or your project.
        </p>
        <p>
          Source code we publish on <A href="https://github.com/stack-42">GitHub</A> is covered by
          the license in each repository, not by this section.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party links",
    body: (
      <p>
        This site links to websites and services we don't control, such as GitHub. We aren't
        responsible for their content, availability or practices, and using them is subject to their
        own terms.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "No warranty",
    body: (
      <p>
        stack42 is an experimental lab. This site and everything on it is provided{" "}
        <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>, without warranties of
        any kind, express or implied, including fitness for a particular purpose, accuracy and
        non-infringement. We may change, pause or remove the site or any product at any time.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the fullest extent the law allows, stack42 and its members are not liable for any
        indirect, incidental, special or consequential damages, or for any loss of data, profits or
        goodwill, arising from your use of (or inability to use) this site. Nothing in these terms
        limits liability that cannot be limited under the law that applies to you.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <p>
        How this site handles data is explained in our <A href="/privacy">Privacy Policy</A>.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. When we do, we'll change the date at the top of
        this page. Continuing to use the site after a change means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these terms? Reach us through our GitHub organization at{" "}
        <A href="https://github.com/stack-42">github.com/stack-42</A>.
      </p>
    ),
  },
];

function Terms() {
  return (
    <LegalPage
      tag="[§] TERMS & CONDITIONS"
      title="Terms"
      updated="NOV 24, 2026"
      intro={<p>The ground rules for using this site. Written to be read, not skimmed past.</p>}
      sections={sections}
    />
  );
}
