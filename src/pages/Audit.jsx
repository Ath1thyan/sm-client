import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import axios from "axios";
import Layout from "../components/Layout";
const backendUrl = "https://api.smeduconsultant.com";

const Audit = () => {
  const [auditBanner, setAuditBanner] = useState([]);
  const [auditHero, setAuditHero] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [auditSubHeading, setAuditSubHeading] = useState({ title: "" });
  const [auditDatas, setAuditDatas] = useState([]);
  // Sample carousel images - you can replace these with your actual image URLs

  useEffect(() => {
    const fetchData = async () => {
      const auditHeroResponse = await axios.get(
        `${backendUrl}/api/auditHero`
      );
      const auditBannerResponse = await axios.get(
        `${backendUrl}/api/auditBanner`
      );
      const auditDatasResponse = await axios.get(
        `${backendUrl}/api/auditDatas`
      );
      const auditSubHeadingResponse = await axios.get(
        `${backendUrl}/api/auditSubHeading`
      );

      setAuditDatas(auditDatasResponse.data);
      setAuditHero(auditHeroResponse.data);
      setAuditBanner(auditBannerResponse.data);
      setAuditSubHeading(auditSubHeadingResponse.data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="">
        {/* Carousel AuditBanner Section */}
        <Carousel autoplay dots className="mb-12">
          {auditBanner.map((img) => {
            console.log(img); // Log to check the image data
            return (
              <div key={img._id}>
                <img
                  src={img.image}
                  alt={`Slide ${img._id + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            );
          })}
        </Carousel>
        <div className="container mx-auto">
          {/* Introduction Section */}
          <section className="flex flex-col md:flex-row items-center bg-blue-100 p-8 border-0 rounded-sm">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/2">
              <img
                src={auditHero.image}
                alt={auditHero.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 text-center md:text-left">
              <h1 className="text-4xl font-bold text-blue-600 mb-4 text-left">
                {auditHero.title}
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                {auditHero.description}
              </p>
            </div>
          </section>
          <section className="mb-12 space-y-5 mt-3">
            <p className="text-3xl font-bold text-center mt-10  mb-8 text-blue-700">
              {auditSubHeading.title}
            </p>
            {auditDatas.map((aboutData) => (
              <div key={aboutData._id}>
                <h2 className="text-2xl text-center font-semibold text-blue-600 mb-4">
                  {aboutData.Heading}
                </h2>
                <div className="bg-blue-50 p-6 mb-8 rounded-lg shadow-md">
                  {aboutData.format === "points" ? (
                    <ul className="text-gray-700 leading-relaxed">
                      {aboutData.description.split("\n").map((point, index) => (
                        <li key={index} className="mb-2">
                          • {point}
                        </li>
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
      </div>
    </Layout>
  );
};

export default Audit;
