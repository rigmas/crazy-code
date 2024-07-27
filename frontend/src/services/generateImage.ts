import ky from 'ky'

interface ResponseImage {
  data: {
    created: number
    data: [
      {
        revised_prompt: string
        url: string
      },
    ]
  }
}

export async function generateImage(prompt: string): Promise<ResponseImage> {
  return await ky.post(`${import.meta.env.VITE_BACKEND_URL}/generate/images`, {
    json: {
      prompt,
    },
    timeout: 30000,
  }).json()
}
