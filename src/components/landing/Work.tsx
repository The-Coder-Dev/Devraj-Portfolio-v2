import { Image } from "next-sanity/image"
import { Badge } from "@/components/ui/badge"
import SectionTitle from "@/components/landing/SectionTitle"

import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client"
import type { Project } from "@/sanity/lib/types"
import { urlFor } from "@/sanity/lib/image"

const WorkSection = async () => {

  const projects: Project[] = await client.fetch(PROJECTS_QUERY)


  return (
    <section className="w-full min-h-screen p-10 relative">
      <SectionTitle title="Selected Work" />

      <div className="w-full  grid grid-cols-2 gap-10 mt-20">
        {/* Cards  */}
        {projects.map((project) => (
          <div key={project._id} className="w-full flex flex-col rounded-sm border bg-neutral-900 overflow-hidden">
            <div className="w-full h-120 relative">
              <Image
                src={urlFor(project.image).width(1200).url()}
                fill
                alt={project.title}
                className="object-cover object-center"
              />
            </div>

            <div className="p-5 flex flex-col gap-2">
              <h1 className="text-xl font-semibold">
                {project.title}
              </h1>

              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>

              <div className="flex gap-4 mt-2">
                {project.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-sm py-3 text-muted-foreground bg-muted"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkSection