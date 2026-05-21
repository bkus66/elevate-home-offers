'use client';

import { useState } from 'react';
import { z } from 'zod';
import { siteConfig } from '@/lib/seo';

const step1Schema = z.object({
  address: z.string().min(5, 'Please enter a valid property address'),
  phone: z.string().regex(/^[\d\s\-\(\)\+]{10,}$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
});

const step2Schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  reason: z.string().min(1, 'Please select a reason'),
  timeline: z.string().min(1, 'Please select a timeline'),
  condition: z.string().min(1, 'Please select a condition'),
  contactMethod: z.string().min(1, 'Please select a contact method'),
  hasMortgage: z.string().min(1, 'Please select an option'),
  bestTime: z.string().min(1, 'Please select a best time'),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type FormErrors = Record<string, string>;

const REASONS = [
  'Relocating',
  'Financial hardship',
  'Inherited property',
  'Downsizing',
  'Too many repairs needed',
  'Avoiding foreclosure',
  'Divorce',
  'Tired landlord',
  'Other',
];

const TIMELINES = [
  'As soon as possible (7 days)',
  'Within 30 days',
  'Within 60–90 days',
  "No rush — I'm flexible",
];

const CONDITIONS = [
  'Move-in ready',
  'Needs minor cosmetic work',
  'Needs major repairs',
  'Severe damage / distressed',
];

const CONTACT_METHODS = ['Call', 'Text', 'Email'];
const BEST_TIMES = ['Morning (8am–12pm)', 'Afternoon (12pm–5pm)', 'Evening (5pm–8pm)'];

function ProgressBar({ step }: { step: 1 | 2 }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-primary">
          Step {step} of 2 — {step === 1 ? 'Quick Info' : 'Property Details'}
        </span>
        <span className="text-xs text-gray-400">{step === 1 ? '50%' : '100%'}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className="bg-accent h-2 rounded-full transition-all duration-500"
          style={{ width: step === 1 ? '50%' : '100%' }}
        />
      </div>
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-500 text-xs mt-1">{message}</p>;
}

const inputClass = (error?: string) =>
  `w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
    error ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
  }`;

const selectClass = (error?: string) =>
  `w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white transition-colors ${
    error ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
  }`;

export default function LeadForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [step1Data, setStep1Data] = useState<Partial<Step1Data>>({});
  const [step2Data, setStep2Data] = useState<Partial<Step2Data>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleStep1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStep1Data((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleStep2Change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setStep2Data((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = step1Schema.safeParse(step1Data);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = step2Schema.safeParse(step2Data);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    setServerError('');

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) {
      setServerError('Form is not configured yet. Please call us directly.');
      setLoading(false);
      return;
    }

    try {
      const payload = { ...step1Data, ...result.data, source: 'website' };
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSuccess(true);
      } else {
        setServerError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setServerError('Network error. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">You&apos;re All Set!</h3>
        <p className="text-gray-600 mb-2">
          We&apos;ll review your property and be in touch within 24 hours with a fair cash offer.
        </p>
        <p className="text-gray-500 text-sm mb-6">
          Need faster service? Call or text us now:
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center gap-2 bg-accent text-primary font-bold px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {siteConfig.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      <h3 className="text-xl font-bold text-primary mb-1">Get Your Free Cash Offer</h3>
      <p className="text-gray-500 text-sm mb-5">No obligation. No fees. Close in as little as 7 days.</p>

      <ProgressBar step={step} />

      {step === 1 ? (
        <form onSubmit={handleStep1Submit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Property Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={step1Data.address || ''}
              onChange={handleStep1Change}
              placeholder="123 Main St, Austin, TX"
              className={inputClass(errors.address)}
              autoComplete="street-address"
            />
            <FieldError message={errors.address} />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={step1Data.phone || ''}
              onChange={handleStep1Change}
              placeholder="(512) 555-0100"
              className={inputClass(errors.phone)}
              autoComplete="tel"
            />
            <FieldError message={errors.phone} />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={step1Data.email || ''}
              onChange={handleStep1Change}
              placeholder="you@example.com"
              className={inputClass(errors.email)}
              autoComplete="email"
            />
            <FieldError message={errors.email} />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-amber-500 text-primary font-bold py-3 px-6 rounded-lg text-base transition-colors flex items-center justify-center gap-2 mt-2"
          >
            Get Cash Offer
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <p className="text-xs text-gray-400 text-center">
            100% free &amp; no obligation. We respect your privacy.
          </p>
        </form>
      ) : (
        <form onSubmit={handleStep2Submit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={step2Data.fullName || ''}
              onChange={handleStep2Change}
              placeholder="John Smith"
              className={inputClass(errors.fullName)}
              autoComplete="name"
            />
            <FieldError message={errors.fullName} />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Selling <span className="text-red-500">*</span>
            </label>
            <select
              id="reason"
              name="reason"
              value={step2Data.reason || ''}
              onChange={handleStep2Change}
              className={selectClass(errors.reason)}
            >
              <option value="">Select a reason...</option>
              {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <FieldError message={errors.reason} />
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
              How quickly do you need to sell? <span className="text-red-500">*</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              value={step2Data.timeline || ''}
              onChange={handleStep2Change}
              className={selectClass(errors.timeline)}
            >
              <option value="">Select a timeline...</option>
              {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <FieldError message={errors.timeline} />
          </div>

          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
              Current condition of the property <span className="text-red-500">*</span>
            </label>
            <select
              id="condition"
              name="condition"
              value={step2Data.condition || ''}
              onChange={handleStep2Change}
              className={selectClass(errors.condition)}
            >
              <option value="">Select condition...</option>
              {CONDITIONS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <FieldError message={errors.condition} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="hasMortgage" className="block text-sm font-medium text-gray-700 mb-1">
                Existing mortgage? <span className="text-red-500">*</span>
              </label>
              <select
                id="hasMortgage"
                name="hasMortgage"
                value={step2Data.hasMortgage || ''}
                onChange={handleStep2Change}
                className={selectClass(errors.hasMortgage)}
              >
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
              </select>
              <FieldError message={errors.hasMortgage} />
            </div>

            <div>
              <label htmlFor="bestTime" className="block text-sm font-medium text-gray-700 mb-1">
                Best time to reach you <span className="text-red-500">*</span>
              </label>
              <select
                id="bestTime"
                name="bestTime"
                value={step2Data.bestTime || ''}
                onChange={handleStep2Change}
                className={selectClass(errors.bestTime)}
              >
                <option value="">Select...</option>
                {BEST_TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <FieldError message={errors.bestTime} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred contact method <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-3">
              {CONTACT_METHODS.map((method) => (
                <label
                  key={method}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border cursor-pointer text-sm font-medium transition-colors ${
                    step2Data.contactMethod === method
                      ? 'border-accent bg-accent/10 text-primary'
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={step2Data.contactMethod === method}
                    onChange={handleStep2Change}
                    className="sr-only"
                  />
                  {method}
                </label>
              ))}
            </div>
            <FieldError message={errors.contactMethod} />
          </div>

          {serverError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-600 text-sm">{serverError}</p>
            </div>
          )}

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={() => { setStep(1); setErrors({}); }}
              className="flex-shrink-0 px-4 py-3 rounded-lg border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-accent hover:bg-amber-500 disabled:opacity-60 disabled:cursor-not-allowed text-primary font-bold py-3 px-6 rounded-lg text-base transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit My Request'
              )}
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center">
            100% free &amp; no obligation. We respect your privacy.
          </p>
        </form>
      )}
    </div>
  );
}
