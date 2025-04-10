import type { Metadata } from "next"
import SignupPageClient from "./pageClient"

export const metadata: Metadata = {
  title: "Sign Up - AetherX",
  description: "Create your account to start generating digital business cards",
}

export default async function SignupPage() {
  return <SignupPageClient />
}
