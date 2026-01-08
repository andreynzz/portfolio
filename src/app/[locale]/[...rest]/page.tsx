import { notFound } from "next/navigation";

export default function CatchAllPage() {
  // Força o Next.js a renderizar o arquivo not-found.tsx
  notFound();
}