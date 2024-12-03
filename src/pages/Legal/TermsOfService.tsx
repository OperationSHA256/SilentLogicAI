import React from 'react';

export default function TermsOfService() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#008080] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-xl text-gray-200">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Silent Logic AI Labs' services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Services Description</h2>
          <p>
            Silent Logic AI Labs provides AI-powered automation solutions for business processes, including but not limited to customer service automation, data analysis, and workflow optimization.
          </p>

          <h2>3. User Obligations</h2>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Use services only for authorized and legitimate purposes</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services are owned by Silent Logic AI Labs and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>5. Data Usage</h2>
          <p>
            We collect and process data in accordance with our Privacy Policy. By using our services, you consent to such processing and warrant that all data provided by you is accurate.
          </p>

          <h2>6. Service Modifications</h2>
          <p>
            We reserve the right to modify or discontinue any part of our services with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Silent Logic AI Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
          </p>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of Australia, without regard to its conflict of law provisions.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. We will notify users of any material changes via email or through our services.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For any questions about these Terms of Service, please contact us at legal@silentlogicai.com.
          </p>
        </div>
      </div>
    </div>
  );
}