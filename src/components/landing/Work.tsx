import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import SectionTitle from "@/components/landing/SectionTitle"

const works = [
  {
    id: 1,
    image: "/img-1.avif",
    title: "KYC Onboarding Flow",
    description: "Creating an intuitive multi-entity KYC experience for faster and more efficient merchant onboarding",
    tags: ["B2B SAAS", "FINTECH", "ONBOARDING"]
  },
  {
    id: 2,
    image: "/img-1.avif",
    title: "KYC Onboarding Flow",
    description: "Creating an intuitive multi-entity KYC experience for faster and more efficient merchant onboarding",
    tags: ["B2B SAAS", "FINTECH", "ONBOARDING"]
  },
  {
    id: 3,
    image: "/img-1.avif",
    title: "KYC Onboarding Flow",
    description: "Creating an intuitive multi-entity KYC experience for faster and more efficient merchant onboarding",
    tags: ["B2B SAAS", "FINTECH", "ONBOARDING"]
  },
  {
    id: 4,
    image: "/img-1.avif",
    title: "KYC Onboarding Flow",
    description: "Creating an intuitive multi-entity KYC experience for faster and more efficient merchant onboarding",
    tags: ["B2B SAAS", "FINTECH", "ONBOARDING"]
  },
]


const WorkSection = () => {
  return (
    <section className="w-full min-h-screen md:p-10 relative">
      <SectionTitle title="Selected Work" />

      <div className="w-full min-h-screen grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 mt-10 md:mt-20">
        {works.map((work) => (
          <div key={work.id} className="w-full flex flex-col rounded-sm border bg-neutral-900 overflow-hidden">
            <div className="w-full h-60 md:h-120 relative">
              <Image src={work.image} fill alt={work.title} className="object-cover object-center" />
            </div>

            <div className="p-5 flex flex-col gap-2">
              <h1 className="text-xl font-semibold">{work.title}</h1>
              <p className="text-muted-foreground text-sm">{work.description}</p>
              <div className="flex gap-4 mt-2">
                {work.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">
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