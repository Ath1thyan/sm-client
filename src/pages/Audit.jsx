import React from "react";
import Layout from "../components/Layout";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpg";

const Audit = () => {
  return (
    <Layout>
      <div className="w-full overflow-hidden">
        <img
          src={img3}
          alt="img3"
          className="w-full md:h-60 lg:h-60 object-cover object-top"
        />

        <div className="w-full py-8 sm:py-12 bg-gray-50">
          <div className="flex w-full justify-center px-4 sm:px-8">
            <div className="flex w-full max-w-7xl flex-col gap-8 sm:gap-12">
              <div className="flex flex-col sm:flex-row items-start space-x-5">
                <div className="relative h-[300px] min-w-[400px] overflow-hidden rounded-lg shadow-md">
                  <img
                    className="zoom-on-hover absolute inset-0 h-full w-full object-cover object-contain"
                    src={img4}
                    alt="image4"
                  />
                </div>

                <div className="text-lg flex-1">
                  <h2 className="font-semibold text-2xl mb-4 text-gray-800">
                    What is an Academic Audit?
                  </h2>
                  <p className="mb-4 text-gray-600 text-justify leading-relaxed">
                    An <span className="font-semibold">Academic Audit</span> is a comprehensive evaluation process
                    aimed at assessing the quality and effectiveness of
                    educational programs and institutional practices. This audit
                    helps identify gaps and inadequacies that may hinder an
                    institution's readiness for accreditation. The process is
                    crucial for ensuring that educational offerings meet
                    established standards and align with global best practices.
                    Upon completion, the audit provides a detailed roadmap with
                    timelines for addressing identified issues, ultimately
                    supporting academic, research, and governance initiatives,
                    often led by the Internal Quality Assurance Cell (IQAC).
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-xl mt-6 text-gray-800">
                  Broad Outline of Academic Audit
                </h3>
                <h4 className="font-semibold mt-4 text-gray-800">Objectives</h4>
                <ul className="list-disc list-inside mb-4 text-gray-800">
                  <li>
                    Assess the academic status against global best practices.
                  </li>
                  <li>
                    Identify strengths and weaknesses with recommendations for
                    improvement.
                  </li>
                  <li>
                    Evaluate readiness for accreditation and provide a roadmap for
                    achieving the highest grade.
                  </li>
                </ul>

                <h4 className="font-semibold mt-4 text-gray-800">
                  Audit Proceedings
                </h4>
                <ol className="list-decimal list-inside mb-4 text-gray-800">
                  <li>
                    <span className="font-semibold">Formation of the Audit Board:</span> Constituted with external experts.
                  </li>
                  <li>
                    <span className="font-semibold">Initial Briefing:</span> Conducted with the Head of the Institute and key staff.
                  </li>
                  <li>
                    <span className="font-semibold">Verification and Validation:</span> Review of relevant data against actual practices.
                  </li>
                  <li>
                    <span className="font-semibold">Interactions with Key Staff:</span> Engagement with admission, placement, and research heads.
                  </li>
                  <li>
                    <span className="font-semibold">Interviews:</span> Conduct interviews with faculty, students, and alumni.
                  </li>
                  <li>
                    <span className="font-semibold">Flexibility in Focus:</span> Tailor the audit to specific accreditation bodies as needed.
                  </li>
                </ol>

                <h3 className="font-bold text-xl mt-6 text-gray-800">
                  Conclusion
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  An Academic Audit serves as a vital tool for institutions
                  striving for excellence in education. By systematically
                  evaluating various aspects of academic performance, the audit
                  process not only helps identify areas for improvement but also
                  provides a structured approach to achieving and maintaining high
                  standards of educational quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Audit;
