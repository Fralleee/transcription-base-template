"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function NewPatientPage() {
  const router = useRouter()
  const [isOver18, setIsOver18] = useState<boolean | null>(null)
  const [communicationPrefs, setCommunicationPrefs] = useState({
    email: false,
    phone: false,
    sms: false,
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/patients/new/plan-options")
  }

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "var(--space-6xl) var(--space-4xl)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-family-quincy)",
          fontSize: "var(--font-size-3xl)",
          fontWeight: "400",
          marginBottom: "var(--space-xl)",
          color: "var(--color-primary)",
        }}
      >
        Create new patient
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-5xl)",
        }}
      >
        {/* Patient Name */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "var(--font-size-xs)",
              fontWeight: "500",
              color: "var(--color-primary)",
              marginBottom: "var(--space-2xl)",
            }}
          >
            Patient name
          </label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-2xl)",
            }}
          >
            <input
              type="text"
              placeholder="FIRST NAME*"
              style={{
                padding: "var(--space-larger) var(--space-2xl)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--border-radius-medium)",
                fontSize: "var(--font-size-xs)",
                backgroundColor: "var(--color-subtle)", // Updated from var(--color-card) to var(--color-subtle)
                color: "var(--color-primary)",
                fontFamily: "var(--font-family-inter)",
              }}
            />
            <input
              type="text"
              placeholder="LAST NAME*"
              style={{
                padding: "var(--space-larger) var(--space-2xl)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--border-radius-medium)",
                fontSize: "var(--font-size-xs)",
                backgroundColor: "var(--color-subtle)", // Updated from var(--color-card) to var(--color-subtle)
                color: "var(--color-primary)",
                fontFamily: "var(--font-family-inter)",
              }}
            />
          </div>
        </div>

        {/* Patient Age */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "var(--font-size-xs)",
              fontWeight: "500",
              color: "var(--color-primary)",
              marginBottom: "var(--space-smallest)",
            }}
          >
            Patient age*
          </label>
          <div
            style={{
              fontSize: "var(--font-size-xs)",
              color: "var(--color-secondary)",
              marginBottom: "var(--space-2xl)",
            }}
          >
            Is the patient over the age of 18?
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-2xl)",
            }}
          >
            <button
              type="button"
              onClick={() => setIsOver18(true)}
              style={{
                padding: "var(--space-larger) var(--space-2xl)",
                border: `1px solid ${isOver18 === true ? "var(--color-primary)" : "var(--color-border)"}`,
                borderRadius: "var(--border-radius-medium)",
                fontSize: "var(--font-size-sm)",
                backgroundColor: isOver18 === true ? "var(--color-primary-2)" : "var(--color-subtle)", // Updated unselected state from var(--color-card) to var(--color-subtle)
                color: "var(--color-primary)",
                cursor: "pointer",
                fontWeight: isOver18 === true ? "500" : "400",
                transition: "all 0.2s",
              }}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setIsOver18(false)}
              style={{
                padding: "var(--space-larger) var(--space-2xl)",
                border: `1px solid ${isOver18 === false ? "var(--color-primary)" : "var(--color-border)"}`,
                borderRadius: "var(--border-radius-medium)",
                fontSize: "var(--font-size-sm)",
                backgroundColor: isOver18 === false ? "var(--color-primary-2)" : "var(--color-subtle)", // Updated unselected state from var(--color-card) to var(--color-subtle)
                color: "var(--color-primary)",
                cursor: "pointer",
                fontWeight: isOver18 === false ? "500" : "400",
                transition: "all 0.2s",
              }}
            >
              No
            </button>
          </div>
        </div>

        {/* Patient Details */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "var(--font-size-xs)",
              fontWeight: "500",
              color: "var(--color-primary)",
              marginBottom: "var(--space-smallest)",
            }}
          >
            Patient details
          </label>
          <div
            style={{
              fontSize: "var(--font-size-xs)",
              color: "var(--color-secondary)",
              marginBottom: "var(--space-2xl)",
            }}
          >
            Please ensure the phone number is correct as it will be used by the patient to order their Plan.
          </div>

          {/* Phone Number */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-2xl)",
              marginBottom: "var(--space-2xl)",
            }}
          >
            <select
              style={{
                padding: "var(--space-larger) var(--space-2xl)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--border-radius-medium)",
                fontSize: "var(--font-size-sm)",
                backgroundColor: "var(--color-subtle)", // Updated from var(--color-card) to var(--color-subtle)
                color: "var(--color-primary)",
                width: "100px",
              }}
            >
              <option>🇺🇸 +1</option>
            </select>
            <input
              type="tel"
              placeholder="+1"
              style={{
                flex: 1,
                padding: "var(--space-larger) var(--space-2xl)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--border-radius-medium)",
                fontSize: "var(--font-size-sm)",
                backgroundColor: "var(--color-subtle)", // Updated from var(--color-card) to var(--color-subtle)
                color: "var(--color-primary)",
              }}
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="PATIENT EMAIL ADDRESS*"
            style={{
              width: "100%",
              padding: "var(--space-larger) var(--space-2xl)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius-medium)",
              fontSize: "var(--font-size-xs)",
              backgroundColor: "var(--color-subtle)", // Updated from var(--color-card) to var(--color-subtle)
              color: "var(--color-primary)",
            }}
          />
        </div>

        {/* Communication Preferences */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "var(--font-size-xs)",
              fontWeight: "500",
              color: "var(--color-primary)",
              marginBottom: "var(--space-smallest)",
            }}
          >
            Communication preferences
          </label>
          <div
            style={{
              fontSize: "var(--font-size-xs)",
              color: "var(--color-secondary)",
              marginBottom: "var(--space-2xl)",
            }}
          >
            Please ask the patient how they'd like to receive replenishment reminders and other news. They will be opted
            out if none are selected.
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-2xl)",
            }}
          >
            <button
              type="button"
              onClick={() => setCommunicationPrefs((prev) => ({ ...prev, email: !prev.email }))}
              style={{
                padding: "var(--space-larger) var(--space-2xl)",
                border: `1px solid ${communicationPrefs.email ? "var(--color-primary)" : "var(--color-border)"}`,
                borderRadius: "var(--border-radius-medium)",
                fontSize: "var(--font-size-sm)",
                backgroundColor: communicationPrefs.email ? "var(--color-primary-2)" : "var(--color-subtle)", // Updated unselected state from var(--color-card) to var(--color-subtle)
                color: "var(--color-primary)",
                cursor: "pointer",
                fontWeight: communicationPrefs.email ? "500" : "400",
                transition: "all 0.2s",
              }}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => setCommunicationPrefs((prev) => ({ ...prev, phone: !prev.phone }))}
              style={{
                padding: "var(--space-larger) var(--space-2xl)",
                border: `1px solid ${communicationPrefs.phone ? "var(--color-primary)" : "var(--color-border)"}`,
                borderRadius: "var(--border-radius-medium)",
                fontSize: "var(--font-size-sm)",
                backgroundColor: communicationPrefs.phone ? "var(--color-primary-2)" : "var(--color-subtle)", // Updated unselected state from var(--color-card) to var(--color-subtle)
                color: "var(--color-primary)",
                cursor: "pointer",
                fontWeight: communicationPrefs.phone ? "500" : "400",
                transition: "all 0.2s",
              }}
            >
              Phone
            </button>
            <button
              type="button"
              onClick={() => setCommunicationPrefs((prev) => ({ ...prev, sms: !prev.sms }))}
              style={{
                padding: "var(--space-larger) var(--space-2xl)",
                border: `1px solid ${communicationPrefs.sms ? "var(--color-primary)" : "var(--color-border)"}`,
                borderRadius: "var(--border-radius-medium)",
                fontSize: "var(--font-size-sm)",
                backgroundColor: communicationPrefs.sms ? "var(--color-primary-2)" : "var(--color-subtle)", // Updated unselected state from var(--color-card) to var(--color-subtle)
                color: "var(--color-primary)",
                cursor: "pointer",
                fontWeight: communicationPrefs.sms ? "500" : "400",
                transition: "all 0.2s",
              }}
            >
              SMS
            </button>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2xl)",
          }}
        >
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            style={{
              width: "18px",
              height: "18px",
              cursor: "pointer",
            }}
          />
          <label
            htmlFor="terms"
            style={{
              fontSize: "var(--font-size-xs)",
              color: "var(--color-secondary)",
              cursor: "pointer",
            }}
          >
            The patient agrees to the{" "}
            <a
              href="#"
              style={{
                color: "var(--color-rose-accent)",
                textDecoration: "none",
              }}
            >
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "var(--space-4xl)",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "var(--space-larger) var(--space-5xl)",
              backgroundColor: "var(--color-primary)",
              color: "var(--color-accent-secondary)",
              border: "none",
              borderRadius: "var(--border-radius-medium)",
              fontSize: "var(--font-size-sm)",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-primary-hover)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-primary)"
            }}
          >
            Next
          </button>
        </div>
      </form>
    </main>
  )
}
