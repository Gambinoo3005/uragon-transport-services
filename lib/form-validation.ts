// ============================================================================
// FORM VALIDATION UTILITIES
// ============================================================================

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => string | null
}

export interface ValidationRules {
  [key: string]: ValidationRule
}

export interface ValidationErrors {
  [key: string]: string
}

// Common validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^(\+63|0)?[0-9]{10}$/,
  name: /^[a-zA-Z\s'-]+$/,
  alphanumeric: /^[a-zA-Z0-9\s]+$/,
  url: /^https?:\/\/.+/,
  date: /^\d{4}-\d{2}-\d{2}$/
}

// Common validation messages
export const VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid Philippine phone number',
  name: 'Please enter a valid name (letters, spaces, hyphens, and apostrophes only)',
  minLength: (min: number) => `Must be at least ${min} characters long`,
  maxLength: (max: number) => `Must be no more than ${max} characters long`,
  pattern: 'Please enter a valid format',
  custom: 'Invalid input'
}

// Default validation rules for common form fields
export const DEFAULT_VALIDATION_RULES: ValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: VALIDATION_PATTERNS.name
  },
  email: {
    required: true,
    pattern: VALIDATION_PATTERNS.email
  },
  phone: {
    required: true,
    pattern: VALIDATION_PATTERNS.phone
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 100
  },
  message: {
    required: false,
    maxLength: 1000
  },
  pickup: {
    required: true,
    minLength: 5,
    maxLength: 200
  },
  destination: {
    required: true,
    minLength: 5,
    maxLength: 200
  },
  service: {
    required: true
  },
  passengers: {
    required: true
  }
}

// Validation function
export function validateField(value: string, rules: ValidationRule): string | null {
  // Required check
  if (rules.required && (!value || value.trim() === '')) {
    return VALIDATION_MESSAGES.required
  }

  // Skip other validations if value is empty and not required
  if (!value || value.trim() === '') {
    return null
  }

  // Min length check
  if (rules.minLength && value.length < rules.minLength) {
    return VALIDATION_MESSAGES.minLength(rules.minLength)
  }

  // Max length check
  if (rules.maxLength && value.length > rules.maxLength) {
    return VALIDATION_MESSAGES.maxLength(rules.maxLength)
  }

  // Pattern check
  if (rules.pattern && !rules.pattern.test(value)) {
    return VALIDATION_MESSAGES.pattern
  }

  // Custom validation
  if (rules.custom) {
    return rules.custom(value)
  }

  return null
}

// Validate entire form
export function validateForm(data: Record<string, string>, rules: ValidationRules): ValidationErrors {
  const errors: ValidationErrors = {}

  for (const [field, value] of Object.entries(data)) {
    const fieldRules = rules[field]
    if (fieldRules) {
      const error = validateField(value, fieldRules)
      if (error) {
        errors[field] = error
      }
    }
  }

  return errors
}

// Check if form is valid
export function isFormValid(errors: ValidationErrors): boolean {
  return Object.keys(errors).length === 0
}

// Sanitize form data
export function sanitizeFormData(data: Record<string, string>): Record<string, string> {
  const sanitized: Record<string, string> = {}

  for (const [key, value] of Object.entries(data)) {
    // Trim whitespace
    let sanitizedValue = value.trim()
    
    // Remove potentially dangerous characters for specific fields
    if (key === 'name') {
      sanitizedValue = sanitizedValue.replace(/[<>]/g, '')
    }
    
    if (key === 'email') {
      sanitizedValue = sanitizedValue.toLowerCase()
    }
    
    if (key === 'phone') {
      // Remove all non-digit characters except +
      sanitizedValue = sanitizedValue.replace(/[^\d+]/g, '')
    }

    sanitized[key] = sanitizedValue
  }

  return sanitized
}

// Format phone number for display
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')
  
  // Handle different formats
  if (digits.startsWith('63')) {
    return `+${digits}`
  } else if (digits.startsWith('0')) {
    return `+63${digits.slice(1)}`
  } else if (digits.length === 10) {
    return `+63${digits}`
  }
  
  return phone
}

// Validate date
export function validateDate(date: Date | null): string | null {
  if (!date) {
    return VALIDATION_MESSAGES.required
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  if (date < today) {
    return 'Please select a future date'
  }

  return null
}

// Form submission utilities
export interface FormSubmissionOptions {
  endpoint?: string
  method?: 'POST' | 'PUT' | 'PATCH'
  headers?: Record<string, string>
  onSuccess?: (data: any) => void
  onError?: (error: Error) => void
}

export async function submitForm(
  data: Record<string, any>,
  options: FormSubmissionOptions = {}
): Promise<any> {
  const {
    endpoint = '/api/contact',
    method = 'POST',
    headers = { 'Content-Type': 'application/json' },
    onSuccess,
    onError
  } = options

  try {
    const response = await fetch(endpoint, {
      method,
      headers,
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    
    if (onSuccess) {
      onSuccess(result)
    }
    
    return result
  } catch (error) {
    if (onError) {
      onError(error as Error)
    }
    throw error
  }
}

// Form state management hook
export interface UseFormStateOptions {
  initialData?: Record<string, string>
  validationRules?: ValidationRules
  onSubmit?: (data: Record<string, any>) => void | Promise<void>
}

export interface FormState {
  data: Record<string, string>
  errors: ValidationErrors
  isSubmitting: boolean
  isValid: boolean
  touched: Record<string, boolean>
}

export function createFormState(options: UseFormStateOptions = {}): FormState {
  const { initialData = {}, validationRules = {} } = options

  return {
    data: initialData,
    errors: {},
    isSubmitting: false,
    isValid: true,
    touched: {}
  }
}

// Utility to get field error
export function getFieldError(field: string, errors: ValidationErrors, touched: Record<string, boolean>): string | null {
  if (touched[field] && errors[field]) {
    return errors[field]
  }
  return null
}

// Utility to check if field should show error
export function shouldShowError(field: string, errors: ValidationErrors, touched: Record<string, boolean>): boolean {
  return touched[field] && !!errors[field]
}
