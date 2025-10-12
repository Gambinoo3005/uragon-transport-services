# Git Commit Message Guide

**Project**: Uragon Transport Services  
**Version**: 1.0  
**Last Updated**: December 2024  

---

## Overview

This guide establishes professional Git commit message standards for the Uragon Transport Services project. Following these conventions ensures clean, systematic, and professional commit history that is easy to read, understand, and maintain.

**Key Principles:**
- Use conventional commit format for consistency
- Write clear, descriptive messages
- Keep messages concise but informative
- No emojis or casual language
- Follow professional development standards

---

## Commit Message Format

### Standard Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Components Explained

**Type** (required): The kind of change being made  
**Scope** (optional): The area of the codebase affected  
**Description** (required): Brief summary of the change  
**Body** (optional): Detailed explanation if needed  
**Footer** (optional): Breaking changes, issue references  

---

## Commit Types

### Core Types
- **feat**: New feature or functionality
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code formatting, whitespace, semicolons (no logic change)
- **refactor**: Code restructuring without changing functionality
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates, build changes

### Additional Types
- **perf**: Performance improvements
- **ci**: Continuous integration changes
- **build**: Build system or external dependencies
- **revert**: Reverting a previous commit

---

## Scope Guidelines

Use lowercase, descriptive scopes that identify the area of change:

### Common Scopes for Uragon Project
- **components**: React components, UI elements
- **pages**: Next.js pages and routing
- **styles**: CSS, Tailwind, styling changes
- **forms**: Booking forms, contact forms, validation
- **fleet**: Vehicle-related functionality
- **services**: Service pages and features
- **locations**: Location pages and maps
- **booking**: Booking system and workflow
- **ui**: Design system components
- **config**: Configuration files, environment setup
- **assets**: Images, icons, static files
- **docs**: Documentation files
- **types**: TypeScript type definitions
- **utils**: Utility functions and helpers
- **hooks**: Custom React hooks
- **lib**: Library functions and data

### Examples
```
feat(components): add vehicle detail modal component
fix(booking): resolve form validation error on mobile
docs(guide): update component usage documentation
refactor(ui): consolidate card components into unified system
```

---

## Description Guidelines

### Requirements
- Use imperative mood ("add feature" not "added feature")
- Start with lowercase letter
- No period at the end
- Maximum 50 characters
- Be specific and descriptive

### Good Examples
```
feat(components): add vehicle comparison feature
fix(booking): handle date selection edge cases
docs(guide): create design system documentation
refactor(ui): unify hero component variants
```

### Bad Examples
```
feat: stuff
fix: bug
docs: update
refactor: things
```

---

## Body Guidelines

Use the body for:
- Explaining the "what" and "why" of the change
- Breaking changes
- Multiple related changes
- Context that helps reviewers understand

### Format
- Wrap at 72 characters
- Use blank line to separate from description
- Use bullet points for multiple changes

### Example
```
feat(components): add vehicle comparison feature

Add comprehensive vehicle comparison functionality:
- side-by-side vehicle specifications
- pricing comparison with inclusions
- availability status for selected dates
- direct booking from comparison view

This enables customers to make informed decisions
when choosing between similar vehicles.
```

---

## Footer Guidelines

Use footer for:
- Breaking changes
- Issue references
- Co-authors

### Breaking Changes
```
BREAKING CHANGE: component API updated, requires prop changes
```

### Issue References
```
Closes #123
Fixes #456
Related to #789
```

### Co-authors
```
Co-authored-by: Name <email@example.com>
```

---

## Complete Examples

### Simple Feature
```
feat(components): add vehicle filter sidebar
```

### Feature with Body
```
feat(booking): implement multi-step booking form

Add comprehensive booking workflow with:
- Step-by-step form progression
- Real-time validation and error handling
- Vehicle availability checking
- Payment integration preparation

Supports both self-drive and with-driver options
as specified in business requirements.
```

### Bug Fix
```
fix(components): resolve mobile navigation menu overlap

Previously, mobile menu would overlap with page content
on smaller screens. Now properly positions menu with
correct z-index and backdrop handling.
```

### Documentation Update
```
docs(guide): create component usage guidelines

Document the unified design system components:
- ContentCard usage patterns and variants
- ContentGrid layout options
- Form component integration
- Best practices for consistency

Provides clear guidance for maintaining design
system standards across the application.
```

### Refactoring
```
refactor(ui): consolidate hero components

Merge multiple hero variants into unified PageHero:
- Standardize props and styling
- Reduce code duplication
- Improve maintainability
- Maintain existing functionality

All existing hero implementations updated to use
new unified component.
```

### Breaking Change
```
feat(components): restructure vehicle data schema

BREAKING CHANGE: vehicle data structure updated with new fields.
Existing components using vehicle data will need to be
updated to handle new schema.

Migration guide included in docs/vehicle-schema-migration.md
```

---

## Project-Specific Guidelines

### Component Development
- Always include TypeScript types
- Document component props and usage
- Follow design system patterns
- Test responsive behavior

### Page Development
- Ensure proper SEO metadata
- Test all interactive elements
- Verify mobile responsiveness
- Include proper error handling

### Form Development
- Include comprehensive validation
- Test all form states
- Ensure accessibility compliance
- Document required fields

### Design System Changes
- Update component documentation
- Test across all variants
- Ensure backward compatibility
- Update usage examples

---

## Common Patterns for Uragon Project

