"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

const SURPRISES = [
  "https://youtube.com/shorts/Ew6beSaQ_3Y?si=HaBFb6k9WtHlKfbB",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
  "https://youtube.com/shorts/aPMkRTHdLrE?si=MOnNNqKhf8x3bz3Y",
  "https://youtu.be/D-6yO7tMJxA?si=Vp5FYAdpJhrAleBT",
  "https://youtu.be/YHPhR89-x3g?si=SWbeIYWh7_QT5DAO",
  "https://youtu.be/Bu8bH2P37kY?si=pciUDwGixcclg4ld",
];

function randomSurprise() {
  return SURPRISES[Math.floor(Math.random() * SURPRISES.length)];
}

export default function Home() {
  const surprise = React.useCallback(() => {
    const url = randomSurprise();
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
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
