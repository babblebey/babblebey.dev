import {
  Card,
  CardImage,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
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
    <Card className="flex flex-col overflow-hidden">
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
          <div className="flex items-center py-1 px-2 rounded border text-uppercase">
            {/* <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" /> */}
            { categories.filter((c) => c.title === category).map((cat, i) => {
                const Icon = Icons[cat.icon as keyof typeof Icons];
                return (
                  <span key={i} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 stroke-sky-400 text-sky-400" /> { cat.title }
                  </span>
                )
              }
            ) }
          </div>
          {/* <StarIcon className="mr-1 h-3 w-3" /> */}
          <Link href={url} className="flex items-center hover:underline" target="_blank">
            { linkText }
            <Icons.externalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}