---
title: Context Engineering with Claude Code
---

# Context Engineering with Claude Code

Claude Code works best when you communicate your needs clearly and systematically. Here's how to get consistent, professional results.

## Basic Structure for Claude Code Sessions

Every effective Claude Code session should include:

**Project Context:** What you're building and why
**Current State:** Where you are now
**Goal:** What you want to achieve
**Constraints:** Limitations and requirements
**Style Preferences:** How you like to work
**Next Steps:** What should happen after

## Essential Role Prompts

### The Senior Developer Partner
For most coding sessions:

"You are a Senior Software Engineer working as my pair programming partner. Focus on:
- Understanding the project context and existing patterns
- Writing clean, maintainable code
- Explaining technical decisions clearly
- Suggesting improvements and optimizations
- Considering security, performance, and scalability

Always ask clarifying questions about requirements and constraints."

### The Code Reviewer
For reviewing and improving existing code:

"You are an experienced Code Reviewer focused on:
- Code quality assessment and improvement
- Security vulnerability identification
- Performance optimization
- Architecture review and refactoring recommendations

Analyze code structure, identify potential issues, and suggest specific improvements with clear explanations."

### The Technical Architect
For system design and architectural decisions:

"You are a Senior Technical Architect specializing in:
- System design and software architecture
- Technology stack selection
- Scalability and performance planning
- Security architecture

Focus on creating robust, scalable solutions that align with business needs and team capabilities."

## Practical Examples

### Example 1: Starting a New Feature

**Vague Request:**
"Help me build a user authentication system"

**Context-Engineered Request:**
"I need to build a user authentication system for a React/Node.js task management app. 

**Project Context:** Currently using React frontend with Express.js backend and MongoDB
**Current State:** Basic app structure exists, user registration form is built but not connected
**Goal:** Email/password authentication with JWT tokens and role-based access
**Constraints:** Must integrate with existing React Router setup and be production-ready
**Style Preferences:** TypeScript, functional components, clear error handling
**Next Steps:** Implement backend routes first, then frontend components"

### Example 2: Debugging Performance Issues

**Vague Request:**
"My app is slow, can you help?"

**Context-Engineered Request:**
"I'm experiencing performance issues in my React e-commerce app and need help identifying bottlenecks.

**Project Context:** 50+ components using Redux, deployed on Vercel with Postgres
**Current Issues:** 4-6 second initial load, sluggish product listing, 2-3 second search delays
**What I've Tried:** React DevTools profiling, checked network tab, added React.memo
**Technical Details:** 1.2MB bundle size, Create React App, no caching strategy
**Goals:** Under 2 second load time, smooth scrolling, instant search
**Analysis Needed:** Bundle optimization, component re-renders, API optimization, caching"

### Example 3: Code Refactoring

**Vague Request:**
"Clean up this messy code"

**Context-Engineered Request:**
"I need help refactoring a React UserProfile component that has grown complex and difficult to maintain.

**Component Context:** 300+ lines handling user data display, editing, API calls, and form validation
**Current Issues:** Mixed concerns, props drilling, inconsistent error handling, duplicate validation
**Existing Patterns:** TypeScript strict mode, custom hooks, styled-components, React Hook Form
**Refactoring Goals:** Separate concerns, extract reusable logic, improve testability
**Constraints:** Cannot change API contracts, must maintain TypeScript compliance
**Preferred Approach:** Break into smaller components, extract business logic to hooks"

## Claude Code Best Practices

### 1. Always Provide Project Context
- Technology stack and versions
- Project structure and patterns
- Team size and skill levels
- Deployment environment
- Performance requirements

### 2. Be Specific About Code Style
- Coding conventions you follow
- Preferred libraries and frameworks
- Documentation standards
- Testing approaches

### 3. Explain Your Current Situation
- What's working well
- Specific problems you're facing
- What you've already tried
- Error messages or symptoms

### 4. Set Clear Goals and Constraints
- What success looks like
- Performance requirements
- Security considerations
- Timeline constraints
- Budget limitations

## Common Request Patterns

### For Bug Fixes
- **Bug Report:** Specific error or behavior
- **Expected Behavior:** What should happen
- **Current Behavior:** What actually happens
- **Error Messages:** Exact error text
- **Steps to Reproduce:** How to trigger the issue
- **Environment:** Browser, OS, versions
- **Code Context:** Relevant file/function

### For New Features
- **Feature Description:** What you're building
- **User Story:** Why this feature is needed
- **Acceptance Criteria:** Definition of done
- **Technical Requirements:** Performance, security, etc.
- **Integration Points:** How it connects to existing code
- **Testing Strategy:** How you'll verify it works

### For Optimization
- **Performance Issue:** Specific slowness or bottleneck
- **Current Metrics:** Response times, bundle sizes, etc.
- **Target Metrics:** What you want to achieve
- **Constraints:** What you can't change
- **Tools Available:** Profiling, monitoring, etc.
- **Impact Assessment:** Risk tolerance for changes

## Project Context File

Create a `CLAUDE.md` file in your project root to provide persistent context:

### Basic Template
```
# Project: [Your Project Name]

## Overview
Brief description of what this project does and its main purpose.

## Tech Stack
- Frontend: React 18 with TypeScript
- Backend: Node.js with Express
- Database: PostgreSQL
- Deployment: Vercel + Railway

## Development Standards
- Use TypeScript strict mode
- Follow ESLint Airbnb config
- Write tests with Jest + React Testing Library
- Use semantic commit messages

## Key Patterns
- Custom hooks for API calls
- Context API for global state
- Styled-components for styling
- Error boundaries for fault tolerance

## Current Focus
What you're currently working on or main priorities.
```

## Documentation Strategy

### Three Levels of Context
1. **Project-Level** - Overall project context (CLAUDE.md)
2. **Component-Level** - Module-specific context
3. **Task-Level** - Current session context

### Core Principles
- **Documentation-Driven Development** - Let documentation guide decisions
- **Systematic Complexity Scaling** - Start simple, add complexity gradually
- **Context Persistence** - Use files for lasting project knowledge
- **Clear Communication** - Organize information hierarchically

## Getting Started

1. Create your CLAUDE.md file with project basics
2. Structure your documentation using the three-level system
3. Start with simple requests and build complexity
4. Build your documentation system incrementally

Remember: Claude Code works best when you provide systematic context and clear communication of your development goals.