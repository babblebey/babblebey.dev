import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Capitalise from "@/components/capitalise";
import { Icons } from "@/components/icons";

const ItbeyCo = () => (
  <a href="https://itbey.com" target="_blank">
    <span className="m-itbey"><Icons.itbey className="ml-1 p-1 md:p-0" /> itbey Co.</span>
  </a>
);

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="flex max-w-[64rem] flex-col gap-4">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl">
            Hi, I&apos;m Olabode 👋🏽
          </h1>
          <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m a software developer passionate about crafting digital experiences. By day, I&apos;m building high-conversion websites at <ItbeyCo />, and by night, I&apos;m diving into the world of open source (OSS).
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-3 ")}
            >
              <div className="bg-red-600 border border-red-700/90 w-2.5 h-2.5 rounded-full animate-pulse" /> See OSS Activity
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/5 lg:flex-none">
            <h2 className="font-heading font-bold tracking-tight text-4xl sm:text-5xl md:text-[4.8rem]">
              <Image 
                src="/babblebey.png" 
                className="h-10 w-10 md:h-20 md:w-20 border-2 rounded-full inline-block mr-2 md:mr-4 -mt-1 md:-mt-6" 
                alt="Olabode" 
                width={100}
                height={100}  
              />
              I am a dedicated problem solver
            </h2>
          </div>
          <div className="grow">
            <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              I&apos;m not just a software developer; I&apos;m a problem-solver, who live for diving into intricate challenges, armed with an unwavering attention to detail and a strategic approach to solutions. 
            </p>
            <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Day-to-day, you&apos;ll find me passionately coding away, whether I&apos;m building high-conversion website and impactful solutions for businesses over at <ItbeyCo />, diving into the heart of open source projects that resonate with my values or even bringing to life some of those &apos;dumb ideas&apos; we all have.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {Object.keys(siteConfig.links).map((key, index) => {
                const Icon = Icons[key as keyof typeof Icons];
                const link = siteConfig.links[key as keyof typeof siteConfig.links];
                return (
                  <Link key={index} href={link} target="_blank" className={cn(buttonVariants({ variant: "outline" }), "gap-2")}>
                    <Icon className="w-4 h-4" /> <Capitalise text={key} />
                  </Link>
                )}
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
