'use client';

import React, { useState, useEffect } from 'react';
import ProgramCard from './ProgramCard';
import CategoryFilter from './CategoryFilter';
import LevelFilter from './LevelFilter';
import SearchBar from './SearchBar';
import ProgramDetailModal from './ProgramDetailModal';
import RegistrationModal from './RegistrationModal';
import SuccessMessage from './SuccessMessage';
import Icon from '../../../components/ui/AppIcon';
import { IMAGES } from '@/constants/Images';

interface Program {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  participants: number;
  image: string[];
  alt: string;
  tags: string[];
  schedule: string;
  instructor: string;
  fullDescription: string;
  objectives: string[];
  requirements: string[];
  benefits: string[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface Level {
  id: string;
  name: string;
  icon: string;
}

interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  experience: string;
  motivation: string;
  availability: string;
}

const ProgramsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [registrationProgram, setRegistrationProgram] = useState<Program | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockPrograms: Program[] = [
    {
      id: 1,
      title: 'Mardoli Premier League (MPL)',
      category: 'Sports & Fitness',
      description: 'The Mardoli Premiere League (MPL) is the premier sporting event of the Mardoli community, designed to unite youth through the spirit of cricket.',
      duration: '2 days',
      level: 'Intermediate',
      participants: 100,
      image:[IMAGES.MPL,IMAGES.MPL2,IMAGES.Guest,IMAGES.Guest2,IMAGES.Guest3,IMAGES.MPLJerseyRelease,IMAGES.MPLJerseyRelease2,IMAGES.MPLPoster,IMAGES.MycRunners,IMAGES.PosterLaunch,IMAGES.PosterLaunch3,IMAGES.PosterLaunch4,IMAGES.PosterRelease] ,
      alt: 'Group of diverse young people in business attire collaborating around a conference table with laptops and documents',
      tags: ['Leadership', 'Communication', 'Team Building'],
      schedule: '31st March - 1st April 2024',
      instructor: 'Sports Committee',
      fullDescription: 'The Mardoli Premiere League (MPL) is the flagship cricket tournament of the Mardoli Youth Club, designed to promote local talent and community unity. Following two successful foundation years, Season 3 took place on March 31 and April 1, 2024, featuring 8 teams competing for a ₹30,000 winners prize and the MPL Trophy, with a ₹15,000 prize for the runners-up. The event was honored by chief guests Shailesh Poojary Kucchigudde, Sanjeev Kulal, Santhosh Veeramaruthi, and Akshatha D Salian, marking it as a premier sporting and leadership milestone for the region.',
      objectives: [
        'Create a professional platform for local cricket talent to showcase their skills',
        'Foster community unity and brotherhood through healthy sports competition',
        'Develop youth leadership by involving members in tournament organization and team management',
        'Promote physical fitness and a disciplined lifestyle among the youth of Mardoli',
        'Build a prestigious brand for Mardoli sports that attracts regional attention'
      ],

      requirements: [
        'Open to all registered members and local talent within the specified age brackets',
        'Mandatory attendance for team auctions and pre-tournament strategy meetings',
        'Strict adherence to the MPL Code of Conduct and sportsmanship spirit',
        'Commitment to participate in both match days (March 31st & April 1st)',
        'Active involvement in ground preparation and event coordination'
      ],

      benefits: [
        'Opportunity to win grand cash prizes (₹30,000 for Winners / ₹15,000 for Runners-up)',
        'Official MPL trophies and individual awards (Man of the Match, Series, etc.)',
        'Direct exposure to community leaders and distinguished chief guests',
        'Enhanced visibility through social media coverage and local press',
        'Practical experience in high-pressure teamwork and strategic game planning'
      ]

    },
    {
      id: 2,
      title: 'Volleyball Premier League(VPL)',
      category: 'Sports & Fitness',
      description: 'The Volleyball Premier League (VPL) is a major annual sporting event organized by the Mardoli Youth Club to celebrate the regions passion for volleyball.',
      duration: '1 day',
      level: 'Beginner',
      participants: 35,
      image: [IMAGES.VolleyWinners] ,
      alt: 'Young volunteers in matching t-shirts picking up litter in a park with trash bags and gloves',
      tags: ['sports', 'Community', 'Teamwork', 'Sustainability'],
      schedule: '19th june 2024, 9:00 PM - 7:00 AM',
      instructor: 'Sports Committee',
      fullDescription: 'The Volleyball Premier League (VPL) is an exclusive internal tournament organized by the Mardoli Youth Club (MYC) specifically for its members. Designed to strengthen the bond within the club, the league features 5 dedicated teams competing in a high-energy format. The champions are honored with a ₹2,000 cash prize and the VPL Trophy, while the runners-up receive a ₹1,000 prize and a trophy. More than just a competition, the VPL serves as a vital platform for MYC members to showcase their athleticism and reinforce the spirit of brotherhood that defines the club.',
      objectives: [
        'Clean and beautify designated public spaces and streets in Mardoli',
        'Educate local households on waste segregation and plastic-free living',
        'Promote environmental awareness and the preservation of our local greenery',
        'Strengthen the spirit of teamwork among MYC members through social service',
        'Inspire residents to take ownership of their surroundings for a cleaner village'
      ],

      requirements: [
        'Active MYC members and local volunteers (Ages 16+)',
        'Physical readiness for outdoor cleaning and field activities',
        'Full commitment to the scheduled Sunday morning sessions',
        'Strong sense of responsibility towards community public spaces',
        'Ability to communicate effectively with local residents and shop owners'
      ],

      benefits: [
        'Official "Community Impact" certificate from Mardoli Youths Club',
        'Hands-on training in waste management and sustainability',
        'Personal satisfaction of leading a "Clean Mardoli" transformation',
        'Networking with local leaders and fellow socially conscious youth',
        'Special recognition during Club annual meetings and local forums'
      ]

    },
    {
      id: 3,
      title: 'Aatidonji Kesard Gammath (2023)',
      category: 'Social Events',
      description: 'Kesard onji gammath is a vibrant "Day in the Slush" festival celebrated by the Mardoli Youth Club to honor the agricultural roots of Tulunadu.',
      duration: '1 day',
      level: 'Beginner',
      participants: 250,
      image: [IMAGES.KesardGammath,IMAGES.KesardOnjidina] ,
      alt: 'Outdoor festival with colorful decorations, young people dancing and celebrating with traditional drums and costumes',
      tags: ['Culture', 'Entertainment', 'Networking', 'Celebration'],
      schedule: ' August 13 2023, 9:00 AM - 6:00 PM',
      instructor: 'Cultural Committee',
      fullDescription: 'Kesard Onji Gammath is a traditional mud-field festival organized by the Mardoli Youth Club to celebrate the agricultural heritage of the Tuluva culture. Held on August 13, 2023, from 9:00 AM to 6:00 PM, the event brought the entire Mardoli community together—men, women, and children alike—for a day of unforgettable joy. Participants immersed themselves in the spirit of Tulunadu, enjoying traditional slushy-field sports, rhythmic folk dancing, and community fun. More than just a festival, it was a day of pure celebration where every generation of Mardoli joined hands to dance, play, and strengthen their community bonds.',
      objectives: [
        'Celebrate and preserve the traditional agricultural heritage of Tulunadu',
        'Unite the entire Mardoli community—men, women, and children—in a shared celebration',
        'Provide a platform for youth to connect with their roots through traditional mud sports',
        'Foster a spirit of joy, fun, and brotherhood through collective dance and music',
        'Promote local culture and traditional Tuluva delicacies among the younger generation'
      ],

      requirements: [
        'Open to all residents of Mardoli and well-wishers of all age groups',
        'Willingness to participate in slushy-field (paddy field) activities and sports',
        'Respect for local traditions and the agricultural sanctity of the fields',
        'Active participation in group dances and community cultural events',
        'Registration for sports competitions to ensure organized event flow'
      ],

      benefits: [
        'A unique opportunity to reconnect with ancestral farming traditions',
        'Full day of family-friendly entertainment, dancing, and community fun',
        'Physical health and wellness through high-energy rural sports',
        'Experience the authentic taste of traditional Tuluva lunch and hospitality',
        'Creating lasting memories through a vibrant, mud-filled cultural experience'
      ]

    },
    {
      id: 4,
      title: 'Azadi Ka Amrit Mahotsav Celebration (2025)',
      category: 'Social Events',
      description: 'The Azadi Ka Amrit Mahotsav (2025) is a patriotic tribute organized by the Mardoli Youth Club to honor 78 years of India’s independence and the glorious journey of its people..',
      duration: '1 day',
      level: 'Beginner',
      participants: 25,
      image:[IMAGES.FlagHoist,IMAGES.FlagHoist2,IMAGES.FlagHoist3,IMAGES.FlagHoist4,IMAGES.FlagHoistMain] ,
      alt: 'Young African students working on laptops in a modern computer lab with instructor guiding them',
      tags: ['National Festival', 'Community Gathering', 'Patriotic Event'],
      schedule: 'August 15, 2025 8:30 AM – 12:30 PM',
      instructor: 'Cultural Committee',
      fullDescription: 'The Azadi Ka Amrit Mahotsav 2025 is scheduled for August 15, 2025, from 8:30 AM to 12:30 PM. This milestone celebration marks Indias 78th Independence Day and will be hosted at the Mardoli Community Ground. The event will begin with a formal flag-hoisting ceremony, followed by patriotic cultural performances and a community reflection session on our local contribution to a self-reliant India.',
      objectives: [
        'Commemorate the sacrifices of freedom fighters and unsung heroes',
        'Strengthen the spirit of "Jan Bhagidari" (Public Participation) within Mardoli',
        'Inspire the youth to contribute toward "Aatmanirbhar Bharat" (Self-Reliant India)',
        'Foster national unity through cultural performances and patriotic activities',
        'Educate the younger generation about the milestones of India’s progress'
      ],

      requirements: [
        'Open to all residents of Mardoli and surrounding areas',
        'Participants encouraged to wear traditional or tricolor-themed attire',
        'Respect for national symbols, including the National Flag and Anthem',
        'Mandatory attendance for the formal flag-hoisting ceremony',
        'Willingness to participate in group community service or awareness drives'
      ],

      benefits: [
        'Certificate of Participation for youth volunteers and performers',
        'Platform to showcase patriotic talents (Speeches, Songs, and Skits)',
        'Direct engagement with local community leaders and elders',
        'Access to local "Amrit Mahotsav" resources and commemorative materials',
        'The pride of contributing to a national movement at the grassroots level'
      ]

    },
    {
      id: 5,
      title: 'Clean Town Initiative(2025)',
      category: 'Environmental Project',
      description: 'The Clean Town Initiative is a flagship social responsibility program by the Mardoli Youth Club (MYC) dedicated to transforming our local environment.',
      duration: '1 day',
      level: 'Intermediate',
      participants: 50,
      image: [IMAGES.Cleaning2,IMAGES.Cleaning,IMAGES.Cleaning3] ,
      alt: 'Young football players in red jerseys practicing drills on grass field with coach demonstrating techniques',
      tags: ['CleanTownMardoli', 'InterClubCollaboration', 'Teamwork', 'GreenEnvironment'],
      schedule: 'June 19 2025, 9:00 AM - 12:00 PM',
      instructor: 'Cultural Committee',
      fullDescription: 'The Clean Town Initiative is a major community impact program led by the Mardoli Youth Club (MYC). Conducted on June 19, 2025, this massive cleanliness drive was organized in successful collaboration with Om Shree Geleyara Balaga, Naila and Navajeevana Games Club, Kurchipalla. By uniting multiple local organizations, the initiative successfully cleared public waste and promoted environmental hygiene, proving that collective action is the key to a sustainable and "Green Mardoli."',
      objectives: [
        'Clean and sanitize public spaces across Mardoli through inter-club collaboration',
        'Strengthen ties between MYC, Om Shree Geleyara Balaga, and Navajeevana Games Club',
        'Create awareness among residents about effective waste disposal and plastic reduction',
        'Foster a sense of shared responsibility for the town’s hygiene and beauty',
        'Set a benchmark for future joint community service projects in the region'
      ],

      requirements: [
        'Participation from MYC members and partner club volunteers',
        'Physical readiness for outdoor cleaning, lifting, and waste collection',
        'Strict use of safety equipment (gloves, masks, and sanitizers)',
        'Adherence to the coordinated route map for the cleaning drive',
        'Positive attitude toward manual labor and community service'
      ],

      benefits: [
        'Contribution to a healthier, disease-free living environment for Mardoli',
        'Valuable networking opportunities with members of other prominent local clubs',
        'Recognition for volunteers as "Community Green Ambassadors"',
        'Hands-on experience in organizing large-scale collaborative events',
        'The pride of seeing a visible transformation in the town’s cleanliness'
      ]

    },
    {
      id: 6,
      title: 'Cultural & Devotional Patronage(2025)',
      category: 'Arts & Culture',
      description: 'Cultural & Devotional Patronage is a core initiative of the Mardoli Youth Club (MYC), dedicated to preserving and supporting the rich spiritual and cultural heritage of our region.',
      duration: 'NA',
      level: 'Beginner',
      participants: 42,
      image: [IMAGES.DasaraFlex,IMAGES.DasaraFlexfull,IMAGES.HoreKanike,IMAGES.Horekanike2] ,
      alt: 'Young dancers in colorful traditional Ghanaian kente cloth performing synchronized movements with drums in background',
      tags: ['CulturalPatronage', 'MardoliTraditions', 'DevotionalService'],
      schedule: 'NA',
      instructor: 'Cultural Committee',
      fullDescription: 'The Traditional Dance & Cultural Arts program celebrates and preserves Ghana\'s rich cultural heritage through immersive learning experiences in traditional dance, drumming, and performance arts. Participants not only master various traditional dance forms but also gain deep understanding of their cultural significance, historical context, and contemporary relevance, becoming ambassadors of Ghanaian culture.',
      objectives: [
        'Actively support and patronize local spiritual landmarks and religious ceremonies',
        'Organize and lead "Horekanike" processions to contribute resources for community feasts',
        'Provide dedicated volunteer teams for crowd management and event logistics at local temples',
        'Preserve the traditional arts and folk culture of Tulunadu during festival seasons',
        'Foster communal harmony and spiritual unity within the Mardoli community'
      ],

      requirements: [
        'Open to all MYC members with a respect for local traditions and culture',
        'Willingness to participate in physical tasks such as carrying/transporting Horekanike offerings',
        'Commitment to volunteer during peak festival hours (morning and late evening sessions)',
        'Strict adherence to the traditional customs and discipline of the devotional venues',
        'Ability to work harmoniously with temple committees and other social organizations'
      ],

      benefits: [
        'Opportunity to be a part of sacred community traditions and spiritual growth',
        'Networking with elders and cultural leaders of the Mardoli district',
        'Recognition for the club as a "Protector of Culture" within the local community',
        'Practical experience in managing large-scale traditional and cultural gatherings',
        'The fulfillment of contributing to the success of regional heritage festivals'
      ]
    // },
    // {
    //   id: 7,
    //   title: 'Public Speaking & Debate Club',
    //   category: 'Leadership Training',
    //   description: 'Build confidence and eloquence through structured public speaking training, debate competitions, and presentation skill development.',
    //   duration: '10 weeks',
    //   level: 'Intermediate',
    //   participants: 32,
    //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_189a6d7fe-1765093038424.png",
    //   alt: 'Young woman confidently speaking at podium with microphone to attentive audience in conference room',
    //   tags: ['Communication', 'Debate', 'Confidence', 'Leadership'],
    //   schedule: 'Thursdays, 5:00 PM - 7:00 PM',
    //   instructor: 'Dr. Yaw Mensah',
    //   fullDescription: 'The Public Speaking & Debate Club transforms nervous speakers into confident communicators through systematic training in rhetoric, argumentation, and presentation skills. Participants engage in weekly debates, impromptu speaking exercises, and formal presentations, developing the ability to articulate ideas clearly, think critically under pressure, and persuade audiences effectively.',
    //   objectives: [
    //     'Overcome fear of public speaking',
    //     'Master persuasive communication techniques',
    //     'Develop critical thinking and argumentation skills',
    //     'Learn debate formats and competition strategies',
    //     'Build confidence in various speaking contexts'],

    //   requirements: [
    //     'Age between 17-25 years',
    //     'Good command of English language',
    //     'Commitment to weekly sessions',
    //     'Willingness to participate in debates',
    //     'Open-mindedness to diverse perspectives'],

    //   benefits: [
    //     'Public speaking certification',
    //     'Participation in inter-club debate competitions',
    //     'Improved communication and confidence',
    //     'Networking with articulate peers',
    //     'Career advantage in leadership roles']

    // },
    // {
    //   id: 8,
    //   title: 'Environmental Conservation Project',
    //   category: 'Community Service',
    //   description: 'Engage in tree planting, waste management education, and sustainable living practices to protect our environment for future generations.',
    //   duration: '6 weeks',
    //   level: 'Beginner',
    //   participants: 64,
    //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca4bc324-1764661982101.png",
    //   alt: 'Group of young volunteers planting tree saplings in soil with gardening tools and watering cans',
    //   tags: ['Environment', 'Sustainability', 'Education', 'Conservation'],
    //   schedule: 'Saturdays, 8:00 AM - 11:00 AM',
    //   instructor: 'Abena Owusu',
    //   fullDescription: 'The Environmental Conservation Project empowers young people to become environmental stewards through hands-on conservation activities and sustainability education. Participants engage in tree planting initiatives, learn about climate change and its local impacts, develop waste management solutions, and create awareness campaigns that inspire broader community action for environmental protection.',
    //   objectives: [
    //     'Plant and nurture trees in designated areas',
    //     'Learn environmental conservation principles',
    //     'Develop sustainable living practices',
    //     'Create environmental awareness campaigns',
    //     'Monitor and report on project impact'],

    //   requirements: [
    //     'Age 16 years and above',
    //     'Interest in environmental issues',
    //     'Physical ability for outdoor work',
    //     'Commitment to six Saturday sessions',
    //     'Willingness to educate others'],

    //   benefits: [
    //     'Environmental conservation certificate',
    //     'Practical conservation experience',
    //     'Contribution to climate action',
    //     'Community recognition',
    //     'Environmental education materials']

    // },
    // {
    //   id: 9,
    //   title: 'Career Development & Mentorship Program',
    //   category: 'Educational Workshops',
    //   description: 'Receive personalized career guidance, professional development training, and mentorship from successful professionals in various fields.',
    //   duration: '12 weeks',
    //   level: 'Advanced',
    //   participants: 25,
    //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_16bf3cad8-1765162292188.png",
    //   alt: 'Professional mentor in business suit discussing career plans with young mentee over documents and laptop',
    //   tags: ['Career', 'Mentorship', 'Professional Development', 'Networking'],
    //   schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
    //   instructor: 'Multiple Industry Professionals',
    //   fullDescription: 'The Career Development & Mentorship Program provides personalized guidance and professional development opportunities through one-on-one mentorship with established professionals. Participants receive career counseling, resume building support, interview preparation, and industry insights while developing professional networks that open doors to internships, job opportunities, and entrepreneurial ventures.',
    //   objectives: [
    //     'Clarify career goals and development pathways',
    //     'Develop professional skills and workplace readiness',
    //     'Build effective resumes and cover letters',
    //     'Master interview techniques and networking',
    //     'Connect with mentors in desired career fields'],

    //   requirements: [
    //     'Age between 20-25 years',
    //     'Clear career interests or goals',
    //     'Commitment to mentorship relationship',
    //     'Willingness to implement feedback',
    //     'Professional attitude and communication'],

    //   benefits: [
    //     'One-on-one mentorship with industry professional',
    //     'Career development certification',
    //     'Professional network expansion',
    //     'Internship and job referrals',
    //     'Ongoing career support']

    // },
    // {
    //   id: 10,
    //   title: 'Basketball Skills Development',
    //   category: 'Sports & Fitness',
    //   description: 'Enhance your basketball abilities through expert coaching, tactical training, and competitive play in a supportive team environment.',
    //   duration: '14 weeks',
    //   level: 'Intermediate',
    //   participants: 38,
    //   image: "https://images.unsplash.com/photo-1481745116479-4f2d89f72cd3",
    //   alt: 'Young basketball players practicing dribbling and shooting drills on outdoor court with coach supervising',
    //   tags: ['Basketball', 'Fitness', 'Competition', 'Teamwork'],
    //   schedule: 'Tuesdays & Thursdays, 5:30 PM - 7:30 PM',
    //   instructor: 'Coach Samuel Adjei',
    //   fullDescription: 'The Basketball Skills Development program offers comprehensive training in all aspects of basketball, from fundamental skills to advanced tactics and game strategies. Through structured drills, scrimmages, and competitive matches, participants improve their individual abilities while learning the importance of teamwork, sportsmanship, and mental toughness in achieving both athletic and personal success.',
    //   objectives: [
    //     'Master fundamental basketball skills and techniques',
    //     'Improve physical conditioning and athleticism',
    //     'Understand offensive and defensive strategies',
    //     'Develop teamwork and court awareness',
    //     'Prepare for competitive league play'],

    //   requirements: [
    //     'Age between 16-25 years',
    //     'Basic basketball knowledge',
    //     'Medical fitness for sports activities',
    //     'Commitment to twice-weekly training',
    //     'Own basketball shoes and appropriate attire'],

    //   benefits: [
    //     'Professional basketball coaching',
    //     'Enhanced physical fitness',
    //     'Team uniform and equipment',
    //     'Participation in local leagues',
    //     'Potential scholarship opportunities']

    // },
    // {
    //   id: 11,
    //   title: 'Creative Writing & Storytelling Workshop',
    //   category: 'Arts & Culture',
    //   description: 'Unleash your creativity through guided writing exercises, storytelling techniques, and opportunities to share your unique voice and narratives.',
    //   duration: '8 weeks',
    //   level: 'Beginner',
    //   participants: 22,
    //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e99c5a48-1764735548770.png",
    //   alt: 'Young person writing in notebook at wooden desk with coffee cup and books scattered around',
    //   tags: ['Writing', 'Creativity', 'Literature', 'Expression'],
    //   schedule: 'Fridays, 4:00 PM - 6:00 PM',
    //   instructor: 'Efua Mensah',
    //   fullDescription: 'The Creative Writing & Storytelling Workshop nurtures literary talent and creative expression through structured writing exercises, peer feedback sessions, and exposure to various literary forms. Participants explore fiction, poetry, personal essays, and oral storytelling traditions while developing their unique voice and learning the craft of compelling narrative construction.',
    //   objectives: [
    //     'Develop creative writing skills across genres',
    //     'Learn storytelling techniques and narrative structure',
    //     'Receive constructive feedback on written work',
    //     'Explore personal voice and writing style',
    //     'Publish work in youth anthology'],

    //   requirements: [
    //     'Age 16 years and above',
    //     'Interest in writing and literature',
    //     'Commitment to weekly sessions',
    //     'Willingness to share and critique work',
    //     'Basic English writing proficiency'],

    //   benefits: [
    //     'Creative writing certificate',
    //     'Publication in youth anthology',
    //     'Improved communication skills',
    //     'Creative expression outlet',
    //     'Literary community connection']

    // },
    // {
    //   id: 12,
    //   title: 'Monthly Community Outreach',
    //   category: 'Community Service',
    //   description: 'Make meaningful impact through regular visits to orphanages, elderly homes, and community centers, spreading joy and providing support.',
    //   duration: 'Ongoing',
    //   level: 'Beginner',
    //   participants: 56,
    //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1977ef133-1764649980627.png",
    //   alt: 'Young volunteers interacting with elderly people in community center, sharing smiles and conversation',
    //   tags: ['Outreach', 'Compassion', 'Service', 'Community'],
    //   schedule: 'Last Saturday of each month, 10:00 AM - 2:00 PM',
    //   instructor: 'Community Service Team',
    //   fullDescription: 'The Monthly Community Outreach program embodies the spirit of compassionate service through regular visits to vulnerable community members. Participants engage with children in orphanages, elderly residents in care homes, and individuals in community centers, providing companionship, assistance, and joy while developing empathy, social responsibility, and understanding of diverse life experiences.',
    //   objectives: [
    //     'Provide companionship and support to vulnerable groups',
    //     'Organize activities and entertainment for beneficiaries',
    //     'Develop empathy and social awareness',
    //     'Build lasting relationships with community members',
    //     'Inspire culture of regular community service'],

    //   requirements: [
    //     'Age 16 years and above',
    //     'Compassionate and patient attitude',
    //     'Commitment to monthly participation',
    //     'Respect for all individuals and backgrounds',
    //     'Willingness to engage meaningfully'],

    //   benefits: [
    //     'Monthly community service hours',
    //     'Personal growth and empathy development',
    //     'Meaningful community connections',
    //     'Recognition for consistent service',
    //     'Fulfillment from helping others']

    // }
}];


