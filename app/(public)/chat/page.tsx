"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import { TMessage } from "@/types/chatMessage";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ChatBot() {
  const [history, setHistory] = useState<TMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    const newHistory = [...history, userMsg];
    setHistory(newHistory);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ history: newHistory }),
    });
    const { answer } = await res.json();

    setHistory((h) => [...h, { role: "bot", text: answer }]);
    setLoading(false);
  };

  return (
    <div className="my-10 py-10 px-4 md:px-16 border rounded relative overflow-clip">
      <div className="mb-6">
        <Link href="/" className="flex justify-center">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-center mb-2">
          Ask SajibBot Anything
        </h1>
        <p className="text-center text-muted-foreground">
          Know about me by chatting with bot
        </p>
      </div>

      {/* Chat Section */}
      <div className="max-w-7xl mx-auto border rounded">
        <div className="shadow rounded p-4 space-y-4 h-96 overflow-y-auto">
          {history.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? "text-blue-600" : "text-green-700"}
            >
              <strong>{m.role === "user" ? "You" : "SajibBot"}:</strong>
              <div className="mt-1">{m.text}</div>
            </div>
          ))}
          {loading && (
            <p>
              <em>Typing...</em>
            </p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something about Sajib..."
            className="flex-1 border p-2 rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      {/* border beam */}
      <BorderBeam duration={40} size={300} />
    </div>
  );
}
