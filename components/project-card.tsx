import {
  Card,
  CardImage,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { categories } from "@/data/projects";
import { Icons } from "./icons";
import Link from "next/link";

interface ProjectCardProps {
  title: string
  desc?: string
  image: string
  category: string
  url: string
  linkText: string
}

export function ProjectCard({ title, desc, image, category, url, linkText }: ProjectCardProps) {
  return (
    <Card className="basis-full md:basis-[49%] lg:basis-[32.33%] mb-4 flex flex-col overflow-hidden">
      <div className="aspect-[1.4] overflow-hidden min-h-[230px]">
        <CardImage 
          src={image}
          width={900}
          height={300}
          alt={title}
          className="w-full h-full object-cover object-left-top hover:scale-125 transition-transform ease-linear"
          loading="lazy"
        />
      </div>
      <CardHeader className="grow gap-4 space-y-0">
        <div className="space-y-2">
          <CardTitle>
            { title }
          </CardTitle>
          <CardDescription>
            { desc }
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            { categories.filter((c) => c.title === category).map((cat, i) => {
                const Icon = Icons[cat.icon as keyof typeof Icons];
                return (
                  <TooltipProvider key={i}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="flex items-center gap-2 cursor-help">
                          <Icon className="h-4 w-4 stroke-sky-400 text-sky-400" /> { cat.title }
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{ cat.desc }</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              }
            ) }
          </div>
          <Link href={url} className="flex items-center hover:underline" target="_blank">
            { linkText }
            <Icons.externalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}