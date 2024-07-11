export const SAMPLE_CARDS = [
  { id: 3, bank: 'Bank of America', number: '1234567890123456', balance: 5000, holder: 'John Doe', expiryDate: '12/25', cvv: '123', color: 'warm-red', provider: 'visa' },
  { id: 2, bank: 'Chase Bank', number: '9876543210987654', balance: 3000, holder: 'Jane Smith', expiryDate: '12/23', cvv: '456', color: 'cool-purple', provider: 'master-card' },
  { id: 1, bank: 'TD', number: '2109876549876543', balance: 10000, holder: 'Jane Smith', expiryDate: '11/23', cvv: '456', color: 'lemon-lime', provider: 'master-card' }
]

export const SAMPLE_EXPENSE_CATEGORIES = [
  { id: 1, title: 'Others', amount: 16, color: 'rgb(155, 236, 0)' }, // Bright Orange
  { id: 6, title: 'Toys', amount: 30, color: 'rgb(81,36,115)' },        // Bright Violet
  { id: 5, title: 'Electronics', amount: 10, color: 'rgb(233,79,53)' },    // Bright Orange-Red
  { id: 4, title: 'Appliances', amount: 40, color: 'rgb(1,170,229)' },     // Bright Lime Green
  { id: 3, title: 'Books', amount: 150, color: 'rgb(255,238,46)' },        // Bright Yellow
  { id: 2, title: 'Clothing', amount: 20, color: 'rgb(251,186,34)' },      // Bright Deep Sky Blue
];

export const SAMPLE_TRANSACTIONS = [
  { id: 2, amount: 5000, payee: 'LobLaw', category: SAMPLE_EXPENSE_CATEGORIES[1], title: 'SHF Kamen Rider Joker Eternal ', date: '2024-05-30', account: SAMPLE_CARDS[1] },
  { id: 1, amount: 100, payee: 'Walmart', category: SAMPLE_EXPENSE_CATEGORIES[0], title: 'Groceries', date: '2024-06-01', account: SAMPLE_CARDS[0] },
]

export const SAMPLE_EARNINGS =
{
  label: 'Income',
  data: [12345, 12345, 16623, 14522, 12345, 12345, 16623, 14522, 12345, 12345, 16623, 14522],
  borderColor: 'rgb(255, 99, 132)',
  backgroundColor: 'rgba(255, 99, 132, 1)',
}


export const SAMPLE_SPENDINGS =
{
  label: 'Spending',
  data: [13861, 11090, 19545, 10974, 15342, 16566, 19695, 12285, 14180, 12585, 12842, 17811],
  borderColor: 'rgb(53, 162, 235)',
  backgroundColor: 'rgba(53, 162, 235, 1)',
}

export const SAMPLE_INVESTMENTS = [
  { id: 2, title: "Meta", price: "200", quantity: "11", diffPercentage: 3.2, isGain: false },
  { id: 1, title: "Microsoft", price: "170", quantity: "16", diffPercentage: 4.0, isGain: true },
]

export const CARD_COLORS = [
  'warm-red',
  'cool-purple',
  'dark-purple',
  'sunset-glow',
  'ocean-blue',
  'mint',
  'lavender',
  'peach',
  'lemon-lime',
  'tropical-sunset'
];



export const SAMPLE_PORTFOLIO_SUMMARY = [
  { id: 4, title: 'Total', amount: 26000 },
  { id: 3, title: 'Bank', amount: 18000 },
  { id: 2, title: 'Investment', amount: 10000 },
  { id: 1, title: 'Debt', amount: 2000 },

]


const SAMPLE_CONTEXT = {
  firstName: "Stephen",

  lastName: "Tran",

  investments: SAMPLE_INVESTMENTS,

  cards: SAMPLE_CARDS,

  transactions: SAMPLE_TRANSACTIONS,

  spendings: SAMPLE_SPENDINGS,

  earnings: SAMPLE_EARNINGS,

  portfolio: SAMPLE_PORTFOLIO_SUMMARY,

  expense_categories: SAMPLE_EXPENSE_CATEGORIES

}

export default SAMPLE_CONTEXT

