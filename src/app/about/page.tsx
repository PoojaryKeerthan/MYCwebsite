import type { Metadata } from 'next';
import Header from '../../components/common/Header';
import HeroSection from './components/HeroSection';
import OurStorySection from './components/OurStorySection';
import AboutInteractive from './components/AboutInteractive';
import { IMAGES } from '@/constants/Images';

export const metadata: Metadata = {
  title: 'About Us - Mardoli Youths Club',
  description: 'Learn about Mardoli Youths club\'s founding mission, leadership team, community impact, and the values that drive our commitment to empowering young minds through community engagement in Ghana.'
};

export default function AboutPage() {
  const heroData = {
    title: "Empowering Young Minds Through Community Engagement",
    subtitle: "Our Story",
    description: "Since our founding, Mardoli Youths club has been a beacon for young people seeking purpose, connection, and opportunities to make meaningful impact in their communities across Bantwal taluk.",
    heroImage: IMAGES.MYC_Logo || "https://img.rocket.new/generatedImages/rocket_gen_img_135eef728-1764694159531.png",
    heroImageAlt: "Group of diverse young African students smiling and collaborating together in bright modern classroom"
  };

  const milestones = [
  {
    year: "2023",
    title: "Foundation & Vision",
    description: "Established on July 23, 2023, the Mardoli Youth Club (MYC) was built to provide a safe, empowering space for the village's young generation. We focus on transforming the youth of Mardoli into future leaders through hands-on community service and leadership development.",
    icon: "SparklesIcon"
  },
  {
    year: "2023",
    title: "First Community Impact",
    description: "Founded through collaborative team discussions, our club successfully launched with a series of community-led activities, fostering leadership and unity among our inaugural members.",
    icon: "UserGroupIcon"
  },
  {
    year: "2023",
    title: "Expansion & Growth",
    description: "Despite global challenges, we expanded our programs to includesports activities, and cultural events supports, growing our membership to 20+ active youth.",
    icon: "ChartBarIcon"
  },
  {
    year: "2024",
    title: "Partnership Development",
    description: "By uniting with diverse teams and local clubs, we successfully co-hosted a wide range of community activities, building a powerful network of shared resources and youth-led initiatives.",
    icon: "HandshakeIcon"
  },
  {
    year: "2025",
    title: "Sustainable Future",
    description: "Implemented sustainability initiatives and launched our alumni mentorship program, creating a continuous cycle of empowerment and community impact.",
    icon: "RocketLaunchIcon"
  }];


  const leaders = [
  {
    name: "Charan KM",
    position: "Team member & Founder",
    image: IMAGES.Charan || "https://img.rocket.new/generatedImages/rocket_gen_img_1aec18a92-1763295015355.png",
    imageAlt: "Portrait of Charan KM",
    bio: "As a founding member of MYC, Charan has been instrumental in uniting the youth of Mardoli. He played a key role in conceptualizing our flagship sports tournaments and cultural festivals.",
    vision: "To see Mardoli YC become a beacon of unity where sports and culture bring every household in our district together.",
    email: "charan.km@mardoliyouths.com"
  },
  {
    name: "Sunil Poojary",
    position: "Team member & Founder",
    image: IMAGES.Sunil || "https://img.rocket.new/generatedImages/rocket_gen_img_1aec18a92-1763295015355.png",
    imageAlt: "Portrait of Sunil Poojary",
    bio: "Sunil is the driving force behind our community outreach. He specializes in organizing large-scale events that celebrate our local heritage and talent.",
    vision: "I believe MYC should be a platform where every young person finds a mentor and every talent finds a stage.",
    email: "sunil.p@mardoliyouths.com"
  },
  {
    name: "Akhil Bangera",
    position: "Team member & Founder",
    image: IMAGES.Akhil || "https://img.rocket.new/generatedImages/rocket_gen_img_100f7f646-1763296066756.png",
    imageAlt: "Portrait of Akhil Bangera",
    bio: "With a keen eye for logistics, Akhil has managed the technical aspects of the Mardoli Premier League (MPL), ensuring professional-grade sporting experiences for our local teams.",
    vision: "My goal is to elevate Mardoli's local sports scene to a professional level, giving our athletes the recognition they deserve.",
    email: "akhil.b@mardoliyouths.com"
  },
  {
    name: "Sathya Aithal",
    position: "Team member & Founder",
    image: IMAGES.Sathya || "https://img.rocket.new/generatedImages/rocket_gen_img_1eeaaee3d-1763293897657.png",
    imageAlt: "Portrait of Sathya Aithal",
    bio: "Sathya bridges the gap between traditional values and modern youth leadership. He has been a core organizer for our annual cultural activities and community service projects.",
    vision: "To preserve our Mardoli culture while empowering the next generation with modern leadership skills.",
    email: "sathya.a@mardoliyouths.com"
  },
  {
    name: "Mahesh Kulal",
    position: "Team member & Founder",
    image: IMAGES.Mahesh || "https://img.rocket.new/generatedImages/rocket_gen_img_1b88637b0-1763291920814.png",
    imageAlt: "Portrait of Mahesh Kulal",
    bio: "Mahesh is a key strategist for MYC’s sports initiatives, including the VPL. He focuses on building team spirit and discipline among the youth through competitive sports.",
    vision: "Through sports like MPL and VPL, I aim to build a disciplined and healthy youth community in Mardoli.",
    email: "mahesh.k@mardoliyouths.com"
  },
  {
    name: "Anil Kottari",
    position: "Team member & Founder",
    image: IMAGES.Anil || "https://img.rocket.new/generatedImages/rocket_gen_img_14630540c-1763301271336.png",
    imageAlt: "Portrait of Anil Kottari",
    bio: "Anil handles the community relations and sponsorship for MYC. His work ensures that our activities remain sustainable and inclusive for all sections of society.",
    vision: "To create a self-sustaining ecosystem where local businesses and youth work together for Mardoli’s development.",
    email: "anil.k@mardoliyouths.com"
  },
  {
    name: "Shubham Nayak",
    position: "Team member & Founder",
    image: IMAGES.Paandu || "https://img.rocket.new/generatedImages/rocket_gen_img_1eeaaee3d-1763293897657.png",
    imageAlt: "Portrait of Shubham Nayak",
    bio: "Shubham is passionate about the digital growth of MYC. He ensures our activities, from MPL to cultural nights, reach a wide audience through creative storytelling.",
    vision: "My vision is to make Mardoli Youth Club a digital model for community engagement that other districts look up to.",
    email: "shubham.n@mardoliyouths.com"
  },
  {
    name: "Achal Bangera",
    position: "Team member & Founder",
    image: IMAGES.Achal || "https://img.rocket.new/generatedImages/rocket_gen_img_1b88637b0-1763291920814.png",
    imageAlt: "Portrait of Achal Bangera",
    bio: "Achal specializes in youth coordination. He is the link between the founders and the newer members, ensuring the spirit of MYC stays consistent across all events.",
    vision: "I want to ensure that every activity we conduct leaves a lasting impact on the personal growth of our members.",
    email: "achal.b@mardoliyouths.com"
  },
  {
    name: "Lathesh Banjan",
    position: "Team member & Founder",
    image: IMAGES.Putta || "https://img.rocket.new/generatedImages/rocket_gen_img_14630540c-1763301271336.png",
    imageAlt: "Portrait of Lathesh Banjan",
    bio: "Lathesh is a dedicated volunteer leader who has overseen the ground operations for our volleyball tournaments and community cleanliness drives.",
    vision: "Cleanliness, Sports, and Service—my vision is to see these three pillars define the youth of Mardoli.",
    email: "lathesh.b@mardoliyouths.com"
  }
];


  const metrics = [
  {
    value: 41,
    label: "Active Members",
    icon: "UsersIcon",
    suffix: "+"
  },
  {
    value: 10,
    label: "Programs Completed",
    icon: "AcademicCapIcon",
    suffix: "+"
  },
  {
    value: 1000,
    label: "Community Members Impacted",
    icon: "HeartIcon",
    suffix: "+"
  },
  {
    value: 5,
    label: "Partner Organizations",
    icon: "BuildingOfficeIcon",
    suffix: "+"
  }];


 const testimonials = [
  {
    name: "Sanvith",
    role: "Youth Member",
    image: IMAGES.Sanvith || "https://images.unsplash.com/photo-1718609256733-b1c7645735f1",
    imageAlt: "Portrait of Sanvith",
    testimonial: "Being part of MYC is like being part of a huge family. Organizing the Mardoli Premier League (MPL) gave me real leadership experience, and it’s amazing to see our whole community coming together for sports.",
    rating: 5
  },
  {
    name: "Adithya Kulal",
    role: "Youth Member",
    image: IMAGES.Adithya || "https://img.rocket.new/generatedImages/rocket_gen_img_180d36757-1763296172839.png",
    imageAlt: "Portrait of Adithya Kulal",
    testimonial: "MYC isn't just about fun and games; it's about growth. Participating in the VPL and our cultural festivals helped me build confidence and connect with mentors who truly care about the future of Mardoli's youth.",
    rating: 5
  },
  {
    name: "Saish Kulal",
    role: "Youth Member",
    image: IMAGES.Saish || "https://img.rocket.new/generatedImages/rocket_gen_img_1703231c0-1765278179841.png",
    imageAlt: "Portrait of Saish Kulal",
    testimonial: "From blood donation drives to grand cultural nights, MYC has taught me the importance of social responsibility. I'm proud to be a member of a club that works so hard to keep our traditions alive while supporting each other.",
    rating: 5
  }
];


  const partners = [
  {
    name: "Mardoli Friends Mardoli",
    logo: IMAGES.Mardoli1 || "https://img.rocket.new/generatedImages/rocket_gen_img_1602b4f33-1765709289141.png",
    logoAlt: "Ghana Education Service official logo with national colors and educational symbols",
    category: "Supportive Club"
  },
  {
    name: "Mardoli Mahila Mandala",
    logo: IMAGES.Mardoli2 ||"https://img.rocket.new/generatedImages/rocket_gen_img_1705864c9-1766424126408.png",
    logoAlt: "Mardoli District Assembly emblem featuring local landmarks and community symbols",
    category: "Supportive Club"
  },
 ];


  const values = [
  {
    title: "Empowerment",
    description: "We believe in unlocking the potential within every young person, providing them with tools, knowledge, and opportunities to become leaders in their communities.",
    icon: "BoltIcon"
  },
  {
    title: "Community",
    description: "We foster a sense of belonging and collective responsibility, recognizing that together we are stronger and can achieve greater impact.",
    icon: "UserGroupIcon"
  },
  {
    title: "Integrity",
    description: "We operate with transparency, honesty, and accountability in all our programs and partnerships, building trust within our community.",
    icon: "ShieldCheckIcon"
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, continuously improving our programs to deliver maximum value to our members.",
    icon: "StarIcon"
  },
  {
    title: "Innovation",
    description: "We embrace creative solutions and new approaches to youth development, adapting to changing needs while staying true to our mission.",
    icon: "LightBulbIcon"
  },
  {
    title: "Inclusivity",
    description: "We welcome young people from all backgrounds, creating a diverse and inclusive environment where everyone feels valued and respected.",
    icon: "HeartIcon"
  }];


  const alumni = [
  {
    name: "Emmanuel Darko",
    currentRole: "Software Engineer",
    company: "Tech Solutions Ghana Ltd",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc72cde4-1763293898558.png",
    imageAlt: "Professional headshot of young African man in business casual attire with confident smile",
    story: "My journey with Mardoli Youth Hub began in 2019 when I joined as a shy teenager with big dreams but no clear path. The leadership training and mentorship I received helped me discover my passion for technology. Today, I'm a software engineer contributing to digital transformation in Ghana.",
    yearJoined: "2019",
    achievements: [
    "Completed advanced coding bootcamp with distinction",
    "Secured full scholarship for Computer Science degree",
    "Now mentoring 10+ youth in technology skills",
    "Developed mobile app used by 5,000+ Ghanaians"]

  },
  {
    name: "Akua Frimpong",
    currentRole: "Community Development Officer",
    company: "Ghana Youth Authority",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb2fd956-1763293568388.png",
    imageAlt: "Professional portrait of young African woman in professional attire with warm smile",
    story: "Mardoli Youth Hub taught me that leadership is about service. Through various community projects, I learned to identify needs, mobilize resources, and create sustainable solutions. This foundation led me to a career in community development where I now impact thousands of young lives.",
    yearJoined: "2020",
    achievements: [
    "Led 15+ successful community service projects",
    "Received National Youth Service Award 2023",
    "Established youth empowerment program in 3 districts",
    "Published research on youth-led community development"]

  }];


  const videoTestimonials = [
  {
    name: "Hon. Dr. Kwame Boateng",
    role: "District Chief Executive",
    organization: "Mardoli District Assembly",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3e35cd2-1765082983896.png",
    thumbnailAlt: "Professional portrait of African government official in formal attire at official event",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Mrs. Comfort Adjei",
    role: "Regional Director",
    organization: "Ghana Education Service",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1da4cec25-1763300231160.png",
    thumbnailAlt: "Professional photo of African woman education official in office setting with books",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }];


  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <HeroSection {...heroData} />
        <OurStorySection
          title="Our Journey"
          description="From humble beginnings to becoming a leading youth empowerment organization in Mardoli, our story is one of passion, perseverance, and unwavering commitment to young people."
          milestones={milestones} />

        <AboutInteractive
          leaders={leaders}
          metrics={metrics}
          testimonials={testimonials}
          partners={partners}
          values={values}
          alumni={alumni}
          videoTestimonials={videoTestimonials} />

      </div>
    </main>);

}