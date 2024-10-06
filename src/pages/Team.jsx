import React, { useEffect, useState } from "react";
import { Card, Button } from 'antd';
import { FaPhone, FaEnvelope, FaGlobe, FaHome } from 'react-icons/fa';
import Layout from '../components/Layout';
import logo from '../assets/mi.jpg'; // Ensure to use the correct path

// Sample team member data


const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    salutation: 'Mr.',
    designation: 'Senior Consultant',
    degrees: 'M.A., PhD',
    mobile: '+1 234 567 890',
    email: 'john.doe@example.com',
    address: '123 Education Lane, Knowledge City, USA',
    website: 'https://johnswebsite.com',
    profilePic: logo, // Use the imported logo as the profile picture
  },
  {
    id: 2,
    name: 'Jane Smith',
    salutation: 'Ms.',
    designation: 'Academic Advisor',
    degrees: 'M.Sc., MBA',
    mobile: '+1 234 567 891',
    email: 'jane.smith@example.com',
    address: '456 Knowledge Blvd, Knowledge City, USA',
    website: 'https://janeswebsite.com',
    profilePic: logo, // Use the imported logo as the profile picture
  },
  {
    id: 3,
    name: 'H.B.Michael Rajan',
    salutation: 'Prof.',
    designation: 'Business Development',
    degrees: 'M.E., M.S(Edu.Mgt)., Ph.D',
    mobile: '+91 95972 03784, +91 92456 64761',
    email: 'smeduconsultant@gmail.com',
    address: 'No.4, Ramani Nagar, Kadappa Road, Kolathur, Chennai - 600099',
    website: 'https://www.smeduconsultant.com',
    profilePic: logo, // Use the imported logo as the profile picture
  },
  // Add more team members as needed
];

const Team = () => {

  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch('http://localhost:5000/api/team-members');

      if (response.ok) {
        const data = await response.json();
        setTeam(data);
      } else {
        message.error('Failed to fetch Team members');
      }
    };

    fetchTeam();
  }, []);
  
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Meet Our Team</h1>
        <div className="flex justify-center flex-wrap gap-8 ">
          {team.map((member) => (
            <Card
              key={member.id}
              className="shadow-xl border border-blue-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-blue-300" // Added hover scale effect
              style={{ width: 320, height: 'fit-content' }} // Adjusted card width
            >
              <div className="flex flex-col items-center p-4">
                <img 
                  alt={member.name} 
                  src={logo} 
                  className="w-24 h-24 object-cover rounded-full border-0 border-white shadow-md mb-4" // Rounded profile picture with border and shadow
                />
                <h2 className="text-xl font-bold text-black">{`${member.salutation} ${member.name}`}</h2>
                <p className="text-black font-semibold">{member.designation}</p>
                <p className="text-black">{member.degrees}</p>
              </div>
              <div className="p-4">
                <div className="mt-2 space-y-1">
                  <p className="flex items-center text-gray-800">
                    <FaPhone className="mr-2 text-blue-600" />
                    <a href={`tel:${member.mobile}`} className="hover:text-blue-700 transition-colors">{member.mobile}</a>
                  </p>
                  <p className="flex items-center text-gray-800">
                    <FaEnvelope className="mr-2 text-blue-600" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-700 transition-colors">{member.email}</a>
                  </p>
                  <p className="flex items-center text-gray-800">
                    <FaHome className="mr-2 text-blue-600" />
                    {member.address}
                  </p>
                  <p className="flex items-center text-gray-800">
                    <FaGlobe className="mr-2 text-blue-600" />
                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">{member.website}</a>
                  </p>
                </div>
                <Button className="mt-4 w-full" type="primary" style={{ backgroundColor: '#1DA57A', borderColor: '#1DA57A' }}>
                  Contact {member.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Team;
