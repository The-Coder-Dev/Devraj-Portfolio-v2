import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import SectionTitle from "@/components/landing/SectionTitle"


const WorkSection = () => {
  return (
    <section className="w-full min-h-screen p-10 relative">
      <SectionTitle title="Selected Work" />

      <div className="w-full min-h-screen grid grid-cols-2 gap-10 mt-20">
        {/* Cards  */}
        <div className="w-full flex flex-col rounded-sm border bg-neutral-900 overflow-hidden">
          <div className="w-full h-120 relative">
            <Image src="/img-1.avif" fill alt="work-img" className="object-cover object-center" />
          </div>

          <div className="p-5 flex flex-col gap-2">
            <h1 className="text-xl font-semibold">KYC Onboarding Flow</h1>
            <p className="text-muted-foreground text-sm">Creating an Intuitive multi-entity KYC experience for faster and more efficient merchant onboarding</p>
            <div className="flex gap-4 mt-2">
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">B2B SAAS</Badge>
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">FINTECH</Badge>
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">ONBOARDING</Badge>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col rounded-sm border bg-neutral-900 overflow-hidden">
          <div className="w-full h-120 relative">
            <Image src="/img-1.avif" fill alt="work-img" className="object-cover object-center" />
          </div>

          <div className="p-5 flex flex-col gap-2">
            <h1 className="text-xl font-semibold">KYC Onboarding Flow</h1>
            <p className="text-muted-foreground text-sm">Creating an Intuitive multi-entity KYC experience for faster and more efficient merchant onboarding</p>
            <div className="flex gap-4 mt-2">
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">B2B SAAS</Badge>
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">FINTECH</Badge>
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">ONBOARDING</Badge>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col rounded-sm border bg-neutral-900 overflow-hidden">
          <div className="w-full h-120 relative">
            <Image src="/img-1.avif" fill alt="work-img" className="object-cover object-center" />
          </div>

          <div className="p-5 flex flex-col gap-2">
            <h1 className="text-xl font-semibold">KYC Onboarding Flow</h1>
            <p className="text-muted-foreground text-sm">Creating an Intuitive multi-entity KYC experience for faster and more efficient merchant onboarding</p>
            <div className="flex gap-4 mt-2">
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">B2B SAAS</Badge>
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">FINTECH</Badge>
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">ONBOARDING</Badge>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col rounded-sm border bg-neutral-900 overflow-hidden">
          <div className="w-full h-120 relative">
            <Image src="/img-1.avif" fill alt="work-img" className="object-cover object-center" />
          </div>

          <div className="p-5 flex flex-col gap-2">
            <h1 className="text-xl font-semibold">KYC Onboarding Flow</h1>
            <p className="text-muted-foreground text-sm">Creating an Intuitive multi-entity KYC experience for faster and more efficient merchant onboarding</p>
            <div className="flex gap-4 mt-2">
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">B2B SAAS</Badge>
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">FINTECH</Badge>
              <Badge variant="outline" className="rounded-sm py-3 text-muted-foreground bg-muted">ONBOARDING</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection