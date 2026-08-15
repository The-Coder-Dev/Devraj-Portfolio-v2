
import { Separator } from "../ui/separator";

interface SectionTitleProps {
  title: string
}

const SectionTitle = ({title} : SectionTitleProps)  => {
  return (
    <div className="w-full flex items-center gap-5">
      <h1 className="text-muted-foreground whitespace-nowrap">{title}</h1>
      <Separator className="flex-1 opacity-70" />
    </div>
  );
};

export default SectionTitle;
