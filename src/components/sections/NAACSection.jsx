import React from 'react';
import { naacData } from '../../data/naacData';
import { Card, Row, Col } from 'antd';
import { CheckCircleOutlined, BulbOutlined, StarOutlined } from '@ant-design/icons';

const NAACSection = () => {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
      {/* Title and Description */}
      <h2 className="text-4xl font-bold text-indigo-800 mb-6 text-center">{naacData.title}</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">{naacData.description}</p>

      <Row gutter={[16, 16]} justify="center">
        {/* Objectives */}
        <Col xs={24} md={12}>
          <Card
            title="Objectives"
            bordered={false}
            className="rounded-lg transition-all"
            headStyle={{ fontSize: '1.5rem', color: '#3B82F6' }}
          >
            <ul>
              {naacData.objectives.map((objective, index) => (
                <li key={index}>
                  <CheckCircleOutlined className="text-green-500 mr-2" />
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
              {naacData.accreditationProcess.map((process, index) => (
                <li key={index}>
                  <BulbOutlined className="text-yellow-500 mr-2" />
                  {process}
                </li>
              ))}
            </ol>
          </Card>
        </Col>

        {/* Criteria */}
        <Col xs={24} md={12}>
          <Card
            title="Criteria"
            bordered={false}
            className="rounded-lg transition-all mt-8 mb-8"
            headStyle={{ fontSize: '1.5rem', color: '#3B82F6' }}
          >
            <ul>
              {naacData.criteria.map((criterion, index) => (
                <li key={index}>
                  <StarOutlined className="text-blue-500 mr-2" />
                  {criterion}
                </li>
              ))}
            </ul>
          </Card>
        </Col>

        {/* Benefits */}
        <Col span={24}>
          <Card
            title="Benefits"
            bordered={false}
            className="rounded-lg transition-all mb-4"
            headStyle={{ fontSize: '1.5rem', color: '#3B82F6' }}
          >
            <Row gutter={[16, 16]}>
              {Object.keys(naacData.benefits).map((key) => (
                <Col key={key} xs={24} sm={12} md={8}>
                  <div className="p-4 bg-white rounded-md transition-all">
                    <h4 className="text-lg font-semibold text-indigo-700 mb-2 capitalize">{key}</h4>
                    <ul>
                      {naacData.benefits[key].map((benefit, index) => (
                        <li key={index}>
                          <CheckCircleOutlined className="text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default NAACSection;
