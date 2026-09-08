// Google Analytics 4.
//
// The measurement ID is read from NEXT_PUBLIC_GA_ID. While it is unset every
// function here is a no-op and no script is loaded, so the site behaves exactly
// as it did before analytics existed — set the variable in Vercel to switch it on.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const isAnalyticsEnabled = Boolean(GA_ID);

// The three events worth measuring: someone asking to talk, someone completing
// the form, and someone opening LINE. Anything beyond these is noise until
// there is a baseline to compare against.
export const GA_EVENTS = {
  consultClick: "cta_consult_click",
  formSubmit: "contact_form_submit",
  lineClick: "line_click",
};

export function trackEvent(name, params = {}) {
  if (!isAnalyticsEnabled) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
