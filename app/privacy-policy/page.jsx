import Link from "next/link";
import LegalPage from "../components/LegalPage";

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We collect information you choose to share with us when you ask for a quote, book a move or talk to our team. This may include:</p>
        <ul>
          <li>Your name and phone number</li>
          <li>Pickup and delivery addresses, and your moving date</li>
          <li>Details of the items, vehicles or goods to be moved, and the services you need</li>
          <li>Any other details you share while planning your move</li>
        </ul>
        <p>When you visit this website, basic technical information such as your IP address and browser type may be processed by our hosting provider and by the third-party services described below.</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <ul>
        <li>To prepare quotes and plan your move</li>
        <li>To contact you about your enquiry or booking</li>
        <li>To carry out packing, transport, storage and related services</li>
        <li>To arrange transit insurance if you ask for it</li>
        <li>To meet legal, tax and accounting requirements</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Sharing your information",
    body: (
      <>
        <p>We do not sell your personal information. We share it only when needed to provide our services or when required by law, for example with:</p>
        <ul>
          <li>Team members and transport partners who carry out your move</li>
          <li>Insurance providers, if you choose transit insurance</li>
          <li>Government or legal authorities, where the law requires it</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and third-party services",
    body: (
      <>
        <p>This website does not use advertising or tracking cookies of its own. Some pages load content from third parties:</p>
        <ul>
          <li>Google Fonts, for the typefaces used on the site</li>
          <li>Google Maps, for the office location on our <Link href="/contact">contact page</Link></li>
        </ul>
        <p>These services may collect information such as your IP address under their own privacy policies.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep information",
    body: <p>We keep your information only for as long as needed to provide our services and to meet legal, tax and accounting obligations. After that, it is deleted or anonymised.</p>,
  },
  {
    id: "security",
    title: "Keeping your information safe",
    body: <p>We take reasonable steps to protect the information you share with us. However, no method of storage or transmission is completely secure, so we cannot guarantee absolute security.</p>,
  },
  {
    id: "your-choices",
    title: "Your choices",
    body: <p>You can ask us to access, correct or delete the personal information we hold about you, subject to any legal requirement to keep it. To make a request, contact us using the details below.</p>,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>We may update this policy from time to time. The latest version will always be available on this page, with the date it was last updated.</p>,
  },
];

export const metadata = {
  title: "Privacy Policy | KhushiCargo",
  description: "How KhushiCargo Packers & Movers collects, uses and protects the information you share with us.",
};

export default function Page() {
  return (
    <LegalPage
      crumb="Privacy policy"
      title={<>Privacy<br /><em>policy.</em></>}
      intro="How KhushiCargo Packers & Movers collects, uses and protects the information you share with us."
      updated="29 October 2026"
      sections={sections}
    />
  );
}
