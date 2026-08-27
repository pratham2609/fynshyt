"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

const SURPRISES = [
  { url: "https://www.youtube.com/watch?v=tS92P9PWNfU", weight: 1 },
  { url: "https://www.youtube.com/watch?v=N3JFAHkxk1Y", weight: 1 },
  { url: "https://www.youtube.com/watch?v=mQcZNhEYT0U", weight: 1 },
  { url: "https://www.youtube.com/watch?v=Bu8bH2P37kY", weight: 1 },
  { url: "https://www.youtube.com/watch?v=edpQzovSK6c", weight: 1 },
  { url: "https://www.youtube.com/watch?v=ZiBF_U_iroA", weight: 1 },
  { url: "https://www.youtube.com/shorts/ew7r0z-gZjo", weight: 1 },
  {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
    weight: 1,
  },
  /* This one should come up most often. */
  { url: "https://www.youtube.com/watch?v=D-6yO7tMJxA", weight: 10 },
];

function randomSurprise() {
  const total = SURPRISES.reduce((sum, s) => sum + s.weight, 0);
  let pick = Math.random() * total;
  for (const s of SURPRISES) {
    pick -= s.weight;
    if (pick < 0) return s.url;
  }
  return SURPRISES[SURPRISES.length - 1].url;
}

export default function Home() {
  const surprise = React.useCallback(() => {
    const url = randomSurprise();
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-yellow-300 px-6">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight text-ink">fynshyt</h1>
        <p className="max-w-xs text-sm font-bold text-ink/70">
          One white page. One orange button. Something random, every single time.
        </p>
        <Button variant="brutal" size="lg" onClick={surprise}>
          Surprise me
        </Button>
      </div>
    </main>
  );
}
