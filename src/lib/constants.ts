import {
  Sparkles,
  Clock,
  MapPin,
  CalendarDays,
  Shirt,
  Hotel,
  Gift,
  HelpCircle,
  Lock,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

/* ============================================
   Theme Data
   ============================================ */

export interface ThemeData {
  name: string;
  description: string;
  palette: string[];
  accentColor: string;
  bgPattern: string;
}

export const THEMES: ThemeData[] = [
  {
    name: "Editorial",
    description:
      "Clean lines and timeless typography for the modern minimalist couple.",
    palette: ["#302B27", "#FDFDFC", "#D1AC60", "#80766D"],
    accentColor: "#302B27",
    bgPattern: "editorial",
  },
  {
    name: "Floral",
    description:
      "Watercolor blooms and soft pastels for a romantic garden celebration.",
    palette: ["#C4A882", "#F5E6D3", "#D4A574", "#8B7355"],
    accentColor: "#C4A882",
    bgPattern: "floral",
  },
  {
    name: "Botanical",
    description:
      "Lush greenery and organic illustrations for a nature-inspired wedding.",
    palette: ["#6B7F5E", "#F0EDE5", "#8FA878", "#4A5A3E"],
    accentColor: "#6B7F5E",
    bgPattern: "botanical",
  },
  {
    name: "Modern",
    description:
      "Bold geometry and contemporary design for couples who love the unexpected.",
    palette: ["#1A1A2E", "#F5F0E8", "#D1AC60", "#6B6B8D"],
    accentColor: "#1A1A2E",
    bgPattern: "modern",
  },
];

/* ============================================
   How It Works
   ============================================ */

export interface StepData {
  number: string;
  title: string;
  description: string;
}

export const STEPS: StepData[] = [
  {
    number: "01",
    title: "Choose Your Style",
    description:
      "Browse beautiful invitation designs and select a theme that matches your wedding.",
  },
  {
    number: "02",
    title: "Make It Yours",
    description:
      "Add your names, photos, wedding details, schedule, and other information. Preview your invitation before publishing.",
  },
  {
    number: "03",
    title: "Share and Celebrate",
    description:
      "Publish your invitation, share your link, and collect guest responses in one organized place.",
  },
];

/* ============================================
   Features
   ============================================ */

export interface FeatureData {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: FeatureData[] = [
  {
    icon: Sparkles,
    title: "Beautiful Opening Animations",
    description:
      "Delight your guests with an elegant animated introduction as they open your invitation.",
  },
  {
    icon: Clock,
    title: "Wedding Countdown",
    description:
      "Build anticipation with a beautiful countdown timer to your special day.",
  },
  {
    icon: MapPin,
    title: "Ceremony & Reception Locations",
    description:
      "Share venue addresses with interactive map links so guests can find their way easily.",
  },
  {
    icon: CalendarDays,
    title: "Wedding Schedule",
    description:
      "Guide your guests through the day with a clear timeline from ceremony to celebration.",
  },
  {
    icon: Shirt,
    title: "Dress Code",
    description:
      "Help guests arrive in style with clear attire guidance and color suggestions.",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description:
      "Recommend nearby hotels and lodging so guests can plan their trip with ease.",
  },
  {
    icon: Gift,
    title: "Gift Registry",
    description:
      "Share your registry links, gift ideas, or contribution details all in one place.",
  },
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    description:
      "Answer common guest questions about parking, children, timings, and more.",
  },
  {
    icon: Lock,
    title: "Private Invitation Access",
    description:
      "Protect your invitation with a password so only your invited guests can view it.",
  },
  {
    icon: UserCheck,
    title: "Online RSVP",
    description:
      "Collect guest responses instantly. No more chasing replies by phone or text.",
  },
];

/* ============================================
   Guest Management Stats
   ============================================ */

export interface GuestStat {
  label: string;
  value: string;
  color: string;
}

export const GUEST_STATS: GuestStat[] = [
  { label: "Total Invited", value: "148", color: "#302B27" },
  { label: "Attending", value: "96", color: "#6B7F5E" },
  { label: "Declined", value: "12", color: "#C4756E" },
  { label: "Pending", value: "40", color: "#D1AC60" },
];

export interface GuestRow {
  name: string;
  email: string;
  status: "Attending" | "Declined" | "Pending";
  plusOne: string;
  dietary: string;
}

export const SAMPLE_GUESTS: GuestRow[] = [
  {
    name: "Emma & James Watson",
    email: "emma.watson@email.com",
    status: "Attending",
    plusOne: "1",
    dietary: "Vegetarian",
  },
  {
    name: "David Chen",
    email: "d.chen@email.com",
    status: "Attending",
    plusOne: "0",
    dietary: "None",
  },
  {
    name: "Sarah & Michael Park",
    email: "sarah.park@email.com",
    status: "Pending",
    plusOne: "1",
    dietary: "—",
  },
  {
    name: "Olivia Martinez",
    email: "o.martinez@email.com",
    status: "Declined",
    plusOne: "0",
    dietary: "—",
  },
  {
    name: "William & Aisha Brown",
    email: "w.brown@email.com",
    status: "Attending",
    plusOne: "1",
    dietary: "Halal",
  },
];

/* ============================================
   Pricing
   ============================================ */

export const PRICING_FEATURES = [
  "All available themes",
  "Free customization & preview",
  "Unlimited guests",
  "Online RSVPs",
  "Plus-one management",
  "Dietary requirements tracking",
  "Guest management dashboard",
  "CSV export",
  "Edit after publishing",
  "Lifetime access",
] as const;

/* ============================================
   Articles
   ============================================ */

export interface ArticleData {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  imageGradient: string;
}

export const ARTICLES: ArticleData[] = [
  {
    title: "How to Create a Beautiful Digital Wedding Invitation",
    excerpt:
      "Everything you need to know about designing a stunning digital invitation that your guests will love opening.",
    category: "Design",
    readTime: "5 min read",
    imageGradient: "from-[#F5F0E8] to-[#E8DFD0]",
  },
  {
    title: "Wedding Invitation Wording: A Complete Guide",
    excerpt:
      "From formal to casual, find the perfect words for your wedding invitation with our comprehensive wording guide.",
    category: "Etiquette",
    readTime: "8 min read",
    imageGradient: "from-[#E8E5DD] to-[#DDD8CC]",
  },
  {
    title: "What Information Should You Include in Your Wedding Invitation?",
    excerpt:
      "A practical checklist of everything your guests need to know, from venue details to dress code.",
    category: "Planning",
    readTime: "4 min read",
    imageGradient: "from-[#EDE8DD] to-[#E0D9CA]",
  },
  {
    title: "How to Make Your Wedding RSVP Process Easier",
    excerpt:
      "Simplify guest responses and keep your wedding planning stress-free with these RSVP management tips.",
    category: "Organization",
    readTime: "6 min read",
    imageGradient: "from-[#F0EBE0] to-[#E5DDD0]",
  },
];

/* ============================================
   FAQ
   ============================================ */

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Can I create my wedding invitation for free?",
    answer:
      "Yes! You can choose a theme, customize your invitation, and preview it as many times as you like, completely free. You only pay a one-time fee of $49.99 when you are ready to publish and share your invitation with guests.",
  },
  {
    question: "Do I need all my wedding details before starting?",
    answer:
      "Not at all. You can start designing your invitation with as little or as much information as you have. Add details as your plans come together — you can update your invitation at any time, even after it has been published.",
  },
  {
    question: "Can I customize my invitation?",
    answer:
      "Absolutely. Every theme is fully customizable. Add your names, wedding date, photos, schedule, venue details, dress code, accommodation suggestions, gift registry, and more. Make it uniquely yours.",
  },
  {
    question: "Can I edit my invitation after publishing?",
    answer:
      "Yes. Plans change, and we understand that. You can update your invitation details at any time after publishing. Your guests will always see the latest version at the same link.",
  },
  {
    question: "How do guests RSVP?",
    answer:
      "Guests can RSVP directly on your invitation page. They simply open the link you share, view your beautiful invitation, and respond with their attendance, plus-one details, dietary requirements, and any other information you have asked for.",
  },
  {
    question: "Do my guests need an account?",
    answer:
      "No. Your guests do not need to create an account, download an app, or sign up for anything. They simply open the link in their browser and respond.",
  },
  {
    question: "Can I invite unlimited guests?",
    answer:
      "Yes. There is no limit on the number of guests you can invite. Whether you are planning an intimate gathering or a grand celebration, every guest is included at no extra cost.",
  },
  {
    question: "Can I protect my invitation with a password?",
    answer:
      "Yes. You can add an access code to your invitation so only the people you have invited can view it. This gives you control over who sees your wedding details.",
  },
  {
    question: "Is the payment recurring?",
    answer:
      "No. Eventful uses simple, one-time pricing. You pay $49.99 once when you publish your invitation. There are no subscriptions, no monthly fees, and no per-guest charges.",
  },
  {
    question: "How long will my invitation stay online?",
    answer:
      "Your invitation will stay online for as long as you want it to. Keep it as a beautiful digital keepsake of your wedding day. You can unpublish it at any time if you choose to.",
  },
];
