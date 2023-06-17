// import images
import LogoImg from "../src/assets/img/header/logo.png";
import HeroImg from "../src/assets/img/hero/image.svg";
import OverviewProductImg from "../src/assets/img/overview/product.png";
import ShopeeImg from "../src/assets/img/overview/brands/shopee.png";
import GoogleImg from "../src/assets/img/overview/brands/google.png";
import KompasImg from "../src/assets/img/overview/brands/kompas.png";
import NoiceImg from "../src/assets/img/overview/brands/noice.png";
import SamsungImg from "../src/assets/img/overview/brands/thenewyorktimes.png";
import Feature1Img from "../src/assets/img/features/feature1-img.svg";
import Feature2Img from "../src/assets/img/features/feature2-img.svg";
import Feature3Img from "../src/assets/img/features/feature3-img.svg";
import ArrowRightImg from "../src/assets/img/features/arrow-right.svg";
import CardIconImg1 from "../src/assets/img/product/cards/speedometer.png";
import CardIconImg2 from "../src/assets/img/product/cards/shield.png";
import CardIconImg3 from "../src/assets/img/product/cards/database.png";
import PricingIcon1 from "../src/assets/img/pricing/icon1.svg";
import PricingIcon2 from "../src/assets/img/pricing/icon2.svg";
import PricingIcon3 from "../src/assets/img/pricing/icon3.svg";
import AvatarImg1 from "../src/assets/img/testimonial/avatar1.png";
import AvatarImg2 from "../src/assets/img/testimonial/avatar2.png";
import AvatarImg3 from "../src/assets/img/testimonial/avatar3.png";
import AvatarImg4 from "../src/assets/img/testimonial/avatar4.png";
import AvatarImg5 from "../src/assets/img/testimonial/avatar5.png";
import CtaImg1 from "../src/assets/img/cta/image1.svg";
import CtaImg2 from "../src/assets/img/cta/image2.svg";
import FacebookIcon from "../src/assets/img/copyright/facebook.svg";
import TwitterIcon from "../src/assets/img/copyright/twitter.svg";
import LinkedinIcon from "../src/assets/img/copyright/linkedin.svg";

export const header = {
  logo: LogoImg,
  btnText: "Request a demo",
};

