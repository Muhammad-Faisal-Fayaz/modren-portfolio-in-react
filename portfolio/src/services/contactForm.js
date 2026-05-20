const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

/** POST form data to Web3Forms (same as their HTML form integration). */
export async function submitContactForm(form) {
  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    body: new FormData(form),
  })

  let data
  try {
    data = await response.json()
  } catch {
    return {
      ok: false,
      message: 'Failed to send your message. Please try again later.',
    }
  }

  if (!response.ok || !data.success) {
    return {
      ok: false,
      message: data.message ?? 'Failed to send your message. Please try again later.',
    }
  }

  return { ok: true }
}
