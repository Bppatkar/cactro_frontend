import React from "react";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  // Data for pricing plans
  const pricingPlans = [
    {
      title: "Free",
      description: "A smarter, simpler way to chat and collaborate.",
      features: [
        "90 days of message history",
        "Ten app integrations",
        "1:1 audio and video meetings",
      ],
      buttonText: "GET STARTED",
    },
    {
      title: "Pro",
      description: "More power for small teams who want to accelerate work.",
      features: [
        "Everything in Free, and:",
        "Unlimited message history, app integrations, and automations",
        "Group audio and video meetings",
        "Collaborate with people outside your organisation",
        "Create and manage projects in documents and lists",
        "Slack AI add-on available",
      ],
      buttonText: "GET STARTED",
    },
    {
      title: "Business+",
      description: "Scale your business, productivity, and team connection.",
      features: [
        "Everything in Pro, and:",
        "User provisioning and deprovisioning",
        "SAML-based single sign-on",
        "Data exports for all messages",
        "Message activity analytics",
        "Slack AI add-on available",
      ],
      buttonText: "GET STARTED",
    },
    {
      title: "Enterprise Grid",
      description:
        "Maximise performance and productivity at every level of your enterprise.",
      features: [
        "Everything in Business+, and:",
        "Unlimited workspaces",
        "Built-in employee directory",
        "HIPAA-compliant",
        "Advanced management tools",
        "Slack AI add-on available",
      ],
      buttonText: "GET STARTED",
    },
  ];

  return (
    <section className="bg-orange-50 py-16">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            There’s a subscription for every kind of team.
          </h2>
          <p className="text-gray-600 text-lg">
            Start with a premium subscription, or try the free version.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
