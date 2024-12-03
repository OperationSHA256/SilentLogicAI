import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#008080] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-xl text-gray-200">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Account information (name, email, company details)</li>
            <li>Usage data and interaction with our services</li>
            <li>Communication preferences</li>
            <li>Customer service interactions</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the collected information for:
          </p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services</li>
            <li>Analyzing usage patterns and trends</li>
            <li>Protecting against fraudulent or unauthorized activity</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to collect usage data and improve our services. You can control cookie preferences through your browser settings.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
          </p>

          <h2>8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2>9. Changes to Privacy Policy</h2>
          <p>
            We may update this policy periodically. We will notify you of material changes via email or through our services.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For privacy-related inquiries, please contact our Data Protection Officer at privacy@silentlogicai.com.
          </p>
        </div>
      </div>
    </div>
  );
}