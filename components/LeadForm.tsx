"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border hairline bg-paper p-8 text-center">
        <p className="font-display text-xl italic text-ink">
          Request received.
        </p>
        <p className="mt-2 text-sm text-slate">
          An academic consultant will reply within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-brass-deep underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border hairline bg-paper p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-xs text-slate">
            Full name
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            className="rounded-lg border hairline bg-transparent px-3 py-2.5 text-sm text-ink outline-none focus:border-brass-deep"
            placeholder="Ananya Sharma"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="workEmail" className="text-xs text-slate">
            Work email
          </label>
          <input
            required
            id="workEmail"
            name="workEmail"
            type="email"
            className="rounded-lg border hairline bg-transparent px-3 py-2.5 text-sm text-ink outline-none focus:border-brass-deep"
            placeholder="ananya@company.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="company" className="text-xs text-slate">
            Company
          </label>
          <input
            required
            id="company"
            name="company"
            type="text"
            className="rounded-lg border hairline bg-transparent px-3 py-2.5 text-sm text-ink outline-none focus:border-brass-deep"
            placeholder="Company name"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="teamSize" className="text-xs text-slate">
            Team size to upskill
          </label>
          <select
            id="teamSize"
            name="teamSize"
            defaultValue="10-50"
            className="rounded-lg border hairline bg-transparent px-3 py-2.5 text-sm text-ink outline-none focus:border-brass-deep"
          >
            <option value="1-10">1&ndash;10</option>
            <option value="10-50">10&ndash;50</option>
            <option value="50-200">50&ndash;200</option>
            <option value="200+">200+</option>
          </select>
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-xs text-slate">
          What are you trying to solve for?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="rounded-lg border hairline bg-transparent px-3 py-2.5 text-sm text-ink outline-none focus:border-brass-deep"
          placeholder="e.g. Our data team needs to move from analytics to applied ML."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 justify-self-start rounded-full bg-ink px-7 py-3 text-sm text-paper transition-colors hover:bg-brass-deep disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Request a proposal"}
      </button>
    </form>
  );
}
