import React from 'react';
import teamMembers from '../Data/team';

const MainDeveloper = ({ image, name, position, description }) => {
  return (
    <div className="bg-primary text-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center mb-12">
      <img src={image} alt={name} className="w-40 h-40 rounded-full mb-6" />
      <h2 className="text-4xl font-bold mb-2">{name}</h2>
      <p className="text-2xl mb-4">{position}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
};

const TeamMemberCard = ({ image, name, position, description }) => {
  return (
    <div className="bg-white text-gray-800 shadow-md rounded-lg p-6 text-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-secondary mb-2">{position}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Team = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        {/* Main Developer Section */}
        <MainDeveloper 
          image="path-to-main-developer-image.jpg" 
          name="Nikita Yarotskiy " 
          position="Lead Developer" 
          description="John is the brains behind our main product and leads the development team with passion and expertise." 
        />

        {/* Team Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <TeamMemberCard 
              key={member.id}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
