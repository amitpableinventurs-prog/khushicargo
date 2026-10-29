import Link from "next/link";
import LegalPage from "../components/LegalPage";

const sections = [
  {
    id: "about-these-terms",
    title: "About these terms",
    body: <p>These terms apply when you use this website or book services with KhushiCargo Packers &amp; Movers (“KhushiCargo”, “we”, “us”). By booking a move with us, you agree to these terms along with any specific terms in your quote or booking confirmation.</p>,
  },
  {
    id: "our-services",
    title: "Our services",
    body: <p>We provide packing and moving, household and office relocation, vehicle shifting, warehousing, industrial shifting, loading and unloading, and help arranging transit insurance. The exact services, dates and charges for your move are those agreed in your quote or booking confirmation.</p>,
  },
  {
    id: "quotes-and-charges",
    title: "Quotes and charges",
    body: (
      <ul>
        <li>Quotes are based on the details you give us, such as the items to be moved, locations, access and moving date.</li>
        <li>If these details change, or you ask for extra services, the charges may change. We will discuss any change in charges with you before going ahead.</li>
        <li>Taxes, tolls and other applicable charges are included or listed separately, as stated in your quote.</li>
      </ul>
    ),
  },
  {
    id: "booking-and-payment",
    title: "Booking, payment and cancellation",
    body: (
      <ul>
        <li>A booking is confirmed once you accept the quote and complete any advance payment requested.</li>
        <li>Payment terms, including any advance and the balance due, are as stated in your quote or booking confirmation.</li>
        <li>If you need to cancel or reschedule, please tell us as early as possible. Cancellation or rescheduling charges, if any, will be as communicated at the time of booking.</li>
      </ul>
    ),
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities",
    body: (
      <ul>
        <li>Give us accurate details about your goods, addresses and moving date.</li>
        <li>Keep cash, jewellery, important documents and other valuables with you. These should not be handed over for transport.</li>
        <li>Do not include hazardous, illegal or prohibited items, such as gas cylinders, fuel, explosives, flammable liquids or perishable food.</li>
        <li>Arrange any permissions needed for access, parking or lift use at both locations.</li>
        <li>Be present, or have someone you trust present, at pickup and delivery.</li>
      </ul>
    ),
  },
  {
    id: "insurance-and-liability",
    title: "Transit insurance and liability",
    body: (
      <>
        <p>Transit insurance is optional and available on request. Insurance claims are handled under the terms of the insurance policy.</p>
        <p>We handle every move with care. Our liability for loss or damage is limited as set out in your booking confirmation and applicable law, including the Carriage by Road Act, 2007. We are not responsible for:</p>
        <ul>
          <li>Items packed by you, where we could not check their contents or condition</li>
          <li>Normal wear, or the existing condition of items before the move</li>
          <li>Damage caused by the nature of an item itself, such as electrical or mechanical faults</li>
        </ul>
      </>
    ),
  },
  {
    id: "delays",
    title: "Delays",
    body: <p>We do our best to keep to the agreed schedule. Delivery dates are estimates, and we are not responsible for delays caused by events outside our control, such as weather, traffic, road closures, strikes, accidents or government restrictions.</p>,
  },
  {
    id: "delivery-and-claims",
    title: "Delivery and claims",
    body: <p>Please check your belongings at the time of delivery and note any visible loss or damage on the delivery receipt. Report any loss or damage to us as soon as possible, and within the period stated in your booking confirmation or insurance policy.</p>,
  },
  {
    id: "storage",
    title: "Storage",
    body: <p>If you use our <Link href="/services/warehousing-services">warehousing services</Link>, storage charges apply for the agreed period. Stored goods are released once outstanding charges have been paid.</p>,
  },
  {
    id: "website-use",
    title: "Use of this website",
    body: <p>The information on this website is for general guidance and may change without notice. Links to third-party websites are provided for convenience, and we are not responsible for their content.</p>,
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: <p>These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of the courts in Indore, Madhya Pradesh.</p>,
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: <p>We may update these terms from time to time. The version on this page applies from the date it was last updated.</p>,
  },
];

export const metadata = {
  title: "Terms & Conditions | KhushiCargo",
  description: "The terms that apply when you use the KhushiCargo website or book packing, moving and storage services with us.",
};

export default function Page() {
  return (
    <LegalPage
      crumb="Terms & conditions"
      title={<>Terms &amp;<br /><em>conditions.</em></>}
      intro="The terms that apply when you use this website or book packing, moving and storage services with KhushiCargo."
      updated="29 October 2026"
      sections={sections}
    />
  );
}
