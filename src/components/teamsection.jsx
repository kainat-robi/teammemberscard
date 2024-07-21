import TeamCard from './team'
import { teamMembers } from '../const/teammemebers';

const TeamSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          photo={member.photo}
          name={member.name}
          title={member.title}
          details={member.details}
          socialLinks={member.socialLinks}
        />
      ))}
    </div>
  );
};

export default TeamSection;