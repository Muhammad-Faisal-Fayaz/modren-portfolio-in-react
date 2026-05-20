export async function sendContactEmail(payload) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return {
      ok: false,
      message:
        'Contact form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.',
    }
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      from_name: payload.name,
      replyto: payload.email,
    }),
  })

  const data = await response.json()

  if (!response.ok || !data.success) {
    return {
      ok: false,
      message: data.message ?? 'Failed to send your message. Please try again later.',
    }
  }

  return { ok: true }
}
