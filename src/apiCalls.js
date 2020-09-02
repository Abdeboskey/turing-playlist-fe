const baseUrl = 'http://localhost:8080'

export const getSongs = () => {
  return fetch(`${baseUrl}/api/v1/playlist`)
    .then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw response
			}
		})
}