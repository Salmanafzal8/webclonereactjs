import React from "react";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import DescriptionHeading from "../Components/DescriptionHeading";
import HeroCard from "../Components/HeroCard";
import Section2 from "../Components/Section2";
import section2image from "./../assets/section2image.jpg";
import servicecardimage2 from "./../assets/servicecardimage2.jpg";
import servicecardimage3 from "./../assets/servicecardimage3.jpg";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";
import Footer from "../Components/Footer";
import ContainedButton from "../Components/ContainedButton";
import Section6 from "../Components/Section6";
import Section7 from "../Components/Section7";
import herocardimg1 from ".././assets/herocardimg1.jpg";
import herocardimg2 from ".././assets/herocardimg2.jpg";
import herocardimg3 from ".././assets/herocardimg3.jpg";
// import { RiTrademarkFill } from "react-icons/ri";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <DescriptionHeading
        heading={"How will you take your Powur back"}
        description={
          "Powur delivers home energy solutions that save you money and lower your carbon footprint. What will you do with the results?"
        }
      />

      <div
        style={{ display: "flex", gap: "40px", padding: "2%" }}
        className="herocards"
      >
        <HeroCard image={herocardimg1} herocardheading={`Est. Carbon Sequestered`} />
        <HeroCard   image={herocardimg2} herocardheading={`Est. Savings From Powur Customers`} />
        <HeroCard image={herocardimg3} herocardheading={`Est. KWH Produced`} />
      </div>
      <Section2
        image={section2image}
        heading="Your solution to low cost, clean, reliable energy your family can depend on."
        paragraph=""
        list={[
          "Financially Secure: Investor backed and Member owned",
          "Experienced: Over 30,000 successful installations",
          "Doing Well By Doing Good: Fully certified B-Corp",
          "Validation: Inc. 5000 Fastest Growing Company in America",
          "Impact Focused: Money from every installation goes to preserving millions of acres of the Amazon rainforest",
          "Record Breaking: First solar company to offset 100% of the emissions from the solar manufacturing process",
        ]}
      />

      <Section3
        image={servicecardimage3}
        heading="Your solution to low cost, clean, reliable energy your family can depend on."
        paragraph=""
        list={[
          "Collect Your Energy Bill",
          "Review a Custom Proposal",
          "Select the Best Plan",
          "Sign Contract",
          "Get Started",
        ]}
        reverse={true}
        useSteps={true}
      />

      <Section4
        image={servicecardimage2}
        heading={"This is our promise to you."}
        paragraph={""}
        list={[
          "We will always provide the best value",
          "We will treat you like friends and family, because you are",
          "We will provide a diversity of products, services, and ideas to deliver the best solution for YOUR needs",
          "We will communicate with you honestly and openly throughout your installation process",
          "We will support you after the sale",
          "And should you choose, we will welcome you to share the Powur experience with your friends and family, and help us create a cleaner planet",
        ]}
        reverse={true}
        useSteps={true}
      />
      <Section5 />
      <DescriptionHeading
        heading={"Millions of reasons. One mission."}
        description={
          "Every homeowner has their own reason they've ditched their utility and gone solar. Hear their stories."
        }
      />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
};

export default HomePage;
