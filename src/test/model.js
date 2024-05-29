export const CARD_TEST_DATAS = [
  { bankName: "TD", cardNumber: "4124826634561232", balance: 1000, cardHolder: "Gia Bao Tran", expiryDate: "08/25", cvv: "111" },
  { bankName: "CIBC", cardNumber: "4124826634561234", balance: 1000, cardHolder: "Gia Bao Tran", expiryDate: "08/25", cvv: "111" },
]

export const REPORT_DATAS = [
  { title: "Income", amount: 10000, isGain: true, diffPercentage: 10 },
  { title: "Expense", amount: 1300, isGain: true, diffPercentage: 20 },
  { title: "Gift", amount: 10000, isGain: false, diffPercentage: 10 },
]

export const BADGE_DATAS = [
  { title: "Training", amount: 400 },
  { title: "Food", amount: 100 },
]
export const CHART_DATAS =

  [
    {
      label: 'Income',
      data: [12345, 12345, 16623, 14522, 12345, 12345, 16623, 14522, 12345, 12345, 16623, 14522],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Spending',
      data: [13861, 11090, 19545, 10974, 15342, 16566, 19695, 12285, 14180, 12585, 12842, 17811],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 1)',
    },
  ]
export const INVESTMENT_DATAS = [
  { title: "Tesla", price: "170", quantity: "16", diffPercentage: 4.0, isGain: true },
  { title: "Meta", price: "200", quantity: "11", diffPercentage: 3.2, isGain: false },

]

export const TRANSACTION_DATAS = [
  { title:"Walmart", date:"11.11.2024", cardType:"Debit", cardNumber:"1232", amount:"24" }
]