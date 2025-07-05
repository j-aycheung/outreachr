'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const generateRoleVariants = (baseRole) => [
  baseRole || 'Recruiter',
  `Technical ${baseRole || 'Recruiter'}`,
  'Hiring Manager',
  'Team Lead',
]

const emailTemplates = {
  Professional: `Dear [Recruiter Name],\n\nI hope you're doing well. I recently came across an opportunity at [Company] for the [Role] position and was very impressed by the work your team is doing.\nI’d love the chance to connect and learn more about the team and role.\nBest regards,\n[Your Name]`,
  Friendly: `Hey [Recruiter Name],\n\nI saw that [Company] is hiring for a [Role] and thought I’d reach out! I’ve been following your team and would love to hear more about what it’s like working there.\nCheers,\n[Your Name]`,
  'Follow-up': `Hi [Recruiter Name],\n\nJust following up on my previous message. I’m still very interested in the [Role] at [Company] and would love to chat if you’re available.\nBest,\n[Your Name]`,
  'Referral Request': `Hi [Recruiter Name],\n\nI saw you're at [Company], and I’m excited about the [Role] that opened up. If you’d feel comfortable referring me internally, I’d really appreciate it.\nThank you!\n[Your Name]`,
}

export default function Dashboard() {
  const [selectedCompany, setSelectedCompany] = useState('')
  const [selectedRole, setSelectedRole] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState('Professional')
  const [emailContent, setEmailContent] = useState(emailTemplates.Professional)
  const [userEdited, setUserEdited] = useState(false)

  // Smart Google search cards
  const roleVariants = generateRoleVariants(selectedRole)
  const googleCards = roleVariants.map((variant) => {
    // Pluralize for display, except for 'Hiring Manager'/'Team Lead'
    let label = variant
    if (variant === 'Hiring Manager') label = 'Hiring Managers'
    else if (variant === 'Team Lead') label = 'Team Leads'
    else label = `${variant}s`
    label += ` at ${selectedCompany || '...'}`
    const query = `site:linkedin.com/in ${variant} ${selectedCompany}`
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`
    return { label, url }
  })

  // Only update textarea when template is changed
  function handleTemplateChange(e) {
    setSelectedTemplate(e.target.value)
    setEmailContent(emailTemplates[e.target.value])
    setUserEdited(false)
  }

  // If user types in textarea, mark as edited
  function handleEmailChange(e) {
    setEmailContent(e.target.value)
    setUserEdited(true)
  }

  // Copy email content to clipboard
  function handleCopyEmail() {
    navigator.clipboard.writeText(emailContent)
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
      {/* Sidebar */}
      <aside className="sticky top-0 z-10 hidden h-screen w-60 border-r border-gray-800 bg-gray-950 shadow-xl md:flex md:flex-col">
        <div className="flex h-16 items-center justify-center border-b border-gray-800">
          <span className="text-xl font-bold tracking-tight text-white">
            Outreachr
          </span>
        </div>
        <nav className="flex-1 space-y-2 px-4 py-8">
          <a
            href="#"
            className="block rounded-lg bg-gray-800 px-4 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-gray-700"
          >
            Send Emails
          </a>
          <a
            href="#"
            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-400 transition-all duration-200 hover:bg-gray-700 hover:text-white"
          >
          </a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center px-2 py-8 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-2xl space-y-10"
        >
          {/* Contact Search Section */}
          <section className="rounded-2xl border border-gray-800 bg-gray-900/90 p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Find Contacts
            </h2>
            <form className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={selectedCompany}
                  onChange={(e) => {
                    setSelectedCompany(e.target.value)
                    setUserEdited(false)
                  }}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-lg text-white placeholder-gray-500 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter company name"
                  autoComplete="off"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Role or Position
                </label>
                <input
                  type="text"
                  name="role"
                  id="role"
                  value={selectedRole}
                  onChange={(e) => {
                    setSelectedRole(e.target.value)
                    setUserEdited(false)
                  }}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-lg text-white placeholder-gray-500 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter role or position"
                  autoComplete="off"
                />
              </div>
            </form>
            {/* Smart Google Search Cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {googleCards.map((card, idx) => (
                <motion.a
                  key={card.label}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, backgroundColor: '#23272e' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="block cursor-pointer rounded-xl border border-gray-800 bg-gray-800/80 p-5 shadow transition-all duration-200 hover:bg-gray-800"
                >
                  <div className="mb-1 text-lg font-semibold text-white">
                    {card.label}
                  </div>
                  <div className="truncate text-xs text-gray-400">
                    {decodeURIComponent(
                      card.url.replace('https://www.google.com/search?q=', ''),
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Email Composer Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="rounded-2xl border border-gray-800 bg-gray-900/90 p-6 shadow-2xl backdrop-blur-md sm:p-8"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">
              Compose Email
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="template"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Select Template
                </label>
                <select
                  id="template"
                  name="template"
                  value={selectedTemplate}
                  onChange={handleTemplateChange}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-base text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="Professional">Professional</option>
                  <option value="Friendly">Friendly</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Referral Request">Referral Request</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="email-content"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Content
                </label>
                <textarea
                  id="email-content"
                  name="email-content"
                  rows={8}
                  value={emailContent}
                  onChange={handleEmailChange}
                  className="block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 font-mono text-base text-gray-100 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg border border-transparent bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
                  onClick={handleCopyEmail}
                >
                  Copy Email
                </button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}
