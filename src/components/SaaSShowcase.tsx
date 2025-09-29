import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const SaaSShowcase = () => {
  const mockups = [
    {
      src: "/project-forever.jpg",
      alt: "Forever E-commerce Platform"
    },
    {
      src: "/project-sgrf.jpg",
      alt: "SGRF Revenue Management"
    },
    {
      src: "/project-techedu.jpg",
      alt: "TECHEDU Learning Platform"
    }
  ];

  return (
    <Carousel className="w-full max-w-2xl mx-auto">
      <CarouselContent>
        {mockups.map((mockup, idx) => (
          <CarouselItem key={idx}>
            <Card className="shadow-2xl bg-white/90 dark:bg-card/90 border-2 border-primary/10">
              <CardContent className="flex items-center justify-center p-8">
                <img
                  src={mockup.src}
                  alt={mockup.alt}
                  className="rounded-xl object-cover w-full h-80 shadow-2xl border border-muted/30 transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                  style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)' }}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SaaSShowcase;
