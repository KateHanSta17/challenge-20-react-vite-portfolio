// src/pages/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <main className="container my-5">
      <section>
        <h2 className="about-title">Career Summary</h2>

        {/* Key Skills Section */}
        <h3>Key Skills</h3>
        <ul>
          <li>Proficient in managing diverse client portfolios, driving revenue growth, and ensuring tailored solutions.</li>
          <li>Skilled in cultivating lasting client relationships, delivering exceptional service.</li>
          <li>Experienced in onboarding initiatives, optimizing integration processes, and facilitating rapid time-to-value for clients.</li>
          <li>Capable of overseeing omnichannel interactions, analyzing data to drive strategic decisions.</li>
          <li>Demonstrated ability to lead and mentor teams, fostering cultures of excellence.</li>
          <li>Proficient in leveraging real-time data insights to inform strategies and optimize processes.</li>
          <li>Proven track record in orchestrating digital initiatives, managing projects end-to-end.</li>
          <li>Adept at establishing rapport and fostering connection with diverse clientele.</li>
        </ul>

        {/* Technical Skills Section */}
        <h3>Technical Skills</h3>
        <ul>
          <li>Digital Expansion, Migration & Development</li>
          <li>Implementation, Onboarding, Learning & Enablement</li>
          <li>UX & UI Quality Assurance</li>
          <li>E-commerce Platforms: Shopify, BigCommerce, Magento, Salesforce Commerce Cloud (SFCC), and more</li>
          <li>Project Management Tools: Jira, Confluence, Trello, Miro, Monday</li>
          <li>CRM Systems: Salesforce, Zendesk, Gorgias</li>
          <li>HTML, CSS, JavaScript, APIs, Webhooks</li>
          <li>Email Service Providers (ESP): Klaviyo, DotDigital, Yotpo, Emarsys</li>
          <li>Customer Experience (CX) Management</li>
          <li>Loyalty Product Expertise</li>
          <li>Reviews & User-Generated Content (UGC) Strategy</li>
          <li>Copywriting, Proofreading, and Editing</li>
          <li>Sales Techniques: QBR (Quarterly Business Review), ABR (Annual Business Review), Cross-Selling, Upselling, Renewals (including contract negotiation)</li>
        </ul>

        {/* Education Section */}
        <h3>Education</h3>
        <ul>
          <li>Master of Media Arts & Production – 2016, University of Technology Sydney</li>
          <li>Coding Bootcamp (Certification currently studying) – 2024, Sydney University x EdX</li>
          <li>Bachelor of Creative Arts – Film & Television – 2014, JMC Sydney</li>
          <li>Certificate IV Marketing and Communications – 2019, TAFE Meadowbank</li>
        </ul>

        {/* Career History Section */}
        <h3>Career History</h3>

        <h4><b>Mailchimp</b></h4>
        <h3>ANZ Onboarding Specialist (Aug 2024 – current) – Sydney NSW</h3>
        <ul>
          <li>First point of contact for Premium Customers post-sales.</li>
          <li>Onboard new and upgrading Premium customers and deliver Strategic & Technical guidance for account setup and launch.</li>
          <li>Strategically Drive Adoption & Optimisation for all new Premium accounts resulting in increased TTV & ROI.</li>
        </ul>

        <h4><b>Yotpo</b></h4>
        <h3>APAC Implementation Manager (Aug 2023 – Mar 2024) – Haymarket NSW</h3>
        <ul>
          <li>Drove the transformation of merchant onboarding by leading initiatives to integrate Yotpo's SaaS products.</li>
          <li>Managed a portfolio of 40+ merchants, ranging from SMBs to Enterprise-level clients.</li>
          <li>Achieved multiple team awards and industry recognition.</li>
        </ul>

        <h4><b>Yotpo</b></h4>
        <h3>Multi-Product Customer Success Manager (Jan 2022 – Aug 2023) – Haymarket NSW</h3>
        <ul>
          <li>Oversaw a client portfolio of 80 clients, generating over $1.8 million in revenue annually.</li>
          <li>Specialised in Loyalty & Referrals, with additional expertise in Reviews & UGC/VMS accounts.</li>
        </ul>

        <h4><b>Moustache Republic</b></h4>
        <h3>Strategic Account Manager (Sep 2020 – Jan 2022) – Sydney NSW</h3>
        <ul>
          <li>Managed digital initiatives for clients in Australia and New Zealand, focusing on UX/UI design and platform migration.</li>
        </ul>

        <h4><b>Retail Apparel Group</b></h4>
        <h3>Omni-Channel CX Manager (Sep 2018 – Sep 2020) – Waterloo NSW</h3>
        <ul>
          <li>Led a team of 6 Customer Service agents handling omnichannel interactions for various retail brands.</li>
          <li>Mentored team members and improved customer service strategies.</li>
        </ul>

        {/* LinkedIn Button */}
        <div className="mt-5">
          <a href="https://www.linkedin.com/in/katestapley-ecommerce/" target="_blank" className="btn btn-linkedin btn-lg px-4">
            Visit My LinkedIn Profile
          </a>
        </div>
      </section>
    </main>
  );
};

export default Resume;
