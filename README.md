# Yoom - Enterprise Video Conferencing Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.dev/)
[![Stream](https://img.shields.io/badge/Stream-Video_SDK-005FFF?style=for-the-badge&logo=getstream)](https://getstream.io/)

Yoom is a professional-grade video conferencing application built with the latest web technologies. It provides a seamless, high-performance communication experience inspired by Zoom, featuring instant meetings, scheduling capabilities, and secure participant management.

## 🌟 Project Overview

Yoom addresses the need for reliable, secure, and scalable video communication. By leveraging Next.js 16 and GetStream's robust infrastructure, Yoom delivers low-latency video calls, crystal-clear audio, and a suite of collaborative tools designed for both individual and enterprise use.

### Value Proposition
- **Ultra-Low Latency**: Powered by GetStream's global edge network.
- **Enterprise Security**: Built-in authentication via Clerk and encrypted media streams.
- **Modern UX/UI**: A sleek, intuitive interface built with Tailwind CSS 4 and Shadcn UI.
- **Developer First**: Clean, modular architecture using TypeScript and Next.js App Router.

---

## 🚀 Live Demo

Experience Yoom in action! The application is fully deployed and ready for use.

[![Live Demo](https://img.shields.io/badge/Demo-Live_Preview-0E78F9?style=for-the-badge&logo=netlify)](https://u-yoom.netlify.app)

**[Try it Now →](https://u-yoom.netlify.app)**

---

## ✨ Features

### 📹 Video Conferencing
- **Instant Meetings**: Start a meeting with a single click and share the link immediately.
- **Join via Link**: Seamlessly enter meetings using unique invitation URLs.
- **Personal Room**: A dedicated, persistent meeting space with a fixed link for every user.
- **Meeting Controls**: Full control over audio/video, screen sharing, and participant management.

### 📅 Meeting Management
- **Scheduling**: Plan meetings for future dates and times with custom descriptions.
- **Upcoming Meetings**: Track all your scheduled calls in a centralized dashboard.
- **Meeting History**: Access a comprehensive list of all your past interactions.
- **Recordings**: View and manage cloud recordings of your previous sessions.

### 👥 User Experience
- **Dynamic Layouts**: Choose between Speaker-Left, Speaker-Right, or Grid views.
- **Real-time Stats**: Monitor connection quality and latency during calls.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Dark Mode**: Professional dark-themed interface for reduced eye strain.

---

## 🛠 Technology Stack

### Core Frameworks
| Technology | Version | Description |
| :--- | :--- | :--- |
| **Next.js** | 16.1.6 | React Framework for Production (App Router) |
| **React** | 19.2.3 | UI Library |
| **TypeScript** | 5.x | Static Typing |

### Authentication & Infrastructure
- **Clerk**: Comprehensive user management and multi-factor authentication.
- **GetStream**: Real-time video and audio infrastructure.
- **Vercel**: Optimized deployment and hosting.

### UI & Styling
- **Tailwind CSS 4**: Utility-first CSS framework with the latest engine.
- **Shadcn UI**: High-quality accessible components built on Radix UI.
- **Lucide React**: Clean and consistent icon set.
- **Sonner**: Elegant toast notifications.

---

## 🔒 Security Implementation

Yoom prioritizes user privacy and data security through a multi-layered approach:

1. **Authentication**: Managed by [Clerk](https://clerk.com), ensuring secure session handling, social logins, and account protection.
2. **Authorization**: Server-side checks and protected routes via Clerk Middleware ensure only authorized users can access specific features.
3. **Data Protection**: 
   - Media streams are encrypted using industry-standard protocols.
   - Secure token generation via `@stream-io/node-sdk` for authenticated call access.
4. **Vulnerability Mitigation**: 
   - Sanitized inputs and server actions to prevent XSS and SQL injection.
   - Regular dependency updates to patch security vulnerabilities.
5. **Compliance**: Designed with GDPR and privacy-first principles in mind.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- pnpm / npm / yarn
- Accounts for Clerk and GetStream

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/jsm-zoom-clone.git
cd jsm-zoom-clone
pnpm install
```

### 2. Environment Variables
Create a `.env` file in the root directory and add the following:
```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Stream
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

# App
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Development
Run the development server:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to see the application.

### 4. Production
Build the application for production:
```bash
pnpm build
pnpm start
```

---

## 📖 Usage Guidelines

### Creating a Meeting
To start an instant meeting, navigate to the Home dashboard and click **"New Meeting"**. You can then copy the invitation link and share it with participants.

### Scheduling
Click on **"Schedule Meeting"**, select your desired date and time, add a description, and save. The meeting will appear in your **"Upcoming"** tab.

### Customizing the View
While in a call, use the **Layout** button in the control bar to toggle between different participant views (Grid, Speaker, etc.).

---

## 🤝 Contribution Guidelines

We welcome contributions! Please follow these steps:

1. **Branching Strategy**: 
   - `main`: Production-ready code.
   - `develop`: Integration branch for features.
   - `feature/*`: New features or improvements.
   - `bugfix/*`: Critical fixes.
2. **Coding Standards**: 
   - Follow the existing TypeScript and ESLint configurations.
   - Use functional components and hooks.
   - Maintain clear, descriptive variable and function names.
3. **Pull Request Process**:
   - Ensure all tests pass.
   - Provide a clear description of changes.
   - Link any relevant issues.

---

## 🛠 Troubleshooting

| Issue | Solution |
| :--- | :--- |
| **Camera/Mic not detected** | Ensure browser permissions are granted for `localhost` or your domain. |
| **Authentication Error** | Double-check your Clerk API keys in the `.env` file. |
| **Stream Token Expired** | Refresh the page to generate a new session token. |
| **Build Fails** | Ensure you are using the correct Node.js version and have run `pnpm install`. |

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

**Project Lead**: [Your Name/Handle]
**Website**: [Your Portfolio/Website]
**GitHub**: [@your-username](https://github.com/your-username)

---
*Built with ❤️ by the Yoom Team*
