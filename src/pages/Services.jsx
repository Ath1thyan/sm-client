import React from "react";
import Layout from "../components/Layout";
import NBASection from "../components/sections/NBASection";
import NAACSection from "../components/sections/NAACSection";
import NIRFSection from "../components/sections/NIRFSection";

const Services = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            Our Accreditation Services
          </h1>
          <p className="text-lg text-gray-600">
            Explore the various accreditation and ranking services we offer to
            help institutions improve their quality and performance.
          </p>
        </header>

        {/* NAAC Section */}
        <NAACSection className="mb-4" />

        {/* NBA Section */}
        <NBASection className="mt-4" />

        {/* NIRF Section */}
        <NIRFSection className="mt-4" />
      </div>
    </Layout>
  );
};

export default Services;
