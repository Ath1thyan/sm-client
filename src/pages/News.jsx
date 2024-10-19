import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUsers, FaHistory, FaHandshake } from "react-icons/fa";
import { Card, Col, Row } from "antd";
import Layout from "../components/Layout";
const backendUrl = "https://api.smeduconsultant.com";


const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsResponse = await axios.get(`${backendUrl}/api/news`);
      setNews(newsResponse.data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="py-12 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        News and Updates
      </h1>
      <section className="mb-12 space-y-3">
        {news.map((newsData) => (
          <div key={newsData._id}>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {newsData.Heading}
            </h2>
              {newsData.format === 'points' ? (
                <ul className="text-gray-700 leading-relaxed">
                  {newsData.description.split('\n').map((point, index) => (
                    <li key={index} className="mb-2">• {point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {newsData.description}
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

export default News;
