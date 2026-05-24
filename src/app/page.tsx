"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Collections",
          id: "products",
        },
        {
          name: "Deals",
          id: "deals",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
      ]}
      brandName="LUXE WATCH"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Timeless Elegance, Modern Precision."
      description="Curated selection of world-class luxury watches delivered to your wrist. Experience craftsmanship at its finest."
      testimonials={[
        {
          name: "James Anderson",
          handle: "@janderson",
          testimonial: "The best selection of luxury timepieces online. Authentic and beautifully curated.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-successful-busy-man-white-shirt-black-jacket-with-tablet-looking-watch-stylish-businessman-being-busy-time-work-meeting-leadership_197531-2361.jpg",
        },
        {
          name: "Sophie Miller",
          handle: "@sophiemiller",
          testimonial: "Found my dream watch here. The affiliate process was smooth and secure.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-stylish-pretty-young-woman-look-professional-cross-hands-chest-smiling-confident-camera-wear-glasses-standing-near-reception-office-hall-discuss-business_197531-22165.jpg",
        },
        {
          name: "Marko R.",
          handle: "@marko_r",
          testimonial: "Unbeatable deals on top-tier brands. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-talking-phone_23-2148660681.jpg",
        },
        {
          name: "Sarah Lee",
          handle: "@slee_design",
          testimonial: "Incredible quality and reliable service. My go-to watch shop.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-handsome-man-suit-street-look-his-watch_158538-10193.jpg",
        },
        {
          name: "David Chen",
          handle: "@dchen_horology",
          testimonial: "The curation is exceptional. Found rare vintage models here.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/time-eat-young-handsome-dark-skinned-unsatisfied-man-with-afro-hairstyle-black-leather-jacket-pointing-hand-watch-showing-his-friend-that-they-need-eat-somewhere_176420-11122.jpg",
        },
      ]}
      buttons={[
        {
          text: "Browse Collection",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/new-year-party-concept-with-girl-holding-clock_23-2147995152.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/picture-businesslike-man-speaking-mobile-phone-while-going-meeting-checking-time-with-watch-hand_171337-5225.jpg",
          alt: "Business professional portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-focused-young-sportsman-adjusting-his-wristwatch_171337-7777.jpg",
          alt: "Sports enthusiast with watch",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-confident-entrepreneur_1098-21617.jpg",
          alt: "Confident entrepreneur",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-portrait_93675-133802.jpg",
          alt: "Businesswoman portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280717.jpg",
          alt: "Sophisticated woman portrait",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Rolex",
          name: "Submariner Gold",
          price: "$12,400",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-image-redhead-bearded-male-holds-cup-coffee-grey-background_613910-10244.jpg",
        },
        {
          id: "2",
          brand: "Omega",
          name: "Speedmaster Pro",
          price: "$8,200",
          rating: 4,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-serious-curly-haired-woman-checks-pulse-neck-focused-smartwatch-dressed-sportswear-monitors-heart-rate-from-wrist-poses-outdoors-sporty-female-uses-workout-tracker_273609-60543.jpg",
        },
        {
          id: "3",
          brand: "Patek",
          name: "Nautilus Steel",
          price: "$45,000",
          rating: 5,
          reviewCount: "20",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-buttoning-vest_1153-1464.jpg",
        },
        {
          id: "4",
          brand: "Tag Heuer",
          name: "Carrera Sport",
          price: "$3,500",
          rating: 4,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-time-machine_23-2151599400.jpg",
        },
        {
          id: "5",
          brand: "Cartier",
          name: "Santos De Gold",
          price: "$6,900",
          rating: 5,
          reviewCount: "67",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-watch-bikini_23-2147640417.jpg",
        },
        {
          id: "6",
          brand: "Seiko",
          name: "Presage Auto",
          price: "$1,200",
          rating: 4,
          reviewCount: "340",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-overcoat-posing-studio_158538-11462.jpg",
        },
      ]}
      title="Trending Timepieces"
      description="Featured watches trending this month in the luxury circuit."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "The Gold Standard of Watch Collecting",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/friends-going-hiking-winter_23-2150198170.jpg",
          alt: "Luxury watch",
        },
      ]}
      buttons={[
        {
          text: "Explore Luxury",
          href: "#products",
        },
      ]}
    />
  </div>

  <div id="brands" data-section="brands">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Rolex",
        "Omega",
        "Patek Philippe",
        "Cartier",
        "Audemars Piguet",
        "Tag Heuer",
        "Seiko",
      ]}
      title="Luxury Brands Showcase"
      description="Authentic partnerships with the world's most prestigious horology houses."
    />
  </div>

  <div id="deals" data-section="deals">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          tag: "Seasonal",
          price: "$2,500",
          period: "Sale Price",
          description: "Entry-level luxury models at exclusive affiliate rates.",
          button: {
            text: "Buy Now",
          },
          featuresTitle: "Included Perks",
          features: [
            "Verified Authenticity",
            "Fast Shipping",
            "Worldwide Warranty",
          ],
        },
        {
          id: "pro",
          tag: "Elite",
          price: "$8,900",
          period: "Sale Price",
          description: "Professional high-end timepieces with massive savings.",
          button: {
            text: "Buy Now",
          },
          featuresTitle: "Premium Benefits",
          features: [
            "Certified Service",
            "Insured Delivery",
            "Priority Support",
          ],
        },
      ]}
      title="Best Offers & Deals"
      description="Limited time discounts on top luxury models."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "James Anderson",
          role: "CEO",
          testimonial: "Excellent service and genuine products.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-sportsman_171337-7778.jpg",
        },
        {
          id: "2",
          name: "Sophie Miller",
          role: "Manager",
          testimonial: "Fast shipping and secure transaction.",
          imageSrc: "http://img.b2bpic.net/free-photo/redhead-female-supervisor-dressed-elegant-suit-grey-background_613910-1352.jpg",
        },
        {
          id: "3",
          name: "Marko R.",
          role: "Collector",
          testimonial: "Authentic timepieces, highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-funny-expression_1194-3076.jpg",
        },
        {
          id: "4",
          name: "Sarah Lee",
          role: "Designer",
          testimonial: "Love the premium feel of the watch.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-cheerful-woman-with-dark-curly-hair-sitting-table-happily-showing-fashion-illustration-laptop-while-spending-time-modern-cozy-workshop-with-big-windows_574295-525.jpg",
        },
        {
          id: "5",
          name: "John Doe",
          role: "Executive",
          testimonial: "Top class customer service and care.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-welldressed-arabian-man-smoke-cigar-with-glass-whiskey-balcony-pub_627829-5920.jpg",
        },
      ]}
      title="Collector Experiences"
      description="Trusted by horology enthusiasts worldwide."
    />
  </div>

  <div id="newsletter" data-section="newsletter">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Stay Updated"
      title="Join the Elite Club"
      description="Get exclusive deals and the latest watch releases directly in your inbox."
      buttons={[
        {
          text: "Subscribe Now",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Luxury",
              href: "#",
            },
            {
              label: "Sports",
              href: "#",
            },
            {
              label: "Smart",
              href: "#",
            },
          ],
        },
        {
          title: "Account",
          items: [
            {
              label: "Login",
              href: "#",
            },
            {
              label: "Wishlist",
              href: "#",
            },
            {
              label: "Support",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
          ],
        },
      ]}
      logoText="LUXE WATCH"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