  const categories: Category[] = [
    { id: 'all', name: 'All Programs', icon: 'Squares2X2Icon', count: mockPrograms.length },
    { id: 'Leadership Training', name: 'Leadership Training', icon: 'AcademicCapIcon', count: mockPrograms.filter((p) => p.category === 'Leadership Training').length },
    { id: 'Community Service', name: 'Community Service', icon: 'HeartIcon', count: mockPrograms.filter((p) => p.category === 'Community Service').length },
    { id: 'Social Events', name: 'Social Events', icon: 'SparklesIcon', count: mockPrograms.filter((p) => p.category === 'Social Events').length },
    { id: 'Educational Workshops', name: 'Educational Workshops', icon: 'BookOpenIcon', count: mockPrograms.filter((p) => p.category === 'Educational Workshops').length },
    { id: 'Sports & Fitness', name: 'Sports & Fitness', icon: 'TrophyIcon', count: mockPrograms.filter((p) => p.category === 'Sports & Fitness').length },
    { id: 'Arts & Culture', name: 'Arts & Culture', icon: 'MusicalNoteIcon', count: mockPrograms.filter((p) => p.category === 'Arts & Culture').length }];


  const levels: Level[] = [
    { id: 'all', name: 'All Levels', icon: 'Squares2X2Icon' },
    { id: 'Beginner', name: 'Beginner', icon: 'StarIcon' },
    { id: 'Intermediate', name: 'Intermediate', icon: 'FireIcon' },
    { id: 'Advanced', name: 'Advanced', icon: 'BoltIcon' }];


