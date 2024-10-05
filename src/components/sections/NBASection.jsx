import React from 'react';
import { nbaData } from '../../data/nbaData';
import { Card, Row, Col } from 'antd';
import { TrophyOutlined, ReadOutlined, RocketOutlined } from '@ant-design/icons';

const NBASection = () => {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12 mt-12">
      {/* Title and Description */}
      <h2 className="text-4xl font-bold text-indigo-800 mb-6 text-center">{nbaData.title}</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">{nbaData.description}</p>

      <Row gutter={[16, 16]}>
        {/* Objectives */}
        <Col xs={24} md={12}>
          <Card
            title="Objectives"
            bordered={false}
            className="rounded-lg transition-all"
            headStyle={{ fontSize: '1.5rem', color: '#3B82F6' }}
          >
            <ul>
              {nbaData.objectives.map((item, index) => (
                <li key={index}>
                  <TrophyOutlined className="text-yellow-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Col>

        {/* Accreditation Process */}
        <Col xs={24} md={12}>
          <Card
            title="Accreditation Process"
            bordered={false}
            className="rounded-lg transition-all"
            headStyle={{ fontSize: '1.5rem', color: '#3B82F6' }}
          >
            <ol>
              {nbaData.accreditationProcess.map((step, index) => (
                <li key={index}>
                  <ReadOutlined className="text-blue-500 mr-2" />
                  {step}
                </li>
              ))}
            </ol>
          </Card>
        </Col>
      </Row>

      {/* Benefits */}
      <div className="mt-8">
        <Card
          title="Benefits"
          bordered={false}
          className="rounded-lg transition-all"
          headStyle={{ fontSize: '1.5rem', color: '#3B82F6' }}
        >
          <Row gutter={[16, 16]}>
            {Object.keys(nbaData.benefits).map((key) => (
              <Col key={key} xs={24} sm={12} md={8}>
                <div className="p-4 bg-white rounded-md transition-all">
                  <h4 className="text-lg font-semibold text-indigo-700 mb-2 capitalize">{key}</h4>
                  <ul>
                    {nbaData.benefits[key].map((benefit, index) => (
                      <li key={index}>
                        <RocketOutlined className="text-red-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </section>
  );
};

export default NBASection;
