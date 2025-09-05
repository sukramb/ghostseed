import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero(props: {
  capsuleText: string;
  capsuleLink: string;
  title: string;
  subtitle: string;
  credits?: React.ReactNode;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* extra subtle gradient overlay to enhance background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
      <div className="space-y-6 py-32 md:py-48 lg:py-52">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={props.capsuleLink}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          >
            {props.capsuleText}
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl">
            {props.title}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {props.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href={props.primaryCtaLink}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {props.primaryCtaText}
            </Link>

            {props.secondaryCtaText && props.secondaryCtaLink && (
              <Link
                href={props.secondaryCtaLink}
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                {props.secondaryCtaText}
              </Link>
            )}
          </div>

          {props.credits && (
            <p className="text-sm text-muted-foreground mt-4">{props.credits}</p>
          )}
        </div>
      </div>
    </section>
  );
}
