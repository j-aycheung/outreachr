'use client'

import { useState } from 'react'

const templates = [
  {
    label: 'Friendly',
    body: (company, role) =>
      `Hi there!\n\nI came across ${company} and am very interested in the ${role} role. If you have a moment, I’d love to connect and learn more about the team and opportunities.\n\nBest,\n[Your Name]`,
  },
  {
    label: 'Professional',
    body: (company, role) =>
      `Hello,\n\nI am reaching out regarding the ${role} position at ${company}. I believe my background aligns well and would appreciate the chance to discuss how I can contribute.\n\nThank you for your time.\nBest regards,\n[Your Name]`,
  },
  {
    label: 'Referral Request',
    body: (company, role) =>
      `Hi,\n\nI noticed you work at ${company}. I’m interested in the ${role} role and would be grateful for any advice or a possible referral.\n\nThank you so much!\n[Your Name]`,
  },
]

export default function Dashboard() {
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [selected, setSelected] = useState(0)

  const searchLinks = [
    {
      label: 'Google',
      url: `https://www.google.com/search?q=${encodeURIComponent(company + ' ' + role + ' recruiter OR hiring manager')}`,
    },
    {
      label: 'LinkedIn',
      url: `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(company + ' ' + role)}`,
    },
    {
      label: 'Twitter',
      url: `https://twitter.com/search?q=${encodeURIComponent(company + ' ' + role + ' recruiter OR hiring manager')}`,
    },
  ]

  const emailBody = templates[selected].body(company, role)
  const mailto = `mailto:?subject=${encodeURIComponent(role + ' at ' + company)}&body=${encodeURIComponent(emailBody)}`

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
          Outreach Dashboard
        </h1>
        <form className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            className="rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            className="rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </form>
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {searchLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow transition hover:bg-blue-700"
            >
              {link.label} Search
            </a>
          ))}
        </div>
        <div className="mb-8">
          <div className="mb-2 flex gap-2">
            {templates.map((tpl, i) => (
              <button
                key={tpl.label}
                type="button"
                onClick={() => setSelected(i)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${selected === i ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {tpl.label}
              </button>
            ))}
          </div>
          <textarea
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 font-mono text-base focus:border-blue-500 focus:outline-none"
            rows={6}
            value={emailBody}
            readOnly
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-gray-300"
            onClick={() => navigator.clipboard.writeText(emailBody)}
          >
            Copy Email
          </button>
          <a
            href={mailto}
            className="rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  )
}
