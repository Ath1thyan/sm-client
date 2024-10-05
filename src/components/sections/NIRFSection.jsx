import React from 'react';
import { nirfData } from '../../data/nirfData';
import { Card, Row, Col } from 'antd';
import { SettingOutlined, FlagOutlined, BookOutlined } from '@ant-design/icons';

const NIRFSection = () => {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8 mt-12">
      {/* Title and Description */}
      <h2 className="text-4xl font-bold text-indigo-800 mb-6 text-center">{nirfData.title}</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">{nirfData.description}</p>

      <Row gutter={[16, 16]}>
        {/* Objectives */}
        <Col xs={24} md={12}>
          <Card
            title="Objectives"
            bordered={false}
            className="rounded-lg transition-all mb-4"
            headStyle={{ fontSize: '1.5rem', color: '#3B82F6' }}
          >
            <ul >
              {nirfData.objectives.map((objective, index) => (
                <li key={index}>
                  <FlagOutlined className="text-blue-500 mr-2" />
                  {objective}
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
              {nirfData.accreditationProcess.map((process, index) => (
                <li key={index}>
                  <BookOutlined className="text-green-500 mr-2" />
                  {process}
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
          className="rounded-lg transition-all mb-4"
          headStyle={{ fontSize: '1.5rem', color: '#3B82F6' }}
        >
          <Row gutter={[16, 16]}>
            {Object.keys(nirfData.benefits).map((key) => (
              <Col key={key} xs={24} sm={12} md={8}>
                <div className="p-4 bg-white rounded-md transition-all">
                  <h4 className="text-lg font-semibold text-indigo-700 mb-2 capitalize">{key}</h4>
                  <ul>
                    {nirfData.benefits[key].map((benefit, index) => (
                      <li key={index}>
                        <SettingOutlined className="text-purple-500 mr-2" />
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

export default NIRFSection;
