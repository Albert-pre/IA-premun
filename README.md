# 🚀 Premunia CRM - Lead Generation Platform

A comprehensive lead generation and CRM management system built with React, TypeScript, and Supabase for industrial-scale lead conversion and campaign management.

## 📋 Overview

Premunia CRM is an enterprise-grade lead generation platform designed to streamline lead acquisition, conversion, and management across multiple marketing channels. The system provides a complete suite of tools for creating high-converting landing pages, managing marketing campaigns, and tracking performance metrics.

### 🏗️ Architecture

**Frontend**: React 18 + TypeScript + TailwindCSS + Vite
**Backend**: Supabase (PostgreSQL + Edge Functions)
**Hosting**: Netlify (CDN deployment with global edge network)

## ✨ Key Features

### 🏆 Lead Generation Tools
- **Landing Page Builder** - Create high-converting landing pages with WYSIWYG editor
- **Form Engine** - Multi-step forms with advanced validation and GDPR compliance
- **UTM Link Generator** - Generate trackable marketing links with JWT pre-filling
- **Webhooks Integration** - Meta Lead Ads and TikTok Lead Gen webhook support

### 📊 Analytics & Reporting
- **Performance Dashboard** - Real-time metrics and conversion tracking
- **Campaign Analytics** - Multi-channel performance analysis
- **Lead Quality Scoring** - Automated lead qualification and categorization
- **Revenue Tracking** - ROI analysis and commission management

### 🏢 CRM Features
- **Lead Management** - Centralized lead database with advanced filtering
- **Campaign Tracking** - Complete visibility across all marketing channels
- **Contact Management** - Unified contact database with history tracking
- **Commission System** - Automated commission tracking and payouts

## 🚀 Getting Started

### Prerequisites

- **Node.js ≥22.19.0** and npm
- **Supabase Project** with database access
- **Meta Business Manager** account (for Facebook/Instagram ads)
- **TikTok Advertising** account (for TikTok campaigns)
- **Hosting Platform** (Netlify recommended)

### 1. Clone & Install

```bash
git clone <repository-url>
cd premunia-crm
npm install
```

### 2. Environment Configuration

Copy the environment template and configure your variables:

```bash
cp .env.example .env
```

**Required Environment Variables:**

```env
# Supabase Configuration
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
VITE_SUPABASE_URL=https://your-project-id.supabase.co

# Email Service
VITE_BREVO_API_KEY=your-brevo-api-key
```

**Production Environment Variables:**
Configure these securely in your hosting platform (Netlify environment variables):

```env
# Supabase Service Keys (Server-side only)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Social Media API Keys
META_APP_SECRET=your-meta-app-secret
TIKTOK_CLIENT_KEY=your-tiktok-client-key
TIKTOK_CLIENT_SECRET=your-tiktok-client-secret

# SMTP Configuration
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
```

### 3. Database Setup

Ensure your Supabase database includes the required lead generation tables:

```bash
# Connect to your Supabase project
supabase link --project-ref your-project-id

# Apply database migrations
supabase db push
```

Required tables will be created automatically with the schema migration.

## 📊 Production Deployment

### Netlify Deployment

1. **Connect Repository**
   - Link your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Configure Environment**
   ```bash
   # Set production environment variables in Netlify dashboard
   SITE CONTEXT: Production
   NODE_ENV: production
   ```

3. **Deploy**
   ```bash
   # Automatic deployment on git push
   # Or manual deploy via Netlify interface
   ```

### Environment-Specific Builds

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

## 🔧 Usage Guide

### Creating Landing Pages

1. Access the **Landing Page Builder** from the main dashboard
2. Select a template or start with a blank canvas
3. Customize content using the WYSIWYG editor
4. Configure form fields and validation rules
5. Generate UTM tracking links
6. Publish and deploy

### Managing Campaigns

1. Navigate to the **Campaigns** section
2. Create a new campaign with target goals
3. Connect your landing pages and UTM links
4. Monitor performance metrics in real-time
5. Adjust targeting based on analytics data

### Lead Management

1. Access the **Leads Dashboard** to view all incoming leads
2. Filter and categorize leads by source, campaign, and quality score
3. Export lead data for external processing
4. Track conversion rates and revenue attribution

## 🔒 Security & Compliance

- **GDPR Compliant** - Built-in consent management and data protection
- **Secure Authentication** - Supabase Auth integration with JWT tokens
- **Data Encryption** - End-to-end encryption for sensitive data
- **Audit Trail** - Comprehensive logging of all system activities
- **Access Control** - Role-based permissions for team management

## 📈 Performance Targets

- **≥ 2,000 leads/month** via multi-channel campaigns
- **CPL ≤ 12€** with continuous optimization
- **CVR ≥ 12%** through landing page and form optimization
- **99.9% uptime** with global CDN deployment

## 🤝 Team Collaboration

### Project Structure

```
/
├── app/                 # Next.js app router pages
├── components/         # Reusable React components
├── lib/                # Utility functions and configurations
├── supabase/          # Database migrations and functions
├── src/               # Alternative source structure
└── styles/            # Global styles and themes
```

### Contribution Guidelines

1. **Branch Strategy**
   - `main`: Production branch
   - `staging`: Pre-production testing
   - `feature/*`: Feature development branches

2. **Code Standards**
   - TypeScript for type safety
   - ESLint for code quality
   - Pre-commit hooks for linting

3. **Deployment Process**
   - All changes deployed via CI/CD pipeline
   - Staging environment for testing
   - Manual approval required for production deployments

### Support & Contact

For technical support and questions:
- **Team Communication**: Slack workspace
- **Bug Reports**: GitHub Issues
- **Documentation**: Internal Wiki
- **Security Issues**: Contact development team directly

## 📄 License

This project is proprietary and confidential. All rights reserved to Premunia CRM.

## 🏆 Version Information

**Version**: 2.0.0  
**Last Updated**: August 2025  
**Status**: Production Ready  

---

**Developed by**: Premunia Development Team  
**Powered by**: React, TypeScript, Supabase, Netlify
