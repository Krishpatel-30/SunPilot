import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate are the solar calculations?",
    answer:
      "SunPilot uses industry-standard formulas and project data to provide reliable estimates. Final values can be adjusted during detailed engineering.",
  },
  {
    question: "Can I generate branded proposal PDFs?",
    answer:
      "Yes. You can customize your company logo, colors, pricing, and proposal content.",
  },
  {
    question: "Does SunPilot support team collaboration?",
    answer:
      "Yes. Multiple users can manage customers, projects, and proposals together.",
  },
  {
    question: "Can I use SunPilot on mobile devices?",
    answer:
      "Yes. The platform is fully responsive and works on desktops, tablets, and smartphones.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every new account will receive a free trial before selecting a paid plan.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know about SunPilot.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 w-full"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger>
                {faq.question}
              </AccordionTrigger>

              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}