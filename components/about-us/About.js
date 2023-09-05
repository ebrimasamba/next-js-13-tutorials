import React from "react";
import Container from "../global/Container";
import SectionHeader from "../global/section-header/SectionHeader";
import Image from "next/image";

const About = () => {
  const aboutUsData = {
    company_profile: `<div>
    <p>With our exceptional <strong>interior painting services</strong>, we go beyond
    simply applying a fresh coat of paint. We understand that your
    space is a reflection of your unique style and personality.</p>
    <p>
    That's why we take the time to listen to your ideas,
    preferences, and inspirations, ensuring that every brushstroke
    aligns perfectly with your vision.
  </p>
  <p>
  Whether you desire a <strong>bold and vibrant</strong> color scheme or a soothing
  and tranquil ambiance, our skilled painters have the expertise
  to bring your dream space to life.
</p>
  <p>
 We work diligently to deliver
    flawless finishes, paying attention to <strong>every detail</strong> and ensuring
    crisp, clean lines that will leave your guests in awe.
  </p>
    </div>`,
  };
  return (
    <section className="relative" id="about-us">
      <Image
        src={"/patterns/pattern.png"}
        fill
        className="object-cover object-center block opacity-5"
        alt="bacground-image-pattern"
      />
      <Container className={"py-16 sm:py-24 relative z-10"}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <div className="h-64 xs:h-72 sm:h-96 lg:h-[410px] bg-gray-300 relative">
              <Image
                src={"/about/about-1.jpg"}
                fill
                className="object-cover block"
                alt="team-photo"
              />
            </div>
          </div>
          <div className="">
            <div className="mb-8 xs:mb-10">
              <SectionHeader title={"About Us"} subTitle={"Company Profile"} />
            </div>
            <div
              className="text-gray-500 company-profile"
              dangerouslySetInnerHTML={{ __html: aboutUsData.company_profile }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
