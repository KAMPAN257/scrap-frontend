import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // Optional: Your CSS file

const AboutUs = () => {
  const aboutData = {
    title: 'About Us',
    missionTitle: 'Our Mission',
    missionDescription: 'At Scrapegenie, our mission is to foster a sustainable future by increasing recycling rates within our community and reducing the amount of waste sent to landfills.',
    // storyTitle: 'Our Story',
    // storyContent: 'Our journey began in 2023 when a group of passionate environmentalists in Ahmedabad noticed the growing problem of un-recycled plastic. Driven by a shared vision of a cleaner city, we decided to take action and establish a community-driven recycling initiative...',
    whatWeDoTitle: 'What We Do',
    whatWeDoContent: 'We organize weekly collection drives for plastic and paper within designated neighborhoods. Our dedicated volunteers sort and prepare these materials for local recycling facilities. We also conduct educational workshops in schools and community centers to raise awareness about the importance of recycling and sustainable waste management.',
    impactSection: {
      title: 'Our Impact',
      introduction: 'Since our inception, we have made significant strides in promoting recycling and environmental responsibility:',
      points: [
        'Collected over 5 tons of recyclable materials.',
        'Organized 15 successful community recycling drives.',
        'Reached over 500 students through our educational workshops.',
        'Partnered with 5 local businesses to implement recycling programs.',
      ],
      conclusion: 'We are committed to expanding our reach and impact in the years to come.',
    },
    // teamSection: {
    //   title: 'Our Team',
    //   members: [
    //     {
    //       name: 'Priya Sharma',
    //       role: 'Founder & Director',
    //       bio: 'Priya is a passionate environmental advocate with over 10 years of experience in sustainability initiatives.',
    //       image: '/images/priya.jpg', // Replace with actual image path
    //     },
    //     {
    //       name: 'Rahul Patel',
    //       role: 'Operations Manager',
    //       bio: 'Rahul oversees our collection and sorting operations, ensuring efficiency and effectiveness.',
    //       image: '/images/rahul.jpg', // Replace with actual image path
    //     },
    //     {
    //       name: 'Sneha Verma',
    //       role: 'Community Outreach Coordinator',
    //       bio: 'Sneha leads our educational programs and community engagement efforts.',
    //       image: '/images/sneha.jpg', // Replace with actual image path
    //     },
    //     // Add more team members
    //   ],
    // },
    valuesSection: {
      title: 'Our Values',
      values: [
        { name: 'Sustainability', description: 'We are dedicated to promoting environmentally responsible practices.' },
        { name: 'Community Engagement', description: 'We believe in the power of collective action and community involvement.' },
        { name: 'Transparency', description: 'We operate with openness and accountability in all our activities.' },
        { name: 'Impact', description: 'We are focused on achieving measurable and positive environmental outcomes.' },
      ],
    },
    // callToActionSection: {
    //   title: 'Get Involved!',
    //   description: 'Join us in making a difference for our planet:',
    //   callToActionItems: [
    //     { label: 'Find a Recycling Drive Near You', link: '/events' },
    //     { label: 'Volunteer With Us', link: '/volunteer' },
    //     { label: 'Support Our Mission', link: '/donate' },
    //     { label: 'Spread the Word', link: '/share' },
    //   ],
    // },
    contactSection: {
      title: 'Contact Us',
      email: 'info@scrapegenie.org',
      phone: '+91 9876543210',
      address: 'Royal Technolabs, Ahmedabad, Gujarat, India',
      socialLinks: {
        facebook: 'https://facebook.com/yourrecycleproject',
        twitter: 'https://twitter.com/yourrecycleproject',
        instagram: 'https://instagram.com/yourrecycleproject',
        linkedin: 'https://linkedin.com/company/yourrecycleproject',
      },
    },
    metaDescription: 'Learn about Scrapegenie, our mission to promote recycling in Ahmedabad, and how you can get involved.',
    keywords: 'recycling, Ahmedabad, environment, sustainability, volunteer, donate',
  };

  return (
    <div className="about-us-page">
      <h1>{aboutData.title}</h1>

      <section className="mission-section">
        <h2>{aboutData.missionTitle}</h2>
        <p>{aboutData.missionDescription}</p>
      </section>

      {/* <section className="story-section">
        <h2>{aboutData.storyTitle}</h2>
        <p>{aboutData.storyContent}</p>
      </section> */}

    {/* <div className="section-container">
      <section className="section what-we-do-section">
        <h2>{aboutData.whatWeDoTitle}</h2>
        <p>{aboutData.whatWeDoContent}</p>
      </section>
    </div> */}

<div className="section-container">
  <section className="section what-we-do-section">
    <div className="leaf-decoration leaf-1"></div>
    <div className="leaf-decoration leaf-2"></div>
    <h2>{aboutData.whatWeDoTitle}</h2>
    <p>{aboutData.whatWeDoContent}</p>
  </section>
</div>

      {/* {aboutData.impactSection && (
        <section className="impact-section">
          <h2>{aboutData.impactSection.title}</h2>
          {aboutData.impactSection.introduction && <p>{aboutData.impactSection.introduction}</p>}
          <ul>
            {aboutData.impactSection.points && aboutData.impactSection.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          {aboutData.impactSection.conclusion && <p>{aboutData.impactSection.conclusion}</p>}
        </section>
      )} */}

      {/* Our Impact Section */}
  <div className="section-container">
    <section className="section impact-section">
      <h2>Our Impact</h2>
      <ul className="impact-list">
        <li>Collected over 5 tons of recyclable materials.</li>
        <li>Organized 15 successful community recycling drives.</li>
        <li>Reached over 500 students through our educational workshops.</li>
        <li>Partnered with 5 local businesses to implement recycling programs.</li>
      </ul>
      <p>We are committed to expanding our reach and impact in the years to come.</p>
    </section>
  </div>


      {/* {aboutData.teamSection && aboutData.teamSection.members && aboutData.teamSection.members.length > 0 && (
        <section className="team-section">
          <h2>{aboutData.teamSection.title}</h2>
          <div className="team-members">
            {aboutData.teamSection.members.map((member, index) => (
              <div key={index} className="team-member">
                {member.image && <img src={member.image} alt={member.name} />}
                <h3>{member.name}</h3>
                {member.role && <p className="role">{member.role}</p>}
                {member.bio && <p>{member.bio}</p>}
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* {aboutData.valuesSection && aboutData.valuesSection.values && aboutData.valuesSection.values.length > 0 && (
        <section className="values-section">
          <h2>{aboutData.valuesSection.title}</h2>
          <ul className="values-list">
            {aboutData.valuesSection.values.map((value, index) => (
              <li key={index}>
                <h3>{value.name}</h3>
                {value.description && <p>{value.description}</p>}
              </li>
            ))}
          </ul>
        </section>
      )} */}

      {/* Our Values Section */}
  <div className="section-container">
    <section className="section values-section">
      <h2>Our Values</h2>
      <h3>Sustainability</h3>
      {/* Add your values content here */}
    </section>
  </div>

      {/* {aboutData.callToActionSection && (
        <section className="call-to-action-section">
          <h2>{aboutData.callToActionSection.title}</h2>
          {aboutData.callToActionSection.description && <p>{aboutData.callToActionSection.description}</p>}
          <ul>
            {aboutData.callToActionSection.callToActionItems && aboutData.callToActionSection.callToActionItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      )} */}

      <section className="contact-section">
        <h2>{aboutData.contactSection.title}</h2>
        {aboutData.contactSection.email && <p>Email: <a href={`mailto:${aboutData.contactSection.email}`}>{aboutData.contactSection.email}</a></p>}
        {aboutData.contactSection.phone && <p>Phone: {aboutData.contactSection.phone}</p>}
        {aboutData.contactSection.address && <p>Address: {aboutData.contactSection.address}</p>}
        {aboutData.contactSection.socialLinks && (
          <div className="social-links">
            {aboutData.contactSection.socialLinks.facebook && <a href={aboutData.contactSection.socialLinks.facebook}>Facebook</a>}
            {aboutData.contactSection.socialLinks.twitter && <a href={aboutData.contactSection.socialLinks.twitter}>Twitter</a>}
            {aboutData.contactSection.socialLinks.instagram && <a href={aboutData.contactSection.socialLinks.instagram}>Instagram</a>}
            {aboutData.contactSection.socialLinks.linkedin && <a href={aboutData.contactSection.socialLinks.linkedin}>LinkedIn</a>}
          </div>
        )}
      </section>

      <footer>
        &copy; {new Date().getFullYear()} ScrapeGenie. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;