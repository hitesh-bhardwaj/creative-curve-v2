import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const ServiceMobile = () => {
    const serviceData = [
      {
        id: "01",
        title: "Creative Design",
        description: "Dive into a world where design meets strategy, only at Creative Curve. Our creative designing services are more than just aesthetics; they're about telling a compelling story. We understand the power of design in shaping perceptions and influencing decisions. Our offerings span both offline and online mediums.",
        list: [
          "Brand & Visual Identity",
          "Creative Advertisement",
          "Periodicals & Annual Reports",
          "Digital Design",
          "Print & Collateral Design",
          "Illustrations & Artwork",
          "Packaging & Label Design",
        ],
      },
      {
        id: "02",
        title: "Public Relations",
        description: "Our Public Relations services are not just about getting your brand in the news; they're about crafting the right narrative and building enduring relationships. We recognize the importance of a brand's reputation and work diligently to enhance and protect it. Our seasoned PR professionals bridge the gap between your brand and the world, ensuring your story is told the way it should be. Navigate the intricate maze of media relations with Creative Curve's tailored solutions.",
        list: [
          "Media Relations & Outreach",
          "Crisis Communication & Management",
          "Event PR & Launches",
          "Influencer Collaborations",
          "Reputation Building & Management",
          "Press Release Crafting & Distribution",
          "Media Training & Workshops",
        ],
      },
      {
        id: "03",
        title: "Audio Visual",
        description: "Step into the realm of compelling storytelling. We believe in the power of sight and sound to evoke emotions and drive actions. Our team & partner network of skilled videographers, sound engineers, and editors craft content that resonates, whether it's a brand film or a corporate documentary. Experience the magic of audio-visual like never before.",
        list: [
          "Brand & Corporate Films",
          "Product Explainer Videos",
          "Podcasts & Audio Content",
          "Event Coverage & Live Streaming",
          "Animation & Motion Graphics",
          "Sound Design & Voiceovers",
          "Interactive Video Content",
        ],
      },
      {
        id: "04",
        title: "Digital Marketing",
        description: "Embark on a digital journey where innovation meets impact. Our Digital Marketing services are tailored to navigate the ever-evolving online landscape. We harness the latest tools and trends to ensure your brand not only has a robust online presence but also engages and converts its audience. Dive deep into the digital realm with us.",
        list: [
          "Search Engine Optimization (SEO)",
          "Paid Media & PPC Campaigns",
          "Social Media Management & Strategy",
          "Content Marketing & Blogging",
          "Email Marketing Campaigns",
          "Affiliate & Influencer Marketing",
          "Analytics & Performance Tracking",
        ],
      },
    ];
  
    return (
      <>
        <div className="hidden mobile:block">
          <Accordion type="single" collapsible className="space-y-[4vw]">
            {serviceData.map((service) => (
              <AccordionItem key={service.id} value={service.id} className="fadeUp">
                <AccordionTrigger>{service.title}</AccordionTrigger>
                <AccordionContent>
                  <p>{service.description}</p>
                  <ul>
                    {service.list.map((item, index) => (
                      <li className="plus-list" key={index}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </>
    );
  };
  
  export default ServiceMobile;
  