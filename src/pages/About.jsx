import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUsers, FaHistory, FaHandshake } from "react-icons/fa";
import { Card, Col, Row } from "antd";
import Layout from "../components/Layout";
const backendUrl = "https://api.smeduconsultant.com";


const About = () => {
  const [aboutDatas, setAboutDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const aboutDatasResponse = await axios.get(`${backendUrl}/api/aboutDatas`);
      setAboutDatas(aboutDatasResponse.data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="py-12 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        About Us
      </h1>
      <section className="mb-12 space-y-3">
        {aboutDatas.map((aboutData) => (
          <div key={aboutData._id}>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {aboutData.Heading}
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              {aboutData.format === 'points' ? (
                <ul className="text-gray-700 leading-relaxed">
                  {aboutData.description.split('\n').map((point, index) => (
                    <li key={index} className="mb-2">• {point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {aboutData.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
    </Layout>
    
  );
};

export default About;
