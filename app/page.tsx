"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"
import Link from "next/link"

export default function StartPlanPage() {
  return (
    <main className="mx-auto px-6" style={{ maxWidth: "600px" }}>
      <div style={{ marginTop: "var(--space-6xl)", marginBottom: "var(--space-smallest)" }}>
        <h1
          style={{
            fontFamily: "var(--font-family-quincy)",
            fontSize: "var(--font-size-3xl)",
            fontWeight: 400,
            lineHeight: "var(--line-height-tiny)",
          }}
        >
          Start Plan
        </h1>
      </div>

      <p
        style={{
          fontFamily: "var(--font-family-inter)",
          fontSize: "var(--font-size-md)",
          color: "var(--color-secondary)",
          marginBottom: "var(--space-4xl)",
          lineHeight: "var(--line-height-medium)",
        }}
      >
        Search for a new patient or create a new one to begin.
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "var(--color-card)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--border-radius-medium)",
          padding: "var(--space-larger) var(--space-2xl)",
          marginBottom: "var(--space-5xl)",
          boxShadow: "var(--shadows-xs)",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-family-inter)",
              fontSize: "var(--font-size-sm)",
              fontWeight: 500,
              color: "var(--color-primary)",
              marginBottom: "var(--space-smallest)",
            }}
          >
            New patient?
          </p>
          <p
            style={{
              fontFamily: "var(--font-family-inter)",
              fontSize: "var(--font-size-xs)",
              color: "var(--color-soft)",
              margin: 0,
              padding: 0,
            }}
          >
            Create one from scratch.
          </p>
        </div>
        <Button variant="secondary" size="default" asChild>
          <Link href="/patients/new" className="flex items-center gap-2">
            <Plus className="size-5" strokeWidth={2} style={{ stroke: "var(--color-soft)" }} />
            Add patient
          </Link>
        </Button>
      </div>

      <div style={{ marginBottom: "var(--space-5xl)" }}>
        <label
          htmlFor="searchQuery"
          style={{
            display: "block",
            fontFamily: "var(--font-family-inter)",
            fontSize: "var(--font-size-xs)",
            fontWeight: 500,
            color: "var(--color-primary)",
            marginBottom: "var(--space-medium)",
          }}
        >
          Search
        </label>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 size-[18px] pointer-events-none"
            style={{ stroke: "currentColor" }}
          />
          <Input
            id="searchQuery"
            type="text"
            placeholder="Type patient name, phone number or email"
            className="pl-10"
            style={{
              fontFamily: "var(--font-family-inter)",
              fontSize: "var(--font-size-xs)",
            }}
          />
        </div>
      </div>
    </main>
  )
}
