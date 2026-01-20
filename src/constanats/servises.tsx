import {
  Code,
  Cpu,
  Layout,
  Palette,
  Smartphone,
  Bot,
  Video,
  Rocket,
  Home,
} from "lucide-react";

export const SERVISES = [
  {
    id: "branding",
    title: "Branding",
    subtitle: "Identity & Strategy",
    icon: Palette,
    shortDesc:
      "Your story is your strongest asset. We craft identities that resonate.",
    fullContent: {
      headline: "Your story is your strongest asset. Let’s tell it powerfully.",
      subheadline:
        "A logo is a signature. A brand is a handshake, a feeling, a memory.",
      body: [
        "We help you uncover the unique pulse of your business and translate it into a visual and verbal identity.",
        "From logo design to comprehensive brand guidelines, we ensure you stand out.",
      ],
    },
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    subtitle: "Digital Experience",
    icon: Layout,
    shortDesc:
      "Where beauty shakes hands with brainpower. Intuitive and stunning.",
    fullContent: {
      headline: "Design that works as good as it looks.",
      subheadline: "A beautiful website that’s confusing to use is a dead end.",
      body: [
        "We design digital experiences that are not only gorgeous to look at but incredibly easy to use.",
        "User-centric flows, high-fidelity prototypes, and immersive interactions.",
      ],
    },
  },
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Modern Engineering",
    icon: Code,
    shortDesc:
      "First impressions are digital. We build fast, secure, and scalable sites.",
    fullContent: {
      headline: "Fast. Secure. Scalable.",
      subheadline: "Your website is your 24/7 storefront.",
      body: [
        "We build fast, stunning, and strategic websites that do more than just exist—they perform.",
        "Using the latest tech stacks like Next.js and React for superior performance.",
      ],
    },
  },
  {
    id: "custom-apps",
    title: "Custom Web Apps",
    subtitle: "SaaS & Tools",
    icon: Cpu,
    shortDesc:
      "Your competitive edge. Software built specifically for your needs.",
    fullContent: {
      headline: "Software built for your specific needs.",
      subheadline: "Generic tools have limits. Custom software has none.",
      body: [
        "We build secure, scalable, and sophisticated web apps that act as your business’s central nervous system.",
        "From internal dashboards to customer-facing SaaS platforms.",
      ],
    },
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    subtitle: "iOS & Android",
    icon: Smartphone,
    shortDesc:
      "Native experiences that put your business in your customer's pocket.",
    fullContent: {
      headline: "Captivate users on the go.",
      subheadline: "Seamless mobile experiences for iOS and Android.",
      body: [
        "We develop high-performance mobile applications with smooth creates and offline capabilities.",
        "Cross-platform solutions that don't compromise on quality.",
      ],
    },
  },
  {
    id: "ai-agents",
    title: "Custom AI Agents",
    subtitle: "Automated Intel",
    icon: Bot,
    shortDesc:
      "Automate workflows and supercharge your business with custom AI.",
    fullContent: {
      headline: "The future of automation is here.",
      subheadline: "Work smarter, not harder.",
      body: [
        "We build custom AI agents and chatbots tailored to your business knowledge base.",
        "Automate customer support, lead generation, and internal processes effortlessly.",
      ],
    },
  },
  {
    id: "videography",
    title: "Videography",
    subtitle: "Cinematic Storytelling",
    icon: Video,
    shortDesc:
      "Motion evokes emotion. High-end brand films and commercial production.",
    fullContent: {
      headline: "Tell your story in motion.",
      subheadline: "Video is the most powerful medium on the web.",
      body: [
        "From corporate promos to social media reels, we produce cinematic content that captivates.",
        "Professional direction, editing, and color grading for a premium look.",
      ],
    },
  },
  {
    id: "property-photo",
    title: "Property Photography",
    subtitle: "Real Estate Excellence",
    icon: Home,
    shortDesc:
      "Showcase spaces in their best light. HDR photos and virtual tours.",
    fullContent: {
      headline: "Capture the essence of space.",
      subheadline: "Premium visual marketing for real estate and hospitality.",
      body: [
        "We provide high-dynamic-range (HDR) photography, drone shots, and 3D virtual tours.",
        "Perfect for architects, developers, and real estate professionals.",
      ],
    },
  },
  {
    id: "seo-growth",
    title: "SEO & Growth",
    subtitle: "Search Dominance",
    icon: Rocket, // or Search
    shortDesc:
      "Be found by the people who matter. Data-driven growth strategies.",
    fullContent: {
      headline: "Turn searchers into customers.",
      subheadline: "Visibility is the key to growth.",
      body: [
        "Comprehensive SEO audits, keyword strategy, and content optimization.",
        "We help you climb the rankings and dominate your local or global market.",
      ],
    },
  },
];
