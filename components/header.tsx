import Link from "next/link"
import Image from "next/image"
import { Home, Calendar, Package, Users, ShoppingBag, BarChart3, MessageCircle, User } from "lucide-react"

export function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-accent-secondary)",
        padding: "var(--space-medium) var(--space-4xl)",
        position: "sticky",
        top: 0,
        zIndex: "var(--z-index-fixed-high)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image src="/getharley-logo.svg" alt="GetHarley" width={136} height={16} priority />
        </Link>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-4xl)",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-medium)",
              textDecoration: "none",
              color: "var(--color-secondary)",
              fontSize: "var(--font-size-xs)",
              transition: "color 0.2s",
            }}
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
          <Link
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-medium)",
              textDecoration: "none",
              color: "var(--color-secondary)",
              fontSize: "var(--font-size-xs)",
              transition: "color 0.2s",
            }}
          >
            <Calendar size={16} />
            <span>Assistant</span>
          </Link>
          <Link
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-medium)",
              textDecoration: "none",
              color: "var(--color-secondary)",
              fontSize: "var(--font-size-xs)",
              transition: "color 0.2s",
            }}
          >
            <Package size={16} />
            <span>Products</span>
          </Link>
          <Link
            href="/patients/new"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-medium)",
              textDecoration: "none",
              color: "var(--color-secondary)",
              fontSize: "var(--font-size-xs)",
              transition: "color 0.2s",
            }}
          >
            <Users size={16} />
            <span>Patients</span>
          </Link>
          <Link
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-medium)",
              textDecoration: "none",
              color: "var(--color-secondary)",
              fontSize: "var(--font-size-xs)",
              transition: "color 0.2s",
            }}
          >
            <ShoppingBag size={16} />
            <span>Orders</span>
          </Link>
          <Link
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-medium)",
              textDecoration: "none",
              color: "var(--color-secondary)",
              fontSize: "var(--font-size-xs)",
              transition: "color 0.2s",
            }}
          >
            <BarChart3 size={16} />
            <span>Analytics</span>
          </Link>
        </nav>

        {/* Right side actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2xl)",
          }}
        >
          <Link
            href="/"
            style={{
              padding: "var(--space-large) var(--space-3xl)",
              backgroundColor: "var(--color-primary)",
              color: "var(--color-accent-secondary)",
              borderRadius: "var(--border-radius-medium)",
              textDecoration: "none",
              fontSize: "var(--font-size-xs)",
              fontWeight: "500",
              transition: "background-color 0.2s",
            }}
          >
            Start Plan
          </Link>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "var(--space-small)",
              color: "var(--color-secondary)",
            }}
          >
            <MessageCircle size={20} />
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "var(--space-small)",
              color: "var(--color-secondary)",
            }}
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
