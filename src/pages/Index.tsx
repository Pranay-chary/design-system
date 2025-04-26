import React, { useState } from 'react';
import { Heading } from '@/components/design-system/typography/heading';
import { Text } from '@/components/design-system/typography/text';
import { TextInput } from '@/components/design-system/data-entry/text-input';
import { Dropdown } from '@/components/design-system/data-entry/dropdown';
import { Alert } from '@/components/design-system/feedback/alert';
import { ToastProvider, useToast } from '@/components/design-system/feedback/toast';
import { PageLayout } from '@/components/layout/PageLayout';

const Index = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [category, setCategory] = useState('');
  
  // For toast demo
  const toast = useToast();
  
  // Dropdown options
  const categoryOptions = [
    { value: 'design', label: 'Design' },
    { value: 'development', label: 'Development' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'product', label: 'Product' },
    { value: 'other', label: 'Other' },
  ];

  // Validate form
  const validateForm = () => {
    let isValid = true;
    
    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }
    
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast.add({
        title: "Success",
        message: "Form submitted successfully!",
        variant: "success",
      });
    } else {
      toast.add({
        title: "Error",
        message: "Please fix the errors in the form.",
        variant: "error",
      });
    }
  };

  return (
    <ToastProvider>
      <PageLayout>
        {/* Typography Section */}
        <section className="mb-12">
          <Heading level={1} className="mb-6">Design System Components</Heading>
            
          <div className="mb-8">
            <Heading level={2} className="mb-4">Typography</Heading>
            <div className="space-y-4 bg-card p-6 rounded-lg shadow">
              <Heading level={1}>Heading 1 (H1)</Heading>
              <Heading level={2}>Heading 2 (H2)</Heading>
              <Heading level={3}>Heading 3 (H3)</Heading>
              <Heading level={4}>Heading 4 (H4)</Heading>
              <Heading level={5}>Heading 5 (H5)</Heading>
              <Heading level={6}>Heading 6 (H6)</Heading>

              <div className="mt-6 space-y-3">
                <Text>Default paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</Text>
                <Text size="lg">Large text size variant for emphasis.</Text>
                <Text size="sm">Small text size variant for less emphasis or secondary information.</Text>
                <Text as="label">Form label text style</Text>
                <Text as="caption">Caption text for figures, tables, or images</Text>
                <Text as="helper" muted>Helper text providing additional context to form fields or sections</Text>
                <Text weight="bold">Bold text for strong emphasis</Text>
                <Text weight="semibold">Semi-bold text for medium emphasis</Text>
                <Text muted>Muted text for secondary information</Text>
              </div>
            </div>
          </div>
            
          {/* Data Entry Components */}
          <div className="mb-8">
            <Heading level={2} className="mb-4">Data Entry Components</Heading>
            <div className="bg-card p-6 rounded-lg shadow">
              <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                <TextInput
                  label="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  hasError={!!nameError}
                  fullWidth
                  leadingIcon={(
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21a8 8 0 1 0-16 0" />
                    </svg>
                  )}
                />
                  
                <TextInput
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  helperText="We'll never share your email with anyone else."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  leadingIcon={(
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  )}
                />
                  
                <TextInput
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  helperText="Must be at least 8 characters."
                  disabled
                  fullWidth
                />
                  
                <Dropdown
                  label="Category"
                  options={categoryOptions}
                  value={category}
                  onChange={setCategory}
                  placeholder="Select a category..."
                  fullWidth
                  leadingIcon={(
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4.5" />
                      <path d="M16 16.2v-4.4c0-3.4-1.6-5.8-4-5.8" />
                      <path d="M21 16.2v-4.4" />
                      <path d="M16 10a2 2 0 0 0-4 0v5.2" />
                      <path d="M21 10a2 2 0 1 0-4 0v1.2" />
                    </svg>
                  )}
                />
                  
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  Submit Form
                </button>
              </form>
            </div>
          </div>
            
          {/* Feedback Components */}
          <div className="mb-8">
            <Heading level={2} className="mb-4">Feedback Components</Heading>
            <div className="space-y-6 bg-card p-6 rounded-lg shadow">
              <div className="space-y-4">
                <Heading level={3}>Alerts</Heading>
                  
                <Alert variant="info" title="Information">
                  This is an informational message to keep you updated.
                </Alert>
                  
                <Alert variant="success" title="Success">
                  Your changes have been saved successfully!
                </Alert>
                  
                <Alert variant="warning" title="Warning" dismissible onDismiss={() => console.log("Warning dismissed")}>
                  Your account is about to expire. Please renew your subscription.
                </Alert>
                  
                <Alert 
                  variant="error" 
                  title="Error" 
                  dismissible 
                  onDismiss={() => console.log("Error dismissed")}
                  actionText="Retry"
                  onAction={() => console.log("Retrying...")}
                >
                  There was a problem processing your request. Please try again.
                </Alert>
              </div>
                
              <div className="space-y-4">
                <Heading level={3}>Toasts</Heading>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="px-4 py-2 bg-info text-info-foreground rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={() => 
                      toast.add({
                        title: "Information",
                        message: "This is an informational message",
                        variant: "info",
                      })
                    }
                  >
                    Show Info Toast
                  </button>
                    
                  <button
                    className="px-4 py-2 bg-success text-success-foreground rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={() => 
                      toast.add({
                        title: "Success",
                        message: "Your changes have been saved successfully!",
                        variant: "success",
                      })
                    }
                  >
                    Show Success Toast
                  </button>
                    
                  <button
                    className="px-4 py-2 bg-warning text-warning-foreground rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={() => 
                      toast.add({
                        title: "Warning",
                        message: "Your session is about to expire",
                        variant: "warning",
                        actionText: "Extend Session",
                        onAction: () => console.log("Session extended"),
                      })
                    }
                  >
                    Show Warning Toast
                  </button>
                    
                  <button
                    className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={() => 
                      toast.add({
                        title: "Error",
                        message: "There was a problem processing your request",
                        variant: "error",
                        actionText: "Retry",
                        onAction: () => console.log("Retrying..."),
                      })
                    }
                  >
                    Show Error Toast
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </ToastProvider>
  );
};

export default Index;
