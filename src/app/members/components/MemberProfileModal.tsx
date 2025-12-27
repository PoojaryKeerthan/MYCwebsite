import React from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

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

interface MemberProfileModalProps {
  member: Member | null;
  onClose: () => void;
}

const MemberProfileModal = ({ member, onClose }: MemberProfileModalProps) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-card rounded-lg shadow-brand-lg max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-poppins font-bold text-text-primary">
            Member Profile
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-300"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} className="text-text-primary" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 rounded-lg overflow-hidden">
                <AppImage
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-poppins font-bold text-text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg font-source text-secondary mb-4">
                    {member.role}
                  </p>
                </div>
                <div className="flex gap-2">
                  {member.mentorshipStatus === 'mentor' && (
                    <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-nunito font-bold rounded-full">
                      Mentor
                    </span>
                  )}
                  {member.mentorshipStatus === 'mentee' && (
                    <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-nunito font-bold rounded-full">
                      Mentee
                    </span>
                  )}
                  {member.mentorshipStatus === 'both' && (
                    <>
                      <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-nunito font-bold rounded-full">
                        Mentor
                      </span>
                      <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-nunito font-bold rounded-full">
                        Mentee
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Icon
                    name="ClockIcon"
                    size={24}
                    className="text-primary mx-auto mb-2"
                  />
                  <p className="text-2xl font-poppins font-bold text-text-primary">
                    {member.volunteerHours}
                  </p>
                  <p className="text-xs font-source text-text-secondary">
                    Volunteer Hours
                  </p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Icon
                    name="CalendarIcon"
                    size={24}
                    className="text-primary mx-auto mb-2"
                  />
                  <p className="text-2xl font-poppins font-bold text-text-primary">
                    {member.eventsAttended}
                  </p>
                  <p className="text-xs font-source text-text-secondary">
                    Events Attended
                  </p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Icon
                    name="TrophyIcon"
                    size={24}
                    className="text-primary mx-auto mb-2"
                  />
                  <p className="text-2xl font-poppins font-bold text-text-primary">
                    {member.achievements.length}
                  </p>
                  <p className="text-xs font-source text-text-secondary">
                    Achievements
                  </p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Icon
                    name="CalendarDaysIcon"
                    size={24}
                    className="text-primary mx-auto mb-2"
                  />
                  <p className="text-2xl font-poppins font-bold text-text-primary">
                    {member.joinDate}
                  </p>
                  <p className="text-xs font-source text-text-secondary">
                    Member Since
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {/* <div className="flex items-center gap-3">
                  <Icon name="EnvelopeIcon" size={20} className="text-primary" />
                  <span className="font-source text-text-primary">
                    {member.email}
                  </span>
                </div> */}
                {/* <div className="flex items-center gap-3">
                  <Icon name="PhoneIcon" size={20} className="text-primary" />
                  <span className="font-source text-text-primary">
                    {member.phone}
                  </span>
                </div> */}
                <div className="flex items-center gap-3">
                  <Icon
                    name="MapPinIcon"
                    size={20}
                    className="text-primary"
                  />
                  <span className="font-source text-text-primary">
                    {member.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-poppins font-bold text-text-primary mb-3">
                About
              </h4>
              <p className="font-source text-text-primary leading-relaxed">
                {member.bio}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-poppins font-bold text-text-primary mb-3">
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary font-source text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-poppins font-bold text-text-primary mb-3">
                Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent font-source text-sm rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-poppins font-bold text-text-primary mb-3">
                Achievements & Badges
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {member.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-4 bg-muted rounded-lg text-center hover:bg-border transition-colors duration-300"
                  >
                    <Icon
                      name="TrophyIcon"
                      size={32}
                      className="text-golden mx-auto mb-2"
                    />
                    <p className="font-source text-sm text-text-primary">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-poppins font-bold text-text-primary mb-3">
                Recent Activities
              </h4>
              <div className="space-y-3">
                {member.recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-muted rounded-lg"
                  >
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <Icon
                        name={
                          activity.type === 'event' ?'CalendarIcon'
                            : activity.type === 'volunteer' ?'HandRaisedIcon' :'TrophyIcon'
                        }
                        size={20}
                        className="text-primary"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-source font-medium text-text-primary mb-1">
                        {activity.title}
                      </p>
                      <p className="font-source text-sm text-text-secondary">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8 pt-6 border-t border-border">
            <button className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-nunito font-bold text-base rounded-lg hover:bg-secondary transition-all duration-300">
              <Icon
                name="ChatBubbleLeftIcon"
                size={20}
                className="inline mr-2"
              />
              Send Message
            </button>
            <button className="flex-1 px-6 py-3 bg-accent text-accent-foreground font-nunito font-bold text-base rounded-lg hover:scale-105 transition-all duration-300">
              <Icon name="UserPlusIcon" size={20} className="inline mr-2" />
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfileModal;