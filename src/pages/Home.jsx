import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import naac from '../assets/naac.png';
import nba from '../assets/nba.png';
import nirf from '../assets/nirf.png';
import audit from '../assets/Mock-Inspection.png';
import fa from '../assets/img2.jpg';
import mi from '../assets/mi.jpg';
import { Card, Col, Row, Carousel, Button } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { FaArrowRight } from 'react-icons/fa'; // React icon for the button
import { CheckCircleOutlined } from '@ant-design/icons';

const Home = () => {
	const solutions = [
		{ id: 1, title: "NAAC", description: "National Assessment and Accreditation Council (NAAC) evaluates educational institutions on various parameters such as quality of teaching, research, and infrastructure.", image: `${naac}` },
		{ id: 2, title: "NBA", description: "National Board of Accreditation (NBA) focuses on enhancing the quality and relevance of engineering and technical education in India.", image: `${nba}` },
		{ id: 3, title: "NIRF", description: "National Institutional Ranking Framework (NIRF) ranks educational institutions based on performance in teaching, learning, and research.", image: `${nirf}` },
		{ id: 4, title: "Academic Audit", description: "Our academic audit services help institutions assess and enhance their academic processes, performance, and outcomes.", image: `${audit}` },
		{ id: 5, title: "Overseas Education", description: "Our dedicated services guide institutions in providing comprehensive overseas education solutions, helping students broaden their horizons on an international scale.", image: `${fa}` },
		{ id: 6, title: "Mock Inspection", description: "Prepare confidently for inspections with our mock inspection services, which simulate real-world scenarios to help you perform at your best.", image: `${mi}` },
	];

	const services = [
		"Self-Study Preparation & Review",
		"Documentation/Exhibits Review",
		"Institutional Response to Oversight Agency Request",
		"Plans, Policies, and Procedures Development & Review",
		"Applications Assistance",
		"Strategic Planning",
		"Policy & Procedure Assistance",
		"Financial Planning & Analysis",
		"Professional Development Sessions",
		"Meeting Facilitation",
		"Mock Team Visit Preparation",
		"Substantive Change Applications & Integration Assistance",
	];

	const testimonials = [
		{
			id: 1,
			text: "The support from SM Educational Consultant has been invaluable for our institution. Their expertise and hands-on approach made our NAAC accreditation process seamless and highly efficient. They provided thorough guidance at every step, from the initial documentation review to the final inspection. Their team was always available to address our concerns and ensure that we met all compliance standards. I highly recommend their services to any educational institution looking for expert assistance in achieving accreditation and improving academic quality.",
			author: "John Doe",
			designation: "Principal, XYZ College"
		},
		{
			id: 2,
			text: "SM Educational Consultant's guidance on the NAAC accreditation was truly exceptional. They meticulously planned each phase of our accreditation journey, from preparation to final evaluation. Their team's attention to detail and proactive approach ensured that we were well-prepared for every aspect of the assessment. Thanks to their support, we were able to achieve accreditation with high scores. Their expertise and professionalism have set a benchmark in the field of educational consulting, and I would recommend their services to any institution aiming for excellence.",
			author: "Jane Smith",
			designation: "Dean, ABC University"
		},
		{
			id: 3,
			text: "If you're seeking academic support, I highly recommend SM Educational Consultant. Their strategic planning and analysis were instrumental in improving our institutional ranking and overall performance. They helped us refine our academic processes, develop robust policies, and identify areas of improvement. Their team was committed to our success and provided us with detailed insights that elevated our institution’s standing. Their dedication, expertise, and personalized approach are unmatched in the industry. We couldn't have asked for a better partner in achieving our academic goals.",
			author: "Alice Johnson",
			designation: "Vice-Chancellor, DEF Institute"
		}
	];
	

	return (
		<Layout>
			<div className="container mx-auto p-6">
				{/* Introduction Section */}
				<section className="mb-12 mt-4 text-center bg-blue-100 p-8 border-0 rounded-sm">
					<h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to SM Educational Consultant</h1>
					<p className="text-lg text-gray-700 mb-6">
						We provide comprehensive accreditation support and guidance to educational institutions. 
						Our expert team is dedicated to helping you achieve your academic goals.
					</p>
					<div className="flex justify-center">
						<Link to="/about">
							<Button type="primary" className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg p-6 transition duration-300">
								<span>Learn More About Us</span>
								<FaArrowRight className="ml-2" />
							</Button>
						</Link>
					</div>
				</section>

				{/* Our Solutions Section */}
<section className="my-12">
	<h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Our Solutions</h2>
	<p className="text-center text-gray-600 mb-8">Get the Support Your Institution Needs</p>
	<Row gutter={[16, 16]}>
		{solutions.map(solution => (
			<Col key={solution.id} xs={24} sm={12} md={8}>
				<Card
					hoverable
					cover={<img alt={solution.title} src={solution.image} className="h-48 w-full object-cover rounded-t-lg" />}
					className="transition-transform duration-300 shadow-lg rounded-lg h-full"
					bodyStyle={{ padding: '20px', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} // Ensure equal content height
				>
					<Link
						to={
							solution.title === "NAAC"
								? "/services"
								: solution.title === "NIRF"
								? "/services"
								: solution.title === "NBA"
								? "/services"
								: solution.title === "Academic Audit"
								? "/audit"
								: "/services"
						}
					>
						<Card.Meta
							title={<span className="text-black-600 text-xl">{solution.title}</span>}
							description={
								<span className="text-gray-700">
									{solution.description} {/* You can add more content or styles here as needed */}
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
	<h2 className="text-3xl font-bold text-center text-blue-600 mb-6">We Can Help You With</h2>
	<div className="bg-gradient-to-r from-blue-100 to-blue-50 p-8 rounded-lg shadow-xl">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{services.map((service, index) => (
				<Card
					key={index}
					hoverable
					bordered={false}
					className="transition-transform duration-300 ease-in-out transform hover:-translate-y-2 shadow-md rounded-lg"
					bodyStyle={{ padding: '20px' }}
				>
					<div className="flex items-center">
						<CheckCircleOutlined className="text-blue-500 text-2xl mr-4" />
						<p className="text-lg font-medium text-gray-700">{service}</p>
					</div>
				</Card>
			))}
		</div>
	</div>
</section>

				{/* Testimonials Section */}
				<section className="my-12">
					<h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Testimonials</h2>
					<Carousel dots autoplay autoplaySpeed={3000} className="bg-white rounded-lg shadow-lg p-6">
						{testimonials.map(testimonial => (
							<div key={testimonial.id} className="flex flex-col items-center">
								<div className="w-full p-4 border border-blue-200 rounded-lg bg-blue-50 shadow-sm">
									<p className="text-gray-800 italic text-center">&#xFF02;{testimonial.text}&#xFF02;</p>
									<p className="text-right font-semibold text-blue-600">- {testimonial.author}</p>
									<p className="text-right text-gray-500 text-sm">{testimonial.designation}</p>
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
		</Layout>
	);
};

export default Home;
