import React from 'react';
import Layout from '../components/Layout';
import { FaUsers, FaHistory, FaHandshake } from 'react-icons/fa';
import { Card, Col, Row } from 'antd';

const About = () => {
  return (
    <Layout>
      <div className="py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">About Us</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide innovative solutions that empower individuals and organizations to achieve their goals efficiently and effectively. We strive to be a leader in our industry through exceptional service, cutting-edge technology, and a commitment to quality.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
              We envision a world where technology and human ingenuity work together seamlessly, fostering creativity and collaboration. Our vision is to create impactful solutions that enhance the way people interact and do business.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Values</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
              <li>Innovation: We encourage innovation and embrace change to deliver the best solutions.</li>
              <li>Customer Focus: We prioritize our customers and strive to exceed their expectations.</li>
              <li>Teamwork: We work together to achieve our common goals and celebrate our successes.</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our History</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
              Founded in 2010, our company has grown from a small startup to a leading provider of technology solutions. Over the years, we have helped thousands of clients navigate the digital landscape and achieve their business objectives. Our commitment to excellence has earned us numerous awards and recognition in the industry.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Meet Our Team</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our team is composed of talented individuals from diverse backgrounds, united by a passion for technology and a commitment to our clients. We believe in fostering a collaborative environment that encourages growth and innovation.
          </p>
          <Row gutter={16} className="flex justify-center">
  <Col xs={24} sm={12} md={8}>
    <Card className="text-center flex flex-col items-center p-6 h-full hover:shadow-lg transition-shadow duration-300 border border-blue-200 rounded-lg">
      <FaUsers className="text-blue-600 text-5xl mx-auto mb-4" />
      <h3 className="text-lg font-semibold">Dedicated Professionals</h3>
      <p className="text-gray-600">Our team is dedicated to providing exceptional service.</p>
    </Card>
  </Col>
  <Col xs={24} sm={12} md={8}>
    <Card className="text-center flex flex-col items-center p-6 h-full hover:shadow-lg transition-shadow duration-300 border border-blue-200 rounded-lg">
      <FaHistory className="text-blue-600 text-5xl mb-4 mx-auto" />
      <h3 className="text-lg font-semibold">Rich Experience</h3>
      <p className="text-gray-600">Years of experience in the industry.</p>
    </Card>
  </Col>
  <Col xs={24} sm={12} md={8}>
    <Card className="text-center flex flex-col items-center p-6 h-full hover:shadow-lg transition-shadow duration-300 border border-blue-200 rounded-lg">
      <FaHandshake className="text-blue-600 text-5xl mb-4 mx-auto" />
      <h3 className="text-lg font-semibold">Client-Centric Approach</h3>
      <p className="text-gray-600">We put our clients first in everything we do.</p>
    </Card>
  </Col>
</Row>

        </div>
      </div>
    </Layout>
  );
}

export default About;