  const filteredPrograms = mockPrograms.filter((program) => {
    const matchesCategory = activeCategory === 'all' || program.category === activeCategory;
    const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
    const matchesSearch = searchQuery === '' ||
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleViewDetails = (programId: number) => {
    const program = mockPrograms.find((p) => p.id === programId);
    if (program) {
      setSelectedProgram(program);
      setIsDetailModalOpen(true);
    }
  };

  const handleRegister = (programId: number) => {
    const program = mockPrograms.find((p) => p.id === programId);
    if (program) {
      setRegistrationProgram(program);
      setIsRegistrationModalOpen(true);
    }
  };

  const handleRegistrationSubmit = (data: RegistrationFormData) => {
    setSuccessMessage(`Successfully registered for ${registrationProgram?.title}! We'll contact you soon.`);
    setShowSuccess(true);
    setIsRegistrationModalOpen(false);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded-lg w-1/3"></div>
            <div className="h-64 bg-muted rounded-xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
                <div key={i} className="h-96 bg-muted rounded-xl"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Icon name="AcademicCapIcon" size={20} className="text-accent" />
              <span className="text-sm font-source font-medium text-primary-foreground">Programs & Activities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-primary-foreground mb-6">
              Discover Your Path to Growth
            </h1>

            <p className="text-lg md:text-xl font-source text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Explore our diverse range of programs conducted to empower young minds through leadership development, community service, and personal growth opportunities.
            </p>

            <div className="max-w-2xl mx-auto">
              <SearchBar onSearch={setSearchQuery} placeholder="Search programs by name, category, or tags..." />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-text-primary mb-2">
               Past Programs & Initiatives
              </h2>
              <p className="text-base font-source text-text-secondary">
                Showing {filteredPrograms.length} of {mockPrograms.length} programs
              </p>
            </div>

            <div className="flex items-center space-x-2 text-sm font-source text-text-secondary">
              <Icon name="InformationCircleIcon" size={20} className="text-primary" />
              <span>Filter by category or level to find your perfect program</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory} />


              <LevelFilter
                levels={levels}
                activeLevel={activeLevel}
                onLevelChange={setActiveLevel} />


              <div className="bg-accent/10 border-2 border-accent rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="LightBulbIcon" size={24} className="text-accent" />
                  <h3 className="text-lg font-poppins font-semibold text-text-primary">Quick Tip</h3>
                </div>
                <p className="text-sm font-source text-text-secondary">
                  Not sure which program to join? Take our program matching quiz to find activities that align with your interests and goals!
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              {filteredPrograms.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredPrograms.map((program) =>
                    <ProgramCard
                      key={program.id}
                      program={program}
                      onRegister={handleRegister}
                      onViewDetails={handleViewDetails} />

                  )}
                </div> :

                <div className="bg-card rounded-xl shadow-brand p-12 text-center">
                  <Icon name="MagnifyingGlassIcon" size={48} className="text-text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-poppins font-semibold text-text-primary mb-2">
                    No Programs Found
                  </h3>
                  <p className="text-base font-source text-text-secondary mb-6">
                    We couldn't find any programs matching your filters. Try adjusting your search criteria.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setActiveLevel('all');
                      setSearchQuery('');
                    }}
                    className="px-6 py-3 bg-primary text-primary-foreground font-nunito font-bold text-sm rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300">

                    Reset Filters
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg font-source text-text-secondary mb-8">
              Join thousands of young people who are already making a difference in their communities through our programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <button
                onClick={() => {
                  const firstProgram = mockPrograms[0];
                  setRegistrationProgram(firstProgram);
                  setIsRegistrationModalOpen(true);
                }}
                className="px-8 py-4 bg-accent text-accent-foreground font-nunito font-bold text-lg rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300">

                Register for a Program
              </button> */}
              <button className="px-8 py-4 border-2 border-primary text-primary font-nunito font-bold text-lg rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Contact Us for Guidance
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProgramDetailModal
        program={selectedProgram}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onRegister={handleRegister} />


      <RegistrationModal
        program={registrationProgram}
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        onSubmit={handleRegistrationSubmit} />


      <SuccessMessage
        isVisible={showSuccess}
        message={successMessage}
        onClose={() => setShowSuccess(false)} />

    </div>);

};

export default ProgramsInteractive;