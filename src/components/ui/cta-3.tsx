import { ArrowRightIcon, PlusIcon } from "lucide-react"; 
import { Button } from "@/components/ui/button"; 
import { Link } from "react-router-dom";

export function CallToAction() { 
  return ( 
    <div className="relative mx-auto flex w-[90%] sm:w-[80%] md:w-[85%] lg:w-[85%] px-6 sm:px-8 lg:px-12 flex-col justify-between gap-y-8 border-y bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--primary)/.08),transparent)] py-16 mt-20"> 
      <PlusIcon 
        className="absolute top-[-12.5px] left-[-11.5px] z-10 size-6 text-foreground/20" 
        strokeWidth={1} 
      /> 
      <PlusIcon 
        className="absolute top-[-12.5px] right-[-11.5px] z-10 size-6 text-foreground/20" 
        strokeWidth={1} 
      /> 
      <PlusIcon 
        className="absolute bottom-[-12.5px] left-[-11.5px] z-10 size-6 text-foreground/20" 
        strokeWidth={1} 
      /> 
      <PlusIcon 
        className="absolute right-[-11.5px] bottom-[-12.5px] z-10 size-6 text-foreground/20" 
        strokeWidth={1} 
      /> 
 
      <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-border/40" /> 
      <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-border/40" /> 
 
      <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed border-border/40" /> 
 
      <div className="space-y-4 text-center max-w-2xl mx-auto"> 
        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground"> 
          Ready To Turn Your Business Into A Multi-Million Empire?
        </h2> 
        <p className="text-muted-foreground text-lg max-w-xl mx-auto"> 
          Don't just start a business. Plan first. Start smart. Start with BizExpress.
        </p> 
      </div> 
 
      <div className="flex items-center justify-center gap-4 pt-4"> 
        <Link to="/contact">
          <Button size="lg" className="px-8 font-semibold shadow-lg hover:shadow-xl transition-all">
            Book Consultation <ArrowRightIcon className="size-4 ml-2" /> 
          </Button> 
        </Link>
      </div> 
    </div> 
  ); 
} 