### New Component Development
```
feat(components): add [component_name] component

Implement [component_description] with:
- [key_features]
- [responsive_behavior]
- [accessibility_features]

Follows design system patterns and includes
comprehensive TypeScript types.
```

### Page Implementation
```
feat(pages): implement [page_name] page

Add new page with:
- [page_sections]
- [interactive_elements]
- [responsive_layout]
- [seo_optimization]

Includes proper routing and metadata configuration.
```

### Design System Updates
```
refactor(ui): unify [component_type] components

Consolidate [number] [component_type] variants into
unified [component_name] with:
- [unified_features]
- [variant_support]
- [backward_compatibility]

Reduces code duplication and improves maintainability.
```

### Booking System Features
```
feat(booking): add [feature_name] functionality

Implement [feature_description] including:
- [user_workflow]
- [validation_rules]
- [error_handling]
- [integration_points]

Enhances customer booking experience and supports
business requirements.
```

### Vehicle Management
```
feat(fleet): add [vehicle_feature] functionality

Add [feature_description] for vehicle management:
- [admin_features]
- [customer_features]
- [data_validation]
- [ui_components]

Supports fleet management and customer vehicle
selection process.
```

---

## Quality Checklist

Before committing, verify:

### Message Quality
- [ ] Uses conventional commit format
- [ ] Type is appropriate and specific
- [ ] Scope clearly identifies affected area
- [ ] Description is clear and concise
- [ ] No emojis or casual language
- [ ] Imperative mood used correctly

### Content Quality
- [ ] Changes are logically grouped
- [ ] Breaking changes are documented
- [ ] Related issues are referenced
- [ ] Body explains complex changes
- [ ] Footer includes necessary metadata

### Technical Quality
- [ ] Code compiles without errors
- [ ] TypeScript types are properly defined
- [ ] Components are responsive
- [ ] Forms include validation
- [ ] Documentation is updated
- [ ] No sensitive data in commit

---

## Examples by Project Area

### Component Development
```
feat(components): add vehicle card with booking CTA

Implement comprehensive vehicle display card:
- Vehicle image with zoom functionality
- Key specifications and pricing
- Availability status indicator
- Direct booking call-to-action

Supports both grid and list view layouts
with consistent styling across the application.
```

### Page Implementation
```
feat(pages): create fleet overview page

Add comprehensive fleet showcase page:
- Vehicle category filtering
- Search and sort functionality
- Detailed vehicle specifications
- Booking integration

Includes proper SEO metadata and responsive
design for all device sizes.
```

### Design System Updates
```
refactor(ui): consolidate form components

Merge contact and booking forms into unified
ContactForm component with:
- Configurable form fields
- Validation schema support
- Error handling and display
- Responsive layout options

Maintains backward compatibility while reducing
code duplication across the application.
```

### Booking System
```
feat(booking): implement reservation confirmation

Add comprehensive reservation confirmation flow:
- Email confirmation with booking details
- SMS notifications for important updates
- Calendar integration for pickup/delivery
- Payment status tracking

Enhances customer experience and reduces
support inquiries about booking status.
```

### Vehicle Management
```
feat(fleet): add vehicle availability calendar

Implement real-time availability tracking:
- Calendar view of vehicle availability
- Booking conflict detection
- Maintenance scheduling integration
- Admin management interface

Supports efficient fleet management and
accurate customer availability information.
```

---

## Anti-Patterns to Avoid

### Poor Commit Messages
```
❌ "fix stuff"
❌ "update things"
❌ "work in progress"
❌ "fixes and stuff"
❌ "WIP: trying to get this working"
❌ "oops, forgot to add this"
❌ "quick fix"
❌ "asdf"
```

### Emoji Usage
```
❌ "feat: add new feature 🚀"
❌ "fix: resolve bug 🐛"
❌ "docs: update guide 📚"
❌ "refactor: clean up code ✨"
```

### Inconsistent Formatting
```
❌ "Add new feature"
❌ "FIX: resolve issue"
❌ "docs:Update documentation"
❌ "feat (components): add component"
```

---

## Integration with Development Workflow

### Pre-commit Checklist
1. Review changes with `git diff`
2. Test functionality across devices
3. Verify TypeScript compilation
4. Update documentation if needed
5. Write commit message following this guide
6. Verify message format and content

### Post-commit Actions
1. Push to appropriate branch
2. Create pull request if needed
3. Reference commit in issue tracking
4. Update project documentation if required

---

## Tools and Automation

### Commit Message Templates
Create `.gitmessage` template:
```
# <type>(<scope>): <description>
#
# <body>
#
# <footer>
```

### Pre-commit Hooks
Consider adding hooks to:
- Check commit message format
- Run TypeScript compilation
- Validate code style
- Test responsive design
- Check for accessibility issues

### IDE Integration
Configure your IDE to:
- Show commit message template
- Validate message format
- Suggest conventional commit types
- Auto-format commit messages

---

## Conclusion

Following these commit message standards will result in:
- **Professional appearance**: Clean, business-appropriate commit history
- **Better collaboration**: Clear communication of changes to team members
- **Easier maintenance**: Simple to understand what changed and why
- **Automated tooling**: Compatible with changelog generators and release tools
- **Historical clarity**: Easy to trace feature development and bug fixes

Remember: Good commit messages are a gift to your future self and your collaborators. Take the time to write them well.

---

**End of Uragon Transport Services Git Commit Message Guide**
