import type { Metadata } from 'next';
import Header from '../../components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';
import { IMAGES } from '@/constants/Images';
export const metadata: Metadata = {
  title: 'Home - Mardoli Youth Hub',
  description: 'Empowering young minds through community engagement and leadership development. Join a vibrant community of youth leaders making real impact in Mardoli District, Ghana.'
};

export default function Homepage() {
  const heroData = {
    title: "Empowering Young Minds Through Community Engagement",
    subtitle: "Join a vibrant community of youth leaders making real impact in Mardoli District",
    ctaButtons: [
    { label: "Join Our Community", href: "/join-us", variant: "primary" as const },
    { label: "Explore Programs", href: "/programs", variant: "secondary" as const }],

    backgroundImage: "https://images.unsplash.com/photo-1714765345861-545359049d8e",
    backgroundAlt: "Group of diverse young people in casual clothing standing together outdoors with raised fists in solidarity gesture"
  };

  const statsData = [
  {
    icon: "UsersIcon",
    value: 41,
    suffix: "+",
    label: "Active Members",
    color: "bg-accent"
  },
  {
    icon: "AcademicCapIcon",
    value: 15,
    suffix: "+",
    label: "Programs Offered",
    color: "bg-secondary"
  },
  {
    icon: "HeartIcon",
    value: 800,
    suffix: "+",
    label: "Volunteer Hours",
    color: "bg-success"
  },
  {
    icon: "TrophyIcon",
    value: 5,
    suffix: "+",
    label: "Awards Won",
    color: "bg-golden"
  }];


  const programsData = [
  {
    id: 1,
    title: "Clean Town Initiative",
    description: "Dedicated community drives focused on waste management and sanitation to ensure a healthier, greener environment for every resident in Panemangalore,Mardoli,Naila.",
    icon: "UserGroupIcon",
    image: IMAGES.Cleaning3,
    alt: "Diverse group of young professionals in business casual attire sitting around conference table during leadership workshop",
    participants: 50,
    category: "Development"
  },
  {
    id: 2,
    title: "Mardoli Premier League (MPL)",
    description: "Our flagship annual cricket tournament that has successfully completed three consecutive seasons, fostering sportsmanship and bringing together local talent on a professional platform.",
    icon: "TrophyIcon",
    image: IMAGES.MPL,
    alt: "Young volunteers in matching blue t-shirts planting trees together in community garden on sunny day",
    participants: 200,
    category: "Sports & Fitness"
  },
  {
    id: 3,
    title: "Volleyball Premier League(VPL)",
    description: "Expand your knowledge and skills through expert-led workshops covering technology, entrepreneurship, financial literacy, and personal development topics.",
    icon: "TrophyIcon",
    image:IMAGES.VolleyWinners,
    alt: "Young woman with glasses in yellow sweater presenting to attentive audience in modern classroom setting",
    participants: 50,
    category: "Sports & Fitness"
  },
  {
    id: 4,
    title: "Aatidonji Kesard Gammath",
    description: "A vibrant celebration of Mangalorean culture featuring traditional games in paddy fields. We bring the community together to honor our farming traditions while fostering spirit and camaraderie.",
    icon: "MusicalNoteIcon",
    image:IMAGES.KesardGammath,
    alt: "Athletic young people in sports gear running together on outdoor track during team training session",
    participants: 180,
    category: "Cultural & Traditional"
  },
  {
    id: 5,
    title: "Azadi Ka Amrit Mahotsav Celebration",
    description: "Bringing together people of all ages to honor the Indian Tricolor. Our Independence Day celebrations serve as a platform to remember our heroes and pledge our commitment to local community building",
    icon: "MusicalNoteIcon",
    image: IMAGES.FlagHoistMain,
    alt: "Young performers in colorful traditional Ghanaian clothing dancing on stage during cultural festival performance",
    participants: 20,
    category: "Culture & Traditional"
  },
  {
    id: 6,
    title: "Cultural & Devotional Patronage",
    description: "Providing essential logistical and volunteer support for local temple festivals, Daiva Aradhane, and cultural programs, ensuring our rich local traditions continue to thrive.",
    icon: "HandThumbUpIcon",
    image: IMAGES.HoreKanike,
    alt: "Professional mentor in navy suit reviewing documents with young mentee in modern office environment",
    participants: 110,
    category: "Community Pillar"
  }];


  const membersData = [
  {
    id: 1,
    name: "Charan KM",
    role: "Youth Leader & Community Organizer",
    achievement: "Led 15 successful community service projects reaching over 100 families",
    quote: "Joining Mardoli Youths club transformed my life. I discovered my passion for community service and developed leadership skills. The mentorship and support I received here shaped who I am today.",
    image: IMAGES.Charan,
    alt: "Young African man in white shirt smiling confidently at camera in outdoor setting with natural lighting",
    joinedYear: 2023
  },
  {
    id: 2,
    name: "Sunil Poojary",
    role: "Youth Leader & Community Organizer",
    achievement: "Led 20 successful community service projects reaching over 100 families",
    quote: "This organization gave me a platform to grow and inspire others. Through the leadership training program, I gained confidence to start my own social enterprise. Now I'm giving back by mentoring the next generation of young leaders.",
    image: IMAGES.Sunil,
    alt: "Young African woman in professional blazer with warm smile standing in modern office with arms crossed",
    joinedYear: 2023
  },
  {
    id: 3,
    name: "Shubham Nayak",
    role: "Youth Leader & Community Organizer",
    achievement: "Led 20 successful community service projects reaching over 100 families",
    quote: "Being a part of this club isn't just about organizing events; it’s about giving back to the place that raised us. Whether we are cleaning our streets or cheering at the Mardoli Premier League, there’s a sense of brotherhood here that you won’t find anywhere else.",
    image: IMAGES.Paandu,
    alt: "Athletic young man in red sports jersey holding soccer ball with confident expression on outdoor field",
    joinedYear: 2023
  }];


  const eventsData = [
  {
    id: 1,
    title: "Mardoli Premier League (MPL) S-4 2026",
    date: "To Be Announced",
    time: "To Be Announced",
    location: "MYC cricket ground panemanglore",
    category: "Sports & Events",
    description: "Mardoli Premier League Season 4 provided a professional platform for our local stars to shine. With over 150+ participants and thousands of spectators, we celebrated the spirit of sportsmanship and community unity through the game we love.",
    image: IMAGES.CricketMatch,
    alt: "Large conference hall filled with young attendees listening to speaker on stage during leadership summit",
    spotsLeft: 0
  },
  {
    id: 2,
    title: "Volleyball Premier League(VPL) s-3 2026",
    date: "To Be Announced",
    time: "To Be Announced",
    location: "Mardoli Cricket Ground",
    category: "Sports & Events",
    description: "Bringing the fastest-growing sport in Mangalore to the professional stage. Our Volleyball Premier League features high-energy matches, showcasing incredible athleticism and teamwork from local squads under the floodlights.",
    image:IMAGES.VolleyballAunction,
    alt: "Group of volunteers in matching green t-shirts collecting trash with bags and gloves in community park",
    spotsLeft: 0
  },
  {
    id: 3,
    title: "MPL S4 Player Auction 2026",
    date: "To Be Announced",
    time: "To Be Announced",
    location: "MYC Community Center",
    category: "Sports & Events",
    description: "Where strategy meets talent. Our Season 4 auction featured team owners competing to build their Dream XI from a pool of 150+ local players. With high-stakes bidding and strategic team compositions, the auction set the stage for our most competitive season yet.",
    image: IMAGES.CricketAunction,
    alt: "Young people sitting at computers in modern training room during digital skills workshop session",
    spotsLeft: 0
  },
  {
    id: 4,
    title: "VPL S3 Auction: The Squad Build",
    date: "To Be Announced",
    time: "To Be Announced",
    location: "MYC Community Center",
    category: "Sports & Events",
    description: "A landmark event for local volleyball, the VPL S3 Auction saw 8 franchise owners strategically bidding for the region's top spikers and setters. This professional draft system ensures balanced teams and high-octane competition on the court.",
    image: IMAGES.VolleyBallMAtch,
    alt: "Colorful traditional dancers in vibrant kente cloth performing on outdoor stage with enthusiastic crowd watching",
    spotsLeft: 0
  }];


  const testimonialsData = [
  {
    id: 1,
    name: "Karthik Kulal",
    role: "Active Member",
    content: "Mardoli Youths Club didn't just teach me leadership skills; it showed me the power of community and collective action. I'm forever grateful for the foundation this organization provided.",
    image: IMAGES.Karthik,
    alt: "Young African woman in graduation cap and gown smiling proudly while holding diploma certificate",
    rating: 5
  },
  {
    id: 2,
    name: "Yathin Bangera",
    role: "Active Member",
    content: "The entrepreneurship workshops and business mentorship program gave me the confidence and skills to start my own tech company. Today, I employ five people from our community. This organization truly changes lives and creates opportunities.",
    image: IMAGES.Yathin_Kulal,
    alt: "Young African man in business casual attire working on laptop in modern co-working space",
    rating: 5
  },
  {
    id: 3,
    name: "Shushank Poojary",
    role: "Active Member",
    content: "Through the community service programs, I discovered my calling to help others. The organization supported my journey into social work and continues to be a partner in my efforts to serve vulnerable populations in our district.",
    image: IMAGES.ShushankPoojary,
    alt: "Young woman in casual clothing smiling while distributing food packages to community members",
    rating: 5
  }];


  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HomepageInteractive
          heroData={heroData}
          statsData={statsData}
          programsData={programsData}
          membersData={membersData}
          eventsData={eventsData}
          testimonialsData={testimonialsData} />

      </main>
    </>);

}