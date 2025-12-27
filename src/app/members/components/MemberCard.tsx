import React from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface MemberCardProps {
  member: {
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
  };
  onViewProfile: (id: number) => void;
  onMessage: (id: number) => void;
}

const MemberCard = ({ member, onViewProfile, onMessage }: MemberCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={member.image}
          alt={member.alt}
          className="w-full h-45 object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {member.mentorshipStatus === 'mentor' && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-nunito font-bold rounded-full">
              Member
            </span>
          )}
          {member.mentorshipStatus === 'mentee' && (
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-nunito font-bold rounded-full">
              Member
            </span>
          )}
          {member.mentorshipStatus === 'both' && (
            <>
              {/* <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-nunito font-bold rounded-full">
                Mentor
              </span> */}
              <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-nunito font-bold rounded-full">
                Member
              </span>
            </>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-poppins font-bold text-text-primary mb-1">
          {member.name}
        </h3>
        <p className="text-sm font-source text-secondary mb-4">{member.role}</p>

        <p className="text-sm font-source text-text-secondary mb-4 line-clamp-2">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {member.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted text-text-primary text-xs font-source rounded-full"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="px-3 py-1 bg-muted text-text-primary text-xs font-source rounded-full">
              +{member.skills.length - 3} more
            </span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-b border-border">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Icon name="ClockIcon" size={16} className="text-primary" />
            </div>
            <p className="text-lg font-poppins font-bold text-text-primary">
              {member.volunteerHours}
            </p>
            <p className="text-xs font-source text-text-secondary">Hours</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Icon name="CalendarIcon" size={16} className="text-primary" />
            </div>
            <p className="text-lg font-poppins font-bold text-text-primary">
              {member.eventsAttended}
            </p>
            <p className="text-xs font-source text-text-secondary">Events</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Icon name="TrophyIcon" size={16} className="text-primary" />
            </div>
            <p className="text-lg font-poppins font-bold text-text-primary">
              {member.achievements.length}
            </p>
            <p className="text-xs font-source text-text-secondary">Badges</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onViewProfile(member.id)}
            className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground font-nunito font-bold text-sm rounded-lg hover:bg-secondary transition-all duration-300"
          >
            View Profile
          </button>
          <button
            onClick={() => onMessage(member.id)}
            className="px-4 py-2.5 bg-muted text-text-primary font-nunito font-bold text-sm rounded-lg hover:bg-border transition-all duration-300"
            aria-label="Send message"
          >
            <Icon name="ChatBubbleLeftIcon" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;