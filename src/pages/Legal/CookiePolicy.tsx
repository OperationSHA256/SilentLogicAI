import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#008080] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-xl text-gray-200">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and understand how you interact with our services.
          </p>

          <h2>2. Types of Cookies We Use</h2>
          <h3>Essential Cookies</h3>
          <p>
            Required for the operation of our website. They enable basic functions like page navigation and access to secure areas.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            Help us understand how visitors interact with our website by collecting and reporting information anonymously.
          </p>

          <h3>Functional Cookies</h3>
          <p>
            Enable enhanced functionality and personalization, such as remembering your preferences.
          </p>

          <h3>Marketing Cookies</h3>
          <p>
            Used to track visitors across websites to enable us to display relevant and engaging advertisements.
          </p>

          <h2>3. Cookie Management</h2>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
          </p>

          <h2>4. Specific Cookies We Use</h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session_id</td>
                <td>Maintains user session</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>preferences</td>
                <td>Stores user preferences</td>
                <td>1 year</td>
              </tr>
              <tr>
                <td>analytics</td>
                <td>Tracks anonymous usage</td>
                <td>2 years</td>
              </tr>
            </tbody>
          </table>

          <h2>5. Third-Party Cookies</h2>
          <p>
            We use services from these third parties that may set cookies:
          </p>
          <ul>
            <li>Google Analytics</li>
            <li>Firebase Authentication</li>
            <li>Stripe Payment Processing</li>
          </ul>

          <h2>6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at privacy@silentlogicai.com.
          </p>
        </div>
      </div>
    </div>
  );
}