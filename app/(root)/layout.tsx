import Header from "@/components/molecules/header";
import ImageBackground from "@/components/atoms/image-background";
import MaxWidthWrapper from "@/components/atoms/max-width-wrapper";


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-dark-blue xs:py-4 md:py-6 w-full min-h-screen transition relative border overflow-y-scroll">
      {/* BACKGROUND PATTERN  */}
      <ImageBackground />
      <MaxWidthWrapper className="flex justify-end xs:mb-4 lg:mb-2 xs:px-5 md:px-0">
        <Header />
      </MaxWidthWrapper>

      <main className="w-full min-h-[calc(100vh-100px)] flex items-start justify-center xl:mt-8 2xl:mt-16 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
