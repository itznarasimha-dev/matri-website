import CTASection from '../components/CTASection'
import weddingBg from '../assets/wedding background.jpg'

function LegalHero({ title, subtitle }) {
  return (
    <div className="relative pt-32 sm:pt-36 pb-16 text-center overflow-hidden"
      style={{ backgroundImage: `url(${weddingBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '40vh' }}>
      <div className="absolute inset-0" style={{ background: 'rgba(10,10,46,0.65)' }} />
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <span className="section-tag" style={{ color: '#E8836A' }}>Mangalayam</span>
        <h1 className="font-display font-bold text-white mt-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}>{title}</h1>
        <p className="font-body text-sm mt-3" style={{ color: 'rgba(255,255,255,0.65)' }}>{subtitle}</p>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="font-heading font-bold text-lg mb-3" style={{ color: '#1A1F36' }}>{title}</h2>
      <div className="font-body text-sm leading-relaxed" style={{ color: '#6B7280' }}>{children}</div>
    </div>
  )
}

function Card({ children }) {
  return (
    <div className="rounded-2xl p-6 sm:p-8 mb-6" style={{ background: '#fff', border: '1px solid #E2E5F0', boxShadow: '0 2px 16px rgba(0,0,128,0.06)' }}>
      {children}
    </div>
  )
}

/* ─── PRIVACY POLICY ─────────────────────────── */
export function PrivacyPolicy() {
  return (
    <main className="min-h-screen" style={{ background: '#F0F2F8' }}>
      <LegalHero title="Privacy Policy" subtitle="Last updated: January 2025" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Card>
          <Section title="1. Information We Collect">
            <p className="mb-3">We collect the following types of information when you register and use Mangalayam:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Personal details: name, date of birth, gender, religion, caste, height, education, profession, location</li>
              <li>Contact information: email address, mobile number</li>
              <li>Profile photos uploaded by you</li>
              <li>Horoscope and family details (optional)</li>
              <li>Usage data: pages visited, search queries, interactions</li>
              <li>Device and browser information for security purposes</li>
            </ul>
          </Section>
          <Section title="2. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-1">
              <li>To create and manage your matrimony profile</li>
              <li>To suggest compatible matches based on your preferences</li>
              <li>To send you notifications about interests, matches, and platform updates</li>
              <li>To verify your identity and ensure profile authenticity</li>
              <li>To improve our platform through analytics</li>
              <li>To provide customer support and respond to your queries</li>
            </ul>
          </Section>
          <Section title="3. Information Sharing">
            <p className="mb-3">Your contact details (phone number and email) are <strong>never shared</strong> without your explicit consent. We do not sell your personal data to third parties. Profile information is visible to other registered members as per your privacy settings.</p>
            <p>We may share anonymized, aggregated data for research or business purposes. We may disclose information if required by law or to protect the rights and safety of our users.</p>
          </Section>
          <Section title="4. Data Security">
            <p>We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits. All passwords are hashed and never stored in plain text. However, no method of transmission over the internet is 100% secure.</p>
          </Section>
          <Section title="5. Cookies">
            <p>We use cookies to maintain your session, remember preferences, and analyze site traffic. You can disable cookies in your browser settings, but some features may not function properly.</p>
          </Section>
          <Section title="6. Your Rights">
            <ul className="list-disc pl-5 space-y-1">
              <li>Access and download your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of marketing communications</li>
              <li>Request restriction of data processing</li>
            </ul>
          </Section>
          <Section title="7. Data Retention">
            <p>We retain your data for as long as your account is active. After account deletion, we may retain anonymized data for up to 90 days before permanent deletion.</p>
          </Section>
          <Section title="8. Contact Us">
            <p>For any privacy-related concerns, contact our Data Protection Officer at <strong>privacy@mangalayam.com</strong> or write to us at Mangalayam, Banjara Hills, Hyderabad, Telangana 500034.</p>
          </Section>
        </Card>
      </div>
      <CTASection />
    </main>
  )
}

/* ─── TERMS OF SERVICE ───────────────────────── */
export function TermsOfService() {
  return (
    <main className="min-h-screen" style={{ background: '#F0F2F8' }}>
      <LegalHero title="Terms of Service" subtitle="Please read these terms carefully before using Mangalayam" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Card>
          <Section title="1. Acceptance of Terms">
            <p>By registering on or using Mangalayam, you agree to these Terms of Service. If you do not agree, please do not use our platform. We reserve the right to update these terms at any time with notice to users.</p>
          </Section>
          <Section title="2. Eligibility">
            <ul className="list-disc pl-5 space-y-1">
              <li>You must be at least 18 years of age (21 for grooms as per Indian law)</li>
              <li>You must be legally eligible to marry under applicable laws</li>
              <li>You must not have an existing undissolved marriage unless legally separated or divorced</li>
              <li>You must provide accurate and truthful information during registration</li>
            </ul>
          </Section>
          <Section title="3. Profile Guidelines">
            <p className="mb-3">You agree that your profile content will:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Be accurate, genuine, and represent yourself honestly</li>
              <li>Not contain false, misleading, or fraudulent information</li>
              <li>Not include offensive, obscene, or inappropriate content</li>
              <li>Not impersonate any other person or entity</li>
              <li>Use only photos of yourself that you have rights to</li>
            </ul>
          </Section>
          <Section title="4. Prohibited Activities">
            <ul className="list-disc pl-5 space-y-1">
              <li>Creating fake or duplicate profiles</li>
              <li>Harassing, threatening, or abusing other members</li>
              <li>Sharing contact details of other members without consent</li>
              <li>Using the platform for commercial solicitation</li>
              <li>Attempting to hack, disrupt, or damage the platform</li>
              <li>Misusing others' personal information</li>
            </ul>
          </Section>
          <Section title="5. Subscription & Payments">
            <p className="mb-3">Free membership provides limited features. Premium plans are available on a subscription basis. All payments are processed securely. Refunds are issued within 7 days of purchase if no premium features have been utilized.</p>
            <p>Subscription fees are non-refundable after the cooling-off period. Auto-renewal can be cancelled from account settings at any time.</p>
          </Section>
          <Section title="6. Limitation of Liability">
            <p>Mangalayam is a platform to facilitate connections. We do not guarantee the accuracy of user-provided information. We are not responsible for the outcome of meetings or relationships formed on the platform. Users interact at their own risk and discretion.</p>
          </Section>
          <Section title="7. Termination">
            <p>We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or harm other users. You may delete your account at any time from account settings.</p>
          </Section>
          <Section title="8. Governing Law">
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.</p>
          </Section>
        </Card>
      </div>
      <CTASection />
    </main>
  )
}

/* ─── GRIEVANCE ──────────────────────────────── */
export function Grievance() {
  return (
    <main className="min-h-screen" style={{ background: '#F0F2F8' }}>
      <LegalHero title="Grievance Redressal" subtitle="We take every concern seriously and respond within 48 hours" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { emoji: '📧', title: 'Email Us', desc: 'grievance@mangalayam.com', sub: 'Response within 24 hours' },
            { emoji: '📞', title: 'Call Us', desc: '+91 98765 43210', sub: 'Mon–Sat, 9 AM – 6 PM' },
            { emoji: '💬', title: 'WhatsApp', desc: '+91 98765 43210', sub: 'Available 24/7' },
          ].map(c => (
            <div key={c.title} className="rounded-2xl p-6 text-center" style={{ background: '#fff', border: '1px solid #E2E5F0', boxShadow: '0 2px 16px rgba(0,0,128,0.06)' }}>
              <div className="text-3xl mb-3">{c.emoji}</div>
              <div className="font-heading font-bold mb-1" style={{ color: '#1A1F36' }}>{c.title}</div>
              <div className="font-body text-sm font-semibold" style={{ color: '#000080' }}>{c.desc}</div>
              <div className="font-body text-xs mt-1" style={{ color: '#9CA3AF' }}>{c.sub}</div>
            </div>
          ))}
        </div>

        <Card>
          <Section title="Grievance Officer">
            <p className="mb-3">As per the Information Technology Act 2000 and Rules, the details of the Grievance Officer are:</p>
            <div className="rounded-xl p-4" style={{ background: '#F8F9FF', border: '1px solid #E8EBF5' }}>
              <p><strong>Name:</strong> Mr. Ramesh Varma</p>
              <p><strong>Designation:</strong> Grievance Officer</p>
              <p><strong>Email:</strong> grievance@mangalayam.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> Mangalayam Pvt. Ltd., Banjara Hills, Hyderabad, Telangana 500034</p>
            </div>
          </Section>
          <Section title="Types of Grievances We Handle">
            <ul className="list-disc pl-5 space-y-1">
              <li>Fake or fraudulent profiles</li>
              <li>Harassment or abusive behaviour by members</li>
              <li>Unauthorized use of your photos or information</li>
              <li>Payment disputes and refund requests</li>
              <li>Account suspension or deletion issues</li>
              <li>Data privacy concerns</li>
              <li>Technical issues affecting your experience</li>
            </ul>
          </Section>
          <Section title="Resolution Timeline">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Acknowledgement:</strong> Within 24 hours of receiving your complaint</li>
              <li><strong>Investigation:</strong> Within 3–5 business days</li>
              <li><strong>Resolution:</strong> Within 15 days as per IT Act guidelines</li>
              <li><strong>Escalation:</strong> If unresolved, escalate to grievance@mangalayam.com with "ESCALATION" in subject</li>
            </ul>
          </Section>
          <Section title="How to File a Grievance">
            <ol className="list-decimal pl-5 space-y-1">
              <li>Email us at grievance@mangalayam.com with subject: "Grievance – [Your Issue]"</li>
              <li>Include your registered email or profile ID</li>
              <li>Describe the issue clearly with screenshots if applicable</li>
              <li>Our team will acknowledge and assign a ticket number</li>
              <li>You will receive updates until resolution</li>
            </ol>
          </Section>
        </Card>
      </div>
      <CTASection />
    </main>
  )
}

/* ─── FAQ ────────────────────────────────────── */
export function FAQ() {
  const faqs = [
    { cat: 'Getting Started', items: [
      { q: 'Is Mangalayam free to use?', a: 'Yes! Basic membership is completely free. You can create a profile, browse limited profiles, and send up to 5 interests per month. Premium plans unlock unlimited access, direct contact sharing, and a dedicated relationship manager.' },
      { q: 'How do I create a profile?', a: 'Click "Register Free", fill in your basic details across 3 simple steps — Basic Info, Personal Details, and Preferences. Your profile goes live immediately after verification.' },
      { q: 'Can I register on behalf of a family member?', a: 'Absolutely. During registration, select "My Son", "My Daughter", or "Relative" as the profile type. Parents and family members frequently register on behalf of their children.' },
    ]},
    { cat: 'Verification & Safety', items: [
      { q: 'How are profiles verified?', a: 'Upload a government-issued ID (Aadhaar, Passport, or Voter ID) during registration. Our team manually reviews and verifies it within 24 hours, adding a "Verified" badge to your profile.' },
      { q: 'Is my phone number visible to everyone?', a: 'No. Your phone number is only shared when both parties have mutually expressed interest and you explicitly approve contact sharing. You are always in control.' },
      { q: 'How do I report a fake profile?', a: 'Click the "Report" button on any profile page, or email us at grievance@mangalayam.com. We investigate all reports within 48 hours and take strict action.' },
    ]},
    { cat: 'Matches & Communication', items: [
      { q: 'How does the compatibility score work?', a: 'Our algorithm analyses values, lifestyle, education, family background, horoscope, and stated preferences to generate a match percentage. A score above 85% indicates high compatibility.' },
      { q: 'Can I search for NRI profiles?', a: 'Yes. Use the location filter in Browse Matches and select USA, UK, Australia, Gulf, or any other country. We have dedicated NRI support for families seeking cross-border matches.' },
      { q: 'How do I send interest to a profile?', a: 'Open any profile and click "Send Interest". The other person receives a notification. If they accept, you can proceed to chat and share contact details.' },
    ]},
    { cat: 'Membership & Payments', items: [
      { q: 'What is included in Premium?', a: 'Premium includes unlimited profile browsing, unlimited interest requests, view contact details, chat with matches, and advanced search filters. Premium Plus adds a dedicated matchmaker, priority boost, and WhatsApp support.' },
      { q: 'Can I cancel my subscription?', a: 'Yes. Go to Account Settings → Membership → Cancel Subscription. Your premium access continues until the end of your billing period. No further charges will be made.' },
      { q: 'What is the refund policy?', a: 'We offer a full refund within 7 days of purchase if you have not used any premium features. After 7 days, refunds are not available. For disputes, email support@mangalayam.com.' },
    ]},
    { cat: 'Account & Privacy', items: [
      { q: 'Can I hide my profile temporarily?', a: 'Yes. Go to Account Settings → Privacy → Hide Profile. Your profile becomes invisible to other members while all your data and matches are preserved.' },
      { q: 'How do I delete my account?', a: 'Go to Account Settings → Delete Account. Enter your password to confirm. All your data will be permanently deleted within 90 days as per our data retention policy.' },
      { q: 'Can I change my registered email or phone?', a: 'Yes. Go to Account Settings → Contact Details. Changing contact information requires OTP verification on the new email/phone number.' },
    ]},
  ]

  return (
    <main className="min-h-screen" style={{ background: '#F0F2F8' }}>
      <LegalHero title="Frequently Asked Questions" subtitle="Everything you need to know about Mangalayam" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {faqs.map(({ cat, items }) => (
          <div key={cat} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1" style={{ background: '#E2E5F0' }} />
              <span className="font-body font-bold text-xs uppercase tracking-widest px-3" style={{ color: '#000080' }}>{cat}</span>
              <div className="h-px flex-1" style={{ background: '#E2E5F0' }} />
            </div>
            <div className="space-y-3">
              {items.map(({ q, a }) => (
                <div key={q} className="rounded-2xl p-5" style={{ background: '#fff', border: '1px solid #E2E5F0', boxShadow: '0 2px 12px rgba(0,0,128,0.05)' }}>
                  <div className="font-heading font-semibold mb-2" style={{ color: '#1A1F36' }}>{q}</div>
                  <div className="font-body text-sm leading-relaxed" style={{ color: '#6B7280' }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <CTASection />
    </main>
  )
}
