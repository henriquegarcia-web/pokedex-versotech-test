const mockResponse = {
  data: {
    results: [
      { name: 'pokemon1', url: 'url1' },
      { name: 'pokemon2', url: 'url2' }
    ],
    count: 100,
    next: 'next_page_url',
    previous: 'previous_page_url'
  }
}

const mockApi = {
  get: async () => mockResponse
}

export default mockApi
