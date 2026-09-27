"use client";

import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
import { useState } from "react";

export function VariantButtons() {
  const [text, setText] = useState<string>("default");
  return (
    <div className="variant-buttons">
      <p>Current variant: {text}</p>
      <Button
        disabled
        size={"lg"}
        className="mt-6 hover:cursor-pointer"
        onClick={() => setText("default")}
      >
        <CircleCheckBig />
        Click Me
      </Button>
      <Button
        variant="destructive"
        size={"xl"}
        className="mt-6 hover:cursor-pointer"
        onClick={() => setText("destructive")}
      >
        Destructive Button
      </Button>
      <Button
        variant="ghost"
        className="mt-6 hover:cursor-pointer"
        onClick={() => setText("ghost")}
      >
        Another Button
      </Button>
      <Button
        variant="link"
        className="mt-6 hover:cursor-pointer"
        onClick={() => setText("link")}
      >
        Link Button
      </Button>
      <Button
        variant="outline"
        className="mt-6 hover:cursor-pointer"
        onClick={() => setText("outline")}
      >
        Outline Button
      </Button>
      <Button
        size={"lg"}
        variant="secondary"
        className="mt-6 hover:cursor-pointer"
        onClick={() => setText("secondary")}
      >
        Secondary Button
      </Button>
      <Button
        size={"lg"}
        variant="success"
        className="mt-6 hover:cursor-pointer"
        onClick={() => setText("success")}
      >
        Success Button
      </Button>
    </div>
  );
}
