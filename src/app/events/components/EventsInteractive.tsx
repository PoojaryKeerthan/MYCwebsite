'use client';

import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import CalendarView from './CalendarView';
import EventFilters from './EventFilters';
import EventDetailsModal from './EventDetailsModal';
import UpcomingEventsList from './UpcomingEventsList';
import Icon from '../../../components/ui/AppIcon';
import { IMAGES } from '@/constants/Images';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  fullDescription: string;
  spotsAvailable: number;
  totalSpots: number;
  isRegistered: boolean;
  organizer: string;
  contactEmail: string;
  contactPhone: string;
  requirements: string[];
  benefits: string[];
}

const EventsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'calendar'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentMonth, setCurrentMonth] = useState(11);
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  useEffect(() => {
    setIsHydrated(true);
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  }, []);

  const mockEvents: Event[] = [
    {
      id: 1,
      title: "Mardoli Premier League (MPL) S-4 2026",
      date: "To Be Announced",
      time: "To Be Announced",
      location: "MYC cricket ground Panemangalore",
      category: "Sports",
      image: IMAGES.CricketMatch ||  "https://img.rocket.new/generatedImages/rocket_gen_img_10e5408f4-1764654348927.png",
      alt: "Group of diverse young professionals in business attire sitting in conference room during leadership workshop",
      description: "Mardoli Premier League Season 4 provided a professional platform for our local stars to shine.",
      fullDescription: "Mardoli Premier League Season 4 provided a professional platform for our local stars to shine. With over 150+ participants and thousands of spectators, we celebrated the spirit of sportsmanship and community unity through the game we love.",
      spotsAvailable: 207,
      totalSpots: 250,
      isRegistered: false,
      organizer: "Sports Committee",
      contactEmail: "To Be Announced",
      contactPhone: "To Be Announced",
      requirements: [
        "Open to youth players aged 16-25 years",
        "Mandatory attendance for the player auction and match days",
        "Adherence to the official MPL dress code and sports gear",
        "Strict discipline and respect towards umpires and opponents",
        "Valid registration and local residency proof for Mardoli region"
      ],

      benefits: [
        "Opportunity to showcase talent on a professional community platform",
        "Exclusive MPL Season 4 team jersey and kit bag",
        "Networking with local sports icons and community leaders",
        "Nutritional lunch and refreshments provided on match days",
        "Medals, trophies, and cash prizes for top performers"
      ]

    },
    {
      id: 2,
      title: "Volleyball Premier League(VPL) s-3 2026",
      date: "To Be Announced",
      time: "To Be Announced",
      location: "MYC cricket ground Panemangalore",
      category: "Sports",
      image: IMAGES.VolleyballAunction ||  "https://img.rocket.new/generatedImages/rocket_gen_img_170ef3aa1-1765057538946.png",
      alt: "Young volunteers in bright colored t-shirts picking up litter and cleaning community park with trash bags and gloves",
      description: "Bringing the fastest-growing sport in Mangalore to the professional stage. Our Volleyball Premier League features high-energy matches, showcasing incredible athleticism and teamwork from local squads under the floodlights.",
      fullDescription: "The Volleyball Premier League (VPL) is the ultimate test of power, teamwork, and agility in Mardoli. Organized by the Mardoli Youth Club, this high-octane tournament brings together the best spikers and setters from across the region to compete under the floodlights. VPL is more than just a game; it’s a celebration of the sport that defines our local spirit, providing a professional stage for athletes to display their jumping power, precision serves, and tactical brilliance in front of a cheering community.",
      spotsAvailable: 27,
      totalSpots: 70,
      isRegistered: false,
      organizer: "Sports Committee",
      contactEmail: "To Be Announced",
      contactPhone: "To Be Announced",
      requirements: [
        'Age group: 16-25 years (Open to local ward residents)',
        'Must attend the official team selection and jersey launch ceremony',
        'Adherence to international volleyball rules and court discipline',
        'Proper sports attire (Team jersey, shorts, and indoor/turf shoes) is mandatory',
        'Commitment to participate in all league-stage and knockout matches'
      ],

      benefits: [
        'Experience a professional league-style tournament with official referees',
        'High-quality team jerseys and participation kits provided by MYC',
        'Exposure to local sports scouts and community recognition',
        'Exciting prizes for "Best Sayer", "Best Blocker", and "Player of the Tournament"',
        'Nutritional snacks and energy drinks provided during match intervals'
      ]

    },
    {
      id: 3,
      title: "MPL S4 Player Auction 2026",
      date: "To Be Announced",
      time: "To Be Announced",
      location: "To Be Announced",
      category: "Sports",
      image: IMAGES.CricketAunction ||  "https://img.rocket.new/generatedImages/rocket_gen_img_1877ee42c-1765065126906.png",
      alt: "Young people dancing and celebrating at indoor party with colorful lights and decorations in modern venue",
      description: "Where strategy meets talent. Our Season 4 auction featured team owners competing to build their Dream XI from a pool of 150+ local players.",
      fullDescription: "Where strategy meets talent. Our Season 4 auction featured team owners competing to build their Dream XI from a pool of 150+ local players. With high-stakes bidding and strategic team compositions, the auction set the stage for our most competitive season yet.!",
      spotsAvailable: 207,
      totalSpots: 250,
      isRegistered: false,
      organizer: "Sports Committee",
      contactEmail: "To Be Announced",
      contactPhone: "To Be Announced",
      requirements: [
        "Valid Mardoli Youth Club membership ID for entry",
        "Smart casual dress code (Professional appearance mandatory)",
        "RSVP required via the MYC portal for seating arrangements",
        "Age 18+ for this specific networking and bidding event"
      ],

      benefits: [
        "Free food and high-tea drinks during the bidding intervals",
        "Live entertainment and music to keep the energy high",
        "Direct networking opportunities with team owners and sponsors",
        "Professional photo memories at the official MPL media wall",
        "Exclusive prize giveaways for active audience participants"
      ]

    },
    {
      id: 4,
      title: "VPL S3 Auction: The Squad Build",
      date: "To Be Announced",
      time: "To Be Announced",
      location: "To Be Announced",
      category: "Sports",
      image: IMAGES.VolleyBallMAtch ||  "https://img.rocket.new/generatedImages/rocket_gen_img_1e398f1c3-1765060796077.png",
      alt: "Young woman with laptop teaching social media marketing to attentive students in modern classroom with digital screens",
      description: "A landmark event for local volleyball, the VPL S3 Auction saw 8 franchise owners strategically bidding for the region's top spikers and setters.",
      fullDescription: "A landmark event for local volleyball, the VPL S3 Auction saw 8 franchise owners strategically bidding for the region's top spikers and setters. This professional draft system ensures balanced teams and high-octane competition on the court.",
      spotsAvailable: 27,
      totalSpots: 70,
      isRegistered: false,
      organizer: "Sports Committee",
      contactEmail: "To Be Announced",
      contactPhone: "To Be Announced",
      requirements: [
        "Valid MYC Membership or Local Residency proof",
        "Age 16+ for active participation in the league",
        "Proper sports attire (Jersey, shorts, and non-marking shoes)",
        "Commitment to the full tournament schedule and practice sessions",
        "Adherence to the VPL code of conduct and sportsmanship rules"
      ],

      benefits: [
        "Opportunity to compete in a professionally managed league",
        "High-quality team jerseys and performance kits",
        "Recognition through 'Player of the Match' and 'Best Smasher' awards",
        "Access to energy drinks and refreshments during game intervals",
        "Networking with sports veterans and community leaders"
      ]
    },
    // },
    // {
    //   id: 5,
    //   title: "Inter-Community Football Tournament",
    //   date: "02/02/2025",
    //   time: "08:00 AM - 06:00 PM",
    //   location: "Mardoli Sports Complex",
    //   category: "Sports",
    //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eca2c8e0-1764989278460.png",
    //   alt: "Young athletes playing competitive football match on grass field with spectators cheering in background under sunny sky",
    //   description: "Showcase your athletic skills and team spirit! Annual football tournament bringing together youth teams from neighboring communities.",
    //   fullDescription: "Our Inter-Community Football Tournament is the most anticipated sporting event of the year, featuring teams from Mardoli and surrounding districts. This full-day competition promotes healthy competition, physical fitness, and inter-community relationships. The tournament includes group stages, knockout rounds, and a championship final, with trophies for winners, runners-up, and individual awards for best players. Spectators are welcome to cheer on their favorite teams. Food vendors and entertainment will be available throughout the day.",
    //   spotsAvailable: 0,
    //   totalSpots: 120,
    //   isRegistered: false,
    //   organizer: "Yaw Boateng",
    //   contactEmail: "sports@mardoliyouth.org",
    //   contactPhone: "+233 24 567 8901",
    //   requirements: [
    //     "Team registration required",
    //     "Sports attire and cleats",
    //     "Medical clearance form",
    //     "Team of 11-15 players"],

    //   benefits: [
    //     "Championship trophies",
    //     "Individual player awards",
    //     "Free sports drinks",
    //     "Professional photography",
    //     "Media coverage"]

    // },
    // {
    //   id: 6,
    //   title: "Traditional Dance & Drumming Workshop",
    //   date: "08/02/2025",
    //   time: "04:00 PM - 07:00 PM",
    //   location: "Mardoli Cultural Center",
    //   category: "Arts & Culture",
    //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_11d87f7ff-1766119006408.png",
    //   alt: "Young dancers in colorful traditional African clothing performing energetic cultural dance with drums in outdoor setting",
    //   description: "Connect with your cultural roots through traditional Ghanaian dance and drumming. Learn from master drummers and experienced dancers.",
    //   fullDescription: "Celebrate and preserve our rich cultural heritage through this immersive workshop in traditional Ghanaian dance and drumming. Master drummers and accomplished dancers will teach fundamental rhythms, dance movements, and the cultural significance behind various traditional performances. Participants will learn Adowa, Kpanlogo, and other popular dances, understand the language of talking drums, and appreciate the role of music and dance in Ghanaian ceremonies. No prior experience necessary—just bring enthusiasm and respect for our cultural traditions!",
    //   spotsAvailable: 22,
    //   totalSpots: 40,
    //   isRegistered: false,
    //   organizer: "Nana Akua",
    //   contactEmail: "culture@mardoliyouth.org",
    //   contactPhone: "+233 24 678 9012",
    //   requirements: [
    //     "Comfortable clothing for movement",
    //     "Bare feet or dance shoes",
    //     "Respect for cultural traditions",
    //     "Willingness to participate actively"],

    //   benefits: [
    //     "Cultural knowledge",
    //     "Performance opportunities",
    //     "Traditional costume rental",
    //     "Video recording of session",
    //     "Certificate of participation"]

    // },
    // {
    //   id: 7,
    //   title: "Career Guidance & Mentorship Fair",
    //   date: "15/02/2025",
    //   time: "10:00 AM - 04:00 PM",
    //   location: "Mardoli Community Center",
    //   category: "Educational",
    //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_139baaeb3-1764663625685.png",
    //   alt: "Professional mentor in business suit advising young student at career fair booth with informational displays and brochures",
    //   description: "Explore career paths and connect with mentors from various industries. One-on-one sessions, panel discussions, and networking opportunities.",
    //   fullDescription: "The Career Guidance & Mentorship Fair connects young people with professionals across diverse fields including healthcare, technology, education, business, arts, and public service. The event features career exploration booths, one-on-one mentorship matching sessions, panel discussions on career success, resume review stations, and mock interview practice. Participants will gain insights into different career paths, understand educational requirements, learn about scholarship opportunities, and potentially find long-term mentors. This is an invaluable opportunity to make connections that can shape your future career trajectory.",
    //   spotsAvailable: 35,
    //   totalSpots: 100,
    //   isRegistered: false,
    //   organizer: "Dr. Emmanuel Darko",
    //   contactEmail: "careers@mardoliyouth.org",
    //   contactPhone: "+233 24 789 0123",
    //   requirements: [
    //     "Bring copies of resume/CV",
    //     "Professional attire recommended",
    //     "Prepare questions for mentors",
    //     "Notebook and pen"],

    //   benefits: [
    //     "Mentorship connections",
    //     "Career resources",
    //     "Resume feedback",
    //     "Scholarship information",
    //     "Professional networking"]

    // },
    // {
    //   id: 8,
    //   title: "Valentine's Day Community Outreach",
    //   date: "14/02/2025",
    //   time: "09:00 AM - 02:00 PM",
    //   location: "Mardoli Children's Home",
    //   category: "Community Service",
    //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b8549cd0-1764661980829.png",
    //   alt: "Young volunteers distributing gift packages and spending time with children at community center with heart decorations",
    //   description: "Spread love and joy this Valentine's Day! Visit the local children's home with gifts, activities, and companionship for the children.",
    //   fullDescription: "Make Valentine's Day meaningful by bringing joy to children at the Mardoli Children's Home. Our outreach includes distributing care packages with school supplies and treats, organizing fun games and activities, face painting and arts & crafts, storytelling and reading sessions, and sharing a special Valentine's lunch. This heartwarming experience reminds us of the importance of community care and gives children who may feel forgotten a day filled with love, attention, and happiness. Donations of books, toys, and school supplies are welcome.",
    //   spotsAvailable: 28,
    //   totalSpots: 35,
    //   isRegistered: false,
    //   organizer: "Grace Mensah",
    //   contactEmail: "outreach@mardoliyouth.org",
    //   contactPhone: "+233 24 890 1234",
    //   requirements: [
    //     "Background check completed",
    //     "Bring donation items (optional)",
    //     "Patient and child-friendly attitude",
    //     "Commitment to full event duration"],

    //   benefits: [
    //     "Community service hours",
    //     "Meaningful impact experience",
    //     "Team bonding",
    //     "Appreciation certificate",
    //     "Photo memories"]

    // }];
  ];

  const filteredEvents = mockEvents.filter((event) => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesMonth = selectedMonth === 'all' || event.date.split('/')[1] === selectedMonth;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesMonth && matchesSearch;
  }).map((event) => ({
    ...event,
    isRegistered: registeredEvents.includes(event.id)
  }));

  const calendarEvents = mockEvents.map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    category: event.category
  }));

  const upcomingEvents = mockEvents.
    filter((event) => {
      const [day, month, year] = event.date.split('/').map(Number);
      const eventDate = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return eventDate >= today;
    }).
    sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split('/').map(Number);
      const [dayB, monthB, yearB] = b.date.split('/').map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);
      return dateA.getTime() - dateB.getTime();
    }).
    slice(0, 5).
    map((event) => ({
      id: event.id,
      title: event.title,
      date: event.date,
      time: event.time,
      category: event.category
    }));

  const handleRegister = (eventId: number) => {
    setRegisteredEvents((prev) => [...prev, eventId]);
  };

  const handleViewDetails = (eventId: number) => {
    const event = mockEvents.find((e) => e.id === eventId);
    if (event) {
      setSelectedEvent({
        ...event,
        isRegistered: registeredEvents.includes(event.id)
      });
      setIsModalOpen(true);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
    const dateStr = `${date.toString().padStart(2, '0')}/${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`;
    const eventsOnDate = mockEvents.filter((event) => event.date === dateStr);
    if (eventsOnDate.length > 0) {
      handleViewDetails(eventsOnDate[0].id);
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedMonth('all');
    setSearchQuery('');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded-lg w-1/3" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-64 bg-muted rounded-lg" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) =>
                    <div key={i} className="h-96 bg-muted rounded-lg" />
                  )}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-64 bg-muted rounded-lg" />
                <div className="h-96 bg-muted rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-4">
            Events Calendar
          </h1>
          <p className="text-lg font-source text-text-secondary max-w-3xl">
            Discover upcoming activities, workshops, and community events. Register now to secure your spot and be part of our vibrant youth community.
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-source text-text-secondary">
              {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
            </span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted text-text-primary hover:bg-primary hover:text-primary-foreground'}`
              }
              aria-label="Grid view">

              <Icon name="Squares2X2Icon" size={20} />
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'calendar' ? 'bg-primary text-primary-foreground' : 'bg-muted text-text-primary hover:bg-primary hover:text-primary-foreground'}`
              }
              aria-label="Calendar view">

              <Icon name="CalendarDaysIcon" size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {viewMode === 'calendar' &&
              <CalendarView
                events={calendarEvents}
                currentMonth={currentMonth}
                currentYear={currentYear}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
                onDateClick={handleDateClick}
                selectedDate={selectedDate} />

            }

            {viewMode === 'grid' &&
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredEvents.length > 0 ?
                  filteredEvents.map((event) =>
                    <EventCard
                      key={event.id}
                      event={event}
                      onRegister={handleRegister}
                      onViewDetails={handleViewDetails} />

                  ) :

                  <div className="col-span-2 bg-card rounded-lg shadow-brand p-12 text-center">
                    <Icon name="CalendarDaysIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-poppins font-bold text-text-primary mb-2">
                      No Events Found
                    </h3>
                    <p className="text-base font-source text-text-secondary mb-4">
                      Try adjusting your filters to see more events
                    </p>
                    <button
                      onClick={handleClearFilters}
                      className="px-6 py-2.5 bg-primary text-primary-foreground font-nunito font-bold text-sm rounded-lg hover:shadow-brand-lg hover:scale-105 transition-all duration-300">

                      Clear Filters
                    </button>
                  </div>
                }
              </div>
            }
          </div>

          <div className="space-y-6">
            <EventFilters
              selectedCategory={selectedCategory}
              selectedMonth={selectedMonth}
              searchQuery={searchQuery}
              onCategoryChange={setSelectedCategory}
              onMonthChange={setSelectedMonth}
              onSearchChange={setSearchQuery}
              onClearFilters={handleClearFilters} />


            <UpcomingEventsList
              events={upcomingEvents}
              onEventClick={handleViewDetails} />

          </div>
        </div>
      </div>

      <EventDetailsModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRegister={handleRegister} />

    </div>);

};

export default EventsInteractive;