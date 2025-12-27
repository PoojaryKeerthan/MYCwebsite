'use client';

import React, { useState, useEffect } from 'react';
import MemberCard from './MemberCard';
import SearchFilters from './SearchFilters';
import MemberStats from './MemberStats';
import MemberProfileModal from './MemberProfileModal';
import Icon from '../../../components/ui/AppIcon';
import { IMAGES } from '@/constants/Images';

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  alt: string;
  joinDate: string;
  volunteerHours: number;
  eventsAttended: number;
  achievements: string[];
  bio: string;
  skills: string[];
  mentorshipStatus: 'mentor' | 'mentee' | 'both' | 'none';
  email: string;
  phone: string;
  location: string;
  interests: string[];
  recentActivities: Array<{
    type: string;
    title: string;
    date: string;
  }>;
}

const MembersInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [selectedMentorship, setSelectedMentorship] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState('All Skills');
  const [sortBy, setSortBy] = useState('original');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 12;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockMembers: Member[] = [
  {
    id: 1,
    name: 'Charan KM',
    role: 'President',
    image: IMAGES.Charan || "https://img.rocket.new/generatedImages/rocket_gen_img_12ab9ea78-1763296173898.png",
    alt: 'Young African man in blue shirt smiling confidently at camera in outdoor setting',
    joinDate: '23 July 2023',
    volunteerHours: 245,
    eventsAttended: 32,
    achievements: ['Leadership Excellence', 'Community Champion', 'Event Organizer Pro', '100 Hours Club'],
    bio: 'Passionate about youth empowerment and community development. Leading initiatives that create lasting impact in our community.',
    skills: ['Leadership', 'Public Speaking', 'Event Planning', 'Team Management'],
    mentorshipStatus: 'mentor',
    email: 'kwame.mensah@mardoliyouth.org',
    phone: '+233 24 123 4567',
    location: 'Mardoli',
    interests: ['Community Service', 'Youth Development', 'Sports', 'Education'],
    recentActivities: [
    { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 2,
    name: 'Sunil Poojary',
    role: 'Vice President',
    image:IMAGES.Sunil || "https://images.unsplash.com/photo-1606416132922-22ab37c1231e",
    alt: 'Young African woman with braided hair in yellow top smiling warmly in bright indoor setting',
    joinDate: '23 July 2023',
    volunteerHours: 198,
    eventsAttended: 28,
    achievements: ['Volunteer Hero', 'Community Builder', 'Rising Star'],
    bio: 'Dedicated to organizing meaningful volunteer opportunities that make a real difference in our community.',
    skills: ['Communication', 'Project Management', 'Community Outreach', 'Event Coordination'],
    mentorshipStatus: 'both',
    email: 'ama.osei@mardoliyouth.org',
    phone: '+233 24 234 5678',
    location: 'Mardoli',
    interests: ['Volunteering', 'Social Impact', 'Education', 'Arts'],
   recentActivities: [
    { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 3,
    name: 'Shubam Nayak',
    role: 'Event Organizer',
    image: IMAGES.Paandu || "https://img.rocket.new/generatedImages/rocket_gen_img_127c60be6-1765392154723.png",
    alt: 'Young African man with short beard in casual attire looking thoughtful outdoors',
    joinDate: '23 July 2023',
    volunteerHours: 167,
    eventsAttended: 25,
    achievements: ['Event Master', 'Creative Innovator', 'Team Player'],
    bio: 'Creative event planner with a passion for bringing people together through memorable experiences.',
    skills: ['Event Planning', 'Creativity', 'Logistics', 'Marketing'],
    mentorshipStatus: 'mentee',
    email: 'kofi.asante@mardoliyouth.org',
    phone: '+233 24 345 6789',
    location: 'Kadri',
    interests: ['Event Management', 'Music', 'Photography', 'Technology'],
    recentActivities: [
    { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 4,
    name: 'Akhil Bangera',
    role: 'Active Member & Founder',
    image: IMAGES.Akhil || "https://img.rocket.new/generatedImages/rocket_gen_img_19d721817-1763295614722.png",
    alt: 'Young African woman in white shirt with natural hair smiling brightly in professional setting',
    joinDate: '23 July 2023',
    volunteerHours: 134,
    eventsAttended: 22,
    achievements: ['Rising Star', 'Community Helper', 'Dedicated Member'],
    bio: 'Enthusiastic member committed to personal growth and making positive contributions to the community.',
    skills: ['Communication', 'Teamwork', 'Social Media', 'Writing'],
    mentorshipStatus: 'mentee',
    email: 'abena.boateng@mardoliyouth.org',
    phone: '+233 24 456 7890',
    location: 'Mardoli',
    interests: ['Writing', 'Social Media', 'Community Service', 'Reading'],
    recentActivities: [
    { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 5,
    name: 'Anil Kottari',
    role: 'Active Member',
    image: IMAGES.Anil || "https://img.rocket.new/generatedImages/rocket_gen_img_19d721817-1763295614722.png",
    alt: 'Young African woman in white shirt with natural hair smiling brightly in professional setting',
    joinDate: '23 July 2023',
    volunteerHours: 134,
    eventsAttended: 22,
    achievements: ['Rising Star', 'Community Helper', 'Dedicated Member'],
    bio: 'Enthusiastic member committed to personal growth and making positive contributions to the community.',
    skills: ['Communication', 'Teamwork', 'Social Media', 'Writing'],
    mentorshipStatus: 'mentee',
    email: 'abena.boateng@mardoliyouth.org',
    phone: '+233 24 456 7890',
    location: 'Mardoli',
    interests: ['Writing', 'Social Media', 'Community Service', 'Reading'],
    recentActivities: [
    { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 6,
    name: 'Mahesh Kulal',
    role: 'Active Member & Founder',
    image:IMAGES.Mahesh || "https://img.rocket.new/generatedImages/rocket_gen_img_12ab9ea78-1763296173898.png",
    alt: 'Young African man in denim jacket with short hair smiling confidently in urban setting',
    joinDate: '23 July 2023',
    volunteerHours: 112,
    eventsAttended: 19,
    achievements: ['Team Player', 'Volunteer Spirit', 'Active Participant'],
    bio: 'Motivated youth member eager to learn and contribute to community development initiatives.',
    skills: ['Teamwork', 'Problem Solving', 'Sports', 'Leadership'],
    mentorshipStatus: 'mentee',
    email: 'yaw.owusu@mardoliyouth.org',
    phone: '+233 24 567 8901',
    location: 'Mardoli',
    interests: ['Sports', 'Fitness', 'Community Service', 'Technology'],
   recentActivities: [
    { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 7,
    name: 'Sathya Aithal',
    role: 'Active Member & Founder',
    image: IMAGES.Sathya || "https://images.unsplash.com/photo-1657268379555-76e2742c5488",
    alt: 'Young African woman with long braids in colorful traditional attire smiling warmly outdoors',
    joinDate: '23 July 2023',
    volunteerHours: 223,
    eventsAttended: 30,
    achievements: ['Leadership Star', 'Mentor of the Year', 'Community Champion', '200 Hours Club'],
    bio: 'Experienced leader focused on empowering young women and creating inclusive community programs.',
    skills: ['Leadership', 'Mentoring', 'Public Speaking', 'Program Development'],
    mentorshipStatus: 'mentor',
    email: 'akosua.adjei@mardoliyouth.org',
    phone: '+233 24 678 9012',
    location: 'Mardoli',
    interests: [ 'Education', 'Leadership', 'Arts'],
    recentActivities: [
    { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]
  },
  {
    id: 8,
    name: 'lathesh Banjan',
    role: 'Volunteer Coordinator',
    image: IMAGES.Putta || "https://img.rocket.new/generatedImages/rocket_gen_img_12ab9ea78-1763296173898.png",
    alt: 'Young African man in grey hoodie with short hair looking determined in outdoor setting',
    joinDate: '23 July 2023',
    volunteerHours: 189,
    eventsAttended: 27,
    achievements: ['Volunteer Champion', 'Community Builder', 'Team Leader'],
    bio: 'Passionate coordinator connecting volunteers with meaningful opportunities to serve the community.',
    skills: ['Coordination', 'Communication', 'Project Management', 'Community Outreach'],
    mentorshipStatus: 'mentor',
    email: 'kwabena.darko@mardoliyouth.org',
    phone: '+233 24 789 0123',
    location: 'Mardoli',
    interests: ['Volunteering', 'Community Development', 'Sports', 'Music'],
    recentActivities: [
   { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 9,
    name: 'Dinesh Poojary',
    role: 'Active member',
    image: IMAGES.Dinesh ||  "https://img.rocket.new/generatedImages/rocket_gen_img_1703231c0-1765278179841.png",
    alt: 'Young African woman with natural curly hair in casual attire smiling joyfully in bright setting',
    joinDate: '23 July 2023',
    volunteerHours: 156,
    eventsAttended: 24,
    achievements: ['Event Specialist', 'Creative Mind', 'Rising Leader'],
    bio: 'Creative organizer bringing innovative ideas to life through engaging community events.',
    skills: ['Event Planning', 'Creativity', 'Marketing', 'Design'],
    mentorshipStatus: 'both',
    email: 'efua.annan@mardoliyouth.org',
    phone: '+233 24 890 1234',
    location: 'Mardoli',
    interests: ['Event Planning', 'Design', 'Photography', 'Arts'],
    recentActivities: [
   { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 10,
    name: 'Goutham salian',
    role: 'Active Member',
    image:IMAGES.Gauthu || "https://img.rocket.new/generatedImages/rocket_gen_img_12ab9ea78-1763296173898.png",
    alt: 'Young African man in casual shirt with bright smile in outdoor natural setting',
    joinDate: '23 July 2023',
    volunteerHours: 145,
    eventsAttended: 21,
    achievements: ['Active Contributor', 'Team Spirit', 'Community Helper'],
    bio: 'Dedicated member actively participating in various community development programs.',
    skills: ['Teamwork', 'Communication', 'Problem Solving', 'Sports'],
    mentorshipStatus: 'mentee',
    email: 'nana.ofosu@mardoliyouth.org',
    phone: '+233 24 901 2345',
    location: 'Mardoli District, Ghana',
    interests: ['Sports', 'Community Service', 'Music', 'Technology'],
    recentActivities: [
    { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 11,
    name: 'Shushsnk Poojary',
    role: 'Active member',
    image: IMAGES.ShushankPoojary || "https://img.rocket.new/generatedImages/rocket_gen_img_119988cec-1763298918753.png",
    alt: 'Young African woman in professional blazer with confident smile in office environment',
    joinDate: '23 July 2023',
    volunteerHours: 412,
    eventsAttended: 58,
    achievements: ['Lifetime Contributor', 'Mentor Excellence', '400 Hours Club', 'Community Icon'],
    bio: 'Alumni member giving back through mentorship and supporting the next generation of leaders.',
    skills: ['Mentoring', 'Leadership', 'Career Guidance', 'Public Speaking'],
    mentorshipStatus: 'mentor',
    email: 'adwoa.frimpong@mardoliyouth.org',
    phone: '+233 24 012 3456',
    location: 'Mardoli',
    interests: ['Mentorship', 'Career Development', 'Education', 'Leadership'],
    recentActivities: [
    { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 12,
    name: 'Deepak Kalyar',
    role: 'Active Member',
    image:IMAGES.Deepak ||  "https://img.rocket.new/generatedImages/rocket_gen_img_180d36757-1763296172839.png",
    alt: 'Young African man in casual denim jacket with friendly smile in urban outdoor setting',
    joinDate: '23 July 2023',
    volunteerHours: 98,
    eventsAttended: 16,
    achievements: ['New Member Star', 'Quick Learner', 'Team Player'],
    bio: 'Enthusiastic new member eager to contribute and grow within the community.',
    skills: ['Learning', 'Teamwork', 'Communication', 'Technology'],
    mentorshipStatus: 'mentee',
    email: 'kwesi.appiah@mardoliyouth.org',
    phone: '+233 24 123 4568',
    location: 'Mardoli',
    interests: ['Technology', 'Learning', 'Sports', 'Community Service'],
    recentActivities: [
    { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]

  },
  {
    id: 13,
    name: 'Harikrishna kottary',
    role: 'Active Member',
    image: IMAGES.Hari ||  "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Young African woman with short natural hair in professional attire smiling confidently',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'esi.mensah@mardoliyouth.org',
    phone: '+233 24 234 5679',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
   { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
    { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
    { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }]
  },
  {
    id: 14,
    name: 'Harish Poojary',
    role: 'Active Member',
    image: IMAGES.Harish || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'harish.p@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 15,
    name: 'Jaya Kulal',
    role: 'Active Member',
    image: IMAGES.Jaya || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'jaya.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 16,
    name: 'Mohan Kulal',
    role: 'Active Member',
    image: IMAGES.Mohankulal || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'mohan.kulal@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 17,
    name: 'Jithesh Poojary',
    role: 'Active Member',
    image: IMAGES.Jiteshp ||  "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'jithesh.p@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 18,
    name: 'Jithesh Kulal',
    role: 'Active Member',
    image: IMAGES.Jitesh || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'jithesh.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 19,
    name: 'Mohan K',
    role: 'Active Member',
    image: IMAGES.MohanK ||  "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'mohan.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 20,
    name: 'Prathap Kukyan',
    role: 'Active Member',
    image: IMAGES.Prathap || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'prathap.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 21,
    name: 'Pramith Kukyan',
    role: 'Active Member',
    image: IMAGES.Pramith || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'pramith.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 22,
    name: 'Santhosh Poojary',
    role: 'Active Member',
    image: IMAGES.Santhu|| "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'santhosh.p@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 23,
    name: 'Shiva Prasad Kulal',
    role: 'Active Member',
    image: IMAGES.Shivu || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'shivaprasad.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 24,
    name: 'Sudhir Poojary',
    role: 'Active Member',
    image: IMAGES.Sudheer || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'sudhir.p@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 25,
    name: 'Yathin Poojary',
    role: 'Active Member',
    image: IMAGES.Yahtin || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'yathin.p@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 26,
    name: 'Ashok M',
    role: 'Active Member',
    image: IMAGES.Ashok || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'ashok.m@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 27,
    name: 'Bhooshan',
    role: 'Active Member',
    image:IMAGES.Bhoosu || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'bhooshan@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 28,
    name: 'Karthik Kulal',
    role: 'Active Member',
    image: IMAGES.Karthik || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'karthik.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 29,
    name: 'Keerthan Salian',
    role: 'Active Member',
    image: IMAGES.NO || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'keerthan.s@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 30,
    name: 'Achal Bangera',
    role: 'Active Member',
    image: IMAGES.Achal ||  "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'keerthan.s@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 31,
    name: 'Nithin M',
    role: 'Active Member',
    image: IMAGES.Nithin || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'nithin.m@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 32,
    name: 'Sanvith',
    role: 'Active Member',
    image: IMAGES.Sanvith || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'sanvith@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 33,
    name: 'Shashank Ganiga',
    role: 'Active Member',
    image:IMAGES.NO || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'shashank.g@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 34,
    name: 'Yathin Bangera',
    role: 'Active Member',
    image:IMAGES.Yathin_Kulal || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'shashank.g@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 35,
    name: 'Sunil Kulal',
    role: 'Active Member',
    image:IMAGES.NO || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'sunil.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 36,
    name: 'Varshith Bangera',
    role: 'Active Member',
    image: IMAGES.Varshith || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'varshith.b@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 37,
    name: 'Nirmith Bangera',
    role: 'Active Member',
    image: IMAGES.Nirmith || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'nirmith.b@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 38,
    name: 'Manoj Kulal',
    role: 'Active Member',
    image: IMAGES.Manoj || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'manoj.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 39,
    name: 'Pradeep',
    role: 'Active Member',
    image: IMAGES.Pradeep || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'pradeep@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 40,
    name: 'Harish Kulal',
    role: 'Active Member',
    image: IMAGES.Harishk || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'harish.kulal@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 41,
    name: 'Saish Kulal',
    role: 'Active Member',
    image: IMAGES.Saish || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'saish.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 42,
    name: 'Kishor M',
    role: 'Active Member',
    image: IMAGES.Kishore ||  "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'kishor.m@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 43,
    name: 'Adithya Kulal',
    role: 'Active Member',
    image: IMAGES.Adithya || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'adithya.k@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
  {
    id: 44,
    name: 'Veeraj',
    role: 'Active Member',
    image:IMAGES.Veeraj || "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Member of Mardoli Youth Club',
    joinDate: '23 July 2023',
    volunteerHours: 287,
    eventsAttended: 41,
    achievements: ['Leadership Pro', 'Community Champion', 'Mentor Star', '250 Hours Club'],
    bio: 'Experienced leader driving positive change through strategic community initiatives.',
    skills: ['Leadership', 'Strategy', 'Public Speaking', 'Project Management'],
    mentorshipStatus: 'mentor',
    email: 'veeraj@mardoliyouth.org',
    phone: '+91 000 000 0000',
    location: 'Mardoli',
    interests: ['Leadership', 'Strategy', 'Education', 'Community Development'],
    recentActivities: [
      { type: 'event', title: 'MPL Leadership Summit', date: '20 Jan 2023' },
      { type: 'event', title: 'VPL Leadership Summit', date: '10 Dec 2023' },
      { type: 'event', title: 'Kesard gammath', date: '23 sep 2023' }
    ]
  },
];


  const filterMembers = () => {
    let filtered = [...mockMembers];

    if (searchQuery) {
      filtered = filtered.filter(
        (member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.bio.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRole !== 'All Roles') {
      filtered = filtered.filter((member) => member.role === selectedRole);
    }

    if (selectedMentorship !== 'All') {
      if (selectedMentorship === 'Mentors') {
        filtered = filtered.filter(
          (member) =>
          member.mentorshipStatus === 'mentor' ||
          member.mentorshipStatus === 'both'
        );
      } else if (selectedMentorship === 'Mentees') {
        filtered = filtered.filter(
          (member) =>
          member.mentorshipStatus === 'mentee' ||
          member.mentorshipStatus === 'both'
        );
      } else if (selectedMentorship === 'Both') {
        filtered = filtered.filter(
          (member) => member.mentorshipStatus === 'both'
        );
      }
    }

    if (selectedSkill !== 'All Skills') {
      filtered = filtered.filter((member) =>
      member.skills.includes(selectedSkill)
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'hours':
          return b.volunteerHours - a.volunteerHours;
        case 'events':
          return b.eventsAttended - a.eventsAttended;
        case 'achievements':
          return b.achievements.length - a.achievements.length;
        case 'joinDate':
          return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredMembers = isHydrated ? filterMembers() : mockMembers;
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const startIndex = (currentPage - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  const totalVolunteerHours = mockMembers.reduce(
    (sum, member) => sum + member.volunteerHours,
    0
  );
  const activeMentors = mockMembers.filter(
    (member) =>
    member.mentorshipStatus === 'mentor' ||
    member.mentorshipStatus === 'both'
  ).length;

  const handleViewProfile = (id: number) => {
    const member = mockMembers.find((m) => m.id === id);
    if (member) {
      setSelectedMember(member);
    }
  };

  const handleMessage = (id: number) => {
    console.log('Send message to member:', id);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) =>
              <div key={i} className="h-32 bg-muted rounded"></div>
              )}
            </div>
            <div className="h-20 bg-muted rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) =>
              <div key={i} className="h-96 bg-muted rounded"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-text-primary mb-4">
            Our Community Members
          </h1>
          <p className="text-lg font-source text-text-secondary max-w-3xl">
            Connect with fellow members, discover mentorship opportunities, and
            build meaningful relationships within our vibrant community.
          </p>
        </div>

        <MemberStats
          totalMembers={mockMembers.length}
          activeMentors={activeMentors}
          totalVolunteerHours={totalVolunteerHours}
          upcomingEvents={8} />


        <SearchFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
          selectedMentorship={selectedMentorship}
          onMentorshipChange={setSelectedMentorship}
          selectedSkill={selectedSkill}
          onSkillChange={setSelectedSkill}
          sortBy={sortBy}
          onSortChange={setSortBy} />


        {filteredMembers.length === 0 ?
        <div className="text-center py-16">
            <Icon
            name="UserGroupIcon"
            size={64}
            className="text-muted-foreground mx-auto mb-4" />

            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-2">
              No Members Found
            </h3>
            <p className="text-base font-source text-text-secondary">
              Try adjusting your search filters to find more members.
            </p>
          </div> :

        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {currentMembers.map((member) =>
            <MemberCard
              key={member.id}
              member={member}
              onViewProfile={handleViewProfile}
              onMessage={handleMessage} />

            )}
            </div>

            {totalPages > 1 &&
          <div className="flex items-center justify-center gap-2">
                <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-card border border-border rounded-lg font-source text-sm hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Previous page">

                  <Icon name="ChevronLeftIcon" size={20} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) =>
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg font-source text-sm transition-all duration-300 ${
                currentPage === page ?
                'bg-primary text-primary-foreground' :
                'bg-card border border-border hover:bg-muted'}`
                }>

                      {page}
                    </button>

            )}

                <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-card border border-border rounded-lg font-source text-sm hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Next page">

                  <Icon name="ChevronRightIcon" size={20} />
                </button>
              </div>
          }
          </>
        }
      </div>

      {selectedMember &&
      <MemberProfileModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)} />

      }
    </div>);

};

export default MembersInteractive;