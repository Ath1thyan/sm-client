import React, { useEffect, useState } from "react";
import { Card, Button, Spin } from "antd";
import { FaPhone, FaEnvelope, FaGlobe, FaUser } from "react-icons/fa";
import Layout from "../components/Layout";
import logo from "../assets/mi.jpg"; // Ensure to use the correct path
// const backendUrl = "http://localhost:5005";
const backendUrl = "https://api.smeduconsultant.com";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch(`${backendUrl}/api/team-members`);

      if (response.ok) {
        const data = await response.json();
        setTeam(data);
        setLoading(false);
      } else {
        message.error("Failed to fetch Team members");
      }

      setLoading(false);
    };

    fetchTeam();
  }, []);

  return (
    <Layout>
      <div className="py-8 relative mx-auto min-h-screen mt-4">
        {/* Overlay loading spinner */}
        {loading && (
          <div className="absolute inset-0 bg-opacity-80 bg-white flex justify-center items-center z-50">
            <Spin size="large" />
          </div>
        )}
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Meet Our Team
        </h1>
        <div className="flex justify-center flex-wrap gap-8 ">
          {team.map((member) => (
            <Card
              key={member.id}
              className="shadow-xl border border-blue-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-blue-300" // Added hover scale effect
              style={{ width: 320, height: "fit-content" }} // Adjusted card width
            >
              <div className="flex flex-col items-center p-4">
                <img
                  alt={member.name}
                  src={member.image}
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
                    <a
                      href={`tel:${member.mobile}`}
                      className="hover:text-blue-700 transition-colors"
                    >
                      {member.mobile}
                    </a>
                  </p>
                  <p className="flex items-center text-gray-800">
                    <FaEnvelope className="mr-2 text-blue-600" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-blue-700 transition-colors"
                    >
                      {member.email}
                    </a>
                  </p>
                  <p className="flex items-center text-gray-800">
                    <FaUser className="mr-2 text-blue-600" />
                    {member.address}
                  </p>
                  {/* <p className="flex items-center text-gray-800">
                    <FaGlobe className="mr-2 text-blue-600" />
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-700 transition-colors"
                    >
                      {member.website}
                    </a>
                  </p> */}
                </div>
                <a href={"mailto:smeduconsultant@gmail.com"}>
                  <Button
                    className="mt-4 w-full"
                    type="primary"
                    style={{
                      backgroundColor: "#1DA57A",
                      borderColor: "#1DA57A",
                    }}
                  >
                    Contact {member.name}
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Team;
