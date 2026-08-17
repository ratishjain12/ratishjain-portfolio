import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  issuer: string;
  href?: string | null;
  logoUrl: string;
  date?: string | null;
  credentialId?: string | null;
}

export function CertificationCard({
  title,
  issuer,
  href,
  logoUrl,
  date,
  credentialId,
}: Props) {
  const content = (
    <Card className="flex h-full flex-col items-center gap-4 border bg-white/[0.02] p-6 text-center backdrop-blur-sm transition-all duration-300 ease-out hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10">
      <div className="flex size-20 items-center justify-center rounded-xl bg-white/5 p-3">
        <Image
          src={logoUrl}
          alt={title}
          width={80}
          height={80}
          className="size-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <h3 className="font-semibold leading-snug text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{issuer}</p>
      </div>
      <div className="flex flex-col items-center gap-1 font-mono text-xs text-muted-foreground">
        {date && <span>{date}</span>}
        {credentialId && <span>{credentialId}</span>}
      </div>
      {href && (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-violet-400 opacity-80 transition-opacity group-hover:opacity-100">
          Verify credential
          <ArrowUpRight className="size-3" />
        </span>
      )}
    </Card>
  );

  if (!href) {
    return <div className="block h-full">{content}</div>;
  }

  return (
    <Link href={href} target="_blank" className="group block h-full">
      {content}
    </Link>
  );
}
