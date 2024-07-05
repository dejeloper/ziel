"use client";
import Link from "next/link";
import { Clock } from "lucide-react";

import { Button } from "@/components/ui/button";

export function TodayButton() {
  return (
    <Link href="/today">
      <Button variant="outline" size="icon">
        <Clock className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </Link>
  );
}
