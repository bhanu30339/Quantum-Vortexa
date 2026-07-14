import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-10">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-invert max-w-none text-gray-300">
          <p className="mb-6">
            Quantum Vortexa FZE LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. UAE Personal Data Protection Law (PDPL) Compliance</h2>
          <p className="mb-6">
            We operate in compliance with the United Arab Emirates Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL), as well as applicable global standards like GDPR where relevant to our enterprise clients.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, phone number, and company details provided via our contact forms.</li>
            <li><strong>Usage Data:</strong> IP addresses, browser types, and navigation paths collected automatically via Google Analytics to improve user experience.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Providing, operating, and maintaining our enterprise technology solutions.</li>
            <li>Improving, personalizing, and expanding our website and services.</li>
            <li>Understanding and analyzing how you use our website.</li>
            <li>Communicating with you for customer service, updates, and marketing (subject to your consent).</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Data Security & Storage</h2>
          <p className="mb-6">
            We use administrative, technical, and physical security measures to help protect your personal information. All critical data is stored securely in compliance with UAE data sovereignty regulations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Contact Us</h2>
          <p className="mb-6">
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br /><br />
            Quantum Vortexa FZE LLC<br />
            CWS-1V-223327, 26th Floor, Amber Gem Tower<br />
            Ajman Free Zone, UAE<br />
            Phone: <a href="tel:+971544566332" className="text-primary hover:underline">+971 54 456 6332</a>
          </p>
        </div>
      </div>
    </div>
  );
}
