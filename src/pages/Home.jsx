import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Carousel, Button } from "antd";
import { FaArrowRight } from "react-icons/fa";
import { CheckCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { StarFilled } from "@ant-design/icons";
import Layout from "../components/Layout";
const backendUrl = "https://backend-qzdy.onrender.com";

const Home = () => {
  const [solutions, setSolutions] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [hero, setHero] = useState({ title: "", description: "" });
  const [banner, setBanner] = useState([]);
  // Sample carousel images - you can replace these with your actual image URLs

  useEffect(() => {
    const fetchData = async () => {
      const solutionsResponse = await axios.get(
        `${backendUrl}/api/solutions`
      );
      const servicesResponse = await axios.get(
        `${backendUrl}/api/services`
      );
      const testimonialsResponse = await axios.get(
        `${backendUrl}/api/testimonials`
      );
      const heroResponse = await axios.get(`${backendUrl}/api/hero`);
      const bannerResponse = await axios.get(
        `${backendUrl}/api/banner`
      );

      setSolutions(solutionsResponse.data);
      setServices(servicesResponse.data);
      setTestimonials(testimonialsResponse.data);
      setHero(heroResponse.data);
      setBanner(bannerResponse.data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="">
        {/* Carousel Banner Section */}
        <Carousel autoplay dots className="mb-12">
          {banner.map((img) => {
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
          <section className="text-center bg-blue-100 p-8 border-0 rounded-sm">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              {hero.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6">{hero.description}</p>
            <div className="flex justify-center">
              <Link to="/about">
                <Button
                  type="primary"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg p-6 transition duration-300"
                >
                  <span>Learn More About Us</span>
                  <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Our Solutions Section */}
          <section className="my-12">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
              Our Solutions
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Get the Support Your Institution Needs
            </p>
            <Row gutter={[16, 16]}>
              {solutions.map((solution) => (
                <Col key={solution._id} xs={24} sm={12} md={8}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt={solution.title}
                        src={solution.image}
                        className="h-48 w-full object-cover rounded-t-lg"
                      />
                    }
                    className="transition-transform duration-300 shadow-lg rounded-lg h-full"
                    bodyStyle={{
                      padding: "20px",
                      minHeight: "180px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Link to="/services">
                      <Card.Meta
                        title={
                          <span className="text-black-600 text-xl">
                            {solution.title}
                          </span>
                        }
                        description={
                          <span className="text-gray-700">
                            {solution.description}
                          </span>
                        }
                        className="text-center"
                      />
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* We Can Help You With Section */}
          <section className="my-12">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
              We Can Help You With
            </h2>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-8 rounded-lg shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    hoverable
                    bordered={false}
                    className="transition-transform duration-300 ease-in-out transform hover:-translate-y-2 shadow-md rounded-lg"
                    bodyStyle={{ padding: "20px" }}
                  >
                    <div className="flex items-center">
                      <CheckCircleOutlined className="text-blue-500 text-2xl mr-4" />
                      <p className="text-lg font-medium text-gray-700">
                        {service.name}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="my-12">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">
              Testimonials
            </h2>
            <Carousel
              dots
              autoplay
              autoplaySpeed={3000}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial._id}
                  className="flex flex-col items-center"
                >
                  <div className="w-full p-4 border border-blue-200 rounded-lg bg-blue-50 shadow-sm">
                    <p className="text-gray-800 italic text-center">
                      &#xFF02;{testimonial.text}&#xFF02;
                    </p>
                    <p className="text-right font-semibold text-blue-600">
                      - {testimonial.author}
                    </p>
                    <p className="text-right text-gray-500 text-sm">
                      {testimonial.designation}
                    </p>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, index) => (
                        <StarFilled key={index} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
