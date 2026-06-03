import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }) {
  const siteTitle = title ? `${title} | YouthGenex` : "YouthGenex | Empowering Youth Leadership";
  const metaDesc = description || "YouthGenex is a youth leadership and civic capability-building organization. We bring together students, educators, and future leaders through experiences that encourage learning, collaboration, and meaningful conversations.";

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content="https://youthgenex.com/logo.jpeg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={metaDesc} />
      <meta property="twitter:image" content="https://youthgenex.com/logo.jpeg" />
    </Helmet>
  );
}
