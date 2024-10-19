import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from 'antd';
import { CheckCircleOutlined, BulbOutlined, StarOutlined } from '@ant-design/icons';
import Layout from "../components/Layout";
const backendUrl = "https://api.smeduconsultant.com";

const Services = () => {
  const [serviceHero, setServiceHero] = useState({
    title: "",
    description: "",
  });
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceHeroResponse = await axios.get(`${backendUrl}/api/serviceHero`);
        const dataArrayResponse = await axios.get(`${backendUrl}/api/dataArray`);

        // Log the responses to check their structure
        console.log("Service Hero Response:", serviceHeroResponse.data);
        console.log("Data Array Response:", dataArrayResponse.data);

        setServiceHero(serviceHeroResponse.data);
        setDataArray(dataArrayResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          {serviceHero.title}
        </h1>
        <p className="text-lg text-gray-600">{serviceHero.description}</p>
      </header>

      {/* NAAC Section */}
      {dataArray.length > 0 ? (
        dataArray.map((item, index) => (
          <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
            {/* Title and Description */}
            <h2 className="text-4xl font-bold text-indigo-800 mb-6 text-center">
              {item.title1}
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              {item.description1}
            </p>

            <Row gutter={[16, 16]} justify="center">
              {/* Objectives */}
              {item.innerArray.map((innerItem, innerIndex) => (
                <Col key={innerIndex} xs={24} md={12}>
                  <Card
                    title={innerItem.title2}
                    bordered={false}
                    className="rounded-lg transition-all"
                    headStyle={{ fontSize: "1.5rem", color: "#3B82F6" }}
                  >
                    <ul>
                      {innerItem.description2.split('\n').map((point, index) => (
                        <li key={index} className="mb-2">
                          <CheckCircleOutlined className="text-green-500 mr-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Col>
              ))}

              {/* Benefits Section */}
              <Col span={24}>
                <Card
                  title="Benefits"
                  bordered={false}
                  className="rounded-lg transition-all mb-4"
                  headStyle={{ fontSize: '1.5rem', color: '#3B82F6' }}
                >
                  <Row gutter={[16, 16]}>
                    {Object.keys(item.benefits).map((key) => (
                      <Col key={key} xs={24} sm={12} md={8}>
                        <div className="p-4 bg-white rounded-md transition-all">
                          <h4 className="text-lg font-semibold text-indigo-700 mb-2 capitalize">{key}</h4>
                          <ul>
                            {item.benefits[key].map((benefit, index) => (
                              benefit.split('\n').map((singleBenefit, idx) => (
                                <li key={`${index}-${idx}`}>
                                  <CheckCircleOutlined className="text-green-500 mr-2" />
                                  {singleBenefit}
                                </li>
                              ))
                            ))}
                          </ul>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No data available.</p>
      )}
    </div>
    </Layout>
  );
};

export default Services;
