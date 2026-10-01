import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./projects/project.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junaid Ahmed | DevOps & Cloud Engineer",
  description:
    "Junaid Ahmed's DevOps and Cloud Engineer portfolio showcasing AWS, Azure, CI/CD, Docker, Kubernetes, Terraform, Jenkins, GitLab and cloud infrastructure projects.",

  keywords: [
    "Junaid Ahmed",
    "DevOps Engineer",
    "Cloud Engineer",
    "DevOps Portfolio",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "GitLab",
    "CI/CD",
    "Cloud Infrastructure",
    "Infrastructure Automation",
  ],

  authors: [
    {
      name: "Junaid Ahmed",
    },
  ],

  creator: "Junaid Ahmed",

  openGraph: {
    title: "Junaid Ahmed | DevOps & Cloud Engineer",
    description:
      "DevOps and Cloud Engineer portfolio featuring cloud infrastructure, CI/CD pipelines, Docker, Kubernetes, AWS and Azure projects.",
    type: "website",
    siteName: "Junaid Ahmed - DevOps Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Junaid Ahmed | DevOps & Cloud Engineer",
    description:
      "DevOps and Cloud Engineer portfolio showcasing AWS, Azure, CI/CD, Docker, Kubernetes and cloud infrastructure projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}