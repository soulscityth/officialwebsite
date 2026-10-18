// Links to /contact that fill in the form. ContactForm reads these query
// parameters once on mount; every field stays editable, and unknown values
// (an activity not in `activityTypes`) are ignored.
export const CONTACT_PARAMS = {
  subject: "subject",
  activity: "activity",
  participants: "participants",
  message: "message",
};

export function contactHref(fields = {}) {
  const params = new URLSearchParams();
  for (const [key, name] of Object.entries(CONTACT_PARAMS)) {
    if (fields[key] !== undefined && fields[key] !== "") params.set(name, String(fields[key]));
  }
  const query = params.toString();
  // Lands on the form itself, not the top of the contact page.
  return query ? `/contact?${query}#contact-form` : "/contact";
}