export const nav = [
  { name: "Features", href: "/" },
  { name: "About us", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Feedback", href: "/" },
];

export const hero = {
  title: "#1 Web Hosting In The World",
  subtitle: "Empower Your Digital Journey with Hostking Web Hosting Solutions",
  btnText: "Try free demo",
  compText: "— Web, iOS and Android",
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: ShopeeImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: KompasImg,
      delay: 500,
    },
    {
      image: NoiceImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: "Web hosting stabil & cepat",
    title: "Pengalaman Web Yang Cepat",
    subtitle:
      "Web hosting kami menawarkan performa yang cepat dan responsif. Dengan web hosting yang cepat, Anda dapat memberikan pengalaman pengguna yang optimal.",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: "Keamanan",
    title: "Menjamin Keamanan Web Anda",
    subtitle:
      "Memberikan perlindungan keamanan yang kokoh untuk melindungi anda dari serangan malware, hacking, atau ancaman keamanan lainnya. Dengan fitur keamanan yang kuat, data anda aman dan privasi pengunjung situs Anda terjaga.",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: "Experience",
    title: "Pengalaman Pengguna yang Baik",
    subtitle:
      "Anda dapat memberikan pengalaman pengguna yang baik kepada pengunjung situs web kami. Meningkatkan tingkat kepuasan pengguna dan membantu membangun kepercayaan mereka terhadap brand atau organisasi anda",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: "Fitur Yang Kami Tawarkan",
  subtitle:
    "Powering Your Online Presence: Unleashing Our Feature-packed Web Hosting Services",
  cards: [
    {
      icon: CardIconImg1,
      title: "Maximum Speed",
      subtitle:
        "Experience Maximum Speed with Our Cutting-Edge Web Hosting Services",
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: "Full Security",
      subtitle: "Unleashing Full Security with Our Robust Web Hosting Services",
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: "Unlimited Storage",
      subtitle:
        "Empower Your Website with Unlimited Storage through Our Web Hosting Services",
      delay: 600,
    },
  ],
};

export const pricing = {
  title: "Choose your flexible plan.",
  cards: [
    {
      icon: PricingIcon1,
      title: "Pelajar",
      services: [
        { name: "1 Akun Email" },
        { name: "Unlimited Bandwith" },
        { name: "Unlimited Database" },
        { name: "1 Domain" },
        { name: "Gratis Sertifikat SSL" },
      ],
      price: "$9.99",
      userAmount: "up to 3 user + 1.99 per user",
      btnText: "Get this",
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: "Personal",
      services: [
        { name: "Unlimited Akun Email" },
        { name: "Unlimited Bandwith" },
        { name: "Unlimited Database" },
        { name: "Unlimited SSD Disk Space" },
        { name: "Gratis Domain" },
        { name: "10 Tambahan Add-On Domain" },
        { name: "Gratis Sertifikat SSL" },
      ],
      price: "$19.99",
      userAmount: "up to 3 user + 1.99 per user",
      btnText: "Get this",
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: "Enterprise",
      services: [
        { name: "Unlimited Akun Email" },
        { name: "Unlimited Bandwith" },
        { name: "Unlimited Database" },
        { name: "Unlimited SSD Disk Space" },
        { name: "Gratis Domain" },
        { name: "Unlimited Tambahan Add-On Domain" },
        { name: "Gratis Sertifikat SSL" },
      ],
      price: "$29.99",
      userAmount: "up to 3 user + 1.99 per user",
      btnText: "Get this",
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: "We have millions of best wishers",
  clients: [
    {
      message:
        "Waduh saya terkejut dengan kecepatan server pada web hosting ini ternyata sangat cepat sekali😱",
      image: AvatarImg1,
      name: "Aditya",
      position: "Freelancer",
      borderColor: "#FF7235",
    },
    {
      message:
        "Hostking dapat diandalkan, ketika web hosting lain sedang mengalami down, Hostking tetap aman dan cepat",
      image: AvatarImg2,
      name: "Latif Faqih",
      position: "Product Manager",
      borderColor: "#FFBE21",
    },
    {
      message:
        "Dulu website ku sering diserang oleh hacker, tapi semenjak saya menggunakan web hosting dari Hostking website ku selalu aman dari serangan hacker",
      image: AvatarImg3,
      name: "Alviansyah",
      position: "Mahasiswa Untirta",
      borderColor: "#4756DF",
    },
    {
      message:
        "Saya sungguh beruntung menemukan web hosting dari Hostking ini, harganya yang murah cocok penggunaan personal seperti saya. Saya sangat merekomendasikan Hostking",
      image: AvatarImg4,
      name: "Ibrahim",
      position: "CEO",
      borderColor: "#3EC1F3",
    },
    {
      message:
        "Kecepatan akses pada website yang dihosting oleh Hostking sangat bagus, aku sangat merekomendasikan Hostking sebagai pilihan utama di industri web hosting",
      image: AvatarImg5,
      name: "Jamal",
      position: "Pemain Bola",
      borderColor: "#BB7259",
    },
  ],
};

export const cta = {
  title: "2000+ Web From 32 Different Countries Use Our Services",
  subtitle: "Get 3 Months Free, Start With $9.99",
  btnText: "Get Started",
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: "Home", href: "/" },
    { name: "About us", href: "/" },
    { name: "Careers", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Features", href: "/" },
    { name: "Blog", href: "/" },
  ],
  legal: [
    { name: "Terms of use", href: "/" },
    { name: "Terms of conditions", href: "/" },
    { name: "Privacy policy", href: "/" },
    { name: "Cookie policy", href: "/" },
  ],
  newsletter: {
    title: "Newsletter",
    subtitle: "Over 25000 people have subscribed",
  },
  form: {
    placeholder: "Enter your email",
    btnText: "Subscribe",
    smallText: "We don't sell your email and spam",
  },
};

export const copyright = {
  link1: {
    name: "Privacy & Terms",
    href: "/",
  },
  link2: {
    name: "Contact us",
    href: "/",
  },
  copyText: "Copyright @ 2022 xpence",
  social: [
    { icon: FacebookIcon, href: "/" },
    { icon: TwitterIcon, href: "/" },
    { icon: LinkedinIcon, href: "/" },
  ],
};
