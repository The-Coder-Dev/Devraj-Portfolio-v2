import { WaveField } from "@/components/originkit/ui/wave-field";
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-1rem)]">
      <div className="relative w-full h-[calc(100vh-3rem)]  rounded-md bg-[#0B43A2]">
        <WaveField />

        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-10 pb-20 flex flex-col justify-end gap-3 bg-linear-to-t from-[#0B43A2] from-55% to-blue-transparent">
            

            <div className="bg-white/10 backdrop-blur-sm flex items-center justify-center w-fit px-2 py-5 rounded-md border">
              <p className="text-sm leading-0">
                SOFTWARE ENGINEER · PRODUCT BUILDER
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl md:max-w-157.5 font-[figtree] font-medium leading-tight ">
              I don't just write Code.
              I build Software.
            </h1>

            <p className="text-muted-foreground max-w-xl text-md font-[figtree]">
              I turn ideas into modern, scalable, and meaningful digital
              products.
            </p>

            <div className="flex gap-3 mt-5">
              <Button
                className="rounded-md sm cursor-pointer font-[figtree]"
                size="lg"
              >
                Resume
              </Button>

              <Button
                className="rounded-md cursor-pointer font-[figtree]"
                variant="outline"
                size="lg"
              >
                View Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
