import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

// const cancelSignatureResponse = await api.post(
//   '/api/v1/cancel-subscription',
//   {
//     subscriptionId: userData?.adminSubscription?.planSubscriptionId
//   }
// )
