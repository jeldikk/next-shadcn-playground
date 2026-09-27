import { Button } from "@/components/ui/button";
import { VariantButtons } from "@/components/variant-buttons/variant-buttons.component";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold">Welcome to Next.js with Shadcn</h1>
      <p className="mt-4 text-lg">
        Get started by editing the <code>app/page.tsx</code> file.
      </p>
      <Button variant={"link"}>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </div>
  );
}
